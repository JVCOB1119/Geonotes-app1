import * as Location from "expo-location";
import { Stack } from "expo-router";
import { useState } from "react";
import { Button, Text, View } from "react-native";

export default function Add() {
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const getLocation = async () => {
    try {
      // prośba o zgodę
      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== "granted") {
        alert("Brak zgody na dostęp do lokalizacji");
        return;
      }

      // próba pobrania ostatniej znanej lokalizacji (bezpieczniejsze dla emulatora)
      const loc = await Location.getLastKnownPositionAsync();

      if (!loc) {
        alert(
          "Lokalizacja jest niedostępna w emulatorze.\n" +
          "Na urządzeniu fizycznym GPS działa poprawnie."
        );
        return;
      }

      setLocation({
        latitude: loc.coords.latitude,
        longitude: loc.coords.longitude,
      });
    } catch (error) {
      alert("Nie udało się pobrać lokalizacji (problem emulatora)");
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: "Dodaj notatkę" }} />

      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Button title="Pobierz lokalizację GPS" onPress={getLocation} />

        {location && (
          <View style={{ marginTop: 20 }}>
            <Text>Szerokość: {location.latitude}</Text>
            <Text>Długość: {location.longitude}</Text>
          </View>
        )}
      </View>
    </>
  );
}
