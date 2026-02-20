"use client";
import { Provider } from "react-redux";

import { AppStore, makeStore } from "@/state-management/store";

let store: AppStore | undefined;

function getStore(): AppStore {
  if (!store) {
    store = makeStore();
  }
  return store;
}

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={getStore()}>{children}</Provider>;
}
