"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "motion/react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function AuthPage() {
  const [showRegisterPassword, setShowRegisterPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Header />

      <section className="w-full bg-[#f7faff] px-5 py-[70px] sm:px-8 lg:px-[80px] lg:py-[95px]">
        <div className="mx-auto max-w-[1200px]">
          <motion.div
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="mb-[50px] text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-[16px] font-semibold text-[#4d82d5]"
            >
              MY ACCOUNT
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-2 text-[34px] font-bold text-[#172d50] sm:text-[42px]"
            >
              Welcome to Dr. Salu Dental Clinic
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="mx-auto mt-4 max-w-[650px] text-[15px] leading-[1.8] text-[#8a9db6]"
            >
              Create your account or login to manage your dental appointments
              and stay connected with us.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.25, ease: "easeOut" }}
            className="overflow-hidden rounded-[22px] bg-white shadow-[0_10px_45px_rgba(23,45,80,0.08)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.15, ease: "easeOut" }}
                className="px-7 py-10 sm:px-12 sm:py-[55px] lg:px-[65px]"
              >
                <div className="mx-auto max-w-[430px]">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="text-[28px] font-bold text-[#172d50] sm:text-[32px]"
                  >
                    Create an Account
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.35 }}
                    className="mt-2 mb-[30px] text-[14px] leading-[1.7] text-[#8a9db6]"
                  >
                    Register your account to get started with Dr. Salu Dental
                    Clinic.
                  </motion.p>

                  <form className="space-y-[18px]">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.4 }}
                    >
                      <label className="mb-2 block text-[14px] font-medium text-[#172d50]">
                        Full Name
                      </label>

                      <input
                        type="text"
                        placeholder="Enter your full name"
                        className="h-[52px] w-full rounded-[9px] border border-[#d9e3ef] bg-white px-4 text-[14px] text-[#172d50] outline-none transition focus:border-[#4d82d5]"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.48 }}
                    >
                      <label className="mb-2 block text-[14px] font-medium text-[#172d50]">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="h-[52px] w-full rounded-[9px] border border-[#d9e3ef] bg-white px-4 text-[14px] text-[#172d50] outline-none transition focus:border-[#4d82d5]"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.56 }}
                    >
                      <label className="mb-2 block text-[14px] font-medium text-[#172d50]">
                        Password
                      </label>

                      <div className="relative">
                        <input
                          type={showRegisterPassword ? "text" : "password"}
                          placeholder="Create a password"
                          className="h-[52px] w-full rounded-[9px] border border-[#d9e3ef] bg-white px-4 pr-[65px] text-[14px] text-[#172d50] outline-none transition focus:border-[#4d82d5]"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowRegisterPassword(!showRegisterPassword)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-medium text-[#8a9db6]"
                        >
                          {showRegisterPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.64 }}
                    >
                      <label className="mb-2 block text-[14px] font-medium text-[#172d50]">
                        Confirm Password
                      </label>

                      <div className="relative">
                        <input
                          type={showConfirmPassword ? "text" : "password"}
                          placeholder="Confirm your password"
                          className="h-[52px] w-full rounded-[9px] border border-[#d9e3ef] bg-white px-4 pr-[65px] text-[14px] text-[#172d50] outline-none transition focus:border-[#4d82d5]"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-medium text-[#8a9db6]"
                        >
                          {showConfirmPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    </motion.div>

                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.72 }}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-2 h-[52px] w-full rounded-[9px] bg-[#023181] text-[15px] font-semibold text-white transition hover:bg-[#012766]"
                    >
                      Register
                    </motion.button>
                  </form>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
                className="border-t border-[#e3eaf3] px-7 py-10 sm:px-12 sm:py-[55px] lg:border-l lg:border-t-0 lg:px-[65px]"
              >
                <div className="mx-auto flex h-full max-w-[430px] flex-col justify-center">
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3 }}
                    className="text-[28px] font-bold text-[#172d50] sm:text-[32px]"
                  >
                    Login
                  </motion.h2>

                  <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.4 }}
                    className="mt-2 mb-[30px] text-[14px] leading-[1.7] text-[#8a9db6]"
                  >
                    Welcome back. Login to manage your account and
                    appointments.
                  </motion.p>

                  <form className="space-y-[20px]">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.48 }}
                    >
                      <label className="mb-2 block text-[14px] font-medium text-[#172d50]">
                        Email Address
                      </label>

                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="h-[52px] w-full rounded-[9px] border border-[#d9e3ef] bg-white px-4 text-[14px] text-[#172d50] outline-none transition focus:border-[#4d82d5]"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.56 }}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <label className="text-[14px] font-medium text-[#172d50]">
                          Password
                        </label>

                        <button
                          type="button"
                          className="text-[12px] font-medium text-[#4d82d5]"
                        >
                          Forgot Password?
                        </button>
                      </div>

                      <div className="relative">
                        <input
                          type={showLoginPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          className="h-[52px] w-full rounded-[9px] border border-[#d9e3ef] bg-white px-4 pr-[65px] text-[14px] text-[#172d50] outline-none transition focus:border-[#4d82d5]"
                        />

                        <button
                          type="button"
                          onClick={() =>
                            setShowLoginPassword(!showLoginPassword)
                          }
                          className="absolute right-4 top-1/2 -translate-y-1/2 text-[12px] font-medium text-[#8a9db6]"
                        >
                          {showLoginPassword ? "Hide" : "Show"}
                        </button>
                      </div>
                    </motion.div>

                    <motion.button
                      type="submit"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7, delay: 0.64 }}
                      whileHover={{ y: -3 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-2 h-[52px] w-full rounded-[9px] bg-[#023181] text-[15px] font-semibold text-white transition hover:bg-[#012766]"
                    >
                      Login
                    </motion.button>
                  </form>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.72 }}
                    className="mt-[35px] border-t border-[#e3eaf3] pt-[25px] text-center"
                  >
                    <p className="text-[13px] text-[#8a9db6]">
                      Need help?{" "}
                      <Link
                        href="/contact"
                        className="font-semibold text-[#4d82d5]"
                      >
                        Contact Us
                      </Link>
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}