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
    <Card className="rounded-3xl bg-card/80 py-4 sm:py-5 lg:sticky lg:top-24 lg:self-start">
      <CardHeader className="px-4 sm:px-6">
        <CardTitle className="text-xl font-semibold sm:text-2xl">
          Order Summary
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-3.5 px-4 sm:px-6">
        <div className="flex items-center justify-between text-xl ">
          <span>{itemsCount} ITEM</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>

        <div className="flex items-center justify-between text-xl ">
          <span>Delivery</span>
          <span>{formatCurrency(delivery)}</span>
        </div>

        <div className="flex items-center justify-between text-xl ">
          <span>Sales Tax</span>
          <span>-</span>
        </div>

        <div className="flex items-center justify-between pt-1 text-xl font-semibold ">
          <span>Total</span>
          <span>{formatCurrency(total)}</span>
        </div>

        <Button
          variant="secondary"
          className="mt-2 h-12 w-full text-base font-semibold sm:h-14"
        >
          CHECKOUT
        </Button>

        <button
          type="button"
          className="text-base underline underline-offset-2"
        >
          Use a promo code
        </button>
      </CardContent>
    </Card>
  );
};

export default OrderHistorySummary;
