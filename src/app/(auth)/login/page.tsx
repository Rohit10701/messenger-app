"use client";

import Input from "@/components/base/Input";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const signInWithPassword = async () => {
    const supabase = createClient();
    const res = await supabase.auth.signInWithPassword(formData);
    console.log("res", res);
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">

    <form className="flex flex-col" onSubmit={handleSubmit(signInWithPassword)}>
      <label htmlFor="email">Email:</label>
      <Input
        name="email"
        register={register}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
      />
      <label htmlFor="password">Password:</label>
      <Input
        name="password"
        register={register}
        onChange={(e) =>
          setFormData({ ...formData, email: e.target.value })
        }
      />
      <button type="submit">submit</button>
    </form>
    </div>
  );
}
