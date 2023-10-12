"use client";
import { useState } from "react";
import { Button } from "~/components";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const onClick = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <main className="flex justify-center w-screen min-h-screen items-center">
      <h1 className="text-2xl font-bold">{counter}</h1>
      <Button onClick={onClick}>Whatever this is</Button>
    </main>
  );
}
