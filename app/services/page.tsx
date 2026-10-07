"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "motion/react";

export default function Services() {
  const services = [
    {
      image: "/images/service-img-6.jpg",
      title: "General Dentistry",
      text: "Comprehensive dental care including checkups, cleanings, fillings, and routine treatments.",
    },
    {
      image: "/images/service-img-3.jpg",
      title: "Cosmetic Dentistry",
      text: "Enhance your smile with personalized cosmetic treatments designed for natural-looking results.",
    },
    {
      image: "/images/service-img-4.jpg",
      title: "Pediatric Dentistry",
      text: "Gentle and comfortable dental care specially designed for children of all ages.",
    },
    {
      image: "/images/service-img-7.jpg",
      title: "Restorative Dentistry",
      text: "Restore the health, function, and appearance of damaged or missing teeth.",
    },
    {
      image: "/images/service-img-8.jpg",
      title: "Preventive Dentistry",
      text: "Regular dental care and professional guidance to help prevent future dental problems.",
    },
    {
      image: "/images/service-img-9.jpg",
      title: "Orthodontics",
      text: "Personalized solutions to improve tooth alignment and create a healthier smile.",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Header />

      <section className="w-full px-5 py-[55px] sm:px-8 sm:py-[65px] md:px-10 md:py-[75px] lg:px-[80px] lg:py-[90px]">
        <div className="mx-auto max-w-[1600px]">

          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-[15px] font-semibold text-[#4d82d5] sm:text-[16px] lg:text-[18px]"
            >
              Our Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: -35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
              className="mt-[16px] text-[30px] font-semibold leading-[1.12] tracking-[-1px] text-[#172d50] sm:text-[36px] md:text-[42px] lg:mt-[20px] lg:text-[46px] lg:tracking-[-1.5px]"
            >
              Complete Dental Care for
              <br />
              Your Whole Family
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="mx-auto mt-[18px] max-w-[720px] text-[14px] leading-[1.75] text-[#8a9db6] sm:mt-[22px] sm:text-[15px] md:text-[16px] lg:mt-[25px] lg:text-[17px]"
            >
              From preventive care to advanced dental treatments, we provide
              personalized services to keep your smile healthy and confident.
            </motion.p>
          </div>

          <div className="mt-[38px] grid grid-cols-1 gap-5 sm:mt-[45px] sm:grid-cols-2 md:gap-6 lg:mt-[55px] lg:grid-cols-3 lg:gap-[24px]">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{
                  opacity: 0,
                  y: 60,
                  x: index % 3 === 0 ? -30 : index % 3 === 2 ? 30 : 0,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ y: -7 }}
                className="overflow-hidden rounded-[18px] bg-[#eef4fd] lg:rounded-[20px]"
              >
                <div className="overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={600}
                    height={400}
                    className="h-[230px] w-full object-cover transition duration-700 hover:scale-[1.05] sm:h-[250px] lg:h-[270px]"
                  />
                </div>

                <div className="px-[22px] pb-[25px] pt-[22px] sm:px-[25px] sm:pb-[28px] sm:pt-[24px] lg:px-[28px] lg:pb-[30px] lg:pt-[26px]">
                  <h2 className="text-[19px] font-semibold text-[#172d50] sm:text-[20px] lg:text-[22px]">
                    {service.title}
                  </h2>

                  <p className="mt-[10px] text-[14px] leading-[1.7] text-[#8a9db6] sm:mt-[12px] sm:text-[15px] lg:mt-[14px] lg:text-[16px]">
                    {service.text}
                  </p>

                  <motion.div
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                    className="inline-block"
                  >
                    <Link
                      href="/contact"
                      className="mt-[17px] inline-block text-[14px] font-semibold text-[#4d82d5] sm:mt-[19px] sm:text-[15px] lg:mt-[20px] lg:text-[16px]"
                    >
                      Learn More →
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}