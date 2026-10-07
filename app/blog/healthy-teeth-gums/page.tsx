"use client";

import Link from "next/link";
import { motion } from "motion/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function HealthyTeethGumsPage() {
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
              Oral Health
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-[18px] text-[34px] font-semibold leading-[1.15] tracking-[-1px] text-[#172d50] sm:text-[44px] lg:text-[52px]"
            >
              5 Simple Tips for Healthier Teeth and Gums
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-[18px] text-[15px] text-[#7b8ea7]"
            >
              Daily Oral Care • Healthy Smile
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
              Taking care of your teeth and gums starts with simple daily
              habits. Good oral hygiene can help you maintain a clean, healthy,
              and confident smile.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="mt-[30px] text-[25px] font-semibold text-[#172d50]"
            >
              1. Brush Twice a Day
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-[15px] text-[16px] leading-[1.8] text-[#71849d]"
            >
              Brushing your teeth twice a day is an important part of your
              daily oral care routine. Take your time and clean all areas of
              your teeth.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-[30px] text-[25px] font-semibold text-[#172d50]"
            >
              2. Clean Between Your Teeth
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-[15px] text-[16px] leading-[1.8] text-[#71849d]"
            >
              Cleaning between your teeth helps maintain areas that can be
              difficult to reach with a toothbrush alone.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-[30px] text-[25px] font-semibold text-[#172d50]"
            >
              3. Maintain Regular Dental Visits
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-[15px] text-[16px] leading-[1.8] text-[#71849d]"
            >
              Regular dental visits allow your oral health to be monitored and
              provide an opportunity to discuss any concerns with your dentist.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-[30px] text-[25px] font-semibold text-[#172d50]"
            >
              4. Choose Healthy Habits
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="mt-[15px] text-[16px] leading-[1.8] text-[#71849d]"
            >
              A balanced lifestyle and mindful food choices can support your
              overall oral health.
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-[30px] text-[25px] font-semibold text-[#172d50]"
            >
              5. Do Not Ignore Dental Concerns
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-[15px] text-[16px] leading-[1.8] text-[#71849d]"
            >
              If you notice discomfort or changes in your teeth or gums,
              discussing them with your dentist can help you understand the
              right next step.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.8 }}
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
              Keep your smile healthy and confident.
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="mt-[15px] text-[14px] leading-[1.7] text-[#c5d8f1]"
            >
              Book an appointment and get personalized guidance for your oral
              health.
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