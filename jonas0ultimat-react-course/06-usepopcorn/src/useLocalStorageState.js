import { useState, useEffect } from "react";

export function useLocalStorageState(intialState, key) {
  const [value, setValue] = useState(function () {
    const storedData = localStorage.getItem("watched");
    return storedData ? JSON.parse(storedData) : intialState;
  });

  useEffect(
    function () {
      localStorage.setItem("watched", JSON.stringify(value));
    },
    [value, key]
  );

  return [value, setValue];
}
