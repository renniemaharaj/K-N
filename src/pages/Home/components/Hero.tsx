import { Button, Text } from "@radix-ui/themes";
import { useEffect, useState } from "react";
import { useThemeContext } from "../../../components/context/useThemeContext";
import { MoonIcon, SunIcon } from "lucide-react";
type HeroSectionProps = {
  quoteOpen: boolean;
  setQuoteOpen: (value: boolean) => void;
};
const HeroSection: React.FC<HeroSectionProps> = ({ setQuoteOpen }) => {
  const [hero, setHero] = useState<string>("");
  const animateHero = (newHero: string) => {
    let currentText = "";
    let index = 0;
    const interval = setInterval(() => {
      if (index < newHero.length) {
        currentText += newHero[index];
        setHero(currentText);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20); // Adjust the interval time as needed
  };

  const { theme, specifyTheme } = useThemeContext();

  const heroGradientClassname =
    "bg-gradient-to-r from-yellow-400 to-green-500 bg-clip-text text-transparent animate-gradient-slide";
  const [heroGradient, setHeroGradient] = useState<string>("");
  useEffect(() => {
    animateHero("K&N Cleaning Services");
    setTimeout(() => {
      setHeroGradient(heroGradientClassname);
    }, 200);
  }, []);

  return (
    <section className="bg-gradient-to-r from-primary to-secondary text-center py-20">
      <div className="max-w-5xl mx-auto p-3">
        <Text
          className={`text-5xl font-extrabold transition-all ${heroGradient}`}
        >
          {hero}
        </Text>
        <br />
        <Text className="text-xl mt-4">
          Providing commercial and residential cleaning services.
        </Text>
        <br />
        <br />
        <Text className="text-lg mt-4 italic">
          “Enjoy the comfort of knowing your cleaning needs will be met.”
        </Text>
        <Button
          size="3"
          variant="outline"
          highContrast
          className="!shadow-lg !m-4 blurred-div !animate-pulse"
          onClick={() => setQuoteOpen(true)}
        >
          Request a free quote
        </Button>
        {/* <Separator size="2" orientation={"vertical"} /> */}
        <br />
        <Button className="!sticky !top-0" variant="ghost">
          {theme === "dark" ? (
            <MoonIcon
              className="!w-6 !h-6 !text-white animate-pulse"
              onClick={() => specifyTheme("light")}
            />
          ) : (
            <SunIcon
              className="!w-6 !h-6 !text-yellow-400 animate-pulse"
              onClick={() => specifyTheme("dark")}
            />
          )}
        </Button>
      </div>
    </section>
  );
};
export default HeroSection;
