"use client";

import Input from "@/components/base/Input";
import { login } from "@/libs/redux/actions/auth-action";
import { useAppDispatch, useAppSelector } from "@/libs/redux/hooks";
import { RootState } from "@/libs/redux/store";
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function LoginPage() {

  const dispatch = useAppDispatch()
  const { user, loading, error } = useAppSelector((state : RootState) => state.auth);

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

  const handleLogin = async () => {
    try {
      dispatch(login(formData)); // Dispatch login action with form data
    } catch (error) {
      console.error('Login error:', error);
    }
  };
  return (
    <div className="flex justify-center items-center h-[100vh]">
      {loading && <p>Logging in...</p>}
      {error && <p>Login failed: {error.message}</p>}

    <form className="flex flex-col" onSubmit={handleSubmit(handleLogin)}>
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
          setFormData({ ...formData, password: e.target.value })
        }
      />
      <button type="submit">submit</button>
    </form>
    {user && <p>Welcome, {user.email}!</p>}
    </div>
  );
}
