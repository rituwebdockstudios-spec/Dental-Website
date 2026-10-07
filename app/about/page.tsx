"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "motion/react";

export default function About() {
  const team = [
    {
      image: "/images/team-img-2.png",
      name: "Dr. Sarah Bennett",
      role: "Lead Dentist",
    },
    {
      image: "/images/team-img-1.png",
      name: "Dr. Maya Lin",
      role: "Cosmetic Dentist",
    },
    {
      image: "/images/team-img-3.jpg",
      name: "Dr. Michael Reyes",
      role: "Pediatric Specialist",
    },
    {
      image: "/images/team-img-4.jpg",
      name: "Dr. James Carter",
      role: "Dental Hygienist",
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Header />

      {/* About Doctor Section */}
      <section className="w-full px-5 py-[55px] sm:px-8 sm:py-[65px] md:px-10 md:py-[75px] lg:px-[80px] lg:py-[90px]">
        <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-[45px] lg:flex-row lg:items-start lg:gap-[55px]">

          <div className="flex w-full gap-4 sm:gap-5 lg:w-[48%] lg:gap-[24px]">
            <motion.div
              initial={{ opacity: 0, x: -70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-1/2 overflow-hidden rounded-[16px] sm:rounded-[18px] lg:rounded-[20px]"
            >
              <Image
                src="/images/clinic-img-1.jpeg"
                alt="Dental treatment"
                width={600}
                height={650}
                className="h-[270px] w-full object-cover transition duration-700 hover:scale-[1.04] sm:h-[330px] md:h-[380px] lg:h-[430px]"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 70 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              className="mt-[40px] w-1/2 overflow-hidden rounded-[16px] sm:mt-[50px] sm:rounded-[18px] md:mt-[55px] lg:mt-[60px] lg:rounded-[20px]"
            >
              <Image
                src="/images/clinic-img-2.jpeg"
                alt="Dental clinic"
                width={600}
                height={650}
                className="h-[270px] w-full object-cover transition duration-700 hover:scale-[1.04] sm:h-[330px] md:h-[380px] lg:h-[430px]"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
            className="w-full lg:w-[52%]"
          >
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[15px] font-semibold text-[#4d82d5] sm:text-[16px] lg:text-[18px]"
            >
              About Dr. Salu Sasikumar
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-[12px] text-[30px] font-semibold leading-[1.12] tracking-[-1px] text-[#172d50] sm:mt-[15px] sm:text-[36px] md:text-[42px] lg:mt-[17px] lg:text-[46px]"
            >
              Dr. Salu Sasikumar, BDS
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-[14px] text-[14px] font-semibold leading-[1.5] text-[#8a9db6] sm:text-[15px] md:text-[16px] lg:mt-[17px] lg:text-[17px]"
            >
              Fellowship in Laser Surgery & Dental Implants – Amrita School of Dentistry
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="mt-[16px] space-y-[10px] text-[14px] leading-[1.65] text-[#8a9db6] sm:mt-[18px] sm:space-y-[12px] sm:text-[15px] md:text-[16px] lg:mt-[20px] lg:space-y-[14px] lg:text-[17px]"
            >
              <p>
                Dr. Salu Sasikumar is a dedicated dental professional with
                extensive experience in general, cosmetic, restorative, and
                surgical dentistry. He completed his BDS and further
                specialized through a Fellowship in Laser Surgery and Dental
                Implants from the prestigious Amrita School of Dentistry.
              </p>

              <p>
                He previously served{" "}
                <strong className="font-semibold text-[#7f91aa]">
                  Assistant Maxillofacial Surgeon at Rajah Hospital
                </strong>{" "}
                and has worked as a{" "}
                <strong className="font-semibold text-[#7f91aa]">
                  General Dentist at Khalaf Polyclinic, Dibba Musandam,
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-[#7f91aa]">
                  Duroob Al Shifa, Bahla.
                </strong>
              </p>

              <p>
                Currently, Dr. Salu Sasikumar is managing and practicing at{" "}
                <strong className="font-semibold text-[#7f91aa]">
                  Al Majd Dental Clinic, Muscat,
                </strong>{" "}
                and{" "}
                <strong className="font-semibold text-[#7f91aa]">
                  Star Healthcare Dental Clinic, Samail,
                </strong>{" "}
                where he provides comprehensive dental care with a strong focus
                on patient comfort, advanced treatment techniques, and long-term
                oral health.
              </p>

              <p>
                With expertise in cosmetic dentistry, root canal treatments,
                dental implants, and oral surgical procedures, Dr. Salu is
                committed to helping patients achieve healthy, functional, and
                confident smiles through personalized treatment plans and
                quality dental care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Link
                href="/appointment"
                className="mt-[26px] inline-block rounded-[9px] bg-[#4d82d5] px-[24px] py-[13px] text-[15px] font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#3d72c5] sm:mt-[30px] sm:px-[26px] sm:py-[14px] sm:text-[16px] lg:mt-[34px] lg:px-[28px] lg:py-[15px] lg:text-[17px]"
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-[#eef4fd] px-5 pb-[55px] pt-[55px] sm:px-8 sm:pb-[65px] sm:pt-[65px] md:px-10 lg:px-[90px] lg:pb-[75px] lg:pt-[65px]">
        <div className="mx-auto max-w-[1600px]">

          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: -30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-[15px] font-semibold text-[#4d82d5] sm:text-[16px] lg:text-[18px]"
            >
              Meet Our Dental Team
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: -35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="mt-[16px] text-[30px] font-semibold leading-[1.1] tracking-[-1px] text-[#172d50] sm:text-[36px] md:text-[42px] lg:mt-[20px] lg:text-[46px]"
            >
              Committed to Your Smile
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mx-auto mt-[18px] max-w-[700px] text-[14px] leading-[1.7] text-[#8a9db6] sm:mt-[22px] sm:text-[15px] md:text-[16px] lg:mt-[25px] lg:text-[17px]"
            >
              Our experienced dental team is here to make every visit positive
              and personalized.
              <br className="hidden sm:block" />
              With gentle hands and caring hearts.
            </motion.p>
          </div>

          <div className="mt-[38px] grid grid-cols-1 gap-5 sm:mt-[45px] sm:grid-cols-2 md:gap-6 lg:mt-[55px] lg:grid-cols-4 lg:gap-[24px]">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                whileHover={{ y: -7 }}
                className="relative overflow-hidden rounded-[18px] lg:rounded-[20px]"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={500}
                  height={600}
                  className="h-[400px] w-full object-cover transition duration-700 hover:scale-[1.04] sm:h-[430px] md:h-[450px] lg:h-[460px]"
                />

                <div className="absolute bottom-[14px] left-[14px] right-[14px] rounded-[10px] bg-white px-[12px] py-[12px] text-center transition duration-500 hover:-translate-y-[5px] sm:bottom-[16px] sm:left-[16px] sm:right-[16px] lg:bottom-[18px] lg:left-[18px] lg:right-[18px]">
                  <h3 className="text-[17px] font-semibold text-[#172d50] sm:text-[18px] lg:text-[20px]">
                    {member.name}
                  </h3>

                  <p className="mt-[5px] text-[13px] text-[#8a9db6] sm:text-[14px] lg:text-[15px]">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="w-full bg-white px-5 py-[60px] sm:px-8 sm:py-[70px] md:px-10 md:py-[80px] lg:px-[80px] lg:py-[90px]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-[45px] lg:flex-row lg:items-center lg:gap-[55px]">

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full lg:w-[52%]"
          >
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-[15px] font-semibold text-[#4d82d5] sm:text-[16px] lg:text-[18px]"
            >
              Why Choose Our Dental Care
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mt-[17px] text-[30px] font-semibold leading-[1.12] tracking-[-1px] text-[#172d50] sm:text-[36px] md:text-[42px] lg:mt-[22px] lg:text-[46px]"
            >
              Exceptional Service With a
              <br className="hidden sm:block" />
              Personal Touch
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-[20px] max-w-[800px] text-[14px] leading-[1.8] text-[#8a9db6] sm:mt-[24px] sm:text-[15px] md:text-[16px] lg:mt-[28px] lg:text-[17px]"
            >
              Choosing the right dental provider matters. We combine expert
              care, advanced technology, and a warm atmosphere to ensure every
              visit is comfortable, efficient, and tailored to your unique
              needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-[24px] border-t border-[#c8c8c8] pt-[24px] lg:mt-[26px] lg:pt-[28px]"
            >
              <div className="grid grid-cols-1 gap-[25px] sm:grid-cols-2 sm:gap-x-[35px] sm:gap-y-[28px] lg:gap-x-[50px] lg:gap-y-[30px]">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  <h3 className="text-[17px] font-semibold text-[#172d50] sm:text-[18px] lg:text-[19px]">
                    Experienced Dental
                  </h3>

                  <p className="mt-[8px] text-[14px] leading-[1.7] text-[#8a9db6] sm:text-[15px] lg:mt-[12px] lg:text-[16px]">
                    Skilled care backed by years of trusted dental experience.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                >
                  <h3 className="text-[17px] font-semibold text-[#172d50] sm:text-[18px] lg:text-[19px]">
                    Advanced Technology
                  </h3>

                  <p className="mt-[8px] text-[14px] leading-[1.7] text-[#8a9db6] sm:text-[15px] lg:mt-[12px] lg:text-[16px]">
                    Modern tools ensure accurate and efficient treatments.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                >
                  <h3 className="text-[17px] font-semibold text-[#172d50] sm:text-[18px] lg:text-[19px]">
                    Personalized Treatment
                  </h3>

                  <p className="mt-[8px] text-[14px] leading-[1.7] text-[#8a9db6] sm:text-[15px] lg:mt-[12px] lg:text-[16px]">
                    Custom care plans made to fit your smile and lifestyle.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.65 }}
                >
                  <h3 className="text-[17px] font-semibold text-[#172d50] sm:text-[18px] lg:text-[19px]">
                    Family-Friendly
                  </h3>

                  <p className="mt-[8px] text-[14px] leading-[1.7] text-[#8a9db6] sm:text-[15px] lg:mt-[12px] lg:text-[16px]">
                    Welcoming space for kids, teens, adults, and seniors.
                  </p>
                </motion.div>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <Link
                href="/appointment"
                className="mt-[28px] inline-block rounded-[9px] bg-[#4d82d5] px-[24px] py-[13px] text-[15px] font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-[#3d72c5] sm:mt-[32px] sm:px-[26px] sm:py-[14px] sm:text-[16px] lg:mt-[34px] lg:px-[28px] lg:py-[15px] lg:text-[17px]"
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.div>

          <div className="flex w-full gap-4 sm:gap-5 lg:w-[48%] lg:gap-[25px]">

            <div className="flex w-1/2 flex-col gap-5 sm:gap-6 lg:gap-[30px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="overflow-hidden rounded-[16px] sm:rounded-[18px] lg:rounded-[20px]"
              >
                <Image
                  src="/images/service-img.jpeg"
                  alt="Dental care"
                  width={600}
                  height={600}
                  className="h-[210px] w-full object-cover transition duration-700 hover:scale-[1.05] sm:h-[260px] md:h-[300px] lg:h-[280px]"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92, x: 30 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="overflow-hidden rounded-[16px] sm:rounded-[18px] lg:rounded-[20px]"
              >
                <Image
                  src="/images/why-choose-img.jpg"
                  alt="Dental care"
                  width={600}
                  height={600}
                  className="h-[260px] w-full object-cover transition duration-700 hover:scale-[1.05] sm:h-[320px] md:h-[360px] lg:h-[340px]"
                />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 60 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
              className="w-1/2 overflow-hidden rounded-[16px] pt-[55px] sm:pt-[70px] md:pt-[80px] lg:rounded-[20px] lg:pt-[90px]"
            >
              <Image
                src="/images/why-choose-1.jpg"
                alt="Dental care"
                width={600}
                height={700}
                className="h-[340px] w-full object-cover transition duration-700 hover:scale-[1.05] sm:h-[410px] md:h-[460px] lg:h-[460px]"
              />
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}