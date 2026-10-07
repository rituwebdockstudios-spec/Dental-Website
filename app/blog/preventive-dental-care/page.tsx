"use client";

import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "motion/react";

export default function PreventiveDentalCarePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faff]">
      <Header />

      <section className="bg-[#eef5fc] px-6 py-[70px] sm:px-8 md:px-12 lg:px-[80px] lg:py-[90px]">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mt-[25px] max-w-[900px]"
          >
            <motion.span
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              className="inline-block rounded-full bg-white px-[16px] py-[7px] text-[13px] font-semibold text-[#4d82d5]"
            >
              Preventive Dentistry
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
              className="mt-[18px] text-[34px] font-semibold leading-[1.15] tracking-[-1px] text-[#172d50] sm:text-[44px] lg:text-[52px]"
            >
              How Professional Teeth Cleaning Keeps Your Smile Healthy
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="mt-[18px] text-[15px] text-[#7b8ea7]"
            >
              Preventive Care • Healthy Smile
            </motion.p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-[60px] sm:px-8 md:px-12 lg:px-[80px] lg:py-[85px]">
        <div className="mx-auto grid max-w-[1200px] gap-[40px] lg:grid-cols-[1fr_330px]">
          <motion.article
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="rounded-[24px] bg-white px-[25px] py-[35px] shadow-[0_12px_40px_rgba(2,49,129,0.08)] sm:px-[40px] sm:py-[45px]"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-[16px] leading-[1.8] text-[#71849d]"
            >
              Professional teeth cleaning is an important part of preventive
              dental care. It helps remove plaque and buildup that regular
              brushing may not completely remove.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-[30px] text-[25px] font-semibold text-[#172d50]"
            >
              Why Professional Cleaning Matters
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-[15px] text-[16px] leading-[1.8] text-[#71849d]"
            >
              Professional cleaning allows your dental team to clean areas
              that can be difficult to maintain through daily brushing alone.
              It is an important part of maintaining good oral hygiene.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-[30px] text-[25px] font-semibold text-[#172d50]"
            >
              Support Healthy Teeth and Gums
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-[15px] text-[16px] leading-[1.8] text-[#71849d]"
            >
              Regular professional cleaning, combined with brushing and
              cleaning between your teeth, can support your overall oral health
              and help you maintain a fresh, clean smile.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-[30px] text-[25px] font-semibold text-[#172d50]"
            >
              Make Dental Care a Routine
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.75 }}
              className="mt-[15px] text-[16px] leading-[1.8] text-[#71849d]"
            >
              Preventive dental care works best when it becomes part of your
              regular routine. Your dentist can recommend a care schedule based
              on your individual needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.85, ease: "easeOut" }}
              className="mt-[35px] rounded-[16px] bg-[#eef5fc] p-[22px]"
            >
              <p className="text-[15px] leading-[1.7] text-[#172d50]">
                Consistent preventive care can help you maintain healthy teeth
                and gums and protect your smile.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.95 }}
            >
              <Link
                href="/appointment"
                className="mt-[30px] inline-flex rounded-[8px] bg-[#023181] px-[28px] py-[14px] text-[15px] font-semibold text-white transition hover:bg-[#4d82d5]"
              >
                Book Appointment →
              </Link>
            </motion.div>
          </motion.article>

          <motion.aside
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
            className="h-fit rounded-[22px] bg-[#023181] p-[30px] text-white lg:sticky lg:top-[25px]"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-[14px] font-semibold text-[#8db9ff]"
            >
              Preventive Care
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-[10px] text-[26px] font-semibold leading-[1.25]"
            >
              Give your smile the care it deserves.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-[15px] text-[14px] leading-[1.7] text-[#c5d8f1]"
            >
              Schedule your dental appointment and keep your oral health on
              track.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
            >
              <Link
                href="/appointment"
                className="mt-[25px] inline-flex w-full justify-center rounded-[8px] bg-white px-[20px] py-[13px] text-[14px] font-semibold text-[#023181] transition hover:bg-[#4d82d5] hover:text-white"
              >
                Book Appointment
              </Link>
            </motion.div>
          </motion.aside>
        </div>
      </section>

      <Footer />
    </main>
  );
}