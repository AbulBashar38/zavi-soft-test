"use client";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useAppSelector } from "@/hooks/reduxHooks";
import { menuItems } from "@/lib/constant";
import { selectCartTotalQuantity } from "@/state-management/features/cartSlice";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Logo from "../../public/images/Logo.svg";
import MobileAccordion from "./MobileAccordion";
const Navbar = () => {
  const [openSection, setOpenSection] = useState<"men" | "women" | null>(null);

  const toggleSection = (section: "men" | "women") => {
    setOpenSection((prev) => (prev === section ? null : section));
  };
  const cartTotal = useAppSelector(selectCartTotalQuantity);
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <nav className=" mx-auto container ">
        <div className="flex items-center justify-between rounded-2xl bg-card px-6 py-5 sm:px-8">
          <div className="hidden  items-center lg:flex ">
            <NavigationMenu viewport={false}>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <Link
                    href="#new-product"
                    className="rounded-md px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
                  >
                    New Drops 🔥
                  </Link>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent px-3 text-sm font-medium hover:bg-muted data-open:bg-muted/60">
                    Men
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid min-w-40 gap-1 p-2">
                      {menuItems.men.map((item) => (
                        <li key={item}>
                          <Link
                            href="#"
                            className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent px-3 text-sm font-medium hover:bg-muted data-open:bg-muted/60">
                    Women
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid min-w-40 gap-1 p-2">
                      {menuItems.women.map((item) => (
                        <li key={item}>
                          <Link
                            href="#"
                            className="block rounded-md px-3 py-2 text-sm transition-colors hover:bg-muted"
                          >
                            {item}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

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

          <Link href={"/home"} className="lg:-ml-32">
            <Image
              src={Logo}
              alt="Kicks"
              width={140}
              height={38}
              priority
              className="sm:w-full w-24"
            />
          </Link>

          <div className="flex items-center">
            <Button
              className="md:block hidden"
              variant="ghost"
              size="icon"
              aria-label="Search"
            >
              <Image src="/icons/Search.svg" alt="" width={20} height={20} />
            </Button>

            <Button variant="ghost" size="icon" aria-label="Profile">
              <Image src="/icons/User.svg" alt="" width={20} height={20} />
            </Button>

            <Link
              href="/cart-page"
              aria-label="Open cart"
              className="flex h-7 min-w-7 items-center justify-center rounded-full bg-amber-400 px-2 text-xs font-semibold text-foreground"
            >
              {cartTotal}
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
