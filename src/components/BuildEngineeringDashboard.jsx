import React from "react";

const checks = [
  { label: "APAR Integration", status: "incomplete" },
  { label: "License", status: "complete" },
  { label: "BCC Report", status: "complete" },
  { label: "Test record Verification", status: "incomplete" },
];

const BuildEngineeringDashboard = () => {
  const getDotStyle = (status) => ({
    display: "inline-block",
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    marginLeft: "6px",
    backgroundColor: status === "complete" ? "green" : "red",
    verticalAlign: "middle",
  });

  return (
    <div
      style={{
        border: "1px solid black",
        padding: "1rem",
        textAlign: "center",
        backgroundColor: "#fff",
        maxWidth: "100%",
        marginTop: "1rem",
      }}
    >
      <h3 style={{ fontWeight: "bold", marginBottom: "1rem" }}>
        Build Engineering Dashboard
      </h3>

      <div style={{ fontWeight: "bold", fontSize: "1.1rem", marginBottom: "0.5rem" }}>
        905.24 in sprint 3 – Please make sure all pre-GM activities are completed
      </div>

      <div>
        {checks.map((item, index) => (
          <span key={index} style={{ marginRight: "20px", fontSize: "1rem" }}>
            {item.label}
            <span style={getDotStyle(item.status)}></span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default BuildEngineeringDashboard;
