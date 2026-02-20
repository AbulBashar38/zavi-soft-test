import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/images/Logo.svg";
const menuItems = {
  men: ["Sneakers", "Running", "Lifestyle"],
  women: ["Training", "Running", "Casual"],
};

const Navbar = () => {
  return (
    <section className="w-full px-4 pt-8 sm:px-6 lg:px-8">
      <nav className="mx-auto flex w-full container items-center justify-between rounded-2xl bg-card px-6 py-5 sm:px-8">
        <div className="flex flex-1 items-center">
          <NavigationMenu viewport={false}>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <Link
                  href="#"
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

        <Link href="/" className="flex shrink-0 items-center justify-center">
          <Image src={Logo} alt="Kicks" width={140} height={38} priority />
        </Link>

        <div className="flex flex-1 items-center justify-end gap-5">
          <button
            type="button"
            aria-label="Search"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-muted"
          >
            <Image src="/icons/Search.svg" alt="" width={20} height={20} />
          </button>

          <button
            type="button"
            aria-label="Profile"
            className="inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors hover:bg-muted"
          >
            <Image src="/icons/User.svg" alt="" width={20} height={20} />
          </button>

          <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-amber-400 px-2 text-xs font-semibold text-foreground">
            0
          </span>
        </div>
      </nav>
    </section>
  );
};

export default Navbar;
