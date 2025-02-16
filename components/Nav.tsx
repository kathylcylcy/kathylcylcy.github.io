import { nav } from "@/constants/index";
import Link from "next/link";

export default function Nav() {
  return (
    <section className="flex w-full flex-col items-center justify-center p-10 pt-20">
      <Link href="/">
        <h1 className="text-center text-3xl font-bold uppercase">
          {nav.heading}
        </h1>
      </Link>
    </section>
  );
}
