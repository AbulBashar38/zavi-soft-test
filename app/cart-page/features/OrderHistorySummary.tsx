import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type OrderHistorySummaryProps = {
  itemsCount: number;
  subtotal: number;
};

const formatCurrency = (amount: number) => `$${amount.toFixed(2)}`;

const OrderHistorySummary = ({
  itemsCount,
  subtotal,
}: OrderHistorySummaryProps) => {
  const delivery = itemsCount > 0 ? 6.99 : 0;
  const salesTax = 0;
  const total = subtotal + delivery + salesTax;

  return (
    <Card className="rounded-3xl bg-card/80 py-4 sm:py-5 lg:sticky lg:top-24">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-4xl font-semibold">Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3 px-4 sm:px-6">
        <div className="flex items-center justify-between text-3xl">
          <span>{itemsCount} ITEM</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between text-3xl">
          <span>Delivery</span>
          <span>{formatCurrency(delivery)}</span>
        </div>

        <div className="flex items-center justify-between text-3xl">
          <span>Sales Tax</span>
          <span>-</span>
        </div>

        <div className="flex items-center justify-between pt-1 text-4xl font-semibold">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>

        <Button variant="secondary" className="mt-2 h-12 w-full sm:h-14">
          CHECKOUT
        </Button>

        <button type="button" className="text-xl underline underline-offset-2">
          Use a promo code
        </button>
      </CardContent>
    </Card>
  );
};

export default OrderHistorySummary;
