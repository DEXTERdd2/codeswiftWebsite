"use client";

import { useState } from "react";
import { Footer } from "@/components/footer";
import { ArrowUpRight } from "lucide-react";
import { Protection, Team, Globe } from "@/icons";

interface QuoteForm {
  firstName: string;
  lastName: string;
  phone: string;
  country: string;
  project: string;
  projectTypes: string[];
}

export default function GetQuotePage() {
  const [form, setForm] = useState<QuoteForm>({
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    project: "",
    projectTypes: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleProjectType = (type: string) => {
    setForm((prev) => {
      const exists = prev.projectTypes.includes(type);
      return {
        ...prev,
        projectTypes: exists
          ? prev.projectTypes.filter((t) => t !== type)
          : [...prev.projectTypes, type],
      };
    });
    setErrors((prev) => ({ ...prev, projectTypes: "" }));
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.country.trim()) newErrors.country = "Country is required.";
    if (!form.project.trim())
      newErrors.project = "Project description is required.";
    if (!form.projectTypes.length)
      newErrors.projectTypes = "Select at least one project type.";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
    // Here you would send the form data to your backend or API
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#3a2177] to-[#2d0e4a] flex flex-col items-center py-10">
      <div
        className="w-full max-w-4xl"
        style={{ borderRadius: "40px", overflow: "hidden" }}
      >
        {/* Figma-style heading and breadcrumb */}
        <div
          className="flex flex-col items-center"
          style={{ marginTop: "129.4px", marginBottom: "40px" }}
        >
          <h1
            className="mb-4 text-center"
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 500,
              fontSize: "69.57px",
              lineHeight: "58.7px",
              letterSpacing: "-0.075em",
              color: "#FFF",
            }}
          >
            Get a Qoute
          </h1>
          <div
            className="mb-2 text-center"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 400,
              fontSize: "17.39px",
              lineHeight: "25px",
              letterSpacing: "-0.01em",
              color: "#FFF",
              opacity: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "6px",
            }}
          >
            <span>Home</span>
            <span style={{ fontSize: "17.39px", opacity: 0.5 }}>&gt;</span>
            <span style={{ color: "#FFF", opacity: 0.3 }}>Get a qoute</span>
          </div>
        </div>
        <div
          className="mb-10 p-8"
          style={{
            background: "rgba(45, 14, 74, 0.01)",
            borderRadius: "40px",
            border: "4.35px solid",
            borderImage:
              "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.0001) 30%, rgba(255,255,255,0.0001) 70%, rgba(255,255,255,0.1) 100%) 1",
            boxShadow: "0 8px 64px 0 rgba(0,0,0,0.10)",
            backdropFilter: "blur(116.02px)",
            WebkitBackdropFilter: "blur(116.02px)",
            transition: "box-shadow 0.3s, border-color 0.3s",
          }}
        >
          <h2
            style={{
              lineHeight: "21.68px",
              letterSpacing: "0.02em",
              color: "#FFF",
              marginBottom: "24px",
              verticalAlign: "bottom",
            }}
          >
            Get Quote From Us
          </h2>
          {submitted ? (
            <div className="text-green-400 text-lg">
              Thank you! We will contact you soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="p-3 rounded bg-transparent border border-gray-400/50 text-white"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 400,
                      fontSize: "15.22px",
                      lineHeight: "21.68px",
                      letterSpacing: "0.02em",
                      color: "#FFF",
                      verticalAlign: "bottom",
                    }}
                  />
                  {errors.firstName && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.firstName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="p-3 rounded bg-transparent border border-gray-400/50 text-white"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 400,
                      fontSize: "15.22px",
                      lineHeight: "21.68px",
                      letterSpacing: "0.02em",
                      color: "#FFF",
                      verticalAlign: "bottom",
                    }}
                  />
                  {errors.lastName && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.lastName}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className="p-3 rounded bg-transparent border border-gray-400/50 text-white"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 400,
                      fontSize: "15.22px",
                      lineHeight: "21.68px",
                      letterSpacing: "0.02em",
                      color: "#FFF",
                      verticalAlign: "bottom",
                    }}
                  />
                  {errors.phone && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.phone}
                    </span>
                  )}
                </div>
                <div className="flex flex-col">
                  <input
                    name="country"
                    value={form.country}
                    onChange={handleChange}
                    placeholder="Country"
                    className="p-3 rounded bg-transparent border border-gray-400/50 text-white"
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 400,
                      fontSize: "15.22px",
                      lineHeight: "21.68px",
                      letterSpacing: "0.02em",
                      color: "#FFF",
                      verticalAlign: "bottom",
                    }}
                  />
                  {errors.country && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.country}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex flex-col">
                <textarea
                  name="project"
                  value={form.project}
                  onChange={handleChange}
                  placeholder="Tell us about your project"
                  className="w-full p-3 rounded bg-transparent border border-gray-400/50 text-white"
                  rows={4}
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 400,
                    fontSize: "15.22px",
                    lineHeight: "21.68px",
                    letterSpacing: "0.02em",
                    color: "#FFF",
                    verticalAlign: "bottom",
                  }}
                />
                {errors.project && (
                  <span className="text-red-400 text-xs mt-1">
                    {errors.project}
                  </span>
                )}
              </div>
              <div>
                <div
                  className="mb-2"
                  style={{
                    fontFamily: "DM Sans, sans-serif",
                    fontWeight: 400,
                    fontSize: "19.57px",
                    lineHeight: "21.68px",
                    letterSpacing: "0.02em",
                    color: "#FFF",
                    verticalAlign: "bottom",
                  }}
                >
                  Project type
                </div>
                <div className="flex flex-wrap gap-2">
                  {[
                    "UI/UX Design",
                    "Software Development",
                    "AI Solutions",
                    "Digital Marketing",
                    "Devops Solutions",
                    "Quality Assurance",
                  ].map((type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => handleProjectType(type)}
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontWeight: 400,
                        fontSize: "15.22px",
                        lineHeight: "21.68px",
                        letterSpacing: "0.02em",
                        color: "#FFF",
                        verticalAlign: "bottom",
                        border: "2px solid rgba(255,255,255,0.4)",
                        borderRadius: "16px",
                        background: form.projectTypes.includes(type)
                          ? "#6732D9"
                          : "transparent",
                        padding: "20px 32px",
                        margin: "8px 8px 0 0",
                        transition: "background 0.2s, color 0.2s",
                        outline: "none",
                        cursor: "pointer",
                      }}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {errors.projectTypes && (
                  <span className="text-red-400 text-xs mt-1 block">
                    {errors.projectTypes}
                  </span>
                )}
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded transition"
                style={{
                  background: "#6732D9",
                  fontFamily: "DM Sans, sans-serif",
                  fontWeight: 800,
                  fontSize: "15.22px",
                  lineHeight: "21.68px",
                  letterSpacing: "0.02em",
                  color: "#FFF",
                  verticalAlign: "bottom",
                }}
              >
                Submit
              </button>
            </form>
          )}
        </div>
        <div className="mb-10 mt-16">
          <h3
            style={{
              fontFamily: "DM Sans, sans-serif",
              fontWeight: 700,
              fontSize: "48px",
              lineHeight: "60.2px",
              letterSpacing: "-0.06em",
              color: "#FFF",
              marginBottom: "24px",
            }}
          >
            Let’s Work Together
          </h3>
          <p
           className="text-[24px] leading-[37px] font-[300px] tracking-wide text-[#FFFFFFA6]"
          >
            Our experienced team of developers, designers and strategists will
            work closely with you to understand unique business challenges and
            objectives. By leveraging cutting edge technologies and best
            practices, we’ll create customized scalable and future proof
            solutions that drive growth and streamline operations
          </p>
          <div className="flex flex-col md:flex-row gap-8 mt-8">
            <div className="flex-1">
              <ul style={{ marginBottom: 0, paddingLeft: 0 }}>
                {[
                  "We’ll respond in 24 hours last focused.",
                  "Work with seniors & experts, not juniors.",
                  "NDA? Absolutely just ask.",
                ].map((text, idx) => (
                  <li
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: idx < 2 ? "28px" : 0,
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 400,
                      fontSize: "24px",
                      lineHeight: "19.95px",
                      letterSpacing: "2%",
                      color: "rgba(255,255,255,0.65)",
                      verticalAlign: "bottom",
                    }}
                  >
                    <span
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: "32px",
                        height: "32px",
                        marginRight: "18px",
                      }}
                    >
                      <img
                        src="/images/tick.png"
                        alt="tick"
                        style={{
                          width: "32px",
                          height: "32px",
                          objectFit: "contain",
                        }}
                      />
                    </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="flex-1 flex flex-col gap-4"
              style={{ marginTop: 0, marginBottom: 0 }}
            >
              <div
                style={{
                  border: "2px solid #B9B9C3",
                  borderRadius: "24px",
                  padding: "8px 18px",
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.02)",
                  minHeight: "72px",
                  width: "100%",
                  boxSizing: "border-box",
                  marginBottom: "8px",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, #6732D9 0%, #A259FF 100%)",
                    marginRight: "20px",
                    overflow: "visible",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <rect width="28" height="28" rx="8" fill="none" />
                    <path
                      d="M8.75 10.5C8.75 9.25736 9.75736 8.25 11 8.25H17C18.2426 8.25 19.25 9.25736 19.25 10.5V17.5C19.25 18.7426 18.2426 19.75 17 19.75H11C9.75736 19.75 8.75 18.7426 8.75 17.5V10.5Z"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M14 15.25C15.2426 15.25 16.25 14.2426 16.25 13C16.25 11.7574 15.2426 10.75 14 10.75C12.7574 10.75 11.75 11.7574 11.75 13C11.75 14.2426 12.7574 15.25 14 15.25Z"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#FFF",
                      opacity: 0.7,
                    }}
                  >
                    Phone Number
                  </div>
                  <div
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#FFF",
                      letterSpacing: "0.02em",
                    }}
                  >
                    +92 310-586-4926
                  </div>
                </div>
              </div>
              <div
                style={{
                  border: "2px solid #B9B9C3",
                  borderRadius: "24px",
                  padding: "14px 28px",
                  display: "flex",
                  alignItems: "center",
                  background: "rgba(255,255,255,0.02)",
                  minHeight: "96px",
                  width: "100%",
                  boxSizing: "border-box",
                  marginBottom: 0,
                  gap: "24px",
                }}
              >
                <span
                  style={{
                    position: "relative",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "48px",
                    height: "48px",
                    borderRadius: "12px",
                    background:
                      "linear-gradient(135deg, #6732D9 0%, #A259FF 100%)",
                    marginRight: "20px",
                    overflow: "visible",
                  }}
                >
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ position: "relative", zIndex: 1 }}
                  >
                    <rect width="28" height="28" rx="8" fill="none" />
                    <path
                      d="M8.75 10.5C8.75 9.25736 9.75736 8.25 11 8.25H17C18.2426 8.25 19.25 9.25736 19.25 10.5V17.5C19.25 18.7426 18.2426 19.75 17 19.75H11C9.75736 19.75 8.75 18.7426 8.75 17.5V10.5Z"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <path
                      d="M14 15.25C15.2426 15.25 16.25 14.2426 16.25 13C16.25 11.7574 15.2426 10.75 14 10.75C12.7574 10.75 11.75 11.7574 11.75 13C11.75 14.2426 12.7574 15.25 14 15.25Z"
                      stroke="white"
                      strokeWidth="2"
                    />
                  </svg>
                </span>
                <div>
                  <div
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 400,
                      fontSize: "18px",
                      color: "#FFF",
                      opacity: 0.7,
                    }}
                  >
                    Email
                  </div>
                  <div
                    style={{
                      fontFamily: "DM Sans, sans-serif",
                      fontWeight: 700,
                      fontSize: "18px",
                      color: "#FFF",
                      letterSpacing: "0.02em",
                    }}
                  >
                    connect@codeswift.org
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Let's Work Together
          </h3>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-1 text-white">
              <p>
                CodeSwift operates with a global presence, strategically based
                in both the United States and Pakistan. As a SaaS–based company,
                we deliver innovative, cloud-powered solutions that cater to
                businesses worldwide. Our teams in these two dynamic locations
                collaborate to create impactful solutions that drive growth,
                efficiency, and long–term success for our clients.
              </p>
            </div>
            <div className="flex-1 flex items-center justify-center">
              {/* You can add a world map SVG or image here */}
              <img src="/images/map.png" alt="World Map" className="max-w-xs" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          <div className="relative rounded p-4 text-white border border-gray-400/50">
            {/* Floating icon with subtle glow */}
            <div className="absolute right-4 top-4">
              <div
                className="flex items-center justify-center
                 bg-[#8752FA]
                 rounded-lg
                 p-2
                 relative
                 before:absolute before:inset-0 before:rounded-lg
                 before:shadow-[0_0_10px_5px_rgba(135,82,250,0.4)]"
              >
                <Globe className="w-3 h-3 text-white relative z-10" />
              </div>
            </div>

            <div className="pt-12">
              <div className="font-bold mb-2">Global Coverage:</div>
              Seamless operations from the USA to Pakistan for enhanced support
              and service delivery.
            </div>
          </div>

          <div className="relative rounded p-4 text-white border border-gray-400/50">
            {/* Floating icon with subtle glow */}
            <div className="absolute right-4 top-4">
              {" "}
              <div
                className="flex items-center justify-center
                 bg-[#8752FA]
                 rounded-lg
                 px-1
                 py-3
                 relative
                 before:absolute before:inset-0 before:rounded-lg
                 before:shadow-[0_0_10px_5px_rgba(135,82,250,0.4)]"
              >
                <Team className="w-3 h-3 text-white relative z-10" />
              </div>
            </div>
            <div className="pt-12">
              <div className="font-bold mb-2">Expert Teams:</div>
              Senior professionals dedicated to solving complex business
              challenges and offering tailored solutions.
            </div>
          </div>
          <div className="relative rounded p-4 text-white border border-gray-400/50">
            {/* Floating icon with subtle glow */}
            <div className="absolute right-4 top-4">
              <div
                className="flex items-center justify-center
                 bg-[#8752FA]
                 rounded-lg
                 p-2
                 relative
                 before:absolute before:inset-0 before:rounded-lg
                 before:shadow-[0_0_10px_5px_rgba(135,82,250,0.4)]"
              >
                <Protection className="w-2 h-2 text-white relative z-10" />
              </div>
            </div>{" "}
            <div className="pt-12">
              <div className="font-bold mb-2">Security First:</div>
              Flexible and secure partnerships, with NDA agreements available
              upon request to protect your business interests.
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-10">
          <a
            href="https://www.google.com/maps/dir/CodeSwift,+Jenan+Abu+Al+Fazal+Plaza,+Office+207,+Floor+2,+Rawalpindi,+46000,+Pakistan/CodeSwift,+Jenan+Abu+Al+Fazal+Plaza,+Office+207,+Floor+2,+Rawalpindi,+46000,+Pakistan/@33.6550117,73.081876,19.05z/data=!4m13!4m12!1m5!1m1!1s0x38df950058b6110d:0x57eb67dc884240a5!2m2!1d73.082888!2d33.653348!1m5!1m1!1s0x38df950058b6110d:0x57eb67dc884240a5!2m2!1d73.082888!2d33.653348?entry=ttu&g_ep=EgoyMDI2MDExOS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="flex bg-[#6732D9] hover:bg-[#7a5cdb] text-white font-bold py-3 px-6 rounded-[10px] transition"
          >
            Our Location on Google Maps <ArrowUpRight className="ml-2" />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
