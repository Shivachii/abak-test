"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { contentData } from "./Content";
import { motion } from "framer-motion";

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
  { name: "Hawza", value: "hawza-seminary" },
];

export function ObjectivesTabs() {
  return (
    <Tabs
      defaultValue="propagation-of-islam"
      className="flex flex-col md:flex-row md:max-w-5xl lg:max-w-7xl p-2 gap-3 overflow-hidden"
    >
      <TabsList className=" max-w-full flex flex-row gap-2 overflow-x-auto md:overflow-visible md:flex-col whitespace-nowrap px-1">
        {Triggers.map((trigger) => (
          <TabsTrigger key={trigger.value} value={trigger.value}>
            {trigger.name}
          </TabsTrigger>
        ))}
      </TabsList>
      {Object.entries(contentData).map(([value, data]) => (
        <TabsContent key={value} value={value}>
          <motion.div
            animate={{
              x: [0, 100, 0],
              transition: { ease: ["easeOut"] },
              opacity: [0, 0, 1],
            }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-primary">
                  {data.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground text-base">
                  {data.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2 flex-shrink-0">
                {data.content}
              </CardContent>
            </Card>
          </motion.div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
