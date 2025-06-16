import Image from "next/image";
import { CheckCircle, GraduationCap, BookOpenCheck } from "lucide-react";
import {
  contentItems,
  hawzaItems,
  mubaligheenTraining,
  services,
  shiaCommunities,
  Strategies,
  SupportAreas,
} from "../../../lib/objectivesContent";

export const contentData: {
  [key: string]: { title: string; description: string; content?: JSX.Element };
} = {
  "community-services": {
    title: "Community Services",
    description:
      "Rooted in the principle of social justice, ABAK provides comprehensive community services to uplift lives and promote well-being. From health and education to economic support and counseling, these efforts reflect the compassionate ethos of the Ahlul Bayt.",
    content: (
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="flex-1 space-y-5">
          {services.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <item.icon
                className="text-secondary mt-1 flex-shrink-0"
                size={20}
              />
              <p className="text-gray-800">{item.label}</p>
            </div>
          ))}
        </div>
        <div className=" hidden md:flex md:flex-shrink-0 rounded-md shadow-md overflow-hidden">
          <Image
            src="/comm.jpg"
            alt="ABAK Community Services"
            width={400}
            height={300}
            className="w-[400px] h-[300px] object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    ),
  },
  "propagation-of-islam": {
    title:
      "Propagation of Islam (Tabligh) according to the Madh-hab Ahlul Bayt (a.s)",
    description:
      "ABAK is dedicated to spreading the teachings of Islam as understood through the lens of the Ahlul Bayt. By promoting Tabligh rooted in compassion, knowledge, and authenticity, ABAK seeks to guide individuals toward spiritual awareness while preserving the true essence of Islamic values in the Kenyan context.",
    content: (
      <div className="flex flex-col md:flex-row gap-10 items-start">
        <div className="">
          {" "}
          <h4 className="text-secondary text-sm md:text-base font-semibold tracking-widest uppercase mb-2">
            {" "}
            Strategies for implementation
          </h4>
          <ul className="space-y-3">
            {Strategies.map((strategy, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-800">
                <CheckCircle
                  className="mt-1 text-primary flex-shrink-0"
                  size={20}
                />
                <span>{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className=" hidden md:flex md:flex-shrink-0 rounded-md shadow-md overflow-hidden">
          <Image
            src="/ramadhan1.jpg"
            alt="ABAK Community Services"
            width={400}
            height={300}
            className="w-[400px] h-[300px] object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    ),
  },
  "content-creation": {
    title: "Content Creation",
    description:
      "ABAK is investing in the creation of relevant, authentic, and engaging Islamic content to respond to modern challenges and media trends. This empowers youth and communities to access the teachings of the Ahlul Bayt in formats that resonate with today’s digital audiences.",
    content: (
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* List */}
        <div className="flex-1 space-y-5">
          {contentItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <item.icon
                className="text-secondary mt-1 flex-shrink-0 "
                size={20}
              />
              <p className="text-gray-800">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Optional Image */}
        <div className="hidden md:flex md:flex-shrink-0 rounded-md shadow-md overflow-hidden">
          <Image
            src="/content.png"
            alt="Content creation illustration"
            width={500}
            height={300}
            className="w-[450px] h-[300px] object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    ),
  },
  "hawza-seminary": {
    title: "Hawza Seminary",
    description:
      "ABAK champions the development of a local Hawza Seminary to cultivate scholars grounded in the teachings of the Ahlul Bayt. This initiative ensures the sustainability of religious leadership in Kenya and strengthens the intellectual foundation of the Shia community.",
    content: (
      <div className="flex flex-col md:flex-row gap-10 items-start">
        {/* List of Hawza Features */}
        <div className="flex-1 space-y-5">
          {hawzaItems.map((item, index) => (
            <div key={index} className="flex items-start gap-3">
              <item.icon
                className="text-secondary mt-1 flex-shrink-0"
                size={20}
              />
              <p className="text-gray-800">{item.label}</p>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="hidden md:flex md:flex-shrink-0 rounded-md shadow-md overflow-hidden">
          <Image
            src="/hawza/hawzalogo.jpeg"
            alt="ABAK Hawza Seminary"
            width={400}
            height={300}
            className="w-[400px] h-[300px] object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    ),
  },
  "learning-institutions": {
    title: "Learning Institutions",
    description:
      "ABAK believes that establishing and supporting Islamic learning institutions is vital for the preservation of faith and values. These centers serve as beacons of knowledge where future leaders and informed believers can emerge to serve both religion and society.",
    content: (
      <div className="flex flex-col md:flex-row items-start gap-8">
        {/* Left: Text Highlights */}
        <div className="flex-1 space-y-6">
          <div className="flex items-start gap-3 ">
            <GraduationCap
              className="text-secondary mt-1 flex-shrink-0"
              size={22}
            />
            <p className="text-gray-800">
              Establish Islamic-integrated schools from nursery to secondary
              level in key regions.
            </p>
          </div>
          <div className="flex items-start gap-3 ">
            <BookOpenCheck
              className="text-secondary mt-1 flex-shrink-0"
              size={22}
            />
            <p className="text-gray-800">
              Combine formal academic excellence with strong ethical and
              spiritual development.
            </p>
          </div>
          <div className="flex items-start gap-3 ">
            <GraduationCap
              className="text-secondary mt-1 flex-shrink-0"
              size={22}
            />
            <p className="text-gray-800">
              Raise confident, informed students who can represent Islamic
              values in society.
            </p>
          </div>
        </div>

        {/* Right: Image */}
        <div className="hidden md:flex md:flex-shrink-0 rounded-md shadow-md overflow-hidden">
          <Image
            src="/hawza/img28.jpg" // Replace with your relevant image
            alt="Islamic Learning Institution"
            width={400}
            height={300}
            className="w-[400px] h-[300px] object-cover rounded-md shadow-md"
          />
        </div>
      </div>
    ),
  },
  "training-of-mubaligheen": {
    title: "Training of Mubaligheen",
    description:
      "ABAK recognizes that well-trained Mubaligheen are essential for nurturing informed and spiritually grounded communities. Through structured programs, the organization equips individuals with the necessary knowledge and skills to educate, inspire, and lead with integrity.",
    content: (
      <div className="flex flex-col  md:flex-row-reverse gap-8">
        {/* Image */}
        <div className="hidden md:flex md:flex-shrink-0 rounded-md shadow-md overflow-hidden">
          <Image
            src="/train1.jpg"
            alt="Community empowerment"
            width={400}
            height={300}
            className="w-[400px] h-[300px] object-cover rounded-md shadow-md"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <h4 className="text-secondary text-sm md:text-base font-semibold tracking-widest uppercase">
            Strategies for Implementation
          </h4>

          <ul className="space-y-3">
            {mubaligheenTraining.map((strategy, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-800">
                <CheckCircle
                  className="mt-1 text-primary flex-shrink-0"
                  size={20}
                />
                <span>{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  "organization-of-shia-communities": {
    title: "Organization of Shia Communities",
    description:
      "To strengthen the foundation of faith and unity among followers, ABAK works to organize Shia communities across Kenya. This structure enhances collaboration, promotes shared responsibility, and ensures the effective implementation of religious, social, and developmental programs.",
    content: (
      <div className="flex flex-col  md:flex-row-reverse items-start md:items-center gap-8">
        {/* Image */}
        <div className="hidden md:flex md:flex-shrink-0 rounded-md shadow-md overflow-hidden">
          <Image
            src="/hawza/g1.jpg"
            alt="Community empowerment"
            width={400}
            height={300}
            className="w-[400px] h-[300px] object-cover rounded-md shadow-md"
          />
        </div>
        {/* Text Content */}
        <div className="flex-1 space-y-4">
          <h4 className="text-secondary text-sm md:text-base font-semibold tracking-widest uppercase">
            Strategies for Implementation
          </h4>

          <ul className="space-y-3">
            {shiaCommunities.map((strategy, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-800">
                <CheckCircle
                  className="mt-1 text-primary flex-shrink-0"
                  size={20}
                />
                <span>{strategy}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    ),
  },
  "support-for-mubaligheen": {
    title: " Support for Mubaligheen",
    description:
      "Understanding the challenges Mubaligheen face, ABAK is committed to supporting them holistically—providing financial aid, resources, and mentorship. This enables them to focus on their mission of religious guidance and community empowerment without undue hardship. We aim to achieve this through :",
    content: (
      <div className="flex flex-col md:flex-row-reverse gap-10">
        {/* Image */}
        <div className="hidden md:block md:flex-shrink-0 rounded-md  overflow-hidden">
          <Image
            src="/mubsupport.jpeg"
            alt="Mubaligheen Support"
            width={400}
            height={300}
            className="w-[400px] h-[300px] object-cover rounded-md shadow-md"
          />
        </div>

        {/* Support Areas */}
        <div className="flex-1 space-y-6">
          {SupportAreas.map((section, index) => (
            <div key={index}>
              <h5 className="text-lg font-semibold text-secondary mb-2">
                {section.title}
              </h5>
              <ul className="space-y-2">
                {section.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-700">
                    <CheckCircle
                      className="mt-1 text-primary flex-shrink-0"
                      size={18}
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    ),
  },
};
