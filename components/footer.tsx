import { Link } from "@nextui-org/link";

export default function FooterComponent() {
  return (
    <div className="w-full z-10 px-6 md:px-16 pb-10">
      <div className="w-full border-t-1 border-white" />
      <div className="rounded-[120px] px-0 md:px-5 py-3 justify-center items-center flex z-[100] pt-8">
        <div className="flex gap-8">
          <p className="text-xs md:text-md text-center md:text-left">
            ©2024 Sloop. All rights reserved. | Designed by{" "}
            <Link
              href="https://jnjoroge.dev/"
              isExternal
              className="text-[#64B7F3] font-semibold text-xs md:text-md"
            >
              James Njoroge
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
