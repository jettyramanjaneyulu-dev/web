"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabaseClient";

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  

async function handleLogin(e: React.FormEvent) {
  e.preventDefault();
  setError("");

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    setError(error.message);
    return;
  }

  router.replace("/admin/dashboard");
}


  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
        padding: "20px",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{
          width: "100%",
          maxWidth: "380px",
          padding: "35px",
          borderRadius: "16px",
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
          color: "#fff",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "25px",
            fontSize: "24px",
            fontWeight: 600,
          }}
        >
          Admin Panel
        </h2>

        {/* Email */}
        <label style={{ fontSize: "13px", opacity: 0.85 }}>
          Email Address
        </label>
        <input
          type="email"
          placeholder="admin@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "6px",
            marginBottom: "16px",
            borderRadius: "10px",
            border: "none",
            outline: "none",
            fontSize: "14px",
            color: "#000",
            background: "rgba(255,255,255,0.9)",
          }}
        />
        

        {/* Password */}
        <label style={{ fontSize: "13px", opacity: 0.85 }}>
          Password
        </label>
        <div style={{ position: "relative", marginBottom: "14px" }}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 46px 12px 12px", // space for eye
              marginTop: "6px",
              borderRadius: "10px",
              border: "none",
              outline: "none",
              fontSize: "14px",
              color: "#000",
WebkitTextFillColor: "#000",

              background: "rgba(255,255,255,0.9)",
            }}
          />

          {/* Eye Icon */}
          <button
            type="button"
            aria-label="Toggle password visibility"
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {showPassword ? (
              // Eye Off
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0072ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.94 10.94 0 0 1 12 20c-5.05 0-9.27-3.11-11-8 1.21-3.06 3.56-5.43 6.5-6.68" />
                <path d="M1 1l22 22" />
                <path d="M9.9 4.24A10.94 10.94 0 0 1 12 4c5.05 0 9.27 3.11 11 8a11.05 11.05 0 0 1-2.12 3.44" />
              </svg>
            ) : (
              // Eye
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0072ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>

        {/* Error */}
        {error && (
          <p style={{ color: "#ffb3b3", fontSize: "13px", marginBottom: "10px" }}>
            {error}
          </p>
        )}

        {/* Button */}
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "8px",
            borderRadius: "12px",
            border: "none",
            background: "linear-gradient(135deg, #00c6ff, #0072ff)",
            color: "#fff",
            fontSize: "15px",
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 8px 20px rgba(0,114,255,0.4)",
          }}
        >
          Sign In
        </button>

        {/* Register */}
        <p
          style={{
            marginTop: "18px",
            fontSize: "13px",
            textAlign: "center",
            opacity: 0.9,
          }}
        >
          Don’t have an admin account?{" "}
          <a
            href="/admin/register"
            style={{ color: "#00c6ff", textDecoration: "none", fontWeight: 500 }}
          >
            Create Admin
          </a>
        </p>
      </form>
    </div>
  );
}
