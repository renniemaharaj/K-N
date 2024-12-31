import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { services } from "../configuration";

const ServicesSection: React.FC = () => (
  <section id="services" className="py-16 bg-gray-50">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <Heading size="8" className="font-bold text-gray-900 m-5">
          Services
        </Heading>
        <Flex className="flex-col items-center gap-3">
          {/* <Text size="4" className="text-gray-600 mt-2 mx-auto max-w-[600px]">
            Discover a whole new level of cleanliness and service excellence as
            the best cleaning services.
          </Text> */}
          <ul className="list-disc list-inside max-w-[700px]">
            <li>
              <Text
                size="4"
                className="text-gray-600 mt-2 mx-auto max-w-[600px]"
              >
                Providing commercial and residential cleaning services in the
                Hamilton, Marion and Hendricks counties of Indiana
              </Text>
            </li>
          </ul>

          <Text
            size="4"
            className="text-gray-600 mt-2 mx-auto max-w-[600px]"
          ></Text>
        </Flex>
      </div>
      <Flex className="my-[50px]" />
      <Flex className="!gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 !flex-wrap !justify-center">
        {services.map((service, idx) => (
          <Card
            key={idx}
            variant="ghost"
            className="!flex !flex-row shadow-md hover:shadow-sm transition-shadow p-6 rounded-md border max-w-[400px]"
          >
            <Flex className="flex flex-[1] justify-center items-center m-4 text-blue-500">
              {service.icon}
            </Flex>
            <Flex className="flex-col flex-[3] justify-start">
              <Heading
                size="5"
                className="font-semibold text-gray-900 mb-2 text-center"
              >
                {service.title}
              </Heading>

              <Text size="3" className="text-gray-600">
                {service.description}
              </Text>
              {/* <Separator className="my-4" /> */}
              <Text
                size="3"
                className="text-blue-500 font-semibold hover:underline cursor-pointer"
              >
                Learn More
              </Text>
            </Flex>
          </Card>
        ))}
      </Flex>
    </div>
  </section>
);

export default ServicesSection;
