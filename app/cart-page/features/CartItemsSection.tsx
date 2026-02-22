"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CartItem } from "@/state-management/features/cartSlice";
import { AnimatePresence, motion } from "framer-motion";
import CartItemCard from "./CartItemCard";

type CartItemsSectionProps = {
  items: CartItem[];
};

const CartItemsSection = ({ items }: CartItemsSectionProps) => {
  return (
    <Card className="gap-4 rounded-3xl bg-card/80 py-4 sm:gap-5 sm:py-5">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-xl font-semibold sm:text-3xl">
          Your Bag
        </CardTitle>
        <p className=" text-muted-foreground ">
          Items in your bag not reserved- check out now to make them yours.
        </p>
      </CardHeader>

      <CardContent className="space-y-4 px-4 sm:px-6">
        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-dashed border-border bg-background/30 p-6 text-base text-muted-foreground sm:text-lg"
          >
            Your bag is empty.
          </motion.div>
        ) : (
          <AnimatePresence initial={false}>
            {items.map((item) => (
              <motion.div
                key={`${item.product.id}-${item.color ?? "na"}-${item.size ?? "na"}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 40, height: 0, marginBottom: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="overflow-hidden"
              >
                <CartItemCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </CardContent>
    </Card>
  );
};

export default CartItemsSection;
