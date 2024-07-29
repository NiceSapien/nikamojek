"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  const handleClick = () => {
    window.location.href = "https://discord.com/oauth2/authorize?client_id=1194199045820907520&permissions=0&scope=bot%20applications.commands";
  };
  return (
    <main>
<div className="h-[100vh] flex flex-col items-center justify-center text-white bg-meme bg-no-repeat bg-cover bg-center bg-[rgba(0,0,0,0.1)]">
<h1 className="justify-center text-center font-sans text-7xl">Nika Mojek</h1>
<p className="p-2 text-center">Nika mojek is the worst discord bot that anyone can add in their server. However, it is only present in the servers of extremely cool people.</p>
<Button onClick={handleClick}>Invite me</Button>
</div>
<div className="text-white bg-[#212121] h-[600vh]">
  <p>What you here for, dawg? Scroll up.</p>
</div>
<div className="text-white bg-[#212121]">
  <p>Sussy baka UwU</p>
  </div>
</main>
  );
}
