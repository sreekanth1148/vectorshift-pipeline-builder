export const DraggableNode = ({ type, label }) => {
  const onDragStart = (event) => {
    event.dataTransfer.setData("application/reactflow", type);
    event.dataTransfer.effectAllowed = "move";
  };

  return (
    <div
      draggable
      onDragStart={onDragStart}
      style={{
        padding: "10px 20px",
        fontSize: "14px",
        borderRadius: "8px",
        background: "#1f2937",
        color: "#ffffff",
        cursor: "grab",
      }}
    >
      {label}
    </div>
  );
};