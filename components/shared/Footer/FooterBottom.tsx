import Image from "next/image";
import Link from "next/link";
import { categories, company, socials } from "./footer-data";
import FooterLinksColumn from "./FooterLinksColumn";

const FooterBottom = () => {
  return (
    <div className="relative rounded-4xl bg-secondary px-6 pb-40 pt-10 text-white sm:px-12 sm:pb-52 sm:pt-12">
      <div className="mb-10 grid gap-8 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div className="max-w-sm space-y-3">
          <h5 className="text-xl font-semibold text-amber-400">About us</h5>
          <p className="text-accent leading-relaxed">
            We are the biggest hyperstore in the universe. We got you all cover
            with our exclusive collections and latest drops.
          </p>
        </div>

        <FooterLinksColumn title="Categories" links={categories} />
        <FooterLinksColumn title="Company" links={company} />

        <div className="space-y-3">
          <h5 className="text-xl font-semibold text-amber-400">Follow us</h5>
          <ul className="flex items-center gap-4">
            {socials.map((social) => (
              <li key={social.id}>
                <Link href={social.url} aria-label={social.name}>
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="h-5 w-5"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Image
        src="/images/logo-white-half.svg"
        alt="Kicks"
        width={1550}
        height={300}
        className="pointer-events-none absolute bottom-0 left-0 h-auto w-full px-4"
      />
    </div>
  );
};

export default FooterBottom;
