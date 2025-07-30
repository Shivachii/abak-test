import Banner from "@/components/Banner/Banner";

import { Mail, MapPin, Phone } from "lucide-react";
import { sanityFetch } from "../../../../sanity/lib/live";
import { CONTACT_PAGE_QUERY } from "../../../../sanity/lib/queries/pageQueries/pageQueries";
import { formBySlugQuery } from "../../../../sanity/lib/queries";
import { ContactData } from "../../../lib/types/sanityPageTypes/types";
import { generatePageMetadata } from "@/hooks/seo/metadata";
import DynamicForm from "@/components/Forms/DynamicForms/FormBuilder";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}) {
  return await generatePageMetadata({
    lang: params.locale,
    type: "contactPage",
  });
}

export default async function ContactPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { data }: { data: ContactData } = await sanityFetch({
    query: CONTACT_PAGE_QUERY,
    params: { lang: locale },
  });

  const { data: dynamicForm } = await sanityFetch({
    query: formBySlugQuery,
    params: { slug: "contact-form" },
  });

  return (
    <section className="w-full bg-white">
      <Banner backgroundImage="/banners/contact.jpg" />
      <div className="max-w-7xl px-4 py-16 mx-auto flex flex-col gap-16">
        <div className="text-center px-4">
          <p className="text-3xl md:text-4xl font-bold text-primary mt-2">
            {data.headline}
          </p>
          <p className="mt-2 text-gray-600 text-base max-w-2xl mx-auto leading-relaxed">
            {data.intro}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start px-4">
          <div className="w-full">
            <DynamicForm form={dynamicForm} />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <h3 className="text-lg font-semibold text-secondary mb-2">
                {data.infoTitle}
              </h3>
              <p className="mb-2 text-gray-700 md:leading-1.5">
                {data.infoNote}
              </p>
              <div className="space-y-4 text-sm text-gray-800">
                <div className="flex flex-col gap-3 shadow-sm hover:shadow-md p-4 rounded-sm">
                  <strong>{data.addressTitle}</strong>
                  <span className="flex items-center gap-3">
                    <MapPin
                      className="text-white p-2 bg-primary rounded-full mt-0.5"
                      width={35}
                      height={35}
                    />
                    {data.address}
                  </span>
                </div>
                <div className="flex flex-col gap-3 shadow-sm hover:shadow-md p-4 rounded-sm">
                  <strong>{data.emailTitle}</strong>
                  <span className="flex items-center gap-3">
                    <Mail
                      className="text-white p-2 bg-primary rounded-full mt-0.5"
                      width={35}
                      height={35}
                    />
                    <div className="flex flex-col">
                      {data.emails.map((email) => (
                        <span key={email}>{email}</span>
                      ))}
                    </div>
                  </span>
                </div>
                <div className="flex flex-col gap-3 shadow-sm hover:shadow-md p-4 rounded-sm">
                  <strong>{data.phoneTitle}</strong>
                  <span className="flex items-center gap-3">
                    <Phone
                      className="text-white p-2 bg-primary rounded-full"
                      width={35}
                      height={35}
                    />
                    <div className="flex flex-col">
                      {data.phones.map((phone) => (
                        <span key={phone}>{phone}</span>
                      ))}
                    </div>
                  </span>
                </div>
              </div>
            </div>

            {/* Google Map */}
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
