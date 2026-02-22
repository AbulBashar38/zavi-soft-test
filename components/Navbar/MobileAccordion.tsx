import { AnimatePresence, motion } from "framer-motion";
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
      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="inline-flex"
      >
        <ChevronDown className="size-4" />
      </motion.span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.ul
          key="accordion-content"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="ml-4 overflow-hidden border-l border-border pl-3"
        >
          <div className="mt-1 flex flex-col gap-1">
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
          </div>
        </motion.ul>
      )}
    </AnimatePresence>
  </li>
);
export default MobileAccordion;
