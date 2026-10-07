"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function DentalCheckupsPage() {
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
              transition={{ duration: 0.7, delay: 0.2 }}
              className="inline-block rounded-full bg-white px-[16px] py-[7px] text-[13px] font-semibold text-[#4d82d5]"
            >
              Dental Care
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-[18px] text-[34px] font-semibold leading-[1.15] tracking-[-1px] text-[#172d50] sm:text-[44px] lg:text-[52px]"
            >
              How Regular Dental Checkups Protect Your Smile
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-[18px] text-[15px] text-[#7b8ea7]"
            >
              Regular Dental Care • Healthy Smile
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
              Regular dental checkups are an important part of maintaining
              healthy teeth and gums. Routine visits allow your dentist to
              monitor your oral health and identify potential problems early.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-[30px] text-[25px] font-semibold text-[#172d50]"
            >
              Why Regular Checkups Matter
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-[15px] text-[16px] leading-[1.8] text-[#71849d]"
            >
              Professional dental examinations help your dentist understand
              the condition of your teeth and gums. Regular appointments can
              also help identify dental concerns before they become more
              difficult to manage.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-[30px] text-[25px] font-semibold text-[#172d50]"
            >
              Maintain Your Oral Health
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-[15px] text-[16px] leading-[1.8] text-[#71849d]"
            >
              Professional cleanings can remove plaque and buildup that may
              be difficult to remove with regular brushing alone. Combined
              with good daily oral hygiene, regular dental visits support a
              healthy and confident smile.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 25, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-[35px] rounded-[16px] bg-[#eef5fc] p-[22px]"
            >
              <p className="text-[15px] leading-[1.7] text-[#172d50]">
                Regular dental visits and good daily oral care can help you
                maintain your smile for years to come.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              whileHover={{ y: -3 }}
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
            transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
            className="h-fit rounded-[22px] bg-[#023181] p-[30px] text-white lg:sticky lg:top-[25px]"
          >
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="text-[14px] font-semibold text-[#8db9ff]"
            >
              Need Dental Care?
            </motion.p>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-[10px] text-[26px] font-semibold leading-[1.25]"
            >
              Take the first step toward a healthier smile.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-[15px] text-[14px] leading-[1.7] text-[#c5d8f1]"
            >
              Schedule an appointment with our dental team and discuss your
              dental care needs.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              whileHover={{ y: -3 }}
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
