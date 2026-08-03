import { cn } from "@/lib/utils";
import { PaymentBadge, SocialNetworks } from "./footer.types";
import { FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import LayoutSpacing from "./LayoutSpacing";

const socialsData: SocialNetworks[] = [
  {
    id: 1,
    icon: <FaInstagram />,
    url: "https://www.instagram.com/printiqo.in?igsh=MTFqeGFvNGhoMHpjZQ%3D%3D&utm_source=qr",
  },
  {
    id: 2,
    icon: <FaYoutube />,
    url: "https://youtube.com/@printiqo",
  },
];

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-[#EFEFEF]">
      <div className="pt-16 pb-8 bg-white text-[#1a1a1a] px-6 lg:px-10">
        <div className="max-w-[1400px] mx-auto">
          <nav className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-12 gap-10 lg:gap-12 mb-16">
            
            {/* Column 1: Brand & Socials */}
            <div className="flex flex-col lg:col-span-4">
              <Link href="/" className="mb-6 inline-block w-fit">
                <Image
                  src="/images/logo.png"
                  alt="Printiqo Logo"
                  width={220}
                  height={70}
                  className="object-contain h-12 md:h-14 w-auto transition-transform duration-300 hover:scale-105"
                  priority
                />
              </Link>
              <p className="text-[#555] text-sm mb-8 max-w-sm leading-relaxed">
                Your premium destination for customized printing and luxury gifting solutions.
              </p>
              <div className="flex items-center space-x-4">
                {socialsData.map((social) => (
                  <Link
                    href={social.url}
                    key={social.id}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#F8F8F8] text-[#1a1a1a] hover:bg-[#D71920] hover:text-white transition-all w-10 h-10 rounded-full flex items-center justify-center p-2 shadow-sm"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div className="flex flex-col lg:col-span-4">
              <h4 className="text-sm font-semibold tracking-wide text-[#1a1a1a] mb-6">
                Quick Links
              </h4>
              <ul className="space-y-4 text-sm text-[#555]">
                <li>
                  <Link href="/" className="hover:text-[#D71920] transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-[#D71920] transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-[#D71920] transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Contact Information */}
            <div id="contact" className="flex flex-col lg:col-span-4 scroll-mt-24">
              <h4 className="text-sm font-semibold tracking-wide text-[#1a1a1a] mb-6">
                Contact Details
              </h4>
              <ul className="space-y-5 text-sm text-[#555]">
                <li className="flex items-start gap-4">
                  <FaMapMarkerAlt className="text-[#D71920] mt-1 flex-shrink-0 text-base" />
                  <div>
                    <strong className="text-[#1a1a1a] block font-medium mb-1">Address:</strong>
                    <span className="leading-relaxed">Printiqo HQ, Calicut, Kerala</span>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <FaPhoneAlt className="text-[#D71920] flex-shrink-0 text-base" />
                  <div>
                    <strong className="text-[#1a1a1a] block font-medium mb-1">Phone:</strong>
                    <a href="tel:+918111939595" className="hover:text-[#D71920] transition-colors">
                      +91 8111 939 595
                    </a>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <FaEnvelope className="text-[#D71920] flex-shrink-0 text-base" />
                  <div>
                    <strong className="text-[#1a1a1a] block font-medium mb-1">Email:</strong>
                    <a href="mailto:info@printiqo.in" className="hover:text-[#D71920] transition-colors">
                      info@printiqo.in
                    </a>
                  </div>
                </li>
              </ul>
            </div>

          </nav>

          <hr className="h-[1px] border-t border-[#EFEFEF] my-8" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-[#888] gap-4">
            <p>© {new Date().getFullYear()} Printiqo. All rights reserved.</p>
          </div>
        </div>
        <LayoutSpacing />
      </div>
    </footer>
  );
};

export default Footer;
