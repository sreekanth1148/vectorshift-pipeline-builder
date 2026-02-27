import React from "react";
import { Handle, Position } from "reactflow";

export default function InputNode() {
  return (
    <div style={{
      minWidth: 140,
      padding: 8,
      borderRadius: 8,
      border: "1px solid #ddd",
      background: "#fff",
      fontSize: 12,
    }}>
      <div style={{ fontWeight: 600 }}>Input</div>
      <div style={{ fontSize: 11 }}>User Input</div>

      <Handle type="source" position={Position.Right} />
    </div>
  );
}