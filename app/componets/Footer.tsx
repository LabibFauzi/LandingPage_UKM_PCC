import Image from "next/image";
import { SocialMedia } from "../constant";
import { Button } from "@/components/ui/button";
import { Ghost } from "lucide-react";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

export default function Footer() {
  return (
    <div className="flex flex-col bg-background p-5 h-full gap-10">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        <div className="flex flex-col">
          <div>
            <p>UKM PCC</p>
            <h1 className="font-bold">
              POLYTECHNIC COMPUTER CLUB
            </h1>
          </div>
          <Separator className="border mb-3 mt-3" />
          <div className="flex gap-4">
            {SocialMedia.map((item) => (
              <div key={item.id}>
                <Link href={item.path} >
                  <Image src={item.image} width={20} height={20} alt={item.title} />
                </Link>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-5 ">
          <div className="space-y-2 text-xs lg:text-sm">
            <p className="opacity-70">About</p>
            <p>Blog</p>
            <p>Website</p>
          </div>
          <div className="space-y-2 text-xs lg:text-sm">
            <p className="opacity-70">Contact</p>
            <p>Semarang, Indonesia</p>
            <p>Politeknik Negeri Semarang</p>
          </div>
          <div className="space-y-2 text-xs lg:text-sm">
            <p className="opacity-70">Services</p>
            <p>Maintenence</p>
            <p>Store</p>
          </div>
        </div>
      </div>
      <div>
        <Separator className="border my-3" />
        <p className="text-xs text-gray-300 text-center">@2025 UKM PCC All Right Reserved</p>
      </div>
    </div>
  )
}
