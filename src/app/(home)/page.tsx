"use client";
import { Button } from "~/components";

export default function Home() {
  const onClick = () => {
    console.log("Clicked");
  };

  return (
    <main className="flex justify-center w-screen min-h-screen items-center">
      <Button onClick={onClick}>Whatever this is</Button>
    </main>
  );
}
