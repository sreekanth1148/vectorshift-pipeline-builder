import React from "react";
import { Handle, Position } from "reactflow";

export default function LLMNode() {
  return (
    <div style={{
      minWidth: 160,
      padding: 8,
      borderRadius: 8,
      border: "1px solid #ddd",
      background: "#fff",
      fontSize: 12,
    }}>
      <div style={{ fontWeight: 600 }}>LLM</div>
      <div style={{ fontSize: 11 }}>Large Language Model</div>

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}