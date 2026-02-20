"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "13px 46px 13px 13px",
  marginTop: "6px",
  marginBottom: "18px",
  border: "none",
  borderRadius: "10px",
  fontSize: "14px",
  color: "#000",
  backgroundColor: "rgba(255,255,255,0.95)",
  outline: "none",
};

export default function AdminRegister() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleRegister(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name, // stored in user_metadata
        },
      },
    });

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess("Admin account created successfully. Redirecting...");
    setTimeout(() => {
      router.replace("/admin/login");
    }, 1500);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #1e293b, #0f172a)",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleRegister}
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "32px",
          borderRadius: "18px",
          background: "rgba(255,255,255,0.14)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 25px 50px rgba(0,0,0,0.4)",
          color: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "26px",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          Create Admin
        </h2>

        {/* Name */}
        <label style={{ fontSize: "13px", opacity: 0.85 }}>
          Full Name
        </label>
        <input
          placeholder="John Doe"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          required
        />

        {/* Email */}
        <label style={{ fontSize: "13px", opacity: 0.85 }}>
          Email Address
        </label>
        <input
          type="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          required
        />

        {/* Password */}
        <label style={{ fontSize: "13px", opacity: 0.85 }}>
          Password
        </label>
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
            required
            minLength={6}
          />

          {/* Eye toggle */}
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            style={{
              position: "absolute",
              right: "12px",
              top: "50%",
              transform: "translateY(-50%)",
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "6px",
            }}
          >
            {showPassword ? "🙈" : "👁️"}
          </button>
        </div>

        {error && (
          <p style={{ color: "#fecaca", fontSize: "13px", marginBottom: "12px" }}>
            {error}
          </p>
        )}

        {success && (
          <p style={{ color: "#bbf7d0", fontSize: "13px", marginBottom: "12px" }}>
            {success}
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "13px",
            marginTop: "10px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg, #22d3ee, #2563eb)",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(37,99,235,0.45)",
          }}
        >
          Create Account
        </button>

        <p
          style={{
            marginTop: "18px",
            fontSize: "13px",
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          Already have an account?{" "}
          <a
            href="/admin/login"
            style={{
              color: "#22d3ee",
              textDecoration: "none",
              fontWeight: 500,
            }}
          >
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
