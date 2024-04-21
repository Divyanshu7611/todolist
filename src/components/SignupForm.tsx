"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function signUpForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    gender: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);
    e.preventDefault();
    try {
      const response = await fetch("/api/signUp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        window.location.href = "/todoList";
      } else {
        const data = await response.json();
        setError(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred during signup.");
    }
  };

  return (
    <div className="flex justify-center flex-col items-center">
      <h1 className="text-2xl text-white font-bold">Signup</h1>

      <form
        onSubmit={handleSubmit}
        className="text-black flex flex-col w-[20rem] gap-2 border-2 p-5 bg-[#f7caca] border-black rounded-xl "
      >
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <Image alt="" src={"/login.png"} height={200} width={200} />
        </div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
          className="py-2 border-2 border-[#887E7E] rounded-lg p-3" // Add required attribute here
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="py-2 border-2 border-[#887E7E] rounded-lg p-3"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="py-2 border-2 border-[#887E7E] rounded-lg p-3"
        />
        <input
          type="password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          placeholder="Confirm Password"
          required
          className="py-2 border-2 border-[#887E7E] rounded-lg p-3"
        />
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          placeholder="Gender"
          required
          className="py-2 border-2 border-[#887E7E] rounded-lg p-3"
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Phone"
          required
          className="py-2 border-2 border-[#887E7E] rounded-lg p-3"
        />
        <br />
        <button
          type="submit"
          className="border rounded-md hover:scale-105 font-bold bg-[#0B6EFE] py-2 text-white text-lg"
        >
          Signup
        </button>
        <div className="flex justify-between items-baseline">
          <div className="w-24   h-1 bg-cyan-700"></div>
          <a
            className="text-blue-800 hover:scale-105 hover:text-blue-950"
            href="/login"
          >
            OR Login
          </a>

          <div className="w-24 h-1 bg-cyan-700"></div>
        </div>
      </form>
    </div>
  );
}
