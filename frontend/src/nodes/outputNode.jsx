import React from "react";
import { Handle, Position } from "reactflow";

export default function OutputNode() {
  return (
    <div style={{
      minWidth: 140,
      padding: 8,
      borderRadius: 8,
      border: "1px solid #ddd",
      background: "#fff",
      fontSize: 12,
    }}>
      <div style={{ fontWeight: 600 }}>Output</div>

      <Handle type="target" position={Position.Left} />
    </div>
  );
}