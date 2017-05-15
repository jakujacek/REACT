# state &ndash; zadania

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

### Zmiany, zmiany (~ 10min - 15min)

Stwórz komponent `HelloWorld`, który przechowuje tekst do wyświetlenia jako **stan lokalny**. Niech napis będzie domyślnie nastawiony na "Hello, World!".

Komponent ma wyrenderować ten napis w elemencie `h1`.

Dodaj timer do swojego komponentu, który po 5 sekundach zmieni ten tekst na "Hi, Everyone!". **Pamiętaj, aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**

Dodaj `console.log` do każdej metody cyklu życia.

Zrenderuj swój komponent.

Zajrzyj do konsoli. Które metody cyklu życia zostały wywołane, dlaczego? Widzisz różnicę w porównaniu z wielokrotnym użyciem `ReactDOM.render()`?

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 15min - 25min)

Stwórz komponent `TextTyper`. Przyjmuje on przez props wartość `text`.

Komponent ma wyrenderować pierwszą literę tego napisu w elemencie `h1`. Pamiętaj, aby do przechowywania znaków, które mają być wyświetlone skorzystać ze **state**.

Dodaj timer lub interval do swojego komponentu, który sprawi, że co 1 sekundę pojawi się w elemencie `h1` coraz więcej liter (co sekundę 1==kolejny znak). **Pamiętaj, aby zrobić to w odpowiedniej metodzie cyklu życia, pamiętaj aby zwolnić zasoby.**

Efekt po kolei może wyglądać tak dla `text` ustawionego na `Witaj!`:
- 0s.: W
- 1s.: Wi
- 2s.: Wit
- 3s.: Wita
- 4s.: Witaj
- 5s.: Witaj!

Zrenderuj swój komponent z przykładowym napisem.

Zajrzyj do narzędzi deweloperskich React. Kliknij na swój komponent - zobaczysz jego `props`, aktualne `state` oraz podświetlenia aktualizacji.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**

### Zadanie 2 (~ 10min - 15min)

Przerób zadanie 1. Spraw, żeby komponent `TextTyper` przyjmował jeszcze jedną wartość przez props - booleanowy `reversed`.

Jeżeli wartość props `reversed` będzie ustawiona na `true`, to komponent powinien mieć odwrotne działanie, tzn. na początku pojawiają się wszystkie znaki i co sekundę jest 1 mniej.

Efekt po kolei może wyglądać tak dla `text` ustawionego na `Witaj!`:
- 0s.: Witaj!
- 1s.: Witaj
- 2s.: Wita
- 3s.: Wit
- 4s.: Wi
- 5s.: W
- 6s.: (już nic nie widać :) )

Postaraj się zastosować to zasady **DRY (don't repeat yourself, nie powtarzaj się)** i nie twóz niepotrzebnego kodu. Postaraj się go napisać tak, żeby nie występowały identyczne/podobne linie kodu w Twoim komponencie.

### Zadanie 3 (~ 15min - 25min)

Stwórz komponent `StrobeLight`. Przyjmuje on przez props dwie wartości: kolor światła (`color`) oraz częstotliwość mrugania w ms (`frequency`).

Komponent ma wyrenderować pusty element `div`, z następującymi stylami:
- Szerokość: 500px,
- Wysokość: 50px,
- Kolor tła: biały.

Dodaj timer lub interval do swojego komponentu, który sprawi, że co określoną (w props) ilość ms `frequency` będzie się zmieniać kolor tła naprzemiennie:
- Jeżeli wcześniej był kolor biały - na kolor z `props`,
- W przeciwnym wypadku na kolor biały.

Zrenderuj swój komponent kilka razy, z przykładowymi danymi i ciesz się własnym światłem stroboskopowym :)

Zajrzyj do narzędzi deweloperskich React. Kliknij na swoje komponenty - zobaczysz ich `props`, aktualne `state` oraz podświetlenia aktualizacji.

**Pamiętaj, aby zbudować jeszcze główny komponent `App`, a w nim wykorzystywać komponenty budowane w ćwiczeniach. Renderuj na stronie główny komponent `App`.**
