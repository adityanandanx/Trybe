import Image from "next/image";
import helpImg from "@/assets/help.webp";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex gap-10 items-center">
        <Image src={helpImg} alt="Help me gif" />
        <div className="flex flex-col gap-2 items-start max-w-md">
          <h1 className="font-display text-6xl font-bold">
            Help build this project
          </h1>
          <p>
            Trybe connects you to event sponsors and helps you to manage tasks
            for seamless collaboration within your team.
          </p>
          <a href="https://github.com/adityanandanx/Trybe">
            <Button>
              Visit Github <ArrowUpRight className="" />
            </Button>
          </a>
        </div>
      </div>
    </main>
  );
}
