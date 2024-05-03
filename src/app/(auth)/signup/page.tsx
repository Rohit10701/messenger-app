"use client";
import { createClient } from "@/utils/supabase/client";
import React, { FormEventHandler, useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const signUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const supabase = createClient();
    const res = await supabase.auth.signUp(formData);
    console.log("res", res);
  };
  return (
    <>
      <div className="flex justify-center items-center h-[100vh]">
        <form className="flex flex-col" onSubmit={signUp}>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
          />
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            required
          />
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
};

export default Page;
