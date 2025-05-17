import ScrollToTop from "@/components/Buttons/ScrollToTop";
import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import { Toaster } from "sonner";
import {
  CheckCircle2,
  Info,
  AlertTriangle,
  XCircle,
  Loader2,
} from "lucide-react";
import { SanityLive } from "../../../../sanity/lib/live";
import { notFound } from "next/navigation";
import { hasLocale } from "next-intl";
import { routing } from "../../i18n/routing";

export default async function FrontendLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <section>
      {" "}
      <Navbar />
      {children}
      <Toaster
        position="top-right"
        richColors
        icons={{
          success: <CheckCircle2 className="text-green-600" />,
          info: <Info className="text-blue-600" />,
          warning: <AlertTriangle className="text-yellow-600" />,
          error: <XCircle className="text-red-600" />,
          loading: <Loader2 className="animate-spin text-gray-500" />,
        }}
      />
      <ScrollToTop />
      <SanityLive />
      <Footer />
    </section>
  );
}
