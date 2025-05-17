import Image from "next/image";
export function NavbarLogo() {
  return (
    <Image
      src="/nobglogo.png"
      alt="Main ABAK Navbar Logo"
      width={150}
      height={150}
    />
  );
}

export function NavbarLogoSmall() {
  return (
    <Image
      src="/nobglogo.png"
      alt="Main ABAK Navbar Logo"
      width={100}
      height={100}
    />
  );
}

export function Logo() {
  return (
    <Image src="/nobglogo.png" alt="Main ABAK Logo" width={300} height={300} />
  );
}

export function FooterLogo() {
  return (
    <Image
      src="/logo.jpg"
      alt="Main ABAK Navbar Logo"
      width={100}
      height={100}
    />
  );
}
