React Performance
=================

A demo app for diagnosing React performance issues

## Diagnostic Tools

### React Devtools
Open react devtools and click the highlight updates checkbox.

### Chrome Performance Tab
- Add `?react_perf` to the end of your url.
- Open up the performance tab in chrome devtools.
- Click the the circle to begin recording.
- Perform an action (refresh page, click something, etc.)
- Stop recording.

React components will show up in User Timing.

### React Addons Perf
- Run `Perf.start()`.
- Do something.
- Run `Perf.stop()`.
- Run `Perf.printOperations()` to see what operations where performed.
- Run `Perf.prinWasted()` to see what componenets were checked but not rerendered.

## Demo Options

### Monolith & Split
Monolith - The dom is contained in a few large components.

Split - The dom is split into much smaller components.

### Functional & Pure
Functional - Colors are stateless functional components.

Pure - Colors are PureComponents.

### Math.random() & index & id
Math.random() - A random key is generated for each color every time we rerender.

index - The array index is used as they key for each color.

id - Each color has a unique id assigned as it's key.
