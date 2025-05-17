import ContactForm from "@/components/Forms/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactPage() {
  const t = useTranslations("contact");

  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col gap-16">
        {/* Header */}
        <div className="text-center px-4">
          <h2 className="text-secondary text-sm md:text-base font-bold tracking-widest uppercase">
            {t("sectionTitle")}
          </h2>
          <p className="text-3xl md:text-4xl font-bold text-primary mt-2">
            {t("headline")}
          </p>
          <p className="mt-2 text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            {t("intro")}
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4">
          {/* Contact Form */}
          <div className="w-full">
            <ContactForm />
          </div>

          {/* Info Section */}
          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {t("info.title")}
              </h3>
              <p className="mb-2 text-gray-700 md:leading-1.5">
                {t("info.note")}
              </p>
              <div className="space-y-4 text-sm text-gray-800">
                <div className="flex flex-col gap-3 shadow-sm hover:shadow-md p-4 rounded-sm">
                  <strong>{t("info.addressTitle")}</strong>
                  <span className="flex items-center gap-3">
                    <MapPin
                      className="text-white p-2 bg-primary rounded-full mt-0.5"
                      width={35}
                      height={35}
                    />
                    {t("info.address")}
                  </span>
                </div>
                <div className="flex flex-col gap-3 shadow-sm hover:shadow-md p-4 rounded-sm">
                  <strong>{t("info.emailTitle")}</strong>
                  <span className="flex items-center gap-3">
                    <Mail
                      className="text-white p-2 bg-primary rounded-full mt-0.5"
                      width={35}
                      height={35}
                    />
                    <div className="flex flex-col">
                      {t.raw("info.emails").map((email: string) => (
                        <span key={email}>{email}</span>
                      ))}
                    </div>
                  </span>
                </div>
                <div className="flex flex-col gap-3 shadow-sm hover:shadow-md p-4 rounded-sm">
                  <strong>{t("info.phoneTitle")}</strong>
                  <span className="flex items-center gap-3">
                    <Phone
                      className="text-white p-2  bg-primary rounded-full "
                      width={35}
                      height={35}
                    />
                    <div className="flex flex-col">
                      {t.raw("info.phones").map((phone: string) => (
                        <span key={phone}>{phone}</span>
                      ))}
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* Google Maps */}
            <div className="w-full overflow-hidden rounded-lg shadow-md aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.845407835713!2d36.802865914154846!3d-1.288263535623419!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10d2f55ea4cb%3A0xa1e14972e65e3f1e!2sNairobi%2C%20Kenya!5e0!3m2!1sen!2ske!4v1681212121212!5m2!1sen!2ske"
                className="w-full h-full"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
