# React Stopwatch

A simple and customizable stopwatch built with React.  
Displays elapsed time in `hh:mm:ss` format with Start, Stop, and Reset controls.

---

## Features

- Displays time in hours, minutes, and seconds (`hh:mm:ss`)
- Start the timer
- Stop/pause the timer
- Reset the timer to zero
- Clean and modern UI with customizable styles

---

## Usage

The main component is `Stopwatch`. It uses React hooks (`useState` and `useRef`) to manage timer state and intervals.

### Key Functions

- `formatTime(seconds)`: Converts seconds to a formatted string `hh:mm:ss`.
- `startTimer()`: Starts the timer if not already running.
- `stopTimer()`: Stops/pauses the timer.
- `resetTimer()`: Stops the timer and resets time to zero.
