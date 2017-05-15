# Aktualizacje &ndash; zadania

### Przygotowanie

> Stwórz w pełni działające środowisko, które pozwoli Ci pisać pliki JSX, skompilować je do plików JS i uruchomić działającą aplikację React.
> 
> Pamiętaj o:
> - ```npm init```
> - Zainstalowaniu odpowiednich modułów
> - Ustawieniu Webpacka, pierwszym plikiem wejściowym ma być `js/zadanie00.jsx` (potem z kolejnymi numerami zadań), wyjściowym zawsze `js/out.js`
>
> **Pamiętaj, żeby podczas wykonywania zadań modyfikować odpowiednio plik _webpack.config.js_, aby wskazywać plik nad którym obecnie pracujesz w _entry_.**

## Zadanie rozwiązywane z wykładowcą

### Odliczanie  (~ 10min - 15min)

Stwórz aplikację, która przez ```prompt()``` pobiera ilość sekund do odliczenia. Pamiętaj o użyciu ```parseInt()``` przy zapisie do zmiennej.
 
Za pomocą React wyrenderuj w elemencie o id ```app``` element ```div```, w którym będzie się wyświetlała aktualna ilość sekund (początkowo ta podana przez użytkownika).

Następnie uruchom za pomocą ```setInterval()``` co 1 sekundę funkcję, która zmniejsza ilość sekund o 1 i renderuje na nowo element ```div``` z poprzedniego akapitu.

Przerób odświeżanie w taki sposób, aby znajdowało się w jednej, wspólnej funkcji wywoływanej na początku oraz po każdym odjęciu sekundy.
 
Kiedy odliczanie dojdzie do zera w elemencie ```div``` zamiast sekund ma się pojawić napis ```Skończono!```.

Uruchom swój program, otwórz narzędzia deweloperskie przeglądarki. Sprawdź co dokładnie jest aktualizowane w drzewie DOM.

## Zadania do samodzielnego wykonania

### Zadanie 1 (~ 10min - 15min)

Stwórz zegar. Jego wyświetlanie ma się odbywać w takiej strukturze:

```HTML
<div>
    <span>Jest godzina:</span>
    <h1>{ godzina }</h1>
</div>
```

Uruchom za pomocą ```setInterval()``` co 1 sekundę funkcję, która aktualizuje godzinę. Godzinę pobierzesz za pomocą funkcji ```(new Date()).toLocaleTimeString()```, która zwraca gotową godzinę jako string.

Za pomocą React wyrenderuj w elemencie o id ```app``` element ```div``` i całą wyżej opisaną strukturę, w odpowiednim miejscu ma się wyświetlać aktualna godzina.

Uruchom swój program, otwórz narzędzia deweloperskie przeglądarki. Sprawdź co dokładnie jest aktualizowane w drzewie DOM.

Czy aktualizowana jest cała struktura, czy tylko niektóre elementy? Które? Z którego założenia React wynika to działanie?
