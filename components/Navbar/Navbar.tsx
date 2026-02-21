"use client";

import DesktopNavItemsContainer from "./DesktopNavItemsContainer";
import MobileNavItemsContainer from "./MobileNavItemsContainer";

const Navbar = () => {
  return (
    <section className="w-full px-4 py-8 sm:px-6 lg:px-8">
      <nav className="relative mx-auto flex w-full container items-center justify-between rounded-2xl bg-card px-6 py-5 sm:px-8">
        <DesktopNavItemsContainer />

        <MobileNavItemsContainer />
      </nav>
    </section>
  );
};

export default Navbar;
