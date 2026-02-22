"use client";

import SuggestionProducts from "@/components/SuggestionProducts";
import { useAppSelector } from "@/hooks/reduxHooks";
import { useGetProductsQuery } from "@/services/productsApi";
import {
  selectCartItems,
  selectCartTotalAmount,
} from "@/state-management/features/cartSlice";
import CartItemsSection from "./CartItemsSection";
import OrderHistorySummary from "./OrderHistorySummary";

const CartContainer = () => {
  const cartItems = useAppSelector(selectCartItems);
  const cartTotalAmount = useAppSelector(selectCartTotalAmount);

  const { data } = useGetProductsQuery();
  const cartItemIds = new Set(cartItems.map((item) => item.product.id));
  const suggestionProducts =
    data?.filter((product) => !cartItemIds.has(product.id)).slice(0, 8) ?? [];

  return (
    <section className="container mx-auto space-y-8 px-4 pb-10 sm:space-y-10 sm:px-6 sm:pb-16 lg:px-8">
      <section className="space-y-2.5">
        <h1 className="text-2xl font-semibold leading-tight sm:text-5xl">
          Saving to celebrate
        </h1>
        <p className="max-w-4xl text-base text-muted-foreground sm:text-lg">
          Enjoy up to 60% off thousands of styles during the End of Year sale -
          while supplies last. No code needed.
        </p>
        <button
          type="button"
          className="text-lg text-foreground  underline-offset-2"
        >
          <span className="underline">Join us.</span> or{" "}
          <span className="underline">Sign-in</span>
        </button>
      </section>

      <section className="grid items-start gap-4 lg:grid-cols-[1.75fr_1fr] lg:gap-6">
        <CartItemsSection items={cartItems} />
        <OrderHistorySummary
          itemsCount={cartItems.length}
          subtotal={cartTotalAmount}
        />
      </section>

      <SuggestionProducts products={suggestionProducts} />
    </section>
  );
};

export default CartContainer;
