# Cykl życia komponentu &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie00.jsx` potem z kolejnymi numerami zadań, wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**


**Od teraz wszystkie zadania wykonuj tylko z komponentami w wersji zbudowanej z klas ES6** 

## Zadanie rozwiązywane z wykładowcą

### Promocja  (~ 10min - 15min)

Stwórz komponent, który wyświetla w elemencie `h1` informację "Do końca promocji 5 sekund!".

Po 5 sekundach **wyświetl w konsoli** napis "Koniec promocji!".

Pamiętaj o włączeniu i wyłączeniu timera w odpowiednim miejscu.

Wyrenderuj komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 15min - 25min)

Stwórz komponent `LifeCyclesTester`.

Komponent ma wypisywać w konsoli, że np. "komponent będzie zamontowany", "komponent został zamontowany", "komponent będzie aktualizowany" itp., dla **wszystkich znanych Ci typów metod cyklu życia**.

Komponent ma przyjmować do `props` tekst do wyświetlenia (`text`). Ma go wyrenderować w elemencie `h1`.

Wyrenderuj swój komponent bezpośrednio korzystając z `ReactDOM.render()`, ustawiając Twojemu komponentowi `text` na "Test 1".

Dodaj timer (poza komponentami), który po 5 sekundach używając `ReactDOM.render()` znów stworzy Twój komponent, jednak tym razem z `text` ustawionym na "Test 2".

Spójrz do konsoli. Jakie metody cyklu życia zostały uruchomione, dlaczego?

**Tym razem nie twórz głównego komponentu `App`.**
