import React from "react";

import Navbar from "./components/NavBar";
import HeroSection from "./components/Hero";
import ServicesSection from "./components/Services";
import FeaturesSection from "./components/Feature";
import Footer from "./components/Footer";
import { Button, Dialog, Flex, Separator } from "@radix-ui/themes";
import FormA from "../Signup/Form";
import { formValidationSchema } from "./schema";
import { formFields, formStepMetas } from "./fields";
import { XIcon } from "lucide-react";
import Hint from "../../components/Hint";

import "./styles.css";
const Index: React.FC = () => {
  const [quoteOpen, setQuoteOpen] = React.useState(false);
  const QuoteDialog = () => (
    <Flex
      className={`${quoteOpen ? "!block" : "!hidden"} !transition-all w-[100vw] h-[100vh] !fixed top-0 left-0 z-50 blurred-div-light`}
    >
      <Dialog.Root open={quoteOpen} onOpenChange={setQuoteOpen}>
        <Dialog.Content
          maxWidth="450px"
          className="!p-6 !rounded-lg shadow-xl bg-white transition-transform transform-gpu scale-100 animate-fade-in"
        >
          <Dialog.Title className="!text-center !text-2xl font-extrabold text-gray-800 !mb-4">
            K&N Quote Request Form
          </Dialog.Title>
          <Dialog.Description className="!text-gray-600 !text-sm !mb-4">
            Tailor your quote request
          </Dialog.Description>
          <Flex className="!flex-col !p-5 !items-center !justify-center k-n-bg-art relative overflow-hidden">
            <div className="absolute w-[200px] h-[200px] bg-blue-500/20 rounded-full -top-10 -left-10 blur-lg" />
            <div className="absolute w-[300px] h-[300px] bg-pink-500/10 rounded-full -bottom-20 -right-20 blur-xl" />
            <FormA
              schema={formValidationSchema}
              formFields={formFields}
              formStepMetas={formStepMetas}
              customSubmit="Request Quote"
            />
          </Flex>
          {/* <Dialog.Close>
            <Flex className="w-full p-5 !justify-center !items-center">
              <Button
                color="gray"
                className="!mx-auto hover:bg-gray-100 hover:text-black focus:ring-2 focus:ring-gray-300"
              >
                <XIcon className="mr-2" />
                Cancel
              </Button>
            </Flex>
          </Dialog.Close> */}
        </Dialog.Content>
      </Dialog.Root>
    </Flex>
  );

  return (
    <div className="font-sans">
      <QuoteDialog />
      <Navbar />
      <HeroSection quoteOpen setQuoteOpen={setQuoteOpen} />
      <ServicesSection />
      <Separator size={"4"} className="my-8" />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
