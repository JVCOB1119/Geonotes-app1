import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, View } from "react-native";

export default function Home() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setNotes(data.slice(0, 10));
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Stack.Screen options={{ title: "Notatki" }} />

      <View style={{ flex: 1, padding: 16 }}>
        {loading ? (
          <Text>Ładowanie...</Text>
        ) : (
          <FlatList
            data={notes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: "bold" }}>{item.title}</Text>
                <Text>{item.body}</Text>
              </View>
            )}
          />
        )}

        <Link href="/add" asChild>
          <Button title="Dodaj notatkę" />
        </Link>

        <Link href="/details" asChild>
          <Button title="Szczegóły notatki" />
        </Link>
      </View>
    </>
  );
}
