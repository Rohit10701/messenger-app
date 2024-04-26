"use client"
import { useAppDispatch, useAppSelector } from "@/states/hooks";
import { decrement, increment } from "@/states/slices/counter/counterSlice";
import Image from "next/image";

export default function Home() {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()

  return (
    <div className="flex">
      <p>Current count : {count}</p>
      <button onClick={() => dispatch(increment())}>Incerment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>

    </div>
  );
}
