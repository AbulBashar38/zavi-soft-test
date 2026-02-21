import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { menuItems } from "@/lib/constant";
import Link from "next/link";
const DesktopNavItemsContainer = () => {
  return (
    <div className="hidden flex-1 items-center lg:flex w-full">
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
  );
};

export default DesktopNavItemsContainer;
