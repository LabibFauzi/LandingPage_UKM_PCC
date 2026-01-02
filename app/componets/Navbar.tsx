"use client";
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavMenu } from "../constant";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full h-15 lg:h-20 flex items-center justify-between px-6 md:px-10 bg-background shadow-xl">
      <Link href="/#home" className="flex items-end gap-2">
        <Image
          src="/assets/logopcc.png"
          alt="Logo PCC"
          width={30}
          height={30}

        />
        <p className="text-white">PCC</p>
      </Link>

      <div className="hidden md:flex gap-6">
        {NavMenu.map((item) => (
          <Button
            key={item.id}
            variant="link"
            asChild
            className="text-white hover:text-gray-300"
          >
            <a href={item.href}>{item.title}</a>
          </Button>
        ))}
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button
            size="icon"
            variant="ghost"
            className="md:hidden fixed right-4 z-50 text-white "
          >
            <Menu size={30} />
          </Button>
        </SheetTrigger>

        <SheetContent
          side="right"
          className="bg-background border-none p-10 w-[300px]"
        >
          <SheetTitle>
            <Link href="/#home" className="flex items-end gap-2">
              <Image
                src="/assets/logopcc.png"
                alt="Logo PCC"
                width={30}
                height={30}
              />
              <p className=" text-xs">Polytechnic <br /> Computer Club</p>
            </Link>
          </SheetTitle>
          <SheetClose className="flex flex-col gap-5 mt-10 items-start">
            {NavMenu.map((item) => (
              <Button
                key={item.id}
                variant="link"
                asChild
                className="text-white hover:text-gray"
              >
                <a href={item.href}>{item.title}</a>
              </Button>
            ))}
          </SheetClose>
        </SheetContent>
      </Sheet>
    </nav>
  );
}
