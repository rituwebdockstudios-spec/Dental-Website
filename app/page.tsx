"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
const testimonials = [
  {
    name: "Monisha m nair",
    review:
      "We had a very good experience with the dentist during my child’s dental extraction. Dr salu was extremely kind, patient, and gentle, which made my child feel calm and comfortable. The procedure was explained clearly in simple words, so both parent and child understood what to expect. The dental extraction was done smoothly and professionally, with minimal discomfort. The clinic was clean, child-friendly, and well organized. The staff were also very supportive and caring throughout the visit. I really appreciate Dr salu caring approach and skill in handling patients. I highly recommend Dr salu for dental treatments. 🌟🦷",
  },
  {
    name: "Aswathi S",
    review:
      "I visited Dr Salu for a tooth filling, and the entire experience was very reassuring. The dentist carefully examined the tooth and clearly explained the type of filling needed and each step of the procedure before starting. Local anesthesia was given gently, and the filling was done with great precision. I did not feel any pain during the procedure. Dr salu regularly checked my comfort and ensured the bite was adjusted properly at the end, which made a big difference. The clinic was clean, well equipped, and followed strict hygiene standards. The staff were polite and supportive. I am very happy with the treatment and the natural look and feel of the filling. Highly recommend Dr Salu for safe, comfortable, and high-quality dental filling treatment. 🦷",
  },
  {
    name: "Anfal",
    review:
      "It's officially THE best dental clinic I've ever been to. Dr.salu is so kind, light handed,gentle and patient. And the staff are sweet. And the services are the best. I've got one of my grinders done there and all the pain and headaches that had been keeping me awake for days completely disappeared and for the best prices ever! Thanks almajd clinic!💗",
  },
  {
    name: "Jaison Dominic",
    review:
      "Dr Salu and his team is doing a great job in dental treatment..I had experience from this clinic for my dental treatment, which was a complicated issue. Though it was much time consuming procedure because of its complexity, he did it perfectly with patience! The service rates also is reasonable and I strongly recommend Dr Salu for examining your dental issues/ routine dental cleaning, making you smile again & without any pain!",
  },
  {
    name: "Maria Jowovi Joy Cabansagan",
    review:
      "Al Majd Dental Clinic is our new go-to Family Dental Clinic. If you’re looking for a clinic that actually cares about its patients, this is it. The team at Al Majd with Dr. Salu are so welcoming and accommodating, especially if you're a bit nervous about dental work. You can tell they are experts by how painless and efficient the procedures are. I was also pleasantly surprised by the bill—is affordable and fair. A great clinic with a wonderful atmosphere!",
  },
  {
    name: "Sujith S Kumar",
    review:
      "I went to Dr. salu for treatment for my teeth.I am very happy with his work ,very professional and also price is also very reasonable. I will definitely recommend my friends and family without any hesitation. He explained everything very clearly about the procedure. Thank you very much Dr.",
  },
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [testimonialPage, setTestimonialPage] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialPage(
        (prev) => (prev + 1) % testimonials.length
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const previousTestimonial = () => {
    setTestimonialPage(
      (prev) =>
        (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const nextTestimonial = () => {
    setTestimonialPage(
      (prev) => (prev + 1) % testimonials.length
    );
  };
  
  const slides = [
  {
    category: "Before & After",
    title: "See the Difference",
    description:
      "Every smile is unique. Our personalized dental treatments are carefully planned to improve your oral health and help you feel confident in your smile.",
    mainImage: "/images/before-img-2.jpg",
    beforeImage: "/images/before-img-3.jpg",
    afterImage: "/images/after-img.png",
  },
  {
    category: "Cosmetic Dentistry",
    title: "Enhance Your Natural Smile",
    description:
      "Cosmetic dental treatments are carefully planned to improve the appearance of your teeth and create a natural, confident smile.",
    mainImage: "/images/before-img-2.jpg",
    beforeImage: "/images/before-2.png",
    afterImage: "/images/after-2.png",
  },
];
  return (
    <main className="min-h-screen bg-white">
<header className="relative z-50 w-full bg-[#023181]">
  <nav className="mx-auto flex h-[138px] max-w-[1600px] items-center justify-between px-10 lg:px-[70px]">

    <div>
      <Link href="/" className="flex shrink-0 items-center">
        <Image
          src="/images/logo.png"
          alt="Dr. Salu Dental Clinic"
          width={180}
          height={110}
          priority
          className="h-[140px] w-auto object-contain"
        />
      </Link>
    </div>

    <div className="hidden items-center gap-[46px] lg:flex">

      <div>
        <Link
          href="/"
          className="text-[18px] font-semibold text-white transition hover:text-[#dce8ff]"
        >
          Home
        </Link>
      </div>

      <div>
        <Link
          href="/about"
          className="text-[18px] font-medium text-white transition hover:text-[#dce8ff]"
        >
          About
        </Link>
      </div>

      <div>
        <Link
          href="/services"
          className="text-[18px] font-medium text-white transition hover:text-[#dce8ff]"
        >
          Services
        </Link>
      </div>

      <div>
        <Link
          href="/contact"
          className="text-[18px] font-medium text-white transition hover:text-[#dce8ff]"
        >
          Contact
        </Link>
      </div>

      

    </div>

    <div className="flex items-center">
      <Link
        href="/appointment"
        className="hidden rounded-[10px] bg-white px-[34px] py-[18px] text-[18px] font-semibold text-[#4d82d5] shadow-sm transition hover:bg-[#f1f6ff] md:block"
      >
        Book Appointment
      </Link>

      <button
        type="button"
        aria-label="Open menu"
        onClick={() => setMenuOpen(!menuOpen)}
        className="ml-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-white text-[#0B3289] lg:hidden"
      >
        <span className="text-[25px]">
          {menuOpen ? "✕" : "☰"}
        </span>
      </button>
    </div>

  </nav>

  {menuOpen && (
    <div className="absolute left-0 top-[138px] w-full overflow-hidden bg-[#023181] px-5 pb-6 pt-3 shadow-lg lg:hidden">
      <div className="flex flex-col gap-1">

        <div>
          <Link
            href="/"
            onClick={() => setMenuOpen(false)}
            className="block rounded-[8px] px-4 py-3 text-[17px] font-semibold text-white transition hover:bg-white/10"
          >
            Home
          </Link>
        </div>

        <div>
          <Link
            href="/about"
            onClick={() => setMenuOpen(false)}
            className="block rounded-[8px] px-4 py-3 text-[17px] font-medium text-white transition hover:bg-white/10"
          >
            About
          </Link>
        </div>

        <div>
          <Link
            href="/services"
            onClick={() => setMenuOpen(false)}
            className="block rounded-[8px] px-4 py-3 text-[17px] font-medium text-white transition hover:bg-white/10"
          >
            Services
          </Link>
        </div>

        <div>
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="block rounded-[8px] px-4 py-3 text-[17px] font-medium text-white transition hover:bg-white/10"
          >
            Contact
          </Link>
        </div>

        <div>
          <Link
            href="/appointment"
            onClick={() => setMenuOpen(false)}
            className="mt-2 block rounded-[8px] bg-white px-4 py-3 text-center text-[17px] font-semibold text-[#4d82d5]"
          >
            Book Appointment
          </Link>
        </div>

      </div>
    </div>
  )}
</header>
<section className="relative w-full overflow-hidden">
  <motion.div
    initial={{ opacity: 0, scale: 1.08 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1.2, ease: "easeOut" }}
    className="w-full"
  >
    <Image
      src="/images/bg.png"
      alt="Dr. Salu Dental Clinic"
      width={1920}
      height={900}
      priority
      className="block h-auto min-h-[650px] w-full object-cover object-center sm:min-h-[700px] lg:min-h-0 lg:object-contain"
    />
  </motion.div>

  <div className="absolute inset-0 bg-white/5" />

  <div className="absolute inset-0">
    <div className="mx-auto flex h-full max-w-[1600px] items-center px-5 sm:px-8 md:px-10 lg:px-[70px]">
      <motion.div
        initial={{ opacity: 0, x: -90 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.9,
          delay: 0.3,
          ease: "easeOut",
        }}
        className="w-full max-w-[760px] py-10 sm:py-14 lg:py-0"
      >
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mb-[16px] text-[16px] font-semibold text-[#4d82d5] sm:mb-[20px] sm:text-[18px] lg:mb-[22px] lg:text-[20px]"
        >
          Your Smile, Our Priority
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="text-[38px] font-bold leading-[1.08] tracking-[-1px] text-[#172d50] sm:text-[48px] sm:tracking-[-1.5px] md:text-[58px] lg:text-[72px] lg:tracking-[-2px]"
        >
          Quality Dental Care
          <br />
          <span className="text-[#4d82d5]">
            You Can Trust
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-[20px] max-w-[690px] text-[15px] leading-[1.75] text-black sm:mt-[24px] sm:text-[17px] sm:leading-[1.8] lg:mt-[28px] lg:text-[18px] lg:leading-[1.85]"
        >
          We offer high-quality dental care tailored for the whole
          family. From routine checkups to advanced treatments, our
          compassionate team ensures your smile stays healthy and
          confident.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-[25px] flex flex-wrap gap-[14px] sm:mt-[28px] sm:gap-[16px] lg:mt-[32px] lg:gap-[18px]"
        >
          <a
            href="/appointment"
            className="rounded-[9px] bg-[#4d82d5] px-[24px] py-[14px] text-[15px] font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-1 hover:bg-[#3d70bf] hover:shadow-lg sm:px-[28px] sm:py-[16px] sm:text-[16px] lg:px-[31px] lg:py-[17px] lg:text-[17px]"
          >
            Book Appointment
          </a>
        </motion.div>
      </motion.div>
    </div>
  </div>
</section>

      <section className="bg-[#edf3fc]">
  <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-5 py-[35px] sm:px-8 sm:py-[42px] md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:gap-8 lg:px-[70px] lg:py-12">

    <motion.div
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex items-center gap-4 sm:gap-5"
    >
      <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[#4d82d5] sm:h-[70px] sm:w-[70px] lg:h-[76px] lg:w-[76px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.09l-4.423-1.106a1.125 1.125 0 0 0-1.173.417l-.97 1.293a1.125 1.125 0 0 1-1.21.38 12.035 12.035 0 0 1-7.188-7.188 1.125 1.125 0 0 1 .38-1.21l1.293-.97c.363-.272.53-.734.417-1.173L6.968 3.14A1.125 1.125 0 0 0 5.878 2.25H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
          />
        </svg>
      </div>

      <div>
        <h3 className="text-[17px] font-semibold text-[#172d50] sm:text-[19px] lg:text-[20px]">
          Need Dental Services?
        </h3>

        <Link href="tel:+96899157979">
          <p className="mt-1 text-[14px] text-[#5f7693] sm:text-[15px] lg:text-[16px]">
            Call : +968 9915 7979
          </p>
        </Link>
      </div>
    </motion.div>


    <motion.div
      initial={{ opacity: 0, y: 70 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex items-center gap-4 sm:gap-5"
    >
      <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[#4d82d5] sm:h-[70px] sm:w-[70px] lg:h-[76px] lg:w-[76px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
        >
          <circle cx="12" cy="12" r="9" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 7v5l3 2"
          />
        </svg>
      </div>

      <div>
        <h3 className="text-[17px] font-semibold text-[#172d50] sm:text-[19px] lg:text-[20px]">
          Clinic Timings
        </h3>

        <p className="mt-1 text-[14px] leading-[1.6] text-[#5f7693] sm:text-[15px] lg:text-[16px]">
          Mon – Thu: 10:00 AM – 1:00 PM
          <br />
          4:00 PM – 10:00 PM
        </p>
      </div>
    </motion.div>


    <motion.div
      initial={{ opacity: 0, x: 70 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="flex items-center gap-4 sm:gap-5"
    >
      <div className="flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-full bg-[#4d82d5] sm:h-[70px] sm:w-[70px] lg:h-[76px] lg:w-[76px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.8"
          className="h-7 w-7 sm:h-8 sm:w-8 lg:h-9 lg:w-9"
        >
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3 7 9 6 9-6"
          />
        </svg>
      </div>

      <div>
        <h3 className="text-[17px] font-semibold text-[#172d50] sm:text-[19px] lg:text-[20px]">
          Email Us
        </h3>

        <a
          href="mailto:emily.brown@almajdsclinic.com"
          className="mt-1 block break-all text-[14px] text-[#5f7693] sm:text-[15px] lg:text-[16px]"
        >
          emily.brown@almajdsclinic.com
        </a>
      </div>
    </motion.div>

  </div>
</section>
     
      <section className="bg-white px-8 pb-24 lg:px-14">
  <div className="mx-auto max-w-[1400px]">

    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="mb-14 text-center"
    >
      <p className="mb-5  mt-8 text-[20px] font-semibold text-[#4d82d5]">
        Our Services
      </p>

      <h2 className="text-[44px] font-medium leading-tight text-[#172d50] sm:text-[52px] lg:text-[58px]">
        Healthy Smiles Start Here
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 gap-7 md:grid-cols-2 lg:grid-cols-4">

      <motion.div
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="group flex min-h-[485px] flex-col rounded-[24px] bg-[#f7f8fa] px-12 py-12 transition duration-300 hover:-translate-y-1"
      >
        <div className="mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            className="h-20 w-20"
          >
            <path
              d="M32 10c-7 0-12 5-12 12v7c0 4-2 7-5 10"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M44 29v-7c0-7-5-12-12-12"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M27 29h10v13H27z"
              stroke="#4d82d5"
              strokeWidth="2.5"
            />
            <path
              d="M22 42h20"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M27 42v9M37 42v9"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M17 29v9M47 29v9"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M13 38h8M43 38h8"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-[23px] font-medium text-[#172d50]">
            General Dentistry
          </h3>

          <p className="mt-5 text-[17px] leading-9 text-[#8aa0ba]">
            Complete oral care for every smile with cleanings,
            exams, and more.
          </p>
        </div>

        <div className="mt-auto pt-8">
          <a
            href="/services"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#aebed3] text-[27px] font-light text-[#172d50] transition hover:border-[#4d82d5] hover:bg-[#4d82d5] hover:text-white"
          >
            +
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="group flex min-h-[485px] flex-col rounded-[24px] bg-[#f7f8fa] px-12 py-12 transition duration-300 hover:-translate-y-1"
      >
        <div className="mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            className="h-20 w-20"
          >
            <path
              d="M32 12c-7 0-12 6-12 13 0 7 4 10 4 17 0 6 2 11 6 11 3 0 5-5 7-9 2 4 4 9 7 9 4 0 6-5 6-11 0-7 4-10 4-17 0-7-5-13-12-13-3 0-5 2-6 2s-3-2-4-2Z"
              stroke="#4d82d5"
              strokeWidth="2.5"
            />
            <path
              d="M13 18h7M16.5 14.5v7"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M47 20h6M50 17v6"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M18 46l-6 5 7-1 4 5"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M43 45l8 5-8 1"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-[23px] font-medium text-[#172d50]">
            Cosmetic Dentistry
          </h3>

          <p className="mt-5 text-[17px] leading-9 text-[#8aa0ba]">
            Enhance your smile’s beauty with whitening,
            veneers, and more.
          </p>
        </div>

        <div className="mt-auto pt-8">
          <a
            href="/services"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#aebed3] text-[27px] font-light text-[#172d50] transition hover:border-[#4d82d5] hover:bg-[#4d82d5] hover:text-white"
          >
            +
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-[485px] overflow-hidden rounded-[24px]"
      >
        <Image
          src="/images/service-img-1.jpg"
          alt="Dental treatment"
          height={180}
          width={220}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="group flex min-h-[485px] flex-col rounded-[24px] bg-[#f7f8fa] px-12 py-12 transition duration-300 hover:-translate-y-1"
      >
        <div className="mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            className="h-20 w-20"
          >
            <path
              d="M32 10c-7 0-12 5-12 12v7c0 4-2 7-5 10"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M44 29v-7c0-7-5-12-12-12"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M27 29h10v13H27z"
              stroke="#4d82d5"
              strokeWidth="2.5"
            />
            <path
              d="M22 42h20"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M27 42v9M37 42v9"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M17 29v9M47 29v9"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M13 38h8M43 38h8"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-[23px] font-medium text-[#172d50]">
            Pediatric Dentistry
          </h3>

          <p className="mt-5 text-[17px] leading-9 text-[#8aa0ba]">
            Gentle and fun dental care for kids to grow healthy,
            happy smiles.
          </p>
        </div>

        <div className="mt-auto pt-8">
          <a
            href="/services"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#aebed3] text-[27px] font-light text-[#172d50] transition hover:border-[#4d82d5] hover:bg-[#4d82d5] hover:text-white"
          >
            +
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: -70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="group flex min-h-[485px] flex-col rounded-[24px] bg-[#f7f8fa] px-12 py-12 transition duration-300 hover:-translate-y-1"
      >
        <div className="mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            className="h-20 w-20"
          >
            <path
              d="M32 10c-7 0-12 5-12 12v7c0 4-2 7-5 10"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M44 29v-7c0-7-5-12-12-12"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M27 29h10v13H27z"
              stroke="#4d82d5"
              strokeWidth="2.5"
            />
            <path
              d="M22 42h20"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M27 42v9M37 42v9"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-[23px] font-medium text-[#172d50]">
            Restorative Dentistry
          </h3>

          <p className="mt-5 text-[17px] leading-9 text-[#8aa0ba]">
            Repair and restore your teeth for lasting comfort and
            function.
          </p>
        </div>

        <div className="mt-auto pt-8">
          <a
            href="/services"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#aebed3] text-[27px] font-light text-[#172d50] transition hover:border-[#4d82d5] hover:bg-[#4d82d5] hover:text-white"
          >
            +
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="min-h-[485px] overflow-hidden rounded-[24px]"
      >
        <Image
          src="/images/service-img-2.jpg"
          alt="Dental treatment"
          height={180}
          width={220}
          className="h-full w-full object-cover transition duration-500 hover:scale-105"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="group flex min-h-[485px] flex-col rounded-[24px] bg-[#f7f8fa] px-12 py-12 transition duration-300 hover:-translate-y-1"
      >
        <div className="mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            className="h-20 w-20"
          >
            <path
              d="M32 12c-7 0-12 6-12 13 0 7 4 10 4 17 0 6 2 11 6 11 3 0 5-5 7-9 2 4 4 9 7 9 4 0 6-5 6-11 0-7 4-10 4-17 0-7-5-13-12-13-3 0-5 2-6 2s-3-2-4-2Z"
              stroke="#4d82d5"
              strokeWidth="2.5"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-[23px] font-medium text-[#172d50]">
            Preventive Dentistry
          </h3>

          <p className="mt-5 text-[17px] leading-9 text-[#8aa0ba]">
            Protect your smile with checkups, cleanings, and early
            detection.
          </p>
        </div>

        <div className="mt-auto pt-8">
          <a
            href="/services"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#aebed3] text-[27px] font-light text-[#172d50] transition hover:border-[#4d82d5] hover:bg-[#4d82d5] hover:text-white"
          >
            +
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 70 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="group flex min-h-[485px] flex-col rounded-[24px] bg-[#f7f8fa] px-12 py-12 transition duration-300 hover:-translate-y-1"
      >
        <div className="mb-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
            fill="none"
            className="h-20 w-20"
          >
            <path
              d="M13 24c5-5 12-7 19-7s14 2 19 7"
              stroke="#4d82d5"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
            <path
              d="M13 24v8c5 5 12 7 19 7s14-2 19-7v-8"
              stroke="#4d82d5"
              strokeWidth="2.5"
            />
            <path
              d="M18 27v6M25 26v7M32 26v7M39 26v7M46 27v6"
              stroke="#4d82d5"
              strokeWidth="2"
            />
          </svg>
        </div>

        <div>
          <h3 className="text-[23px] font-medium text-[#172d50]">
            Orthodontics
          </h3>

          <p className="mt-5 text-[17px] leading-9 text-[#8aa0ba]">
            Straighten your teeth with braces or aligners for a
            confident smile.
          </p>
        </div>

        <div className="mt-auto pt-8">
          <a
            href="/services"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[#aebed3] text-[27px] font-light text-[#172d50] transition hover:border-[#4d82d5] hover:bg-[#4d82d5] hover:text-white"
          >
            +
          </a>
        </div>
      </motion.div>

    </div>
  </div>
</section>

<section className="w-full bg-[#060d68] px-5 py-[55px] sm:px-8 sm:py-[65px] md:px-10 md:py-[75px] lg:px-[80px] lg:py-[90px]">
  <div className="mx-auto flex max-w-[1600px] flex-col items-center gap-[45px] lg:flex-row lg:items-start lg:gap-[55px]">

    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="flex w-full gap-4 sm:gap-5 lg:w-[48%] lg:gap-[24px]"
    >
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="w-1/2 overflow-hidden rounded-[16px] sm:rounded-[18px] lg:rounded-[20px]"
      >
        <Image
          src="/images/clinic-img-1.jpeg"
          alt="Dental treatment"
          width={600}
          height={650}
          className="h-[270px] w-full object-cover transition duration-700 hover:scale-[1.04] sm:h-[330px] md:h-[380px] lg:h-[500px]"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="mt-[40px] w-1/2 overflow-hidden rounded-[16px] sm:mt-[50px] sm:rounded-[18px] md:mt-[55px] lg:mt-[70px] lg:rounded-[20px]"
      >
        <Image
          src="/images/clinic-img-2.jpeg"
          alt="Dental clinic"
          width={600}
          height={650}
          className="h-[270px] w-full object-cover transition duration-700 hover:scale-[1.04] sm:h-[330px] md:h-[380px] lg:h-[500px]"
        />
      </motion.div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, x: 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="w-full lg:w-[52%]"
    >
      <p className="text-[15px] font-semibold text-[#4d82d5] sm:text-[16px] lg:text-[18px]">
        About Dr. Salu Sasikumar
      </p>

      <h1 className="mt-[15px] text-[30px] font-semibold leading-[1.12] tracking-[-1px] text-white sm:mt-[18px] sm:text-[36px] md:text-[42px] lg:mt-[20px] lg:text-[46px]">
        Dr. Salu Sasikumar, BDS
      </h1>

      <p className="mt-[18px] text-[14px] font-semibold leading-[1.6] text-[#aebce0] sm:text-[15px] md:text-[16px] lg:mt-[28px] lg:text-[17px]">
        Fellowship in Laser Surgery &amp; Dental Implants – Amrita School of Dentistry
      </p>

      <p className="mt-[14px] max-w-[850px] text-[14px] leading-[1.8] text-[#aebce0] sm:text-[15px] md:text-[16px] lg:mt-[10px] lg:text-[17px]">
        Dr. Salu Sasikumar is a dedicated dental professional with extensive
        experience in general, cosmetic, restorative, and surgical dentistry.
        He completed his BDS and further specialized through a Fellowship in
        Laser Surgery and Dental Implants from the prestigious Amrita School
        of Dentistry.
      </p>

      <div className="mt-[25px] grid grid-cols-1 gap-[12px] sm:grid-cols-2 sm:gap-x-[35px] sm:gap-y-[14px] lg:mt-[28px] lg:gap-x-[55px]">

        <div className="flex items-center gap-[12px]">
          <span className="text-[22px] font-bold leading-none text-[#4d82d5]">
            ✓
          </span>
          <span className="text-[15px] font-semibold text-white sm:text-[16px]">
            Cosmetic dentistry
          </span>
        </div>

        <div className="flex items-center gap-[12px]">
          <span className="text-[22px] font-bold leading-none text-[#4d82d5]">
            ✓
          </span>
          <span className="text-[15px] font-semibold text-white sm:text-[16px]">
            Dental implants
          </span>
        </div>

        <div className="flex items-center gap-[12px]">
          <span className="text-[22px] font-bold leading-none text-[#4d82d5]">
            ✓
          </span>
          <span className="text-[15px] font-semibold text-white sm:text-[16px]">
            Root canal treatments
          </span>
        </div>

        <div className="flex items-center gap-[12px]">
          <span className="text-[22px] font-bold leading-none text-[#4d82d5]">
            ✓
          </span>
          <span className="text-[15px] font-semibold text-white sm:text-[16px]">
            Oral surgical procedures
          </span>
        </div>

      </div>

      <Link
        href="/appointment"
        className="mt-[28px] inline-block rounded-[9px] bg-[#4d82d5] px-[24px] py-[13px] text-[15px] font-semibold text-white transition hover:bg-[#3d70bd] sm:mt-[30px] sm:px-[26px] sm:py-[14px] sm:text-[16px] lg:mt-[34px] lg:px-[28px] lg:py-[15px] lg:text-[17px]"
      >
        Book Appointment
      </Link>
    </motion.div>

  </div>
</section>

<section className="w-full overflow-hidden bg-white py-[75px] sm:py-[90px]">
  <div className="mx-auto w-full max-w-[1600px] px-5 sm:px-8 md:px-10 lg:px-[70px]">

    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="text-center"
    >
      <p className="text-[18px] font-semibold text-[#4d82d5] sm:text-[20px]">
        Testimonials
      </p>

      <h2 className="mt-[16px] text-[34px] font-semibold leading-[1.1] tracking-[-1.5px] text-[#172d50] sm:text-[44px] lg:mt-[20px] lg:text-[54px]">
        Our Happy Customers
      </h2>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
      className="relative mx-auto mt-[40px] w-full max-w-[1250px] sm:mt-[55px]"
    >
      <div className="overflow-hidden rounded-[28px]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${testimonialPage * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="w-full shrink-0 px-1 sm:px-3"
            >
              <div className="min-h-[400px] rounded-[28px] bg-[#f7f8fa] px-[28px] py-[32px] shadow-[0_8px_30px_rgba(23,45,80,0.06)] sm:min-h-[420px] sm:px-[55px] sm:py-[42px] lg:px-[75px] lg:py-[50px]">

                <div className="flex items-center justify-between">
                  <div className="text-[52px] font-bold leading-none text-[#4d82d5] sm:text-[58px]">
                    “
                  </div>

                  <div className="flex gap-[3px]">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        className="text-[20px] leading-none text-[#f5b82e] sm:text-[22px]"
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex min-h-[175px] items-center">
                  <p className="mt-[5px] max-w-[950px] text-[16px] leading-[1.8] text-[#71839d] sm:text-[17px] sm:leading-[1.9] lg:text-[18px]">
                    {testimonial.review}
                  </p>
                </div>

                <div className="mt-[20px] flex items-center gap-[14px] border-t border-[#e1e6ed] pt-[24px]">
                  <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-full bg-[#4d82d5] text-[15px] font-semibold text-white">
                    {testimonial.name
                      .split(" ")
                      .map((word) => word[0])
                      .slice(0, 2)
                      .join("")
                      .toUpperCase()}
                  </div>

                  <h3 className="text-[17px] font-semibold text-[#172d50] sm:text-[18px]">
                    {testimonial.name}
                  </h3>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={previousTestimonial}
        className="absolute left-[-8px] top-1/2 hidden h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[21px] text-[#172d50] shadow-[0_5px_20px_rgba(23,45,80,0.12)] transition hover:bg-[#023181] hover:text-white sm:flex lg:left-[-23px]"
      >
        ←
      </button>

      <button
        type="button"
        aria-label="Next testimonial"
        onClick={nextTestimonial}
        className="absolute right-[-8px] top-1/2 hidden h-[46px] w-[46px] -translate-y-1/2 items-center justify-center rounded-full bg-white text-[21px] text-[#172d50] shadow-[0_5px_20px_rgba(23,45,80,0.12)] transition hover:bg-[#023181] hover:text-white sm:flex lg:right-[-23px]"
      >
        →
      </button>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      viewport={{ once: true }}
      className="mt-[28px] flex justify-center gap-[8px]"
    >
      {testimonials.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Show testimonial ${index + 1}`}
          onClick={() => setTestimonialPage(index)}
          className={`h-[9px] rounded-full transition-all duration-300 ${
            testimonialPage === index
              ? "w-[28px] bg-[#4d82d5]"
              : "w-[9px] bg-[#cbd5e1]"
          }`}
        />
      ))}
    </motion.div>

  </div>
</section>
<section className="w-full overflow-hidden bg-white">
  <div className="grid min-h-[620px] w-full lg:grid-cols-2">
    <motion.div
      initial={{ opacity: 0, x: -70 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative flex min-h-[420px] items-center justify-center bg-[#f4f8fd] p-[25px] sm:p-[45px] lg:min-h-[620px] lg:p-[65px]"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="w-full max-w-[680px] overflow-hidden rounded-[22px] bg-white p-[10px] shadow-[0_15px_50px_rgba(2,49,129,0.12)]"
      >
        <Image
          src="/images/before-img-2.jpg"
          alt="Dental treatment"
          width={1000}
          height={700}
          className="h-auto w-full object-contain"
        />
      </motion.div>
    </motion.div>

    <AnimatePresence mode="wait">
      <motion.div
        key={currentSlide}
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 40 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex min-h-[420px] flex-col justify-center bg-[#023181] px-[30px] py-[55px] text-white sm:px-[55px] lg:min-h-[620px] lg:px-[75px]"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-[16px] font-semibold text-[#8db9f5] sm:text-[18px]"
        >
          {slides[currentSlide].category}
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-[16px] max-w-[550px] text-[38px] font-light leading-[1.12] tracking-[-1px] sm:text-[46px] lg:text-[54px]"
        >
          {slides[currentSlide].title}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-[22px] max-w-[570px] text-[15px] leading-[1.8] text-[#d7e5f7] sm:text-[16px]"
        >
          {slides[currentSlide].description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-[38px] grid max-w-[570px] grid-cols-2 gap-[10px] rounded-[6px] bg-white p-[7px]"
        >
          <div className="relative overflow-hidden">
            <Image
              src={slides[currentSlide].beforeImage}
              alt="Before dental treatment"
              width={500}
              height={300}
              className="h-[145px] w-full object-cover sm:h-[175px]"
            />

            <div className="absolute bottom-[10px] left-[10px] rounded-[4px] bg-[#023181] px-[12px] py-[5px] text-[11px] font-semibold tracking-[0.5px] text-white">
              BEFORE
            </div>
          </div>

          <div className="relative overflow-hidden">
            <Image
              src={slides[currentSlide].afterImage}
              alt="After dental treatment"
              width={500}
              height={300}
              className="h-[145px] w-full object-cover sm:h-[175px]"
            />

            <div className="absolute bottom-[10px] left-[10px] rounded-[4px] bg-[#4d82d5] px-[12px] py-[5px] text-[11px] font-semibold tracking-[0.5px] text-white">
              AFTER
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-[28px] flex items-center gap-[9px]"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-[8px] rounded-full transition-all duration-300 ${
                currentSlide === index
                  ? "w-[26px] bg-[#4d82d5]"
                  : "w-[8px] bg-[#8db9f5]"
              }`}
            />
          ))}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  </div>
</section>

<section className="w-full bg-white px-[90px] pb-[95px] pt-[80px]">
  <div className="mx-auto w-full max-w-[1600px]">

    <motion.div
      initial={{ opacity: 0, y: -45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="text-center"
    >
      <p className="text-[20px] font-semibold leading-[1.4] text-[#4d82d5]">
        Everything You Need to Know
      </p>

      <h2 className="mt-[22px] text-[56px] font-semibold leading-[1.08] tracking-[-2.5px] text-[#172d50]">
        Frequently Asked Questions
      </h2>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="mt-[70px]"
    >
      {[
        {
          question: "How often should I visit the dentist?",
          answer:
            "We generally recommend visiting your dentist every six months for a routine checkup and professional cleaning.",
        },
        {
          question: "What should I do in a dental emergency?",
          answer:
            "Contact our dental team as soon as possible. We will help you manage the situation and arrange an urgent appointment when needed.",
        },
        {
          question: "Do you offer services for kids?",
          answer:
            "Yes, we provide gentle and comfortable dental care for children of different ages.",
        },
        {
          question: "What are my options for replacing missing teeth?",
          answer:
            "Depending on your needs, options may include dental implants, bridges, and dentures.",
        },
        {
          question: "Is teeth whitening safe?",
          answer:
            "Professional teeth whitening is generally safe when performed under appropriate dental guidance.",
        },
      ].map((faq, index) => (
        <motion.div
          key={faq.question}
          initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="border-b border-[#d8d8d8]"
        >
          <button
            onClick={() =>
              setOpenFaq(openFaq === index ? null : index)
            }
            className="flex w-full items-center justify-between py-[25px] text-left"
          >
            <span className="text-[21px] font-semibold leading-[1.4] text-[#17385f]">
              {faq.question}
            </span>

            <span
              className={`ml-6 flex h-[24px] w-[24px] shrink-0 items-center justify-center text-[20px] text-[#102d70] transition-transform duration-300 ${
                openFaq === index ? "rotate-180" : ""
              }`}
            >
              ⌄
            </span>
          </button>

          <div
            className={`grid transition-all duration-300 ${
              openFaq === index
                ? "grid-rows-[1fr] pb-[24px]"
                : "grid-rows-[0fr]"
            }`}
          >
            <div className="overflow-hidden">
              <p className="max-w-[1100px] text-[17px] leading-[1.8] text-[#7f91a8]">
                {faq.answer}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>

  </div>
</section>

<section className="w-full bg-[#f7faff] px-6 py-[90px] sm:px-10 lg:px-[80px]">
  <div className="mx-auto max-w-[1600px]">

    <motion.div
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="mb-[55px] text-center"
    >
      <p className="mb-[12px] text-[18px] font-semibold text-[#4d82d5]">
        Our Blog
      </p>

      <h2 className="text-[34px] font-bold leading-tight text-[#172d50] sm:text-[42px]">
        Dental Tips & Insights
      </h2>

      <p className="mx-auto mt-[18px] max-w-[700px] text-[16px] leading-[1.8] text-[#8a9db6]">
        Helpful dental tips, advice, and insights to help you maintain a
        healthy and confident smile.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 gap-[28px] md:grid-cols-2 lg:grid-cols-3">

      <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        whileHover={{ y: -8 }}
        className="overflow-hidden rounded-[20px] bg-white shadow-sm"
      >
        <div className="h-[250px] w-full overflow-hidden">
          <Image
            src="/images/blog-img.jpg"
            alt="Dental checkups"
            width={700}
            height={500}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div className="p-[28px]">
          <p className="mb-[12px] text-[14px] font-semibold text-[#4d82d5]">
            Dental Care
          </p>

          <h3 className="text-[22px] font-semibold leading-[1.4] text-[#172d50]">
            How Regular Dental Checkups Protect Your Smile
          </h3>

          <p className="mt-[14px] text-[15px] leading-[1.8] text-[#8a9db6]">
            Learn why regular dental checkups are important for maintaining
            healthy teeth and gums.
          </p>

          <Link
            href="/blog/dental-checkups"
            className="mt-[22px] inline-block text-[15px] font-semibold text-[#4d82d5]"
          >
            Read More →
          </Link>
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        whileHover={{ y: -8 }}
        className="overflow-hidden rounded-[20px] bg-white shadow-sm"
      >
        <div className="h-[250px] w-full overflow-hidden">
          <Image
            src="/images/blog-img-2.jpg"
            alt="Healthy teeth and gums"
            width={700}
            height={500}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div className="p-[28px]">
          <p className="mb-[12px] text-[14px] font-semibold text-[#4d82d5]">
            Oral Health
          </p>

          <h3 className="text-[22px] font-semibold leading-[1.4] text-[#172d50]">
            5 Simple Tips for Healthier Teeth and Gums
          </h3>

          <p className="mt-[14px] text-[15px] leading-[1.8] text-[#8a9db6]">
            Discover simple daily habits that can help keep your teeth and
            gums healthy.
          </p>

          <Link
            href="/blog/healthy-teeth-gums"
            className="mt-[22px] inline-block text-[15px] font-semibold text-[#4d82d5]"
          >
            Read More →
          </Link>
        </div>
      </motion.article>

      <motion.article
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        whileHover={{ y: -8 }}
        className="overflow-hidden rounded-[20px] bg-white shadow-sm"
      >
        <div className="h-[250px] w-full overflow-hidden">
          <Image
            src="/images/blog--img-3.jpg"
            alt="Professional teeth cleaning"
            width={700}
            height={500}
            className="h-full w-full object-cover transition duration-500 hover:scale-105"
          />
        </div>

        <div className="p-[28px]">
          <p className="mb-[12px] text-[14px] font-semibold text-[#4d82d5]">
            Preventive Care
          </p>

          <h3 className="text-[22px] font-semibold leading-[1.4] text-[#172d50]">
            How Professional Teeth Cleaning Keeps Your Smile Healthy
          </h3>

          <p className="mt-[14px] text-[15px] leading-[1.8] text-[#8a9db6]">
            Understand how professional dental cleaning supports long-term
            oral health.
          </p>

          <Link
            href="/blog/preventive-dental-care"
            className="mt-[22px] inline-block text-[15px] font-semibold text-[#4d82d5]"
          >
            Read More →
          </Link>
        </div>
      </motion.article>

    </div>
  </div>
</section>

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
       
<div className="flex items-center gap-5">
 

</div>
        
        
      </div>
    </div>

    <div>
      <h3 className="text-[18px] font-semibold text-white">
        Company
      </h3>

      <div className="mt-[24px] flex flex-col gap-[13px]">
        <Link href="/" className="text-[16px] text-[#b9d0ef] transition hover:text-white">
          Home
        </Link>

        <Link href="/about" className="text-[16px] text-[#b9d0ef] transition hover:text-white">
          About Us
        </Link>

        <Link href="/services" className="text-[16px] text-[#b9d0ef] transition hover:text-white">
          Our Services
        </Link>

        <Link href="/contact" className="text-[16px] text-[#b9d0ef] transition hover:text-white">
          Contact
        </Link>

        <Link href="/appointment" className="text-[16px] text-[#b9d0ef] transition hover:text-white">
          Book Appointment
        </Link>
      </div>
    </div>

    <div>
      <h3 className="text-[18px] font-semibold text-white">
        Our Services
      </h3>

      <div className="mt-[24px] flex flex-col gap-[13px]">
        <Link href="/services" className="text-[16px] text-[#b9d0ef] transition hover:text-white">
          General Dentistry
        </Link>

        <Link href="/services" className="text-[16px] text-[#b9d0ef] transition hover:text-white">
          Cosmetic Dentistry
        </Link>

        <Link href="/services" className="text-[16px] text-[#b9d0ef] transition hover:text-white">
          Pediatric Dentistry
        </Link>

        <Link href="/services" className="text-[16px] text-[#b9d0ef] transition hover:text-white">
          Restorative Dentistry
        </Link>

        <Link href="/services" className="text-[16px] text-[#b9d0ef] transition hover:text-white">
          Preventive Dentistry
        </Link>

        <Link href="/services" className="text-[16px] text-[#b9d0ef] transition hover:text-white">
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
            <span className="text-[17px] text-[#6fa3f5]">
              📍
            </span>

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
            Flat no.101, First Floor P.O. 415,
            Ghubrah Street, South Al Ghubrah,
            Opposite to Sultan Qaboos Stadium,
            Muscat, OM 132, Oman
          </a>
        </div>

        <div>
          <div className="flex items-center gap-[9px]">
            <span className="text-[17px] text-[#6fa3f5]">
              ☎
            </span>

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
            <span className="text-[17px] text-[#6fa3f5]">
              ✉
            </span>

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
</main>
  );
}