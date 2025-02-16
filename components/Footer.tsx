import Link from "next/link";
import { footer } from "@/constants/index";

export default function Footer() {
  return (
    <footer className="flex h-[30vh] w-full flex-col items-center justify-center">
      {footer.contacts.map(({ label, href, icon }) => {
        return (
          <Link
            key={label}
            className="flex items-center justify-center gap-2"
            href={href}
            target="_blank"
          >
            {icon}
            <h1 className="text-gray-500">{label}</h1>
          </Link>
        );
      })}
    </footer>
  );
}
