import { Button, Dialog, Flex, Heading, Link } from "@radix-ui/themes";
import { useState } from "react";

const companyName = "K&N";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuToggle = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className="p-4 shadow fixed w-full z-10 blurred-div !rounded-none">
      {/* Desktop & Mobile Navigation Container */}
      <Flex align="center" justify="between" className="max-w-7xl mx-auto">
        {/* Logo */}
        <Heading size="5" className="text-xl font-bold">
          {companyName}
        </Heading>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6 z-50">
          {["Services", "About", "Contact"].map((label) => (
            <Link
              key={label}
              href={`#${label.toLowerCase().replace(/\s/g, "")}`}
            >
              {label}
            </Link>
          ))}
        </div>

        <Dialog.Root>
          <Dialog.Trigger>
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              className="md:!hidden  relative z-20"
              onClick={handleMenuToggle}
            >
              {isMobileMenuOpen ? "Close" : "Menu"}
            </Button>
          </Dialog.Trigger>

          <Dialog.Content maxWidth="450px">
            <Dialog.Title>Mobile Navigator</Dialog.Title>
            <Dialog.Description size="2" mb="4">
              Where would you like to go?
            </Dialog.Description>

            <Flex direction="column" gap="3">
              {/* <nav> */}
              {["Services", "About", "Contact"].map((label) => (
                <Flex>
                  <Link
                    key={label}
                    href={`#${label.toLowerCase().replace(/\s/g, "")}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </Flex>
              ))}
              {/* </nav> */}
            </Flex>
            <Flex gap="3" mt="4" justify="end">
              <Dialog.Close>
                <Button>Close</Button>
              </Dialog.Close>
            </Flex>
          </Dialog.Content>
        </Dialog.Root>
      </Flex>
    </nav>
  );
};

export default Navbar;
