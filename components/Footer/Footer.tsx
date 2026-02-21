import FooterBottom from "./FooterBottom";
import FooterTop from "./FooterTop";

const Footer = () => {
  return (
    <section className="px-4  sm:px-6 lg:px-8">
      <footer className="mx-auto  w-full container overflow-hidden rounded-4xl bg-primary">
        <FooterTop />
        <FooterBottom />
      </footer>
      <div className="p-6">
        <p className="text-center">© All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
