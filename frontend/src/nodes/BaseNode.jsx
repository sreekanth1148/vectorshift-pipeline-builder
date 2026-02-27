import { Handle, Position } from "reactflow";

export default function BaseNode({
  id,
  title,
  inputs = [],
  outputs = [],
  children,
  width = 150,      // 🔥 reduced width
  fontSize = 12,    // 🔥 smaller text
}) {
  const handleSpacing = 18;   // 🔥 closer handles
  const handleStart = 35;     // 🔥 less top gap

  return (
    <div
      style={{
        width,
        padding: 8,                 // 🔥 reduced padding
        border: "1px solid #e2e8f0",
        borderRadius: 8,            // 🔥 smaller radius
        background: "#ffffff",
        fontSize,
        lineHeight: 1.3,
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)", // 🔥 lighter shadow
        position: "relative",
      }}
    >
      {/* Title */}
      <div
        style={{
          fontWeight: 600,
          marginBottom: 6,     // 🔥 reduced spacing
          fontSize: 13,
          color: "#1a202c",
        }}
      >
        {title}
      </div>

      {/* Content */}
      <div>{children}</div>

      {/* Input Handles */}
      {inputs.map((input, i) => (
        <Handle
          key={`${id}-input-${input}`}
          type="target"
          position={Position.Left}
          id={`${id}-input-${input}`}
          style={{
            top: handleStart + i * handleSpacing,
            background: "#4a5568",
            width: 8,      
            height: 8,
            borderRadius: "50%",
          }}
        />
      ))}

      {/* Output Handles */}
      {outputs.map((output, i) => (
        <Handle
          key={`${id}-output-${output}`}
          type="source"
          position={Position.Right}
          id={`${id}-output-${output}`}
          style={{
            top: handleStart + i * handleSpacing,
            background: "#4a5568",
            width: 8,      //  smaller handles
            height: 8,
            borderRadius: "50%",
          }}
        />
      ))}
    </div>
  );
}