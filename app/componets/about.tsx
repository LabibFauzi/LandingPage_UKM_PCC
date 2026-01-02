import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { AboutAccordion } from "../constant";

export default function About() {
  return (
    <div className="flex lg:flex-row flex-col gap-10">
      <div className="lg:w-1/2">
        <h1 className="md:text-4xl xl:text-5xl text-background font-bold leading-relaxed">
          A Few Things You <br /> May  Want To Ask
        </h1>
      </div>
      <div className="lg:w-1/2 lg:p-10">
        <Accordion
          type="single"
          collapsible
          defaultValue="item-1"
          className="w-full gap-10 flex flex-col"
        >
          {AboutAccordion.map((item) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="flex items-center justify-between w-full py-2 text-left text-black border-b-2 transition-all text-xs lg:text-xl [&[data-state=open]>svg]:rotate-180">
                {item.title}
                <ChevronDown className="h-5 w-5 shrink-0 text-black transition-transform duration-200" />
              </AccordionTrigger>
              <AccordionContent className="pt-3">
                <p className="text-gray-600 text-xs lg:text-base leading-loose text-justify">{item.content}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  )
}
