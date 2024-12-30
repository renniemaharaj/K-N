import { Card, Flex, Heading, Text } from "@radix-ui/themes";
import { useEffect, useRef } from "react";
import { features } from "../configuration";

const FeaturesSection = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  let scrollTimeout: ReturnType<typeof setTimeout>;

  // Auto-scroll effect
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const startAutoScroll = () => {
      return setInterval(() => {
        if (carousel.scrollWidth > carousel.clientWidth) {
          const isEnd =
            carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth;
          carousel.scrollTo({
            left: isEnd ? 0 : carousel.scrollLeft + carousel.clientWidth,
            behavior: "smooth",
          });
        }
      }, 3000);
    };

    // Initialize auto-scroll
    let scrollInterval = startAutoScroll();

    // Handle user scroll to restart the auto-scroll
    const handleScroll = () => {
      clearInterval(scrollInterval);
      clearTimeout(scrollTimeout);

      // Restart auto-scroll after 3 seconds of user inactivity
      scrollTimeout = setTimeout(() => {
        scrollInterval = startAutoScroll();
      }, 3000);
    };

    // Translate vertical scroll to horizontal scroll
    const handleWheel = (e: WheelEvent) => {
      // if (window.innerWidth > 768) return;
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        carousel.scrollBy({
          left: e.deltaY,
          behavior: "smooth",
        });
      }
    };

    carousel.addEventListener("scroll", handleScroll);
    carousel.addEventListener("wheel", handleWheel);

    return () => {
      clearInterval(scrollInterval);
      clearTimeout(scrollTimeout);
      carousel.removeEventListener("scroll", handleScroll);
      carousel.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <section id="about" className="py-16 bg-gray-50 blurred-div">
      <div className="max-w-6xl md:max-w-[800px] mx-auto px-4 blurred-div">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <Heading size="8" className="font-semibold text-gray-800 m-5">
            Why Choose Us
          </Heading>
          <Text size="4" className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Our friendly & experienced cleaners will leave your home sparkling.
          </Text>
        </div>

        {/* Grid or Carousel Layout */}
        <Flex
          ref={carouselRef}
          className="!w-full p-2 overflow-x-auto snap-x snap-mandatory scrollbar-hide flex-nowrap gap-4"
        >
          {features.map((feature, idx) => (
            <Card
              key={idx}
              className="!p-4 snap-center rounded-md border flex flex-col items-center min-w-[280px] max-w-[300px] flex-shrink-0"
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
        </Flex>
      </div>
    </section>
  );
};

export default FeaturesSection;
