import { DraggableNode } from "./draggableNode";
import { useStore } from "./store";

export const PipelineToolbar = () => {
  const autoArrange = useStore((state) => state.autoArrange);

  return (
    <div
      style={{
        display: "flex",
        gap: "12px",
        alignItems: "center",
      }}
    >
      <DraggableNode type="customInput" label="Input" />
      <DraggableNode type="llm" label="LLM" />
      <DraggableNode type="customOutput" label="Output" />
      <DraggableNode type="text" label="Text" />

      {/* 🔥 Auto Arrange Button */}
      <button
        onClick={autoArrange}
        style={{
          padding: "6px 12px",
          borderRadius: "6px",
          border: "1px solid #cbd5e1",
          background: "#2563eb",
          color: "white",
          cursor: "pointer",
        }}
      >
        Auto Arrange
      </button>
    </div>
  );
};