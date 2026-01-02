import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="flex items-center justify-center">

      <div className="lg:w-1/2 flex flex-col gap-5 items- lg:items-start">
        <span className="text-xs text-center lg:text-left tracking-widest text-muted-foreground">
          Gallery Event's
        </span>

        <h2 className="text-xl lg:text-4xl text-center lg:text-left text-background font-extrabold leading-tight">
          We’ve captured <br />
          our memories
        </h2>

        <p className="text-xs  text-muted-foreground max-w-md leading-relaxed">
          Setiap momen dalam kegiatan UKM PCC kami abadikan sebagai bagian dari
          perjalanan, pembelajaran, dan kebersamaan.
        </p>

        <div className="relative w-full max-w-[500px] aspect-4/3 overflow-hidden rounded-2xl lg:hidden">
          <Image
            src="/assets/hut.jpg"
            alt="Hut PCC"
            fill
            className="object-cover grayscale transition-all duration-700 hover:grayscale-0 hover:scale-105"
          />
        </div>
        <Button variant="outline" size="default" asChild className="w-fit">
          <a
            href="https://drive.google.com/drive/folders/17xodvFftoLA4afo3UmT3rMFzgD5R5ABs"
            target="_blank"
            rel="noopener noreferrer"
          >
            See More
          </a>
        </Button>
      </div>

      <div className="lg:w-1/2  justify-end hidden lg:flex">
        <div className="relative w-[500px] h-[500px] aspect-square overflow-hidden rounded-2xl">
          <Image
            src="/assets/hut.jpg"
            alt="Hut PCC"
            fill
            className="
              object-cover grayscale
              transition-all duration-700
              hover:grayscale-0 hover:scale-105
            "
          />
        </div>
      </div>

    </div>
  );
}
