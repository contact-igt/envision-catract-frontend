"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Loader, CheckCircle, User, Mail, Phone, MessageSquare, Stethoscope, MapPin, Clock } from "lucide-react";
import Link from "next/link";
import { companyData } from "@/constants/siteData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Select from "../ui/Select";
import Button from "../ui/Button";



const SERVICES = [
  "Eye Examination",
  "Cataract Surgery",
  "LASIK / Refractive Surgery",
  "Glaucoma Treatment",
  "Cornea Services",
  "Vitreo-Retina & ROP Care",
  "Dental Check-up",
  "Teeth Whitening",
  "Dental Implants",
  "Braces & Aligners",
  "Root Canal Treatment",
  "Tooth Extraction",
  "Other",
];

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(2, "Name must be at least 2 characters"),
  service: yup.string().required("Please select a service"),
  email: yup.string().required("Email is required").email("Enter a valid email address"),
  mobile: yup
    .string()
    .required("Mobile number is required")
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number"),
  message: yup.string().required("Message is required").min(10, "Message should be at least 10 characters"),
});

const INFO_CARDS = [
  {
    Icon: MapPin,
    label: "Address",
    value: companyData.fullAddress,
    href: companyData.maps,
    external: true,
  },
  {
    Icon: Phone,
    label: "Phone",
    value: companyData.phone,
    href: `tel:${companyData.phoneRaw}`,
    external: false,
  },
  {
    Icon: Mail,
    label: "Email",
    value: companyData.email,
    href: `mailto:${companyData.email}`,
    external: false,
  },
];

interface FieldProps {
  icon: any;
  label: string;
  error?: string;
  children: React.ReactNode;
}

function Field({ icon: Icon, label, error, children }: FieldProps) {
  return (
    <div>
      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
        {label}
      </label>
      <div className="relative">
        <div className="absolute left-3 top-4 text-gray-400 pointer-events-none">
          <Icon className="w-4 h-4" />
        </div>
        {children}
      </div>
      {error && (
        <p className="mt-1 text-xs text-red-500">{error}</p>
      )}
    </div>
  );
}

export default function ContactSection() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      service: "",
      email: "",
      mobile: "",
      message: "",
    },
  });

  const onSubmit = async (values: any) => {
    try {
      setServerError(null);
      const ipRes = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipRes.json();
      const ipAddress = ipData.ip || "";

      const utmSource =
        (typeof window !== "undefined" && localStorage.getItem("utm_source")) || "";

      const newFormData = {
        Name: values.name,
        MobileNumber: values.mobile,
        Service: values.service,
        Email: values.email,
        Message: values.message,
        IP_Address: ipAddress,
        utm_source: utmSource,
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbxeBW9TtWSEfdmQKfRIC8DLMxUhrxZqZ_Auwh2QOH78xvWMGc1bMZqkp7Ze9yF8KK0meA/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(newFormData).toString(),
        }
      );

      reset();
      router.push("/thank-you");
    } catch (err) {
      console.error(err);
      setServerError("Something went wrong. Please try again.");
    }
  };

  return (
    <>
      {/* ── Page Hero ── */}
      <div className="relative h-64 sm:h-80 bg-gray-900 overflow-hidden">
        <img
          src="/assets/herobanner1.png"
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-center opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-cyan-300 text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3">
            {companyData.name}
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-widest uppercase mb-4 drop-shadow-lg">
            Contact Us
          </h1>
          <nav className="flex items-center gap-2 text-sm font-medium">
            <Link href="/" className="text-cyan-300 hover:text-white transition-colors">
              Home
            </Link>
            <span className="text-gray-400">•</span>
            <span className="text-cyan-400">Contact</span>
          </nav>
        </div>
      </div>

      {/* ── Info Cards Strip ── */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {INFO_CARDS.map((card) => (
              <div
                key={card.label}
                className="flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:border-cyan-200 hover:shadow-sm transition-all duration-300"
              >
                <div className="w-14 h-14 bg-cyan-50 rounded-full border-2 border-cyan-100 flex items-center justify-center text-cyan-600">
                  <card.Icon size={26} strokeWidth={1.8} />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">
                    {card.label}
                  </p>
                  {card.href ? (
                    <a
                      href={card.href}
                      target={card.external ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="text-gray-700 text-sm font-medium hover:text-cyan-600 transition-colors leading-relaxed"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-gray-700 text-sm font-medium leading-relaxed">
                      {card.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Get In Touch + Form ── */}
      <section className="py-16 sm:py-20 bg-[#e8f4f8]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row rounded-2xl overflow-hidden shadow-md">

            {/* Left — Info panel */}
            <div className="lg:w-5/12 bg-cyan-700 p-10 flex flex-col justify-between">
              <div>
                <p className="text-cyan-200 text-sm font-semibold uppercase tracking-widest mb-3">
                  Reach Out to Us
                </p>
                <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5 leading-snug">
                  We&apos;re Here to Help You
                </h2>
                <p className="text-cyan-100 text-sm leading-relaxed mb-8">
                  Have a question or want to book an appointment? Fill out the form
                  and our team will get back to you as soon as possible.
                </p>

                <ul className="space-y-5">
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shrink-0 text-white">
                      <MapPin size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-cyan-200 text-xs font-semibold uppercase tracking-wide mb-0.5">Address</p>
                      <p className="text-white text-sm leading-relaxed">{companyData.fullAddress}</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shrink-0 text-white">
                      <Phone size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-cyan-200 text-xs font-semibold uppercase tracking-wide mb-0.5">Phone</p>
                      <a href={`tel:${companyData.phoneRaw}`} className="text-white text-sm hover:text-cyan-200 transition-colors">
                        {companyData.phone}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shrink-0 text-white">
                      <Mail size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-cyan-200 text-xs font-semibold uppercase tracking-wide mb-0.5">Email</p>
                      <a href={`mailto:${companyData.email}`} className="text-white text-sm hover:text-cyan-200 transition-colors break-all">
                        {companyData.email}
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-cyan-600 rounded-lg flex items-center justify-center shrink-0 text-white">
                      <Clock size={18} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-cyan-200 text-xs font-semibold uppercase tracking-wide mb-0.5">Working Hours</p>
                      <p className="text-white text-sm">Mon - Sat: 10:00 AM - 7:00 PM</p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Decorative circles */}
              <div className="mt-10 flex gap-3">
                <div className="w-3 h-3 rounded-full bg-white opacity-30" />
                <div className="w-3 h-3 rounded-full bg-white opacity-60" />
                <div className="w-3 h-3 rounded-full bg-white" />
              </div>
            </div>

            {/* Right — Form */}
            <div className="lg:w-7/12 bg-white p-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Get in touch</h2>
              <p className="text-gray-400 text-sm mb-8">
                Fill in the details below and we&apos;ll respond within 24 hours.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
                <Field icon={User} label="Name" error={errors.name?.message}>
                  <input
                    type="text"
                    {...register("name")}
                    placeholder="Your full name"
                    className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </Field>

                <Field icon={Stethoscope} label="Select Service" error={errors.service?.message}>
                  <Select
                    {...register("service")}
                    options={SERVICES}
                    placeholder="-- Choose a service --"
                    className="!rounded-lg !border-gray-200 !py-3 !text-sm !text-gray-700 !bg-white !pl-9"
                  />
                </Field>

                <Field icon={Mail} label="Email" error={errors.email?.message}>
                  <input
                    type="email"
                    {...register("email")}
                    placeholder="your@email.com"
                    className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all"
                  />
                </Field>

                <Field icon={Phone} label="Mobile Number" error={errors.mobile?.message}>
                  <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-cyan-400 focus-within:border-transparent transition-all">
                    <span className="pl-9 pr-2 py-3 text-sm text-gray-500 bg-gray-50 border-r border-gray-200 shrink-0 whitespace-nowrap">
                      🇮🇳 +91
                    </span>
                    <input
                      type="tel"
                      {...register("mobile")}
                      placeholder="10-digit mobile number"
                      maxLength={10}
                      className="flex-1 px-3 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none bg-white"
                    />
                  </div>
                </Field>

                <Field icon={MessageSquare} label="Message" error={errors.message?.message}>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full border border-gray-200 rounded-lg pl-9 pr-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent transition-all resize-none"
                  />
                </Field>

                {serverError && (
                  <p className="text-sm text-red-500 text-center">{serverError}</p>
                )}

                <Button
                  type="submit"
                  loading={isSubmitting}
                  loadingText="Sending..."
                  variant="primary"
                  className="w-full !bg-cyan-600 hover:!bg-cyan-700 !rounded-3xl uppercase tracking-widest text-sm"
                >
                  Send Message
                </Button>

                <p className="flex items-center justify-center gap-1.5 text-xs text-gray-400 mt-2">
                  <CheckCircle className="w-3.5 h-3.5 text-cyan-500" />
                  Your information is kept strictly confidential.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Map ── */}
      <section className="h-96 w-full">
        <iframe
          title="Optimus Eye Hospital Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.053606021087!2d80.9915087!3d26.8064217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfdf9b5395a9f%3A0x9d4f422a751c2c03!2sOptimus%20Eye%20Hospital%20%26%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1776075110265!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, display: "block" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </section>
    </>
  );
}
