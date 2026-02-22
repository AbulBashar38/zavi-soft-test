## Project — JAVI SOFT Frontend Engineer Test Task

This repository is the frontend test project for the JAVI SOFT Frontend Engineer position. It implements a small e-commerce UI built with Next.js and Redux Toolkit demonstrating product listing, product details, cart management and checkout flow.

- **Tech stack**: Next.js (App router), TypeScript, Redux Toolkit (slices + RTK Query), Sonner (toasts), shadcn-ui components.

**Quick start**

1. Install dependencies:

```
npm install
```

2. Run the dev server:

```
npm run dev
```

3. Build for production:

```
npm run build
npm run start
```

**Key features implemented**

- **Add to cart / Buy now**: add products (with selected color & size) to the cart from the product details view. See [app/product-details/features/ProductInfo.tsx](app/product-details/features/ProductInfo.tsx).
- **Cart state**: managed by a `cart` slice. See [state-management/features/cartSlice.ts](state-management/features/cartSlice.ts).
- **Store setup**: store is configured in [state-management/store.ts](state-management/store.ts).
- **Navbar cart badge**: shows total cart quantity and links to cart page. See [components/Navbar/Navbar.tsx](components/Navbar/Navbar.tsx).
- **Toasts**: Sonner toasts are mounted in [app/layout.tsx](app/layout.tsx) and used throughout the UI.
- **Checkout**: CHECKOUT clears the cart and shows a success toast. See [app/cart-page/features/OrderHistorySummary.tsx](app/cart-page/features/OrderHistorySummary.tsx).

Notes & next steps:

- Cart persistence (localStorage) is not implemented — add persistence if required.
- Undo action on toasts and an order confirmation page can be added for a better UX.

If you want, I can add persistence, an undo action, or build an order confirmation flow next.

**Live preview**

This project is deployed at: https://zavi-soft-test.vercel.app/home
