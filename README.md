# React Native: Field Notes

## Cel
Stwórz podstawową aplikację mobilną w React Native (React), która wykorzystuje natywną funkcję urządzenia oraz komunikuje się z API. Aplikacja ma mieć 3–4 widoki.

### Realizacja celu
W ramach projektu została wykonana aplikacja mobilna w React Native przy użyciu Expo.  
Aplikacja komunikuje się z publicznym API oraz korzysta z lokalizacji GPS. Projekt został uruchomiony i sprawdzony na emulatorze Androida.

---

## Zakres i wymagania funkcjonalne

### Natywna funkcja (min. 1):
wybierz i uzasadnij (np. aparat/kamera, lokalizacja GPS, wibracje/haptics, pliki/galeria).

Zrealizowane rozwiązanie  
W aplikacji została użyta lokalizacja GPS za pomocą biblioteki expo-location.  
Użytkownik może pobrać współrzędne geograficzne urządzenia po kliknięciu przycisku.  
Aplikacja prosi o zgodę na dostęp do lokalizacji i obsługuje sytuację, w której lokalizacja nie jest dostępna, co zdarza się na emulatorze.

---

### API (min. 1 endpoint):
odczyt lub zapis danych (publiczne lub własne/mock).

Zrealizowane rozwiązanie  
Aplikacja pobiera dane z publicznego API JSONPlaceholder przy użyciu funkcji fetch.

Endpoint:  
https://jsonplaceholder.typicode.com/posts

Pobrane dane są wyświetlane w formie listy notatek.

---

### Widoki (3–4):

#### 1. Lista notatek
(tytuł, data, miniaturka/znacznik lokalizacji)

Zrealizowane rozwiązanie  
Widok listy notatek pobiera dane z API i wyświetla je przy użyciu komponentu FlatList.  
Każda notatka zawiera tytuł oraz treść. Widok ten jest ekranem głównym aplikacji.

---

#### 2. Szczegóły notatki
(opis, zdjęcie/pozycja, akcje)

Zrealizowane rozwiązanie  
Został przygotowany osobny widok szczegółów notatki, dostępny poprzez nawigację w aplikacji.  
Widok ten może zostać dalej rozbudowany o dodatkowe informacje.

---

#### 3. Dodaj/Edytuj
(formularz: tytuł, opis, dodaj zdjęcie lub pobierz lokalizację)

Zrealizowane rozwiązanie  
Widok „Dodaj notatkę” umożliwia pobranie lokalizacji GPS urządzenia.  
Po kliknięciu przycisku aplikacja:
- prosi użytkownika o zgodę na lokalizację,
- próbuje pobrać współrzędne geograficzne,
- wyświetla je na ekranie lub informuje o braku dostępnej lokalizacji.

---

#### 4. (Opcjonalnie) Ustawienia/O aplikacji

Status  
Widok opcjonalny nie był wymagany do zaliczenia zadania i nie został zaimplementowany.

---

### Stan
lokalny lub prosty store; brak trwałego storage wymagany, ale dopuszczalny.

Zrealizowane rozwiązanie  
Stan aplikacji jest obsługiwany lokalnie przy użyciu hooków useState oraz useEffect.  
Nie zastosowano trwałego zapisu danych.

---

### Dostępność
podstawowe etykiety i rozmiary celów dotyku (~44–48 px).

Zrealizowane rozwiązanie  
Zastosowano standardowe komponenty React Native, takie jak Button i Text, które spełniają podstawowe wymagania dostępności.

---

## Testowanie lokalne (w trakcie developmentu)

- Uruchom na urządzeniu/emulatorze.
- Pokaż: dodanie notatki, użycie natywnej funkcji, wyświetlenie listy i szczegółów.
- Pokaż komunikację z API.
- Zweryfikuj: błędy/edge cases.

### Realizacja testów
Aplikacja była testowana na emulatorze Androida.  
Sprawdzono:
- poprawne uruchomienie aplikacji,
- pobieranie danych z API,
- działanie nawigacji między widokami,
- pobieranie lokalizacji GPS,
- obsługę braku dostępnej lokalizacji w emulatorze.

---

## Definition of Done (DoD)

- [x] 3–4 kompletne widoki zgodne z opisem
- [x] Użyta co najmniej 1 natywna funkcja
- [x] Integracja z API
- [x] Czytelny UI i podstawowa dostępność
- [x] Aktualizacja README.md
- [ ] Minimum 3 logiczne commity