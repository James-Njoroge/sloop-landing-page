import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-0 md:pt-16 pb-44 md:pb-44"
    >
      <div className="px-6 md:px-16 max-w-5xl gap-y-6 flex flex-col">
        <h1 className="font-clash-display text-light-green text-4xl md:text-7xl">
          Sailing <br className="block md:hidden" />{" "}
          <span style={{ color: '#64b7f3' }}>small</span>{" "}
          <br />
          businesses <br className="hidden md:block" />
          <br className="block md:hidden" />{" "}
          <span style={{ color: '#64b7f3' }}>
            to sale
            <br className="block md:hidden" /> 
          </span>
        </h1>
        <p className="pr-28 md:pr-0">
          A small business M&A Fin-Tech platform
        </p>
        <Button
          radius="full"
          size="lg"
          className="w-44 font-bold"
          style={{ backgroundColor: '#FA7268'}}
          variant="ghost"
          as={Link}
          href="#contact"
        >
          Contact us
        </Button>
      </div>
    </section>
  );
}
