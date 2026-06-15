"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import { formOptions, heroContent } from "@/constants/siteData";

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

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      preferredTime: formOptions.preferredTime[0],
      concern: formOptions.concerns[0],
    },
  });

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      // Reset form when closed
      setTimeout(() => {
        reset();
        setSubmitError("");
      }, 300);
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen, reset]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!isOpen) return null;

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
      onClose();
      router.push("/thank-you");
    } catch (error) {
      console.error(error);
      setLoading(false);
      setSubmitError("Something went wrong. Please try again.");
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-md bg-white rounded-3xl shadow-[0_20px_60px_rgba(0,20,20,0.2)] overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Lime top bar */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#a6c516]" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 transition-colors duration-200 z-10"
          aria-label="Close"
        >
          <X size={20} />
        </button>

        <div className="p-8 pt-10">
          <h2 className="text-2xl font-extrabold text-gray-800 mb-6 text-center leading-tight mt-2">
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
              className="w-full py-4 text-lg mt-4 shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
            >
              {heroContent.formButton} <ArrowRight size={20} className="ml-2" />
            </Button>

            <p className="text-sm text-center text-gray-500 font-bold mt-4 flex items-start justify-center gap-1">
              <CheckCircle size={18} className="text-[#a6c516]" />
              {heroContent.reassurance}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
