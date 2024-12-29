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
        <Dialog.Content maxWidth="450px" className="!p-1">
          <Dialog.Title className="!text-center !text-2xl !font-bold !mb-4">
            K&N Quote Request Form
          </Dialog.Title>
          <Dialog.Description size="2" mb="4">
            <Hint>Tailor your quote request</Hint>
          </Dialog.Description>
          <Flex className="!flex-col !items-center !justify-center k-n-bg-art">
            <FormA
              schema={formValidationSchema}
              formFields={formFields}
              formStepMetas={formStepMetas}
              customSubmit="Request Quote"
            />
          </Flex>
          {/* <Flex
            gap="3"
            mt="4"
            className="max-w-10 !justify-center !items-center"
          > */}
          <Dialog.Close className="!absolute !top-0 !right-0 !w-10 !justify-center !items-center">
            <Button color="gray" className="!w-10">
              <XIcon />
            </Button>
          </Dialog.Close>
          {/* </Flex> */}
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
