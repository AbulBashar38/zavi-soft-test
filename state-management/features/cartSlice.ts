import type { RootState } from "@/state-management/store";
import type { Product } from "@/types/productsType";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CartItem = {
  product: Product;
  quantity: number;
  totalPrice: number;
  color?: string;
  size?: number;
};

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const recalcTotals = (state: CartState) => {
  state.totalQuantity = state.items.reduce((acc, it) => acc + it.quantity, 0);
  state.totalAmount = state.items.reduce((acc, it) => acc + it.totalPrice, 0);
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state,
      action: PayloadAction<{
        product: Product;
        quantity?: number;
        color?: string;
        size?: number;
      }>,
    ) => {
      const { product, quantity = 1, color, size } = action.payload;
      const existing = state.items.find(
        (it) =>
          it.product.id === product.id &&
          it.color === color &&
          it.size === size,
      );
      if (existing) {
        existing.quantity += quantity;
        existing.totalPrice = existing.product.price * existing.quantity;
      } else {
        state.items.push({
          product,
          quantity,
          totalPrice: product.price * quantity,
          color,
          size,
        });
      }
      recalcTotals(state);
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const productId = action.payload;
      state.items = state.items.filter((it) => it.product.id !== productId);
      recalcTotals(state);
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ productId: number; quantity: number }>,
    ) => {
      const { productId, quantity } = action.payload;
      const existing = state.items.find((it) => it.product.id === productId);
      if (!existing) return;
      if (quantity <= 0) {
        state.items = state.items.filter((it) => it.product.id !== productId);
      } else {
        existing.quantity = quantity;
        existing.totalPrice = existing.product.price * quantity;
      }
      recalcTotals(state);
    },
    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
  cartSlice.actions;

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartTotalQuantity = (state: RootState) =>
  state.cart.totalQuantity;
export const selectCartTotalAmount = (state: RootState) =>
  state.cart.totalAmount;

export default cartSlice.reducer;
