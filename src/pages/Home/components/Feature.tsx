import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { features } from "../configuration";

const FeaturesSection = () => (
  <section id="about" className="py-16 bg-gray-50">
    <div className="max-w-6xl mx-auto px-4">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <Heading size="8" className="font-semibold text-gray-800 m-5">
          Why Choose Us
        </Heading>
        <Text size="4" className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Our friendly & experienced cleaners will leave your home sparkling.
        </Text>
      </div>

      {/* Grid Layout */}
      <Flex
        className="!w-full !flex-row md:flex-row !justify-center !items-center !gap-6 !flex-wrap"
        gap="6"
      >
        <Flex className="my-[100px]" />
        {features.map((feature, idx) => (
          <Flex className="!flex-col !items-center !justify-center " key={idx}>
            {/* Numbered Icon */}
            <div className="flex items-center justify-center w-8 h-8 mb-4 rounded-full bg-blue-500 text-white text-lg font-semibold">
              {idx + 1}
            </div>
            <Card
              key={idx}
              className="p-6 rounded-md border flex flex-col items-center w-[300px]"
            >
              {/* Feature Icon */}
              <Flex className="mb-4 text-blue-600 w-full !justify-center">
                {feature.icon}
              </Flex>

              {/* Feature Text */}
              <Flex className="mb-4 w-full !justify-center !items-center">
                <Text size="4" className="text-gray-800 font-medium">
                  {feature.text}
                </Text>
              </Flex>
            </Card>
          </Flex>
        ))}
      </Flex>
    </div>
  </section>
);

export default FeaturesSection;
