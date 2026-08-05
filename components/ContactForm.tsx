"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { INQUIRY_TYPES } from "@/lib/data";

type FormValues = {
  name: string;
  email: string;
  phone: string;
  inquiryType: string;
  message: string;
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: FormValues) => {
    // Wire this up to your email service, CRM, or an API route.
    await new Promise((r) => setTimeout(r, 700));
    console.log(data);
    setSubmitted(true);
    reset();
  };

  const inputClass =
    "w-full rounded-xl border border-navy/12 bg-white px-5 py-4 text-[14.5px] text-navy placeholder:text-slate2/60 focus:outline-none focus:ring-2 focus:ring-gold/40 focus:border-gold transition-shadow";

  return (
    <div className="bg-paper rounded-3xl p-8 md:p-10">
      <h2 className="text-[22px] font-bold text-navy mb-2">Send an enquiry</h2>
      <p className="text-[14.5px] text-slate2 mb-8">
        Tell us what you need and the right person on our team will follow up.
      </p>

      {submitted && (
        <div className="mb-6 rounded-xl bg-gold/10 text-navy text-[14px] px-5 py-4">
          Thank you. Your enquiry has been received and we will be in touch shortly.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <input
              className={inputClass}
              placeholder="Full name"
              {...register("name", { required: true })}
            />
            {errors.name && <p className="text-red-600 text-[12.5px] mt-1.5">Please enter your name.</p>}
          </div>
          <div>
            <input
              className={inputClass}
              placeholder="Email address"
              type="email"
              {...register("email", { required: true })}
            />
            {errors.email && <p className="text-red-600 text-[12.5px] mt-1.5">Please enter a valid email.</p>}
          </div>
        </div>

        <div>
          <input className={inputClass} placeholder="Phone number" {...register("phone", { required: true })} />
          {errors.phone && <p className="text-red-600 text-[12.5px] mt-1.5">Please enter your phone number.</p>}
        </div>

        <div>
          <select className={inputClass} defaultValue="" {...register("inquiryType", { required: true })}>
            <option value="" disabled>
              Select enquiry type
            </option>
            {INQUIRY_TYPES.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
          {errors.inquiryType && <p className="text-red-600 text-[12.5px] mt-1.5">Please select an enquiry type.</p>}
        </div>

        <div>
          <textarea
            className={`${inputClass} resize-none`}
            rows={5}
            placeholder="Tell us about your project or enquiry"
            {...register("message", { required: true })}
          />
          {errors.message && <p className="text-red-600 text-[12.5px] mt-1.5">Please add a short message.</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto rounded-full bg-navy text-white font-semibold text-[14.5px] px-9 min-h-[52px] hover:bg-navy-light transition-colors disabled:opacity-60"
        >
          {isSubmitting ? "Sending…" : "Send Enquiry"}
        </button>
      </form>
    </div>
  );
}
