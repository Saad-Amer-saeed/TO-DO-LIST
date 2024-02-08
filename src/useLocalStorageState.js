import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

export function useLocalStorageState(key) {
  const myTask = useSelector((store) => store.HandelApp);
  const [value, setValue] = useState(function () {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : myTask;
  });

  useEffect(
    function () {
      localStorage.setItem(key, JSON.stringify(value));
    },
    [value, key]
  );

  useEffect(() => setValue((prevalue) => [...prevalue, myTask]), [myTask]);
  return [value];
}
