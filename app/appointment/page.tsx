"use client";

import { motion } from "motion/react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

type TimeSlot = {
  start_time: string;
  end_time: string;
  available?: boolean;
};

type ApiSlot =
  | string
  | {
      start_time?: string;
      end_time?: string;
      start?: string;
      end?: string;
      time?: string;
      from?: string;
      to?: string;
      available?: boolean;
    };

export default function Appointment() {
  const [selectedTime, setSelectedTime] = useState("");
  const [services, setServices] = useState<string[]>([]);
  const [timeSlots, setTimeSlots] = useState<TimeSlot[]>([]);
  const [bookingLoading, setBookingLoading] = useState(false);
  const [slotsLoading, setSlotsLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [slotsError, setSlotsError] = useState("");

  const today = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/booking/services`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );

        const result = await response.json();

        console.log("Services status:", response.status);
        console.log("Services response:", result);

        if (!response.ok) {
          throw new Error(result.message || "Failed to load services.");
        }

        if (result.success && Array.isArray(result.data)) {
          setServices(result.data);
        } else {
          setServices([]);
        }
      } catch (error) {
        console.error("Failed to fetch services:", error);
        setServices([]);
      }
    };

    fetchServices();
  }, []);

  useEffect(() => {
    if (!selectedDate) {
      return;
    }

    const fetchAvailableSlots = async () => {
      setSlotsLoading(true);
      setSlotsError("");

      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/booking/available-slots?date=${selectedDate}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
            },
          }
        );

        const result = await response.json();

        console.log("Slots status:", response.status);
        console.log("Slots response:", result);

        if (!response.ok) {
          throw new Error(
            result.message || "Failed to load available slots."
          );
        }

        if (result.success && Array.isArray(result.data)) {
          const slots: TimeSlot[] = result.data
            .map((slot: ApiSlot): TimeSlot | null => {
              if (typeof slot === "string") {
                return {
                  start_time: slot,
                  end_time: "",
                  available: true,
                };
              }

              const startTime =
                slot.start_time ||
                slot.start ||
                slot.time ||
                slot.from ||
                "";

              const endTime =
                slot.end_time ||
                slot.end ||
                slot.to ||
                "";

              if (!startTime) {
                return null;
              }

              return {
                start_time: startTime,
                end_time: endTime,
                available:
                  slot.available === undefined ? true : slot.available,
              };
            })
            .filter(
              (slot: TimeSlot | null): slot is TimeSlot => slot !== null
            );

          setTimeSlots(slots);

          if (slots.length === 0) {
            setSlotsError("No available time slots for this date.");
          }
        } else {
          setTimeSlots([]);
          setSlotsError("No available time slots for this date.");
        }
      } catch (error) {
        console.error("Failed to fetch available slots:", error);
        setTimeSlots([]);
        setSlotsError("Unable to load available time slots.");
      } finally {
        setSlotsLoading(false);
      }
    };

    fetchAvailableSlots();
  }, [selectedDate]);

  const handleDateChange = (value: string) => {
    setSelectedDate(value);
    setSelectedTime("");
    setTimeSlots([]);
    setSlotsError("");
  };

  const formatTime = (time: string) => {
    if (!time) {
      return "";
    }

    const cleanTime = time.trim().toUpperCase();

    if (cleanTime.includes("AM") || cleanTime.includes("PM")) {
      return cleanTime;
    }

    const timeParts = cleanTime.split(":");
    const hours = Number(timeParts[0]);
    const minuteValue = Number(timeParts[1] || 0);

    if (Number.isNaN(hours)) {
      return cleanTime;
    }

    const period = hours >= 12 ? "PM" : "AM";
    const formattedHour = hours % 12 || 12;

    return `${formattedHour}:${String(minuteValue).padStart(
      2,
      "0"
    )} ${period}`;
  };

  const convertTo24Hour = (time: string) => {
    if (!time) {
      return "";
    }

    const cleanTime = time.trim().toUpperCase();

    if (!cleanTime.includes("AM") && !cleanTime.includes("PM")) {
      const timeParts = cleanTime.split(":");

      const hours = Number(timeParts[0]);
      const minuteValue = Number(timeParts[1] || 0);

      return `${String(hours).padStart(2, "0")}:${String(
        minuteValue
      ).padStart(2, "0")}`;
    }

    const parts = cleanTime.split(" ");
    const timePart = parts[0];
    const period = parts[1];

    const timeParts = timePart.split(":");

    let hours = Number(timeParts[0]);
    const minuteValue = Number(timeParts[1] || 0);

    if (period === "PM" && hours !== 12) {
      hours += 12;
    }

    if (period === "AM" && hours === 12) {
      hours = 0;
    }

    return `${String(hours).padStart(2, "0")}:${String(
      minuteValue
    ).padStart(2, "0")}`;
  };

  const addThirtyMinutes = (time: string) => {
    const timeParts = time.split(":");

    const hours = Number(timeParts[0]);
    const minutes = Number(timeParts[1] || 0);

    const totalMinutes = hours * 60 + minutes + 30;

    const finalHours = Math.floor(totalMinutes / 60) % 24;
    const finalMinutes = totalMinutes % 60;

    return `${String(finalHours).padStart(2, "0")}:${String(
      finalMinutes
    ).padStart(2, "0")}`;
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const form = e.currentTarget;

    if (!selectedDate) {
      toast.error("Please select a date.");
      return;
    }

    if (!selectedTime) {
      toast.error("Please select a valid available time slot.");
      return;
    }

    const selectedSlot = timeSlots.find(
      (slot) => slot.start_time === selectedTime
    );

    if (!selectedSlot) {
      toast.error("Please select a valid available time slot.");
      return;
    }

    setBookingLoading(true);

    try {
      const formData = new FormData(form);

      const startTime = convertTo24Hour(
        selectedSlot.start_time
      );

      const endTime = selectedSlot.end_time
        ? convertTo24Hour(selectedSlot.end_time)
        : addThirtyMinutes(startTime);

      const bookingData = {
        name: String(formData.get("name") || ""),
        phone: String(formData.get("phone") || ""),
        email: String(formData.get("email") || ""),
        service: String(formData.get("service") || ""),
        age: Number(formData.get("age")),
        gender: String(
          formData.get("gender") || ""
        ).toLowerCase(),
        reason: String(formData.get("symptoms") || ""),
        appointment_date: String(
          formData.get("bookingDate") || ""
        ),
        start_time: startTime,
        end_time: endTime,
      };

      console.log("Booking Data:", bookingData);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/booking`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bookingData),
        }
      );

      const result = await response.json();

      console.log("Booking status:", response.status);
      console.log("Booking response:", result);

      if (!response.ok) {
        if (result.errors) {
          const errorMessages = Object.values(result.errors)
            .flat()
            .filter(Boolean)
            .join("\n");

          toast.error(
            errorMessages ||
              result.message ||
              "Please check your appointment details."
          );
        } else {
          toast.error(
            result.message ||
              "Failed to book appointment."
          );
        }

        return;
      }

      const appointmentNumber =
        result.data?.appointment_number || "N/A";

      toast.success(
        `Appointment booked successfully!\nAppointment No: ${appointmentNumber}`,
        {
          duration: 3000,
        }
      );

      form.reset();
      setSelectedTime("");
      setSelectedDate("");
      setTimeSlots([]);
      setSlotsError("");
    } catch (error) {
      console.error("Booking failed:", error);
      toast.error(
        "Something went wrong. Please try again."
      );
    } finally {
      setBookingLoading(false);
    }
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white">
      <Toaster position="top-right" />

      <Header />

      <section className="w-full px-5 py-[45px] sm:px-8 sm:py-[55px] md:px-10 md:py-[65px] lg:px-[80px] lg:py-[75px]">
        <div className="mx-auto max-w-[1080px]">
          <motion.div
            initial={{ opacity: 0, y: -35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              ease: "easeOut",
            }}
            className="text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
              }}
              className="text-[14px] font-semibold text-[#4d82d5] sm:text-[15px] lg:text-[16px]"
            >
              Appointment
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.3,
              }}
              className="mt-[10px] text-[28px] font-semibold leading-[1.15] tracking-[-0.8px] text-[#172d50] sm:text-[34px] md:text-[40px] lg:mt-[12px] lg:text-[44px]"
            >
              Book Your Appointment
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.45,
              }}
              className="mx-auto mt-[12px] max-w-[620px] text-[13px] leading-[1.7] text-[#5f7693] sm:text-[14px] md:text-[15px]"
            >
              Schedule your dental appointment with Dr. Salu
              and take the next step towards a healthy,
              confident smile.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            transition={{
              duration: 1,
              delay: 0.3,
              ease: "easeOut",
            }}
            className="mt-[28px] rounded-[16px] bg-[#eef4fc] px-[18px] py-[22px] sm:mt-[34px] sm:px-[28px] sm:py-[28px] md:px-[36px] md:py-[32px] lg:rounded-[20px] lg:px-[44px] lg:py-[38px]"
          >
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-x-[22px] gap-y-[15px] sm:grid-cols-2">

                <motion.div
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.1,
                  }}
                >
                  <label
                    htmlFor="name"
                    className="mb-[5px] block text-[14px] font-medium text-[#172d50]"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    required
                    className="h-[50px] w-full rounded-[7px] border border-[#d8e1ee] bg-white px-[15px] text-[14px] text-[#172d50] outline-none placeholder:text-[#9aaabd] focus:border-[#4d82d5]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15,
                  }}
                >
                  <label
                    htmlFor="phone"
                    className="mb-[5px] block text-[14px] font-medium text-[#172d50]"
                  >
                    Phone Number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    required
                    className="h-[50px] w-full rounded-[7px] border border-[#d8e1ee] bg-white px-[15px] text-[14px] text-[#172d50] outline-none placeholder:text-[#9aaabd] focus:border-[#4d82d5]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.2,
                  }}
                >
                  <label
                    htmlFor="service"
                    className="mb-[5px] block text-[14px] font-medium text-[#172d50]"
                  >
                    Services
                  </label>

                  <select
                    id="service"
                    name="service"
                    required
                    defaultValue=""
                    className="h-[50px] w-full rounded-[7px] border border-[#d8e1ee] bg-white px-[15px] text-[14px] text-[#172d50] outline-none focus:border-[#4d82d5]"
                  >
                    <option value="" disabled>
                      Select a service
                    </option>

                    {services.map((service) => (
                      <option
                        key={service}
                        value={service}
                      >
                        {service}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.25,
                  }}
                >
                  <label
                    htmlFor="email"
                    className="mb-[5px] block text-[14px] font-medium text-[#172d50]"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email address"
                    className="h-[50px] w-full rounded-[7px] border border-[#d8e1ee] bg-white px-[15px] text-[14px] text-[#172d50] outline-none placeholder:text-[#9aaabd] focus:border-[#4d82d5]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -35 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.3,
                  }}
                >
                  <label
                    htmlFor="age"
                    className="mb-[5px] block text-[14px] font-medium text-[#172d50]"
                  >
                    Age{" "}
                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <input
                    id="age"
                    name="age"
                    type="number"
                    placeholder="Enter your age"
                    required
                    min="0"
                    max="130"
                    className="h-[50px] w-full rounded-[7px] border border-[#d8e1ee] bg-white px-[15px] text-[14px] text-[#172d50] outline-none placeholder:text-[#9aaabd] focus:border-[#4d82d5]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 35 }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.7,
                    delay: 0.35,
                  }}
                >
                  <label
                    htmlFor="gender"
                    className="mb-[5px] block text-[14px] font-medium text-[#172d50]"
                  >
                    Gender{" "}
                    <span className="text-red-500">
                      *
                    </span>
                  </label>

                  <select
                    id="gender"
                    name="gender"
                    required
                    defaultValue=""
                    className="h-[50px] w-full rounded-[7px] border border-[#d8e1ee] bg-white px-[15px] text-[14px] text-[#172d50] outline-none focus:border-[#4d82d5]"
                  >
                    <option value="" disabled>
                      Select gender
                    </option>

                    <option value="female">
                      Female
                    </option>

                    <option value="male">
                      Male
                    </option>

                    <option value="other">
                      Other
                    </option>
                  </select>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                  }}
                  className="sm:col-span-2"
                >
                  <p className="mb-[5px] text-[14px] font-medium text-[#172d50]">
                    Have you visited Al Majd Clinic before?
                  </p>

                  <div className="grid grid-cols-1 gap-[8px] sm:grid-cols-2">
                    <label className="flex h-[43px] cursor-pointer items-center rounded-[7px] border border-[#d8e1ee] bg-white px-[14px] text-[13px] text-[#172d50]">
                      <input
                        type="radio"
                        name="visitedBefore"
                        value="Yes, Existing"
                        className="mr-[8px] h-[15px] w-[15px] accent-[#4d82d5]"
                      />
                      Yes, Existing
                    </label>

                    <label className="flex h-[43px] cursor-pointer items-center rounded-[7px] border border-[#d8e1ee] bg-white px-[14px] text-[13px] text-[#172d50]">
                      <input
                        type="radio"
                        name="visitedBefore"
                        value="No, First Visit"
                        className="mr-[8px] h-[15px] w-[15px] accent-[#4d82d5]"
                      />
                      No, First Visit
                    </label>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.45,
                  }}
                  className="sm:col-span-2"
                >
                  <label
                    htmlFor="symptoms"
                    className="mb-[5px] block text-[14px] font-medium text-[#172d50]"
                  >
                    Symptoms or Special Requests
                    (Optional)
                  </label>

                  <textarea
                    id="symptoms"
                    name="symptoms"
                    rows={3}
                    placeholder="Tell us about your symptoms or special requests..."
                    className="h-[78px] w-full resize-none rounded-[7px] border border-[#d8e1ee] bg-white px-[15px] py-[10px] text-[14px] leading-[1.5] text-[#172d50] outline-none placeholder:text-[#9aaabd] focus:border-[#4d82d5]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                  }}
                  className="sm:col-span-2"
                >
                  <label
                    htmlFor="bookingDate"
                    className="mb-[5px] block text-[14px] font-medium text-[#172d50]"
                  >
                    Book A Date
                  </label>

                  <input
                    id="bookingDate"
                    name="bookingDate"
                    type="date"
                    required
                    min={today}
                    value={selectedDate}
                    onChange={(e) =>
                      handleDateChange(e.target.value)
                    }
                    className="h-[50px] w-full rounded-[7px] border border-[#d8e1ee] bg-white px-[15px] text-[14px] text-[#172d50] outline-none focus:border-[#4d82d5]"
                  />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                    amount: 0.2,
                  }}
                  transition={{
                    duration: 0.8,
                    delay: 0.55,
                  }}
                  className="sm:col-span-2"
                >
                  <p className="mb-[5px] text-[14px] font-medium text-[#172d50]">
                    Available Time Slots
                  </p>

                  {!selectedDate ? (
                    <div className="rounded-[7px] border border-[#d8e1ee] bg-white px-[16px] py-[11px] text-[13px] text-[#8a9db6]">
                      Please select a date to see
                      available time slots.
                    </div>
                  ) : slotsLoading ? (
                    <div className="rounded-[7px] border border-[#d8e1ee] bg-white px-[16px] py-[11px] text-[13px] text-[#8a9db6]">
                      Loading available time slots...
                    </div>
                  ) : slotsError ? (
                    <div className="rounded-[7px] border border-[#d8e1ee] bg-white px-[16px] py-[11px] text-[13px] text-[#8a9db6]">
                      {slotsError}
                    </div>
                  ) : timeSlots.length === 0 ? (
                    <div className="rounded-[7px] border border-[#d8e1ee] bg-white px-[16px] py-[11px] text-[13px] text-[#8a9db6]">
                      No available time slots for this
                      date.
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-[8px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                      {timeSlots.map((slot, index) => {
                        const isAvailable =
                          slot.available !== false;

                        const isSelected =
                          selectedTime ===
                          slot.start_time;

                        return (
                          <motion.button
                            key={`${slot.start_time}-${slot.end_time}-${index}`}
                            type="button"
                            disabled={!isAvailable}
                            onClick={() => {
                              if (isAvailable) {
                                setSelectedTime(
                                  slot.start_time
                                );
                              }
                            }}
                            initial={{
                              opacity: 0,
                              y: 15,
                            }}
                            whileInView={{
                              opacity: 1,
                              y: 0,
                            }}
                            viewport={{
                              once: true,
                            }}
                            transition={{
                              duration: 0.5,
                              delay: 0.05 * index,
                            }}
                            whileHover={
                              isAvailable
                                ? { y: -3 }
                                : {}
                            }
                            whileTap={
                              isAvailable
                                ? { scale: 0.97 }
                                : {}
                            }
                            className={`h-[44px] rounded-[7px] border text-[13px] font-medium transition sm:text-[14px] ${
                              !isAvailable
                                ? "cursor-not-allowed border-[#e1e5eb] bg-[#f3f5f8] text-[#a8b2bf]"
                                : isSelected
                                  ? "border-[#4d82d5] bg-[#4d82d5] text-white"
                                  : "border-[#d8e1ee] bg-white text-[#172d50] hover:border-[#4d82d5] hover:text-[#4d82d5]"
                            }`}
                          >
                            {formatTime(
                              slot.start_time
                            )}
                          </motion.button>
                        );
                      })}
                    </div>
                  )}

                  <input
                    type="hidden"
                    name="bookingTime"
                    value={selectedTime}
                  />
                </motion.div>
              </div>

              <motion.button
                type="submit"
                disabled={bookingLoading}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.65,
                }}
                whileHover={
                  !bookingLoading
                    ? { y: -3 }
                    : {}
                }
                whileTap={
                  !bookingLoading
                    ? { scale: 0.98 }
                    : {}
                }
                className={`mt-[20px] rounded-[7px] px-[30px] py-[12px] text-[15px] font-semibold text-white transition ${
                  bookingLoading
                    ? "cursor-not-allowed bg-[#8aaee0]"
                    : "bg-[#4d82d5] hover:bg-[#3d70bd]"
                }`}
              >
                {bookingLoading
                  ? "Booking..."
                  : "Book Appointment"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}