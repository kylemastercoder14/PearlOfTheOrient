
import { BiLogoGmail, BiLogoFacebook, BiLogoWhatsapp, BiMap } from "react-icons/bi";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-slate-100">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12">
        {/* Organization Name */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#032a0d] px-2">
            PEARL OF THE ORIENT INTERNATIONAL AUXILIARY
          </h2>
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-[#032a0d] mt-1 sm:mt-2 px-2">
            CHAPLAIN VALUES EDUCATORS INC.
          </h3>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6 sm:gap-8">
          {/* Column 1: Connect With Us */}
          <div>
            <h4 className="font-semibold text-[#032a0d] text-sm sm:text-base mb-3 sm:mb-4 underline">
              Connect With Us
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/directory"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Directory
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2: Information for */}
          <div>
            <h4 className="font-semibold text-[#032a0d] text-sm sm:text-base mb-3 sm:mb-4 underline">
              Information for
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Current Students
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Prospective Students
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Chaplains & Members
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Faculty & Staff
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Alumni
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Partners & Donors
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Visitors & Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Security & Emergency */}
          <div>
            <h4 className="font-semibold text-[#032a0d] text-sm sm:text-base mb-3 sm:mb-4 underline">
              Security & Emergency
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Campus Safety
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Network & Tech
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Emergency Management
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Disaster Preparedness
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Digital Resources */}
          <div>
            <h4 className="font-semibold text-[#032a0d] text-sm sm:text-base mb-3 sm:mb-4 underline">
              Digital Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Online Portal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Resource Library
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Student Portal
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Staff Email
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Alumni Portal
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Policies & Legal */}
          <div>
            <h4 className="font-semibold text-[#032a0d] text-sm sm:text-base mb-3 sm:mb-4 underline">
              Policies & Legal
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Data Privacy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Terms of Use
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Report Website Issues
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 6: Network */}
          <div>
            <h4 className="font-semibold text-[#032a0d] text-sm sm:text-base mb-3 sm:mb-4 underline">
              Network
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  Partner Organizations
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-sm text-[#032a0d]/70 hover:text-[#032a0d] transition-colors"
                >
                  International Network
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#032a0d] text-white py-4 sm:py-5 lg:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4">
            {/* Copyright and Contact */}
            <div className="text-xs sm:text-sm text-center md:text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1 sm:gap-0">
                <span className="block sm:inline">
                  Copyright © {new Date().getFullYear()} Pearl of the Orient
                  International Auxiliary Chaplain Values Educators Inc. All
                  rights reserved.
                </span>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <a
                href="mailto:poile2005official@gmail.com"
                aria-label="Email"
                className="hover:opacity-80 bg-[#031809] size-8 rounded-full flex items-center justify-center transition-opacity"
              >
                <BiLogoGmail className="size-4" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100086043231599"
                aria-label="Facebook"
                target='_blank'
                className="hover:opacity-80 bg-[#031809] size-8 rounded-full flex items-center justify-center transition-opacity"
              >
                <BiLogoFacebook className="size-4" />
              </a>
              <a
                href="tel:+639194589099"
                aria-label="Whatsapp"
                className="hover:opacity-80 bg-[#031809] size-8 rounded-full flex items-center justify-center transition-opacity"
              >
                <BiLogoWhatsapp className="size-4" />
              </a>
              <a
                href="https://maps.app.goo.gl/NcEYToNd7YqoxiaHA"
                aria-label="Map"
                target='_blank'
                className="hover:opacity-80 bg-[#031809] size-8 rounded-full flex items-center justify-center transition-opacity"
              >
                <BiMap className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
