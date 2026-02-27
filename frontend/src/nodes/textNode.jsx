import React, { useState, useEffect, useRef } from "react";
import { Handle, Position } from "reactflow";

export default function TextNode() {
  const [text, setText] = useState("");
  const textareaRef = useRef(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height =
        textareaRef.current.scrollHeight + "px";
    }
  }, [text]);

  return (
    <div style={{
      minWidth: 180,
      padding: 8,
      borderRadius: 8,
      border: "1px solid #ddd",
      background: "#fff",
      fontSize: 12,
    }}>
      <div style={{ fontWeight: 600 }}>Text</div>

      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type text with {{variables}}..."
        style={{
          width: "100%",
          fontSize: 11,
          padding: 4,
          resize: "none",
          overflow: "hidden",
          borderRadius: 4,
          border: "1px solid #ccc",
        }}
      />

      <Handle type="target" position={Position.Left} />
      <Handle type="source" position={Position.Right} />
    </div>
  );
}