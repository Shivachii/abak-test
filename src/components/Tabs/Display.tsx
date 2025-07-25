"use client";

import { useState } from "react";

import { motion } from "framer-motion";
import { contentData } from "./Content";

export default function ObjectivesDisplay() {
  const Triggers = [
    {
      name: "Propagation of Islam",
      value: "propagation-of-islam",
    },
    {
      name: "Organization of Shia Communities",
      value: "organization-of-shia-communities",
    },
    {
      name: "Training of Mubaligheen",
      value: "training-of-mubaligheen",
    },
    {
      name: "Support for Mubaligheen",
      value: "support-for-mubaligheen",
    },
    {
      name: "Content Creation",
      value: "content-creation",
    },
    {
      name: "Learning Institutions",
      value: "learning-institutions",
    },
    {
      name: "Community Services",
      value: "community-services",
    },
    { name: "Hawza Seminary", value: "hawza-seminary" },
  ];

  const [activeTab, setActiveTab] = useState(Triggers[0]);
  const activeContent = contentData[activeTab.value];

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="grid grid-cols-2 gap-2 mb-6 ">
        {Triggers.map((trigger) => (
          <button
            key={trigger.value}
            onClick={() => setActiveTab(trigger)}
            className={` px-3 py-2 text-sm font-medium capitalize rounded-md transition-all ${
              activeTab.value === trigger.value
                ? "bg-primary text-white shadow"
                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
            }`}
          >
            {trigger.name}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <motion.div
        key={activeTab.value}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="p-4 md:p-6 rounded-lg border bg-white shadow-sm"
      >
        <h2 className="text-2xl font-semibold text-primary mb-3">
          {activeContent.title}
        </h2>
        <p className="text-gray-700 mb-6">{activeContent.description}</p>
        <div>{activeContent.content}</div>
      </motion.div>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import { ContentRenderer } from "../Objectives/contentRenderer";

// export default function ObjectivesDisplay({ objectives = [] }) {
//   const [activeTab, setActiveTab] = useState(objectives[0]);

//   if (!objectives.length) return null;

//   return (
//     <div className="w-full">
//       {/* Tabs */}
//       <div className="grid grid-cols-2 gap-2 mb-6">
//         {objectives.map((objective) => (
//           <button
//             key={objective.slug.current}
//             onClick={() => setActiveTab(objective)}
//             className={`px-3 py-2 text-sm font-medium capitalize rounded-md transition-all ${
//               activeTab.slug.current === objective.slug.current
//                 ? "bg-primary text-white shadow"
//                 : "bg-gray-100 hover:bg-gray-200 text-gray-700"
//             }`}
//           >
//             {objective.tabName}
//           </button>
//         ))}
//       </div>

//       {/* Content Section */}
//       <motion.div
//         key={activeTab.slug.current}
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.4 }}
//         className="p-4 md:p-6 rounded-lg border bg-white shadow-sm"
//       >
//         <h2 className="text-2xl font-semibold text-primary mb-3">
//           {activeTab.title}
//         </h2>
//         <p className="text-gray-700 mb-6">{activeTab.description}</p>
//         <ContentRenderer objective={activeTab} />
//       </motion.div>
//     </div>
//   );
// }
