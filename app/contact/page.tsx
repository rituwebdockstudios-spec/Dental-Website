"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { motion } from "motion/react";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const whatsappNumber = "96899157979";

    const whatsappMessage = `Hello Dr. Salu,

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}`;

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <Header />

      <main className="bg-white">
        <section className="mx-auto max-w-[1400px] px-[24px] py-[70px] sm:px-[40px] lg:px-[70px] lg:py-[90px]">
          <div className="grid grid-cols-1 gap-[60px] lg:grid-cols-2 lg:gap-[90px]">

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="text-[15px] font-semibold text-[#4d82d5] sm:text-[16px]"
              >
                Get In Touch
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="mt-[12px] text-[34px] font-semibold leading-[1.15] tracking-[-1px] text-[#172d50] sm:text-[42px] lg:text-[50px]"
              >
                We’re Here To Help You
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-[20px] max-w-[600px] text-[15px] leading-[1.7] text-[#8a9db6] sm:text-[16px]"
              >
                Have questions about our dental services or want to book an
                appointment? Get in touch with us and our team will be happy
                to assist you.
              </motion.p>

              <div className="mt-[40px] space-y-[30px]">

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <div className="flex items-center gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4d82d5"
                      strokeWidth="1.8"
                      className="h-[18px] w-[18px] shrink-0"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 7v5l3 2"
                      />
                    </svg>

                    <h3 className="text-[15px] font-semibold text-[#172d50] sm:text-[16px]">
                      Open Hours
                    </h3>
                  </div>

                  <div className="mt-[12px] text-[14px] leading-[1.8] text-[#8a9db6] sm:text-[15px]">
                    <p>Monday – Thursday: 10:00 AM – 1:00 PM</p>
                    <p>4:00 PM – 10:00 PM</p>
                    <p>Friday: 4:00 PM – 10:00 PM</p>
                    <p>Saturday – Sunday: 10:00 AM – 1:00 PM</p>
                    <p>4:00 PM – 10:00 PM</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  <div className="flex items-center gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4d82d5"
                      strokeWidth="1.8"
                      className="h-[18px] w-[18px] shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"
                      />
                      <circle cx="12" cy="10" r="2.5" />
                    </svg>

                    <h3 className="text-[15px] font-semibold text-[#172d50] sm:text-[16px]">
                      Clinic Location
                    </h3>
                  </div>

                  <p className="mt-[12px] max-w-[520px] text-[14px] leading-[1.7] text-[#8a9db6] sm:text-[15px]">
                    Flat no.101, First Floor P.O. 415, Ghubrah Street, South
                    Al Ghubrah, Opposite to Sultan Qaboos Stadium, Muscat,
                    OM 132, Oman
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <div className="flex items-center gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4d82d5"
                      strokeWidth="1.8"
                      className="h-[18px] w-[18px] shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 3.08 5.18 2 2 0 0 1 5.06 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L9 10.73a16 16 0 0 0 4.27 4.27l1.27-1.23a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 21 15.94l1 .98Z"
                      />
                    </svg>

                    <h3 className="text-[15px] font-semibold text-[#172d50] sm:text-[16px]">
                      Call Us Directly
                    </h3>
                  </div>

                  <a
                    href="tel:+96899157979"
                    className="mt-[12px] block text-[14px] text-[#8a9db6] transition hover:text-[#4d82d5] sm:text-[15px]"
                  >
                    +968 9915 7979
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  <div className="flex items-center gap-[10px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#4d82d5"
                      strokeWidth="1.8"
                      className="h-[18px] w-[18px] shrink-0"
                    >
                      <rect
                        x="3"
                        y="5"
                        width="18"
                        height="14"
                        rx="2"
                      />
                      <path d="m3 7 9 6 9-6" />
                    </svg>

                    <h3 className="text-[15px] font-semibold text-[#172d50] sm:text-[16px]">
                      Send a Message
                    </h3>
                  </div>

                  <a
                    href="mailto:contact@drsalu.com"
                    className="mt-[12px] block text-[14px] text-[#8a9db6] transition hover:text-[#4d82d5] sm:text-[15px]"
                  >
                    contact@drsalu.com
                  </a>
                </motion.div>

              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 1, delay: 0.15, ease: "easeOut" }}
              className="rounded-[10px] bg-[#f4f8fc] p-[25px] sm:p-[35px] lg:p-[45px]"
            >
              <form onSubmit={handleSubmit} className="space-y-[20px]">

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.25 }}
                >
                  <label
                    htmlFor="name"
                    className="mb-[8px] block text-[14px] font-medium text-[#172d50]"
                  >
                    Your Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="h-[52px] w-full rounded-[5px] border border-[#dce5ef] bg-white px-[15px] text-[14px] text-[#172d50] outline-none transition focus:border-[#4d82d5]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.35 }}
                >
                  <label
                    htmlFor="email"
                    className="mb-[8px] block text-[14px] font-medium text-[#172d50]"
                  >
                    Your Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    className="h-[52px] w-full rounded-[5px] border border-[#dce5ef] bg-white px-[15px] text-[14px] text-[#172d50] outline-none transition focus:border-[#4d82d5]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                >
                  <label
                    htmlFor="phone"
                    className="mb-[8px] block text-[14px] font-medium text-[#172d50]"
                  >
                    Your Phone
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    className="h-[52px] w-full rounded-[5px] border border-[#dce5ef] bg-white px-[15px] text-[14px] text-[#172d50] outline-none transition focus:border-[#4d82d5]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.55 }}
                >
                  <label
                    htmlFor="message"
                    className="mb-[8px] block text-[14px] font-medium text-[#172d50]"
                  >
                    Your Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message"
                    rows={6}
                    className="w-full resize-none rounded-[5px] border border-[#dce5ef] bg-white px-[15px] py-[14px] text-[14px] text-[#172d50] outline-none transition focus:border-[#4d82d5]"
                  />
                </motion.div>

                <motion.button
                  type="submit"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: 0.65 }}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.98 }}
                  className="h-[52px] w-full rounded-[5px] bg-[#023181] text-[15px] font-semibold text-white transition hover:bg-[#012968]"
                >
                  Send Message
                </motion.button>

              </form>
            </motion.div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}