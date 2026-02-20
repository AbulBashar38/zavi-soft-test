import Link from "next/link";

type FooterLinksColumnProps = {
  title: string;
  links: FooterLinkItem[];
};

const FooterLinksColumn = ({ title, links }: FooterLinksColumnProps) => {
  return (
    <div className="space-y-3">
      <h5 className="text-xl font-semibold text-amber-400">{title}</h5>
      <ul className="space-y-1.5">
        {links.map((item) => (
          <li key={item.id}>
            <Link
              href={item.url}
              className="text-accent transition-colors hover:text-white"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default FooterLinksColumn;
