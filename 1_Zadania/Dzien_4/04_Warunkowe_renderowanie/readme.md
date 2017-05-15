# Warunkowe renderowanie &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie00.jsx` potem z kolejnymi numerami zadań, wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**

## Zadanie rozwiązywane z wykładowcą

### Własny checkbox (~ 5min - 10min)

Stwórz komponent `MyCheckbox`.

Ma on zawierać jeden przycisk, który wyświetla na początku "NIE". Po jego kliknięciu ma się zmienić napis na "TAK", po następnym kliknięciu spowrotem na "NIE" itd. **Aby wyświetlić odpowiedni tekst użyj operatora trójargumentowego bezpośrednio wewnętrz JSX.**

Wyrenderuj i przetestuj swój komponent.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 10min - 15min)

Stwórz komponent `NumberInfo`, który przez props przyjmuje `number`.

Następnie korzystając **bezpośrednio wewnątrz JSX** z **operatora trójargumentowego** i **operatora logicznego &&** wyrenderuj w elemencie `h1` następujący tekst:

- Liczba,
- Parzysta / nieparzysta,
- Liczba pierwsza (nie pojawia się jeżeli to nieprawda),
- Potęga liczby 2 (nie pojawia się jeżeli to nieprawda),

Wyświetl tę informację w jednym ciągu, np.:
"7, nieparzysta, liczba pierwsza,".

Wyrenderuj i przetestuj swój komponent kilka razy dla atrybutu `number`:
- 1
- 2
- 5
- 7
- 10
- 16

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**
