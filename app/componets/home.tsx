import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 lg:gap-20">
      <div>
        <h1 className="font-extrabold lg:text-8xl text-2xl text-left">POLYTECHNIC <br /> COMPUTER <br /> CLUB</h1>
        <p className="lg:text-xl">2025/2026</p>
      </div>
      <div>
        <Link href="/#about">
          <Button variant="outline" size="sm" className="">
            Learn more
            <ArrowDownIcon />
          </Button>
        </Link>
      </div>
    </div>
  )
}
