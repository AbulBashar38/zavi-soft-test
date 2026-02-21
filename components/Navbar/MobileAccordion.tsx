import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { SheetClose } from "../ui/sheet";

const MobileAccordion = ({
  label,
  items,
  isOpen,
  onToggle,
}: {
  label: string;
  items: string[];
  isOpen: boolean;
  onToggle: () => void;
}) => (
  <li>
    <button
      type="button"
      className="flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-muted"
      onClick={onToggle}
    >
      {label}
      <ChevronDown
        className={`size-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
      />
    </button>
    {isOpen && (
      <ul className="ml-4 mt-1 flex flex-col gap-1 border-l border-border pl-3">
        {items.map((item) => (
          <li key={item}>
            <SheetClose asChild>
              <Link
                href="#"
                className="block rounded-md px-3 py-1.5 text-sm transition-colors hover:bg-muted"
              >
                {item}
              </Link>
            </SheetClose>
          </li>
        ))}
      </ul>
    )}
  </li>
);
export default MobileAccordion;
