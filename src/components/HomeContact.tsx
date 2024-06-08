import { contactData } from "@/CONSTANTS";
import { ContactForm } from "./ContactForm";
import { IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhone, MdOutlineEmail } from "react-icons/md";
import Link from "next/link";

const HomeContact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col px-5 md:px-24 justify-between my-20"
    >
      <div className="uppercase flex flex-col items-center gap-2">
        <div className="text-center md:text-left md:self-start mb-2">
          <h3 className="text-xl font-light">How to reach</h3>
          <h1 className="text-5xl font-bold">Contact us</h1>
        </div>
      </div>
      <div className="flex-col flex lg:flex-row justify-between gap-2 mt-5">
        <div>
          <div className="flex items-center text-sm lg:text-lg gap-2">
            <IoLocationOutline />
            {contactData.location}
          </div>
          {contactData.phoneNumbers.map((number: string) => {
            return (
              <Link
                className="flex items-center text-sm lg:text-lg gap-2"
                key={number}
                href={`tel:${number}`}
              >
                <MdOutlinePhone />
                {number}
              </Link>
            );
          })}
          <Link
            className="flex items-center text-sm lg:text-lg gap-2"
            href={`mailto:${contactData.email}`}
          >
            <MdOutlineEmail />
            {contactData.email}
          </Link>
        </div>
        <div className="mt-5 lg:mt-0 w-full lg:w-1/2">
          <ContactForm></ContactForm>
        </div>
      </div>
    </div>
  );
};
export default HomeContact;
