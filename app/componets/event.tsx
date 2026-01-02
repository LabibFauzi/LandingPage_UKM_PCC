"use client";

import Image from "next/image";
import { useState } from "react";
import { EventCard } from "../constant";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Event() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const total = EventCard.length;
  const data = EventCard[current];

  const handleSlide = (newIndex: number, dir: "left" | "right") => {
    if (isAnimating) return;
    setIsAnimating(true);
    setDirection(dir);
    setCurrent(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    handleSlide((current + 1) % total, "right");
  };

  const prevSlide = () => {
    handleSlide((current - 1 + total) % total, "left");
  };

  return (
    <div className="flex md:flex-row flex-col gap-10 w-full">
      <div className="md:w-1/2 w-full overflow-hidden relative">
        <div className="relative w-full aspect-4/3 md:aspect-4/4 lg:aspect-4/3 max-h-[400px] md:max-h-[500px]">
          <Image
            key={current}
            src={data.image}
            alt={data.title}
            fill
            className="object-cover animate-fade-in hover:scale-105 duration-700 rounded-2xl "
            priority
          />
        </div>
      </div>
      <div className="md:w-1/2 flex flex-col justify-between xl:gap-0 gap-10 ">
        <div className="xl:flex grid grid-cols-2 gap-3 justify-between ">
          {EventCard.map((item, index) => (
            <Button
              key={index}
              variant="outline"
              size="default"
              onClick={() => {
                handleSlide(index, index > current ? "right" : "left");
              }}
              className={`text-[10px] xl:text-xs ${index === current ? "bg-accent text-black" : ""}`}>
              /{item.title}
            </Button>
          ))}
        </div>
        <div className="flex items-center">
          <Button
            variant="ghost"
            onClick={prevSlide}
            disabled={isAnimating}
            className="p-3 rounded-full w-2 h-2 lg:w-10 lg:h-10 border transition disabled:opacity-50 hidden lg:block"
          >
            <ChevronLeft />
          </Button>

          <div className="flex flex-col gap-10 items-center justify-between lg:p-10 overflow-hidden">
            <div
              key={`content-${current}`}
              className={`animate-slide-${direction} space-y-2`}
            >
              <p className="xl:text-xl text-sm text-justify lg:text-left leading-relaxed">
                {data.desc}
              </p>
            </div>

            <div className="flex gap-4 items-center justify-between">
              <Button
                variant="ghost"
                onClick={prevSlide}
                disabled={isAnimating}
                className="p-3 rounded-full w-2 h-2 lg:hidden border transition disabled:opacity-50"
              >
                <ChevronLeft />
              </Button>
              {EventCard.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    handleSlide(index, index > current ? "right" : "left");
                  }}
                  disabled={isAnimating}
                  className={`w-1 h-1 lg:w-2 lg:h-2 rounded-full bg-white transition-transform duration-300 disabled:cursor-not-allowed
                    ${index === current ? "scale-125" : "scale-100 opacity-50"}
                  `}
                />
              ))}
              <Button
                variant="ghost"
                onClick={nextSlide}
                disabled={isAnimating}
                className="p-3 rounded-full w-2 h-2 lg:hidden border hover:bg-muted transition disabled:opacity-50"
              >
                <ChevronRight />
              </Button>
            </div>
          </div>

          <Button
            variant="ghost"
            onClick={nextSlide}
            disabled={isAnimating}
            className="p-3 rounded-full w-5 h-5 border lg:w-10 lg:h-10 hover:bg-muted transition disabled:opacity-50 hidden lg:block"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
