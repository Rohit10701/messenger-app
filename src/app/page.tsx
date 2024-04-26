"use client"
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/states/hooks";
import { decrement, increment } from "@/states/slices/counter/counterSlice";
import { useTheme } from "next-themes";
import Image from "next/image";

export default function Home() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <div className="flex">
      <div>
        <h1 className="text-7xl font-bold text-center">
          {currentTheme === "dark" ? "Dark" : "Light"}{" "}
          <span className="text-purple-600">Mode</span>
        </h1>
        <p className="dark:text-purple-600 my-8 text-center">
          Click the button below to switch mode
        </p>
        <div className="flex justify-center">
          {currentTheme === "dark" ? (
            <button
              className="bg-black-700 hover:bg-black w-28 rounded-md border-purple-400 border-2 p-4"
              onClick={() => setTheme("light")}
            >
              {" "}
              Light
            </button>
          ) : (
            <button
              className="bg-gray-100 w-28 rounded-md border-purple-400 border-2 p-4 hover:bg-gray-300"
              onClick={() => setTheme("dark")}
            >
              Dark
            </button>
          )}
        </div>
      </div>
      <p className="dark:text-white text-black">Current count : {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
}
