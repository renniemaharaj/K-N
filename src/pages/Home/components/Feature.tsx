import { Card, Flex, Heading, Text } from "@radix-ui/themes";
// import { useEffect, useRef } from "react";
import { features } from "../configuration";
import { Carousel } from "./Carousel";

const FeaturesSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 blurred-div">
      <div className="max-w-6xl md:max-w-[800px] mx-auto px-4 blurred-div">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <Heading size="8" className="font-semibold text-gray-800 m-5">
            Why Choose Us
          </Heading>

          <br />
          <ul className="list-disc list-inside !max-w-[700px] !mx-auto">
            <li>
              <Text size="4" className="text-gray-600 !mt-4 !mx-auto ">
                Our friendly & experienced cleaners will leave your home
                sparkling.
              </Text>
            </li>
            <br />
            <li>
              <Text size="4" className="text-gray-600 !mt-4 !mx-auto">
                Our committed staff guarantees that every space is perfectly
                clean to your highest expectations!
              </Text>
            </li>
            <br />
            <li>
              <Text size="4" className="text-gray-600 mt-4 !mx-auto">
                Trust us to help you keep your home and office space
                consistently fresh and clean.
              </Text>
            </li>
          </ul>
        </div>

        {/* Grid or Carousel Layout */}
        <Carousel
          items={features.map((feature, idx) => (
            <Card
              key={idx}
              className="!p-4 !snap-center !rounded-md !border !flex !flex-col !items-center !min-w-[280px] !max-w-[300px] !flex-shrink-0"
            >
              {/* Numbered Icon */}
              <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-blue-500 text-white text-lg font-semibold">
                {idx + 1}
              </div>
              {/* Feature Icon */}
              <Flex className="mb-4 text-blue-600 w-full !justify-center">
                {feature.icon}
              </Flex>
              {/* Feature Text */}
              <Text size="4" className="text-gray-800 font-medium text-center">
                {feature.text}
              </Text>
            </Card>
          ))}
          variant="no-scrollbar"
        />
      </div>
    </section>
  );
};

export default FeaturesSection;
