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
    <>
      <div className="min-h-screen bg-gradient-to-b from-[#3a2177] to-[#2d0e4a] flex flex-col items-center py-10 px-2 md:px-6">
        <div className="w-full max-w-4xl rounded-[40px] overflow-hidden">
          {/* Figma-style heading and breadcrumb */}
          <div className="flex flex-col items-center mt-32 mb-10">
            <h1 className="mb-4 text-center font-dm-sans font-medium text-[4.35rem] leading-[3.67rem] tracking-[-0.075em] text-white">
              Get a Qoute
            </h1>
            <div className="mb-2 text-center flex items-center justify-center gap-2 font-inter font-normal text-[1.09rem] leading-[25px] tracking-[-0.01em] text-white opacity-100">
              <span>Home</span>
              <span style={{ fontSize: "17.39px", opacity: 0.5 }}>&gt;</span>
              <span style={{ color: "#FFF", opacity: 0.3 }}>Get a qoute</span>
            </div>
          </div>
          {/* Form section */}
          <div className="mb-10 p-8 rounded-[40px] bg-[rgba(45,14,74,0.01)] border-[4.35px] border-solid border-white/40 shadow-[0_8px_64px_0_rgba(0,0,0,0.10)] backdrop-blur-md transition-all"
            style={{
              borderImage: "linear-gradient(90deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.0001) 30%, rgba(255,255,255,0.0001) 70%, rgba(255,255,255,0.1) 100%) 1",
              WebkitBackdropFilter: "blur(20px)",
            }}>
            <h2 style={{
              lineHeight: "21.68px",
              letterSpacing: "0.02em",
              color: "#FFF",
              marginBottom: "24px",
              verticalAlign: "bottom",
            }}>
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
        </div>
        <div className="mb-10 mt-16 px-4 md:px-8">
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
             className="text-[20px] leading-[32px] font-[300px] tracking-wide text-[#FFFFFFA6]"
            >
              Our experienced team of developers, designers and strategists will work closely with you to understand unique business challenges and objectives. By leveraging cutting edge technologies and best practices, we’ll create customized scalable and future proof solutions that drive growth and streamline operations
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
                        marginBottom: idx < 2 ? "22px" : 0,
                        fontFamily: "DM Sans, sans-serif",
                        fontWeight: 400,
                        fontSize: "18px",
                        lineHeight: "1.2",
                        letterSpacing: "1%",
                        color: "rgba(255,255,255,0.65)",
                        verticalAlign: "bottom",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: "20px",
                          height: "20px",
                          marginRight: "10px",
                        }}
                      >
                        <img
                          src="/images/tick.png"
                          alt="tick"
                          style={{
                            width: "20px",
                            height: "20px",
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
                    borderRadius: "18px",
                    padding: "10px 18px",
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.02)",
                    minHeight: "44px",
                    width: "70%",
                    maxWidth: "480px",
                    boxSizing: "border-box",
                    marginBottom: "4px",
                    marginRight: undefined,
                    marginLeft: "auto",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "10px",
                      background:
                        "linear-gradient(135deg, #7B4AE2 0%, #A259FF 100%)",
                      marginRight: "12px",
                      overflow: "visible",
                    }}
                  >
                    {/* Phone icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="18" height="18" rx="6" fill="none" />
                      <path d="M6.5 7.5C7.5 10 10 12.5 13 13.5L15 11.5C15.2 11.3 15.5 11.3 15.7 11.5L17.5 13.3C17.7 13.5 17.7 13.8 17.5 14C16.2 15.2 14.2 16 12 16C9.8 16 7.8 15.2 6.5 14C6.3 13.8 6.3 13.5 6.5 13.3L8.3 11.5C8.5 11.3 8.8 11.3 9 11.5L11 13.5C11.2 13.7 11.5 13.7 11.7 13.5L13.5 11.7C13.7 11.5 13.7 11.2 13.5 11L11.5 9C11.3 8.8 11 8.8 10.8 9L9 10.8C8.8 11 8.5 11 8.3 10.8L6.5 9C6.3 8.8 6.3 8.5 6.5 8.3L8.3 6.5C8.5 6.3 8.8 6.3 9 6.5L11 8.5C11.2 8.7 11.5 8.7 11.7 8.5L13.5 6.7C13.7 6.5 13.7 6.2 13.5 6L11.5 4C11.3 3.8 11 3.8 10.8 4L9 5.8C8.8 6 8.5 6 8.3 5.8L6.5 4C6.3 3.8 6.3 3.5 6.5 3.3L8.3 1.5C8.5 1.3 8.8 1.3 9 1.5L11 3.5C11.2 3.7 11.5 3.7 11.7 3.5L13.5 1.7C13.7 1.5 13.7 1.2 13.5 1L11.5 -1C11.3 -1.2 11 -1.2 10.8 -1L9 0.8C8.8 1 8.5 1 8.3 0.8L6.5 -1C6.3 -1.2 6.3 -1.5 6.5 -1.7L8.3 -3.5C8.5 -3.7 8.8 -3.7 9 -3.5L11 -1.5C11.2 -1.3 11.5 -1.3 11.7 -1.5L13.5 -3.3C13.7 -3.5 13.7 -3.8 13.5 -4L11.5 -6C11.3 -6.2 11 -6.2 10.8 -6L9 -4.2C8.8 -4 8.5 -4 8.3 -4.2L6.5 -6C6.3 -6.2 6.3 -6.5 6.5 -6.7L8.3 -8.5C8.5 -8.7 8.8 -8.7 9 -8.5L11 -6.5C11.2 -6.3 11.5 -6.3 11.7 -6.5L13.5 -8.3C13.7 -8.5 13.7 -8.8 13.5 -9L11.5 -11C11.3 -11.2 11 -11.2 10.8 -11L9 -9.2C8.8 -9 8.5 -9 8.3 -9.2L6.5 -11C6.3 -11.2 6.3 -11.5 6.5 -11.7L8.3 -13.5C8.5 -13.7 8.8 -13.7 9 -13.5L11 -11.5C11.2 -11.3 11.5 -11.3 11.7 -11.5L13.5 -13.3C13.7 -13.5 13.7 -13.8 13.5 -14L11.5 -16C11.3 -16.2 11 -16.2 10.8 -16L9 -14.2C8.8 -14 8.5 -14 8.3 -14.2L6.5 -16C6.3 -16.2 6.3 -16.5 6.5 -16.7L8.3 -18.5C8.5 -18.7 8.8 -18.7 9 -18.5L11 -16.5C11.2 -16.3 11.5 -16.3 11.7 -16.5L13.5 -18.3C13.7 -18.5 13.7 -18.8 13.5 -19L11.5 -21C11.3 -21.2 11 -21.2 10.8 -21L9 -19.2C8.8 -19 8.5 -19 8.3 -19.2L6.5 -21C6.3 -21.2 6.3 -21.5 6.5 -21.7L8.3 -23.5C8.5 -23.7 8.8 -23.7 9 -23.5L11 -21.5C11.2 -21.3 11.5 -21.3 11.7 -21.5L13.5 -23.3C13.7 -23.5 13.7 -23.8 13.5 -24" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontWeight: 400,
                        fontSize: "13px",
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
                        fontSize: "14px",
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
                    borderRadius: "18px",
                    padding: "10px 18px",
                    display: "flex",
                    alignItems: "center",
                    background: "rgba(255,255,255,0.02)",
                    minHeight: "44px",
                    width: "70%",
                    maxWidth: "480px",
                    boxSizing: "border-box",
                    marginBottom: 0,
                    marginRight: undefined,
                    marginLeft: "auto",
                    gap: "10px",
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "32px",
                      height: "32px",
                      borderRadius: "10px",
                      background:
                        "linear-gradient(135deg, #7B4AE2 0%, #A259FF 100%)",
                      marginRight: "12px",
                      overflow: "visible",
                    }}
                  >
                    {/* Mail icon */}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="18" height="18" rx="6" fill="none" />
                      <path d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V17C20 18.1046 19.1046 19 18 19H6C4.89543 19 4 18.1046 4 17V7Z" stroke="#fff" strokeWidth="1.5"/>
                      <path d="M4 7L12 13L20 7" stroke="#fff" strokeWidth="1.5"/>
                    </svg>
                  </span>
                  <div>
                    <div
                      style={{
                        fontFamily: "DM Sans, sans-serif",
                        fontWeight: 400,
                        fontSize: "13px",
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
                        fontSize: "14px",
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
          <div className="mb-10 px-4 md:px-8">
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
                <img src="/images/map.png" alt="World Map" className="max-w-2xl w-full" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 px-4 md:px-8">
            <div className="relative rounded p-4 text-white border border-gray-400/50">
              {/* Floating icon with subtle glow */}
              <div className="absolute right-4 top-4">
                <div
                  className="flex items-center justify-center
                   bg-[#8752FA] rounded-lg p-2 relative before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_10px_5px_rgba(135,82,250,0.4)]"
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
                   bg-[#8752FA] rounded-lg px-1 py-3 relative before:absolute before:inset-0 before:rounded-lg before:shadow-[0_0_10px_5px_rgba(135,82,250,0.4)]"
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
          <div className="flex justify-center mb-10 px-4 md:px-8">
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
    </>
  );
}
