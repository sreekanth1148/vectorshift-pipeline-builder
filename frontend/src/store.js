import { create } from "zustand";
import {
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
} from "reactflow";

export const useStore = create((set, get) => ({
  nodes: [],
  edges: [],

  onNodesChange: (changes) =>
    set({
      nodes: applyNodeChanges(changes, get().nodes),
    }),

  onEdgesChange: (changes) =>
    set({
      edges: applyEdgeChanges(changes, get().edges),
    }),

  onConnect: (connection) =>
    set({
      edges: addEdge({ ...connection, animated: true }, get().edges),
    }),

  addNode: (type, position) => {
    const newNode = {
      id: `${type}-${Date.now()}`,
      type,
      position,
      data: {},
    };

    set({
      nodes: [...get().nodes, newNode],
    });
  },

  /* 🔥 AUTO ARRANGE LEFT → RIGHT */
  autoArrange: () => {
  const nodes = get().nodes;

  const order = ["customInput", "llm", "text", "customOutput"];

  const spacingX = 280;
  const centerY = 200;

  const sortedNodes = [...nodes].sort(
    (a, b) => order.indexOf(a.type) - order.indexOf(b.type)
  );

  const arrangedNodes = sortedNodes.map((node, index) => ({
    ...node,
    position: {
      x: index * spacingX,
      y: centerY,
    },
  }));

  set({ nodes: arrangedNodes });
},
}));