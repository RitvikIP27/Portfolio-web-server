import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");

  // -----------------------------------------------------------
  // FETCH USERS (Handles unknown schema safely)
  // -----------------------------------------------------------
  const fetchUsers = async () => {
    // We try the recruiter’s mentioned "userDB" collection first
    const queriesToTry = [
      `
      query {
        userDBs {
          data {
            id
            attributes {
              name
              email
              role
            }
          }
        }
      }
      `,

      // Default Strapi v4 users query
      `
      query {
        usersPermissionsUsers {
          data {
            id
            attributes {
              username
              email
            }
          }
        }
      }
      `,

      // Strapi simple users query
      `
      query {
        users {
          data {
            id
            attributes {
              username
              email
            }
          }
        }
      }
      `
    ];

    for (let i = 0; i < queriesToTry.length; i++) {
      try {
        const res = await fetch("http://13.200.172.225:1337/graphql", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: queriesToTry[i] }),
        });

        const data = await res.json();
        console.log(`Query Attempt #${i + 1}:`, data);

        if (data.errors) {
          continue; // Try next query
        }

        const possibleFields = [
          "userDBs",
          "usersPermissionsUsers",
          "users",
        ];

        for (let field of possibleFields) {
          if (data.data && data.data[field] && data.data[field].data) {
            setUsers(data.data[field].data);
            return;
          }
        }
      } catch (err) {
        console.error("Error fetching:", err);
      }
    }

    setError("Unable to load user data from GraphQL.");
  };

  // fetch users when page loads
  useEffect(() => {
    fetchUsers();
  }, []);

return (
  <div 
    style={{
      minHeight: "100vh",
      width: "100vw",
      padding: "40px",
      background: "linear-gradient(135deg, #f3f4f6, #e5e7eb)", 
      backgroundImage: `
        linear-gradient(
          rgba(0, 0, 0, 0.5), 
          rgba(0, 0, 0, 0.2)
        ),
        url('src/assets/dashboard_image.jpg')
      `,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >

    {/* TASK 1 connector */}
    <button
      onClick={() => navigate("/home")}
      style={{
        padding: "10px 22px",
        background: "black",
        color: "white", 
        border: "none",
        borderRadius: "8px",
        cursor: "pointer",
        marginBottom: "25px",
        fontSize: "15px",
        fontWeight: 600,
        transition: "0.25s ease",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.85" }}
      onMouseLeave={(e) => { e.currentTarget.style.opacity = "1" }}
    >
      TASK 1: Go to Home Page
    </button>

    <div 
      style={{
        width: "100%",
        maxWidth: "900px",
        background: "rgba(255,255,255,0.85)",
        backdropFilter: "blur(10px)",
        borderRadius: "16px",
        padding: "30px",
        boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
        border: "1px solid rgba(255,255,255,0.6)"
      }}
    >
      <h1 
        style={{
          fontSize: "30px",
          fontWeight: "600",
          color: "#111",
          marginBottom: "25px",
        }}
      >
        Dashboard
      </h1>

      {error && (
        <p style={{ color: "red", marginBottom: "20px", fontSize: "15px" }}>
          {error}
        </p>
      )}

      {/* CLEAN MODERN TABLE */}
      <div 
        style={{
          overflowX: "auto",
          borderRadius: "12px",
          border: "1px solid #e5e7eb",
          background: "white"
        }}
      >
        <table 
          style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "15px",
          }}
        >
          <thead>
            <tr style={{ background: "#f9fafb", textAlign: "left" }}>
              <th style={{ padding: "14px 16px", borderBottom: "1px solid #e5e7eb" }}>ID</th>
              <th style={{ padding: "14px 16px", borderBottom: "1px solid #e5e7eb" }}>Name / Username</th>
              <th style={{ padding: "14px 16px", borderBottom: "1px solid #e5e7eb" }}>Email</th>
              <th style={{ padding: "14px 16px", borderBottom: "1px solid #e5e7eb" }}>Role</th>
            </tr>
          </thead>

          <tbody>
            {users.length === 0 ? (
              <tr>
                <td 
                  colSpan="4" 
                  style={{ 
                    textAlign: "center", 
                    padding: "30px", 
                    color: "#555" 
                  }}
                >
                  No user data available.
                </td>
              </tr>
            ) : (
              users.map((user) => (
                <tr key={user.id} style={{ borderBottom: "1px solid #f3f4f6" }}>
                  <td style={{ padding: "14px 16px" }}>{user.id}</td>
                  <td style={{ padding: "14px 16px" }}>
                    {user.attributes.name ||
                      user.attributes.username ||
                      "N/A"}
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    {user.attributes.email || "N/A"}
                  </td>
                  <td style={{ padding: "14px 16px" }}>
                    {user.attributes.role || "N/A"}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

}
