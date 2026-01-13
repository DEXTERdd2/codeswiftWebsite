'use client';

import { useState } from 'react';


export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    country: '',
    region: '',
    subject: '',
    projectDetails: ''
  });
  const [errors, setErrors] = useState<any>({});
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.company.trim()) newErrors.company = 'Company is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.region.trim()) newErrors.region = 'Region is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.projectDetails.trim()) newErrors.projectDetails = 'Project details are required';
    return newErrors;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    setErrors((prev: any) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      setSuccess(false);
      console.log('Validation errors:', validationErrors);
      return;
    }
    // Handle form submission
    setSuccess(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      country: '',
      region: '',
      subject: '',
      projectDetails: ''
    });
    console.log('Form submitted:', formData);
  };

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
            <p className="text-gray-300 mb-8">
              Have a project in mind or want to learn more about our services? 
              Fill out the form and we'll get back to you as soon as possible.
            </p>
          </div>
          
          <div className="bg-gray-800 p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {success && (
                <div className="mb-4 p-3 rounded bg-green-700 text-white text-center text-sm">Your message has been sent!</div>
              )}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-1">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border ${errors.firstName ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                    placeholder="John"
                    required
                  />
                  {errors.firstName && <p className="text-red-400 text-xs mt-1">{errors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-1">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border ${errors.lastName ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                    placeholder="Doe"
                    required
                  />
                  {errors.lastName && <p className="text-red-400 text-xs mt-1">{errors.lastName}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border ${errors.email ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                    placeholder="john@example.com"
                    required
                  />
                  {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-1">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border ${errors.company ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                    placeholder="Your Company"
                    required
                  />
                  {errors.company && <p className="text-red-400 text-xs mt-1">{errors.company}</p>}
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border ${errors.phone ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                    placeholder="+1 (___) ___-____"
                    required
                  />
                  {errors.phone && <p className="text-red-400 text-xs mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-300 mb-1">
                    Country *
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border ${errors.country ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                    placeholder="Select Country"
                    required
                  />
                  {errors.country && <p className="text-red-400 text-xs mt-1">{errors.country}</p>}
                </div>
                <div>
                  <label htmlFor="region" className="block text-sm font-medium text-gray-300 mb-1">
                    Region *
                  </label>
                  <input
                    type="text"
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-700 border ${errors.region ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                    placeholder="Select Region"
                    required
                  />
                  {errors.region && <p className="text-red-400 text-xs mt-1">{errors.region}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 border ${errors.subject ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="How can we help you?"
                  required
                />
                {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-gray-300 mb-1">
                  Project Details *
                </label>
                <textarea
                  id="projectDetails"
                  name="projectDetails"
                  rows={4}
                  value={formData.projectDetails}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-gray-700 border ${errors.projectDetails ? 'border-red-500' : 'border-gray-600'} rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent`}
                  placeholder="Tell us about your project..."
                  required
                />
                {errors.projectDetails && <p className="text-red-400 text-xs mt-1">{errors.projectDetails}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition duration-200"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
