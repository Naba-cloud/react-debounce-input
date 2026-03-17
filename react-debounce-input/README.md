# react-debounce-input

A tiny and simple React hook to debounce values.

## ✨ Features

* Minimal and lightweight
* Easy to use
* Works with any input
* No dependencies

---

## 📦 Installation

```bash
npm install react-debounce-hook
```

---

## 🚀 Usage

```jsx
import { useState, useEffect } from "react";
import { useDebounce } from "react-debounce-input";

function Search() {
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (!debouncedQuery) return;

    console.log("API call with:", debouncedQuery);
  }, [debouncedQuery]);

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search..."
    />
  );
}
```

---

## 🧠 How It Works

`useDebounce` delays updating the value until the user stops typing.

```js
const debouncedValue = useDebounce(value, delay);
```

* `value` → current value
* `delay` → time in milliseconds (default: 300ms)

---

## 📌 Example

Typing:

```
a → ab → abc → abcd
```

Without debounce:

```
API called 4 times ❌
```

With debounce:

```
API called 1 time after delay ✅
```

---

## ⚠️ Important

Use the **debounced value** only for:

* API calls
* filtering
* expensive operations

Do NOT use it as the input value directly.

---

## 📄 API

### `useDebounce(value, delay?)`

| Parameter | Type   | Description                  |
| --------- | ------ | ---------------------------- |
| value     | string | Value to debounce            |
| delay     | number | Delay in ms (default: 300ms) |

---

## 🛠 Example Use Cases

* Search inputs
* Live filters
* API requests
* Autocomplete fields

---

## 📃 License

MIT
