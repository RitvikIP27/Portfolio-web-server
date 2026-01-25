import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // -----------------------------
  // React state: stores form inputs
  // -----------------------------
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // =====================================================
  // LOGIN FUNCTION (GraphQL mutation using VARIABLES)
  // =====================================================
  const handleLogin = async () => {
    const query = `
      mutation LoginUser($identifier: String!, $password: String!) {
        login(input: { identifier: $identifier, password: $password }) {
          jwt
          user {
            username
            email
          }
        }
      }
    `;

    // These variables are passed safely into GraphQL
    const variables = {
      identifier: email,  // email or username
      password: password,
    };

    const res = await fetch("http://13.200.172.225:1337/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

    navigate("/dashboard");

  };

  // =====================================================
  // SIGNUP FUNCTION (GraphQL Register)
  // =====================================================
  const handleSignup = async () => {
    const query = `
      mutation RegisterUser($username: String!, $email: String!, $password: String!) {
        register(input: { username: $username, email: $email, password: $password }) {
          jwt
          user {
            id
            username
            email
          }
        }
      }
    `;

    // username is derived from email (simple trick)
    const variables = {
      username: email.split("@")[0],  // e.g., "test" from "test@gmail.com"
      email,
      password,
    };

    const res = await fetch("http://13.200.172.225:1337/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query, variables }),
    });

 
    


   
    navigate("/dashboard");
    
  };

  // =====================================================
  // UI SECTION
  // =====================================================

return (
  <div 
    style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",

      /* 🔥 Background image with gradient overlay */
      backgroundImage: `
        linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.2)
        ),
        url('src/assets/login_image.jpg')
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",

      overflow: "hidden",
    }}
  >
    <div
      style={{
        width: "100%",
        maxWidth: "380px",
        padding: "35px",
        borderRadius: "18px",

        /* 🔥 Real Frosted Glass */
        background: "rgba(255, 255, 255, 0.18)",
        backdropFilter: "blur(15px)",
        WebkitBackdropFilter: "blur(15px)",

        /* 🔥 Gradient Border */
        border: "2px solid transparent",
        backgroundClip: "padding-box, border-box",
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.18), rgba(255,255,255,0.18)),
          linear-gradient(135deg, rgba(255,255,255,0.4), rgba(0,0,0,0.4))
        `,

        /* 🔥 Glow on hover */
        transition: "all 0.35s ease",
        boxShadow: "0 5px 25px rgba(0,0,0,0.15)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 10px 35px rgba(0,0,0,0.25)";
        e.currentTarget.style.transform = "scale(1.02)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 5px 25px rgba(0,0,0,0.15)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    >
      <h1
        style={{
          fontSize: "26px",
          fontWeight: 600,
          color: "white",
          marginBottom: "20px",
          textShadow: "0 0 4px rgba(0,0,0,0.4)",
          textAlign: "center",
          
        }}
      >
        WELCOME TO SAMPLE TASK 2
      </h1>

      <label style={{ color: "white", fontSize: "14px" }}>Email</label>
      <input
        type="text"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "15px",
          marginTop: "5px",
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(255,255,255,0.4)",
        }}
      />

      <label style={{ color: "white", fontSize: "14px" }}>Password</label>
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "8px",
          marginBottom: "20px",
          marginTop: "5px",
          background: "rgba(255,255,255,0.7)",
          border: "1px solid rgba(255,255,255,0.4)",
        }}
      />

      <button
        onClick={handleLogin}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          background: "rgba(0,0,0,0.8)",
          color: "white",
          border: "none",
          marginBottom: "12px",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Login
      </button>

      <button
        onClick={handleSignup}
        style={{
          width: "100%",
          padding: "12px",
          borderRadius: "10px",
          background: "rgba(255,255,255,0.35)",
          color: "#000",
          border: "1px solid rgba(0,0,0,0.3)",
          cursor: "pointer",
          fontWeight: "600",
        }}
      >
        Signup
      </button>
    </div>
  </div>
);


}
