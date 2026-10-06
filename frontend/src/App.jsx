import { useEffect, useState } from "react";

function App() {
  const [apiStatus, setApiStatus] = useState("checking...");

  useEffect(() => {
    fetch("http://localhost:8000/health")
      .then((res) => res.json())
      .then((data) => setApiStatus(data.status))
      .catch(() => setApiStatus("unreachable — is the API running?"));
  }, []);

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", padding: "3rem", maxWidth: "40rem" }}>
      <h1>Customer Support Analytics</h1>
      <p>Frontend skeleton is running — Vite + React.</p>
      <p>
        API status: <strong>{apiStatus}</strong>
      </p>
    </div>
  );
}

export default App;
