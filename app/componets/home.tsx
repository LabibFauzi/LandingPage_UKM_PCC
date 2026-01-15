import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <div data-aos="fade-up">
        <h1 className="font-extrabold lg:text-8xl text-2xl text-left">
          POLYTECHNIC <br /> COMPUTER <br /> CLUB
        </h1>
        <p className="lg:text-xl" data-aos="fade-up" data-aos-delay="200">
          2025/2026
        </p>
      </div>
      <div data-aos="fade-up">
        <Link href="/#about">
          <Button variant="outline" size="sm">
            Learn more
            <ArrowDownIcon />
          </Button>
        </Link>
      </div>
    </div>
  );
}
