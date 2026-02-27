import { useStore } from "./store";

export function SubmitButton() {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const submit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) throw new Error("Backend error");

      const data = await response.json();

      alert(
        `Pipeline Parsed!\n\n` +
          `Nodes: ${data.num_nodes}\n` +
          `Edges: ${data.num_edges}\n` +
          `Is DAG: ${data.is_dag ? "Yes ✅" : "No ❌"}`
      );
    } catch (error) {
      alert("❌ Failed to fetch from backend.\nMake sure FastAPI is running.");
      console.error(error);
    }
  };

  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: "20px",
        transform: "translateX(-50%)",
        zIndex: 10,
      }}
    >
      <button
        onClick={submit}
        style={{
          padding: "12px 22px",
          fontSize: "14px",
          fontWeight: 500,
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          background: "#2563eb",
          color: "#ffffff",
          boxShadow: "0 4px 10px rgba(37, 99, 235, 0.35)",
          transition: "all 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "#1d4ed8";
          e.currentTarget.style.boxShadow =
            "0 6px 14px rgba(29, 78, 216, 0.45)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "#2563eb";
          e.currentTarget.style.boxShadow =
            "0 4px 10px rgba(37, 99, 235, 0.35)";
        }}
      >
        Submit
      </button>
    </div>
  );
}