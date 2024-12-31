import React, { useEffect, useRef, useState } from "react";
// import { ChevronLeftIcon, ChevronRightIcon } from "lucid"
import classNames from "classnames"; // Assuming cn utility is used
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

type CarouselVariant = "default" | "no-scrollbar";

type CarouselProps = {
  items: React.ReactNode[]; // Array of items to display in the carousel
  variant?: CarouselVariant;
  className?: string;
};

export const Carousel: React.FC<CarouselProps> = ({
  items,
  variant = "default",
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  let scrollTimeout: ReturnType<typeof setTimeout>;
  const [isStart, setIsStart] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const scrollHandler = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setIsStart(scrollLeft === 0);
      setIsEnd(scrollLeft + clientWidth >= scrollWidth);
    }
  };

  const scrollTo = (direction: "left" | "right") => {
    if (containerRef.current) {
      const { clientWidth } = containerRef.current;
      const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
      containerRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  // Auto-scroll effect
  useEffect(() => {
    const carousel = containerRef.current;
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

    if (containerRef.current && variant === "no-scrollbar") {
      containerRef.current.style.scrollbarWidth = "none";
    }

    return () => {
      clearInterval(scrollInterval);
      clearTimeout(scrollTimeout);
      carousel.removeEventListener("scroll", handleScroll);
      carousel.removeEventListener("wheel", handleWheel);
    };
  }, []);
  return (
    <div className={classNames("relative w-full", className)}>
      {variant === "no-scrollbar" && !isStart && (
        <button
          className="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
          onClick={() => scrollTo("left")}
        >
          <ChevronLeftIcon className="animate-pulse" />
        </button>
      )}

      <div
        ref={containerRef}
        onScroll={scrollHandler}
        className={classNames("flex overflow-x-auto scroll-smooth", {
          "scrollbar-none": variant === "no-scrollbar",
        })}
      >
        {items.map((item, index) => (
          <div key={index} className="flex-shrink-0 m-2">
            {item}
          </div>
        ))}
      </div>

      {variant === "no-scrollbar" && !isEnd && (
        <button
          className="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 p-2 bg-white rounded-full shadow-md"
          onClick={() => scrollTo("right")}
        >
          <ChevronRightIcon className="animate-pulse" />
        </button>
      )}
    </div>
  );
};
