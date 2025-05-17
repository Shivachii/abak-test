import Link from "next/link";
import Image from "next/image";
import { Btn } from "@/components/Buttons/Btn";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-background text-foreground">
      {/* Illustration */}
      <div className="w-full max-w-md mb-6">
        <Image
          src="/404.svg"
          alt="Not Found Illustration"
          width={500}
          height={500}
          className="w-full h-auto object-contain"
          priority
        />
      </div>

      {/* Message */}
      <div className="text-center space-y-4">
        {/* <h1 className="text-5xl font-extrabold text-primary">404</h1> */}
        <h2 className="text-2xl font-semibold">Page Not Found</h2>
        <p className="text-muted-foreground max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link href="/" className="flex justify-center">
          <Btn
            btnLabel="Click To Go Back Home"
            btnType="secondary"
            className="mt-4 px-6 py-3 text-base"
          />
        </Link>
      </div>
    </section>
  );
}
