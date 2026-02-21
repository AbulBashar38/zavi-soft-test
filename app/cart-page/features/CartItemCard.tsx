"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useAppDispatch } from "@/hooks/reduxHooks";
import {
  removeFromCart,
  type CartItem,
  updateQuantity,
} from "@/state-management/features/cartSlice";
import { Heart, Trash2 } from "lucide-react";
import Image from "next/image";

type CartItemCardProps = {
  item: CartItem;
};

const quantityOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const CartItemCard = ({ item }: CartItemCardProps) => {
  const dispatch = useAppDispatch();
  const productImage = item.product.images?.[0] ?? "/images/hero-feature1.jpg";
  const formattedPrice = `$${item.totalPrice.toFixed(2)}`;

  return (
    <article className="grid grid-cols-[112px_1fr] gap-4 rounded-2xl bg-card p-4 sm:grid-cols-[140px_1fr] sm:gap-6 sm:p-5">
      <div className="relative overflow-hidden rounded-2xl bg-muted/70">
        <div className="relative aspect-square w-full">
          <Image
            src={productImage}
            alt={item.product.title}
            fill
            className="object-cover object-center"
            sizes="(max-width: 640px) 112px, 140px"
          />
        </div>
      </div>

      <div className="flex min-h-full flex-col">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-2xl font-semibold uppercase leading-tight sm:text-3xl">
              {item.product.title}
            </h3>
            <p className="mt-1 text-sm text-muted-foreground sm:text-xl">
              Men&apos;s Road Running Shoes
            </p>
            <p className="text-sm text-muted-foreground sm:text-xl">
              {item.color || "Enamel Blue"} / University White
            </p>
          </div>

          <p className="hidden text-3xl font-bold text-primary sm:block">{formattedPrice}</p>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3 sm:gap-4">
          <div className="inline-flex items-center gap-2 text-sm sm:text-xl">
            <span>Size</span>
            <span className="font-medium">{item.size ?? 10}</span>
          </div>

          <div className="inline-flex items-center gap-2 text-sm sm:text-xl">
            <span>Quantity</span>
            <Select
              value={String(item.quantity)}
              onValueChange={(value) =>
                dispatch(
                  updateQuantity({
                    productId: item.product.id,
                    quantity: Number(value),
                  }),
                )
              }
            >
              <SelectTrigger className="h-8 min-w-18 border-0 px-1! py-0! shadow-none focus-visible:ring-0 sm:h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {quantityOptions.map((qty) => (
                  <SelectItem key={qty} value={String(qty)}>
                    {qty}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <p className="mt-3 text-4xl font-bold text-primary sm:hidden">{formattedPrice}</p>

        <div className="mt-3 flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-9! w-9!">
            <Heart className="size-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-9! w-9!"
            onClick={() => dispatch(removeFromCart(item.product.id))}
          >
            <Trash2 className="size-5" />
          </Button>
        </div>
      </div>
    </article>
  );
};

export default CartItemCard;
