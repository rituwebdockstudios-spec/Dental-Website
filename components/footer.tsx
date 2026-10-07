"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#023181] text-white">
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[50px] px-[90px] pb-[85px] pt-[100px] md:grid-cols-2 lg:grid-cols-[1.6fr_0.9fr_0.9fr_1.25fr]">
        <div>
          <div className="flex items-center justify-start">
            <Image
              src="/images/logo.png"
              alt="Dr. Salu Dental Clinic"
              width={200}
              height={120}
              className="h-[150px] w-auto object-contain object-left"
            />
          </div>

          <p className="mt-[22px] max-w-[480px] text-[16px] leading-[1.7] text-[#b9d0ef]">
            At Dr. Salu, we’re dedicated to providing high-quality,
            personalized dental care for patients of all ages. Our
            skilled team uses the latest technology to ensure
            comfortable, efficient treatments and beautiful,
            healthy smiles for life.
          </p>

          <div className="mt-[30px] flex items-center gap-[25px]">
            

           
          </div>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold text-white">
            Company
          </h3>

          <div className="mt-[24px] flex flex-col gap-[13px]">
            <Link
              href="/"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              Home
            </Link>

            <Link
              href="/about"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              About Us
            </Link>

            <Link
              href="/services"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              Our Services
            </Link>

            <Link
              href="/contact"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              Contact
            </Link>

            <Link
              href="/appointment"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              Book Appointment
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold text-white">
            Our Services
          </h3>

          <div className="mt-[24px] flex flex-col gap-[13px]">
            <Link
              href="/services"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              General Dentistry
            </Link>

            <Link
              href="/services"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              Cosmetic Dentistry
            </Link>

            <Link
              href="/services"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              Pediatric Dentistry
            </Link>

            <Link
              href="/services"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              Restorative Dentistry
            </Link>

            <Link
              href="/services"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              Preventive Dentistry
            </Link>

            <Link
              href="/services"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              Orthodontics
            </Link>
          </div>
        </div>

        <div>
          <h3 className="text-[18px] font-semibold text-white">
            Contact Us
          </h3>

          <div className="mt-[24px] space-y-[22px]">
            <div>
              <div className="flex items-center gap-[9px]">
                <span className="text-[17px] text-[#6fa3f5]">📍</span>

                <h4 className="text-[16px] font-semibold text-white">
                  Clinic Location
                </h4>
              </div>

              <a
                href="https://www.google.com/maps/search/?api=1&query=AL+MAJD+DENTAL+CLINIC+Ghubrah+Muscat+Oman"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-[8px] block max-w-[300px] text-[15px] leading-[1.6] text-[#b9d0ef] transition hover:text-white"
              >
                Flat no.101, First Floor P.O. 415, Ghubrah Street, South Al
                Ghubrah, Opposite to Sultan Qaboos Stadium, Muscat, OM 132,
                Oman
              </a>
            </div>

            <div>
              <div className="flex items-center gap-[9px]">
                <span className="text-[17px] text-[#6fa3f5]">☎</span>

                <h4 className="text-[16px] font-semibold text-white">
                  Call Us
                </h4>
              </div>

              <a
                href="tel:+96899157979"
                className="mt-[8px] block text-[15px] text-[#b9d0ef] transition hover:text-white"
              >
                +968 9915 7979
              </a>
            </div>

            <div>
              <div className="flex items-center gap-[9px]">
                <span className="text-[17px] text-[#6fa3f5]">✉</span>

                <h4 className="text-[16px] font-semibold text-white">
                  Send a Message
                </h4>
              </div>

              <a
                href="mailto:emily.brown@almajdsclinic.com"
                className="mt-[8px] block text-[15px] text-[#b9d0ef] transition hover:text-white"
              >
                emily.brown@almajdsclinic.com
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center justify-between gap-[15px] px-[90px] py-[24px] md:flex-row">
          <p className="text-[16px] text-[#b9d0ef]">
            Copyright 2026 – Dr. Salu Dental Clinic.
          </p>

          <div className="flex items-center gap-[35px]">
            <Link
              href="/terms"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              href="/privacy"
              className="text-[16px] text-[#b9d0ef] transition hover:text-white"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}