"use client";

import { useState } from "react";
import { Phone, MapPin, Star, Instagram, CheckCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import { companyData, formOptions, footerContent, heroContent } from "@/constants/siteData";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function CtaSection() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(yup.object().shape({
      name: yup.string().required("Name is required."),
      phone: yup.string()
        .required("Mobile number is required.")
        .matches(/^[6-9]\d{9}$/, "Enter a valid 10-digit mobile number."),
      concern: yup.string().required("Please select a concern."),
      preferredTime: yup.string().required("Please select a time."),
    })),
    defaultValues: {
      name: "",
      phone: "",
      concern: formOptions.concerns[0],
      preferredTime: formOptions.preferredTime[0],
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
    <section className="py-20 bg-gradient-to-br from-[#3b7dba] to-[#2c6396] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: Persuasive Narrative ── */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl md:text-5xl font-bold mb-5 leading-tight tracking-tight">
              {footerContent.title.split(' ').slice(0, -3).join(' ')} <br />
              <span className="text-[#a6c516]">{footerContent.title.split(' ').slice(-3).join(' ')}</span>
            </h2>
            <p className="text-lg md:text-xl mb-8 text-white/90 leading-relaxed font-medium">
              {footerContent.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-10">
              <a
                href={companyData.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1da851] text-white font-black px-10 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 text-[13px] md:text-sm"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.559 4.14 1.535 5.874L.057 23.885a.5.5 0 0 0 .606.606l6.115-1.476A11.952 11.952 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.944 9.944 0 0 1-5.116-1.41l-.368-.217-3.812.921.954-3.727-.237-.385A9.946 9.946 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                </svg>
                {footerContent.primaryButtons.whatsapp}
              </a>
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="inline-flex items-center gap-2 bg-[#a6c516] hover:bg-[#8fa813] text-white font-black px-10 py-3.5 rounded-full transition-all duration-300 shadow-xl hover:scale-105 active:scale-95 text-[13px] md:text-sm"
              >
                <Phone size={16} /> {footerContent.primaryButtons.call}
              </a>
            </div>

            {/* Secondary Links */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-3 text-white/80">
              <a target="_blank" href={companyData.maps} className="hover:text-[#a6c516] flex items-center gap-2 transition-colors text-sm font-bold">
                <MapPin size={16} /> {footerContent.socialLinks.maps}
              </a>
              <a href={companyData.googleReviews}
                target="_blank"
                rel="noopener noreferrer" className="hover:text-[#a6c516] flex items-center gap-2 transition-colors text-sm font-bold">
                <Star size={16} /> {footerContent.socialLinks.reviews}
              </a>
              <a href={companyData.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-[#a6c516] flex items-center gap-2 transition-colors text-sm font-bold">
                <Instagram size={16} /> {footerContent.socialLinks.instagram}
              </a>
            </div>
          </div>

          {/* ── Right: Appointment Form ── */}
          <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-8 border border-gray-100 relative overflow-hidden">
            {/* Lime top bar — exactly like Hero */}
            <div className="absolute top-0 left-0 w-full h-2 bg-[#a6c516]" />

            <h2 className="text-[clamp(17px,5.1vw,24px)] font-extrabold text-gray-800 mb-6 text-center leading-tight mt-2 whitespace-nowrap">
              {heroContent.formHeader}
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
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
                className="w-full py-4 text-sm sm:text-lg mt-4 shadow-xl hover:scale-105 active:scale-95 transition-all duration-200 whitespace-nowrap"
              >
                {heroContent.formButton} <ArrowRight size={18} className="ml-2" />
              </Button>

              <p className="text-sm text-center text-gray-500 font-bold mt-4 flex items-start justify-center gap-1">
                <CheckCircle size={18} className="text-[#a6c516]" />
                {heroContent.reassurance}
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
