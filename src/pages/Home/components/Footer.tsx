import { Heading, Text, Flex, Link, TextField, Button } from "@radix-ui/themes";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const companyName = "K&N Cleaning Services";
const companyMission = "Provide commercial and residential cleaning services.";
const companyAddress = "Indianapolis, Indiana";
const companyEmail = "companyEmail@gamil.com";
const companyPhone = "(***) ***-****";

const Footer: React.FC = () => (
  <footer id="contact" className="bg-black text-white py-16">
    {/* First Column: Information Section */}
    <Flex className="w-full flex-col items-center p-10">
      <Heading size="4" className="text-lg font-bold">
        {companyName}
      </Heading>
      <Text className="mt-2 text-sm">{companyMission}</Text>
      <Text className="mt-2 text-xs">
        {companyAddress} <br />
        {/* <Link href="#" className="text-blue-400 underline">
          Map
        </Link> */}
      </Text>
    </Flex>
    <Flex className="max-w-7xl !flex-wrap mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 w-full !items-center !justify-center p-1">
      {/* Second Column: Support Section */}
      <div className="hidden md:block">
        <Heading size="4" className="text-md font-bold mb-4">
          Support
        </Heading>
        <ul className="space-y-2">
          <li>
            <Link href="#" className="text-sm text-gray-300 hover:text-white">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm text-gray-300 hover:text-white">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link href="#" className="text-sm text-gray-300 hover:text-white">
              Terms of Service
            </Link>
          </li>
          {/* <li>
            <Button className="bg-primary text-sm mt-4">Donate Now</Button>
          </li> */}
        </ul>
      </div>

      {/* Third Column: Stay Connected */}
      <div>
        <Heading size="4" className="text-md font-bold mb-4">
          Stay Connected
        </Heading>
        <Text className="text-sm mb-4">
          Subscribe to our mailing list to get news and updates.
        </Text>
        <Flex className="gap-2">
          <TextField.Root
            disabled
            size="2"
            placeholder="Enter your email"
            className="text-black"
          />
          <Button size="2" variant="solid">
            Sign Up
          </Button>
        </Flex>
        <Flex gap="4" className="mt-4">
          <Link href="#">
            <Facebook className="h-5 w-5 text-gray-300 hover:text-white" />
          </Link>
          <Link href="#">
            <Twitter className="h-5 w-5 text-gray-300 hover:text-white" />
          </Link>
          <Link href="#">
            <Instagram className="h-5 w-5 text-gray-300 hover:text-white" />
          </Link>
          <Link href="#">
            <Linkedin className="h-5 w-5 text-gray-300 hover:text-white" />
          </Link>
          <Link href="#">
            <Youtube className="h-5 w-5 text-gray-300 hover:text-white" />
          </Link>
        </Flex>
      </div>

      {/* Fourth Column: Contact Information */}
      <div>
        <Heading size="4" className="text-md font-bold mb-4">
          Contact Us
        </Heading>
        <Flex className="items-start gap-2 text-sm">
          <MapPin className="h-5 w-5 text-primary" />
          <Text>
            {companyAddress} <br />
            <Link href="#" className="text-blue-400 underline">
              Get Directions
            </Link>
          </Text>
        </Flex>
        <Flex className="items-center gap-2 text-sm mt-2">
          <Mail className="h-5 w-5 text-primary" />
          <Link href={`mailto:${companyEmail}`}>Email: {companyEmail}</Link>
        </Flex>
        <Flex className="items-center gap-2 text-sm mt-2">
          <Phone className="h-5 w-5 text-primary" />
          <Text>Phone: {companyPhone}</Text>
        </Flex>
      </div>
    </Flex>

    {/* Footer Bottom Section */}
    <div className="text-center mt-12 text-xs">
      &copy; {new Date().getFullYear()} K&N Cleaning Services. All rights
      reserved.
    </div>
  </footer>
);

export default Footer;
