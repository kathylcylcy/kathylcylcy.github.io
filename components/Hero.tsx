import { hero } from "@/constants/index";

export default function Hero() {
  return (
    <section className="flex w-full flex-col items-center justify-center p-10">
      <h1 className="text-xl">{hero.heading}</h1>
    </section>
  );
}
