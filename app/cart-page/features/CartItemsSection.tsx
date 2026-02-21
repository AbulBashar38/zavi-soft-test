import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { CartItem } from "@/state-management/features/cartSlice";
import CartItemCard from "./CartItemCard";

type CartItemsSectionProps = {
  items: CartItem[];
};

const CartItemsSection = ({ items }: CartItemsSectionProps) => {
  return (
    <Card className="gap-4 rounded-3xl bg-card/80 py-4 sm:gap-5 sm:py-5">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-3xl font-semibold">Your Bag</CardTitle>
        <p className="text-sm text-muted-foreground sm:text-xl">
          Items in your bag not reserved- check out now to make them yours.
        </p>
      </CardHeader>

      <CardContent className="space-y-4 px-4 sm:px-6">
        {items.length === 0 ? (
          <div className="rounded-2xl border border-dashed border-border bg-background/30 p-6 text-sm text-muted-foreground sm:text-xl">
            Your bag is empty.
          </div>
        ) : (
          items.map((item) => (
            <CartItemCard
              key={`${item.product.id}-${item.color ?? "na"}-${item.size ?? "na"}`}
              item={item}
            />
          ))
        )}
      </CardContent>
    </Card>
  );
};

export default CartItemsSection;
