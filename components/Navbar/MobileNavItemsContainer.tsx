"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { menuItems } from "@/lib/constant";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/images/Logo.svg";
import MobileAccordion from "./MobileAccordion";
const MobileNavItemsContainer = () => {
  const [openSection, setOpenSection] = useState<"men" | "women" | null>(null);

  const toggleSection = (section: "men" | "women") => {
    setOpenSection((prev) => (prev === section ? null : section));
  };
  return (
    <div className="flex flex-1 items-center">
      <Sheet
        onOpenChange={(open) => {
          if (!open) setOpenSection(null);
        }}
      >
        <SheetTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Open menu"
            className="lg:hidden"
          >
            <Menu className="size-5" />
          </Button>
        </SheetTrigger>

        <SheetContent side="left" className="p-0">
          <SheetHeader className="border-b px-6 py-5">
            <SheetTitle asChild>
              <Link href="/">
                <Image
                  src={Logo}
                  alt="Kicks"
                  width={120}
                  height={32}
                  priority
                />
              </Link>
            </SheetTitle>
          </SheetHeader>

          <ul className="flex flex-col gap-1 px-4 py-4">
            <li>
              <SheetClose asChild>
                <Link
                  href="#"
                  className="block rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                >
                  New Drops 🔥
                </Link>
              </SheetClose>
            </li>

            <MobileAccordion
              label="Men"
              items={menuItems.men}
              isOpen={openSection === "men"}
              onToggle={() => toggleSection("men")}
            />
            <MobileAccordion
              label="Women"
              items={menuItems.women}
              isOpen={openSection === "women"}
              onToggle={() => toggleSection("women")}
            />
          </ul>
        </SheetContent>
      </Sheet>

      {/* Logo — always centered */}
      <Link
        href="/"
        className="absolute left-1/2 -translate-x-1/2 flex shrink-0 items-center justify-center"
      >
        <Image src={Logo} alt="Kicks" width={140} height={38} priority />
      </Link>

      {/* Right icons */}
      <div className="flex flex-1 items-center justify-end gap-1">
        <Button variant="ghost" size="icon" aria-label="Search">
          <Image src="/icons/Search.svg" alt="" width={20} height={20} />
        </Button>

        <Button variant="ghost" size="icon" aria-label="Profile">
          <Image src="/icons/User.svg" alt="" width={20} height={20} />
        </Button>

        <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-amber-400 px-2 text-xs font-semibold text-foreground">
          0
        </span>
      </div>
    </div>
  );
};

export default MobileNavItemsContainer;
