"use client";
import { useState } from "react";
import Image from "next/image";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    console.log(formData);

    e.preventDefault();
    try {
      const response = await fetch("/api/login", {
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
      <h1 className="text-2xl text-white font-bold">Login</h1>
      <form
        onSubmit={handleSubmit}
        className="text-black flex flex-col w-[20rem] gap-2 border-2 p-5 bg-[#f7caca] border-black rounded-xl "
      >
        {error && <div className="text-red-500">{error}</div>}
        <div>
          <Image alt="" src={"/login.png"} height={100} width={300} />
        </div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
          className="py-2 border-2 border-[#887E7E] rounded-lg p-3" // Add required attribute here
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
          className="py-2 border-2 border-[#887E7E] rounded-lg p-3" // Add required attribute here
        />

        <br />
        <button
          type="submit"
          className="border rounded-md hover:scale-105 font-bold bg-[#0B6EFE] py-2 text-white text-lg"
        >
          login
        </button>
        <div className="flex justify-between items-baseline">
          <div className="w-12  h-1 bg-cyan-700"></div>
          <a
            className="text-blue-800 hover:scale-105 hover:text-blue-950"
            href="/"
          >
            Create New Account
          </a>

          <div className="w-12 h-1 bg-cyan-700"></div>
        </div>
      </form>
    </div>
  );
}
