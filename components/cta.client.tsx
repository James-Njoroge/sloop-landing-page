"use client"
import { useState } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    interest: ''
  });

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    // For the phone number, remove any non-digit characters to check the length.
    if (name === 'phoneNumber' && value && value.replace(/\D/g, '').length > 10) {
      return; // Prevent input if it would lead to a phone number longer than 10 digits
    }
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const isValidEmail = (email: string ) => {
    return email.length <= 254 && /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    // Validate form values
    if (!formData.name || formData.name.length > 300 || /[^a-zA-Z\s]/.test(formData.name)) {
      return alert('Name is required and must be under 300 characters and contain only letters.');
    }
    if (!formData.email || !isValidEmail(formData.email)) {
      return alert('A valid email address is required and must be under 254 characters.');
    }
    if (formData.phoneNumber && formData.phoneNumber.replace(/\D/g, '').length !== 10) {
      return alert('Phone number is optional but must be 10 digits if provided.');
    }
    if (!formData.interest) {
      return alert('Please select a reason for your interest.');
    }

    try {
      const res = await fetch('https://script.google.com/macros/s/AKfycbzRl0-g_XG03XPdk6QjiFnJupTfqwUmBOrzwjq8EYnZA0lxscs4nnyR9SEOjk_Q4p02/exec', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (res.ok) {
        console.log('Data sent to Google Sheet!');
      } else {
        console.error('Failed to send data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  
    // Reset form data to default values
    setFormData({
      name: '',
      email: '',
      phoneNumber: '',
      interest: ''
    });
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center px-16 py-6 h-auto rounded-3xl bg-[#64B7F3] mx-5 my-12"
    >
      <h2 className="font-clash-display text-5xl mb-4 text-center text-white">
        Questions?
      </h2>
      <p className="mb-8 text-center text-white">
        Fill out the form to get in touch with us!
      </p>
      <form className="flex flex-col items-center w-full max-w-md space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full px-4 py-2 rounded-[120px] text-black font-medium"
          style={{ backgroundColor: '#FFF' }}
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full px-4 py-2 rounded-[120px] text-black font-medium"
          style={{ backgroundColor: '#FFF' }}
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="phoneNumber"
          placeholder="U.S. Phone Number (optional)"
          className="w-full px-4 py-2 rounded-[120px] text-black font-medium"
          style={{ backgroundColor: '#FFF' }}
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <div className="relative w-full">
        <select
            name="interest"
            className="appearance-none w-full px-4 py-2 rounded-[120px] text-black font-medium"
            style={{ backgroundColor: '#FFF', paddingRight: '2rem' }}
            value={formData.interest}
            onChange={handleChange}
          >
            <option value="" disabled>Reason for Interest</option>
            <option value="potential_customer">Potential Customer</option>
            <option value="potential_investor">Potential Investor</option>
            <option value="join_the_team">Looking to Join the Team</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M5.516 7.548c.436-.446 1.043-.48 1.576 0l3.908 3.747 3.908-3.747c.533-.48 1.14-.446 1.576 0 .436.445.408 1.197 0 1.615l-4.72 4.502c-.217.213-.502.32-.813.32s-.597-.107-.813-.32l-4.72-4.502c-.408-.418-.436-1.17 0-1.615z" />
            </svg>
          </div>
        </div>
        <button
          type="submit"
          className="w-full px-6 py-2 rounded-[120px] text-black font-bold"
          style={{ backgroundColor: '#F5F5DC' }}
        >
          Submit
        </button>
      </form>
    </section>
  ); 
}

