"use client"
import { FiMenu } from "react-icons/fi";
import Link from "next/link";
import { NavigationMenuDemo } from "./navigation-menu";
import { Button } from "@/components/ui/button"
import {
  Sheet,

  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const SHEET_SIDES = [ "left"] as const

type SheetSide = (typeof SHEET_SIDES)[number]

export function SheetSide() {
  return (
    <div className="grid gap-4">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side}>
          <SheetTrigger asChild className="md:hidden" >
            <Button >
                <FiMenu/>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}className="bg-white">
            <SheetHeader>
                <SheetTitle>Shop.co</SheetTitle>
                <ul className="bg-white">
        <li className="gap-4 grid grid-cols-1 ">
        <Link className="ml-4" href={"/OnSale"}></Link>
       <Link className="ml-4 "href={"/"}><NavigationMenuDemo/></Link>
     <Link className="ml-4"href={"/casual"}>
      On Sale</Link>
     <Link className="ml-4"href={"/products"}>New Arrival</Link>
     <Link className="ml-4"href={"/"}>Brands</Link>
          </li>
      </ul>
        </SheetHeader>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  )
}
