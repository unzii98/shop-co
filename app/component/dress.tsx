import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function DressStyle() {
  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h1 className="font-bold">Dress Style</h1>
      </div>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>T-shirts</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Shorts</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that match the other components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Shirts</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <div>
        <button className="bg-black mt-3 py-2 px-8 text-sm text-white rounded-[16px] w-[90%]">
          Apply Filter
        </button>
      </div>
    </div>
  );
}
