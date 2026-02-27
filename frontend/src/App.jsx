import React, { useCallback } from "react";
import ReactFlow, {
  Background,
  Controls,
  addEdge,
} from "reactflow";
import "reactflow/dist/style.css";

import { useStore } from "./store";
import InputNode from "./nodes/inputNode";
import LLMNode from "./nodes/llmNode";
import OutputNode from "./nodes/outputNode";
import TextNode from "./nodes/textNode";
import { SubmitButton } from "./submit";  // 🔥 default import
import { PipelineToolbar } from "./toolbar";  // 🔥 named import

/* 🔥 Define outside component */
const nodeTypes = {
  customInput: InputNode,
  llm: LLMNode,
  customOutput: OutputNode,
  text: TextNode,
};

export default function App() {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const onNodesChange = useStore((state) => state.onNodesChange);
  const onEdgesChange = useStore((state) => state.onEdgesChange);
  const storeOnConnect = useStore((state) => state.onConnect);

  const addNode = useStore((state) => state.addNode);

  /* 🔥 Animated edges */
  const onConnect = useCallback(
    (params) =>
      storeOnConnect({
        ...params,
        animated: true,
      }),
    [storeOnConnect]
  );

  /* 🔥 Allow drag */
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  /* 🔥 Handle drop */
  const onDrop = useCallback(
    (event) => {
      event.preventDefault();

      const type = event.dataTransfer.getData("application/reactflow");
      if (!type) return;

      const bounds = event.currentTarget.getBoundingClientRect();

      const position = {
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      };

      addNode(type, position);
    },
    [addNode]
  );

  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#f9fafb",
      }}
    >
      {/* Toolbar */}
      <div style={{ padding: 12 }}>
        <PipelineToolbar />
      </div>

      {/* Canvas */}
      <div
        style={{
          flex: 1,
          margin: 20,
          borderRadius: 12,
          overflow: "hidden",
          border: "1px solid #e2e8f0",
          background: "#ffffff",
        }}
      >
        <ReactFlow
          nodes={nodes}
          edges={edges}
          nodeTypes={nodeTypes}
          onNodesChange={onNodesChange}   // 🔥 FIX FOR STUCK NODE
          onEdgesChange={onEdgesChange}   // 🔥 FIX FOR EDGE UPDATES
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          defaultViewport={{ x: 0, y: 0, zoom: 1.1 }}
          minZoom={0.5}
          maxZoom={2}
        >
          <Background gap={20} size={1} />
          <Controls />
        </ReactFlow>
      </div>

      {/* Submit */}
      <div style={{ textAlign: "center", marginBottom: 20 }}>
        <SubmitButton />
      </div>
    </div>
  );
}