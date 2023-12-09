import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div
      style={{
        backgroundColor: "#E5E7EB",
        width: "100%",
        paddingLeft: "16px",
        paddingRight: "0",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          border: "1px solid #E5E7EB",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "32px",
          borderRadius: "8px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <p
          style={{
            fontSize: "6rem",
            fontWeight: "bold",
            letterSpacing: "wider",
            color: "#D1D5DB",
          }}
        >
          404
        </p>
        <p
          style={{
            fontSize: "2rem",
            fontWeight: "bold",
            letterSpacing: "wider",
            color: "#9CA3AF",
            marginTop: "16px",
          }}
        >
          Page Not Found
        </p>
        <p
          style={{
            color: "#9CA3AF",
            marginTop: "16px",
            paddingBottom: "8px",
            borderBottom: "2px solid #E5E7EB",
            textAlign: "center",
          }}
        >
          Sorry, the page you are looking for could not be found.
        </p>
        <NavLink
          to={"/"}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#2563EB",
            color: "#FFFFFF",
            padding: "8px 16px",
            marginTop: "24px",
            borderRadius: "4px",
            transition: "background-color 0.3s ease",
            textDecoration: "none",
          }}
          title="Return Home"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ height: "1.25rem", width: "1.25rem", marginRight: "4px" }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          <span>Return Home</span>
        </NavLink>
      </div>
    </div>
  );
}
