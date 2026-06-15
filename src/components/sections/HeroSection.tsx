"use client";

import Image from "next/image";
import { CheckCircle, Phone, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import { companyData, heroContent, formOptions } from "@/constants/siteData";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required.").min(2, "Name must be at least 2 characters."),
  phone: yup
    .string()
    .required("Mobile number is required.")
    .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number."),
  preferredTime: yup.string().required("Please select a time."),
  concern: yup.string().required("Please select a concern."),
});

export default function HeroSection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      preferredTime: formOptions.preferredTime[0],
      concern: formOptions.concerns[0],
    },
  });

  const onSubmit = async (data: {name:string, phone:string, preferredTime:string, concern:string}) => {
    try {
      setLoading(true);
      setSubmitError("");
      const ipResponse = await fetch("https://api.ipify.org?format=json");
      const ipData = await ipResponse.json();

      const newFormData = {
        Name: data.name,
        MobileNumber: data.phone,
        Time: data.preferredTime,
        Concern: data.concern,
        IP_Address: ipData.ip,
        utm_source: typeof window !== "undefined" ? localStorage.getItem("utm_source") || "" : "",
      };

      await fetch(
        "https://script.google.com/macros/s/AKfycbzILjL6dC2d7-4rmHYM_aA4oCbG3LhvMe-mh5hbdu4vb-Yova9KUDMcNwSTx1lM7nO04Q/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(newFormData).toString(),
        }
      );
      setLoading(false);
      reset();
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSubmitError("Something went wrong. Please try again.");
    }
  };
  return (
    <>
      <section className="relative !pt-32 pb-0 md:pt-36 overflow-hidden bg-[#f6f8f3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-[550px] gap-8 lg:gap-0 pb-12 lg:pb-0">

            {/* Left Content */}
            <div className="w-full lg:w-[42%] z-20 pt-4 lg:pt-10 lg:pb-14">
              <div className="inline-block bg-[#3b7dba]/10 px-4 py-1.5 rounded-full text-sm font-extrabold text-[#3b7dba] mb-6">
                {heroContent.badge}
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-[52px] font-extrabold text-[#3b7dba] leading-[1.15] mb-8 text-balance">
                {heroContent.title}
                <span className="text-gray-800 text-3xl md:text-4xl lg:text-[40px] mt-3 block font-bold">
                  {heroContent.subtitle}
                </span>
              </h1>

              <ul className="space-y-5 mb-7">
                {heroContent.stats.map((text, i) => (
                  <li key={i} className="flex items-center gap-4 text-balance">
                    <div className="w-4 h-7 bg-[#a6c516] rounded-r-full shadow-sm flex-shrink-0" />
                    <span className="text-lg md:text-xl font-bold text-gray-800">
                      {text}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="md:pl-8 mb-8">
                <p className="text-gray-600 font-semibold max-w-sm text-lg leading-relaxed">
                  {heroContent.description}
                </p>
              </div>

              {/* Primary CTAs */}
              <div className="flex flex-wrap gap-4 mt-8">
                {/* <Button
                  onClick={() => {
                    const form = document.getElementById("booking-form");
                    form?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="px-8 py-4 text-base shadow-lg"
                >
                  Book your Consultation <ArrowRight size={18} className="ml-2" />
                </Button> */}
                <a
                  href={companyData.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#3b7dba] hover:bg-[#2c6396] text-white font-bold px-7 py-4 rounded-full transition-all duration-200 shadow-lg text-sm hover:scale-105 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.885a.5.5 0 0 0 .606.606l6.115-1.476A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.116-1.41l-.368-.217-3.812.921.954-3.727-.237-.385A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Message on WhatsApp
                </a>
                <a
                  href={`tel:${companyData.phoneRaw}`}
                  className="inline-flex items-center gap-2 bg-[#3b7dba] hover:bg-[#2c6396] text-white font-bold px-7 py-4 rounded-full transition-all duration-200 shadow-lg text-sm hover:scale-105 active:scale-95"
                >
                  <Phone size={18} /> Call Us Directly
                </a>
              </div>
            </div>

            {/* Center Doctor Image */}
            <div className="lg:absolute lg:bottom-0 lg:left-[35%] lg:w-[40%] flex justify-center items-end z-10 pointer-events-none">
              <div className="relative">
                <div className="absolute inset-0 rounded-[40%_60%_60%_40%/50%_50%_50%_50%] bg-[#3b7dba]/10 blur-2xl scale-110" />
                <Image
                  src="/assets/doctor.png"
                  alt="Happy older couple after cataract surgery"
                  width={700}
                  height={600}
                  className="max-h-[350px] lg:max-h-[600px] w-full md:w-auto object-contain object-bottom opacity-90 lg:opacity-100 drop-shadow-2xl rounded-[50%_60%_60%_50%/50%_50%_50%_50%]"
                  priority
                />
              </div>
            </div>

            {/* Right Booking Form */}
            <div className="w-full lg:w-[35%] z-20 lg:pb-12" id="booking-form">
              <div className="bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-8 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#a6c516]" />

                <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center leading-tight">
                  {heroContent.formHeader}
                </h2>

                <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                  <Input
                    type="text"
                    placeholder="Enter your full name"
                    {...register("name")}
                    error={errors.name?.message}
                  />
                  <Input
                    type="tel"
                    placeholder="+91 98765 XXXXX"
                    {...register("phone")}
                    error={errors.phone?.message}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <Select
                      placeholder="Preferred Time"
                      options={formOptions.preferredTime}
                      {...register("preferredTime")}
                      error={errors.preferredTime?.message}
                    />
                    <Select
                      placeholder="Select Concern"
                      options={formOptions.concerns}
                      {...register("concern")}
                      error={errors.concern?.message}
                    />
                  </div>

                  {submitError && <p className="text-red-500 text-sm text-center font-bold">{submitError}</p>}

                  <Button
                    type="submit"
                    variant="secondary"
                    loading={loading}
                    loadingText="Booking..."
                    className="w-full py-4 sm:py-4 text-sm sm:text-lg mt-4 shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
                  >
                    {heroContent.formButton} <ArrowRight size={20} className="ml-2" />
                  </Button>
                  <p className="text-sm text-center text-gray-500 font-bold mt-4 flex items-start justify-center gap-[1px]">
                    <CheckCircle size={23} className="text-[#a6c516]" />
                    {heroContent.reassurance}
                  </p>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
