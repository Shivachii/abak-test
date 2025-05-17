import Link from "next/link";

interface UnderlineProps {
  linkText: string;
  href: string;
  ariaLabel?: string;
}

export default function UnderlineLink({
  linkText,
  ariaLabel,
  href,
}: UnderlineProps) {
  return (
    <Link
      href={`/${href}`}
      aria-label={ariaLabel || linkText}
      className="relative z-10 font-semibold hover:text-primary transition-all duration-300  w-max"
    >
      <span className="relative before:content-[''] before:absolute before:w-0 before:h-[2px] before:bg-primary before:transition-all before:duration-300 before:top-[100%] before:left-0 hover:before:w-full">
        {linkText} &rarr;
      </span>
    </Link>
  );
}
