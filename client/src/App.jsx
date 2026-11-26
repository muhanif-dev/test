import { useEffect, useState } from "react";
function App() {
  const [message, setMessage] = useState("Connecting to backend...");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchBackend = async () => {
      try {
        const response = await fetch(
  `${import.meta.env.VITE_API_BASE_URL}/api/health`
);

        if (!response.ok) {
          throw new Error("Backend request failed");
        }
        const data = await response.json();
        setMessage(data.message);
      } catch (error) {
        setMessage("Backend connection failed!");
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchBackend();
  }, []);

  return (
    <div>
      <h1>MyNotes Application</h1>
      <h2>Backend Connection Status</h2>
      <p>{loading ? "Connecting..." : message}</p>
    </div>
  );
}
export default App;
