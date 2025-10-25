import React, { useRef } from "react";

function FocusInputExample() {
  // 1️⃣ Create a ref (a container for the input element)
  const inputRef = useRef(null);

  // 2️⃣ Define a function that uses the ref
  const handleFocus = () => {
    // Access the actual DOM element via inputRef.current
    inputRef.current.focus(); // Focus the input field
  };

  const handleClear = () => {
    inputRef.current.value = ""; // Clear input text directly
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>🎯 useRef Example: Focus and Clear Input</h2>

      {/* 3️⃣ Attach the ref to the DOM element */}
      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
        style={{
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid gray",
          outline: "none",
        }}
      />

      <div style={{ marginTop: "10px" }}>
        {/* 4️⃣ Use buttons to interact with the element */}
        <button
          onClick={handleFocus}
          style={{
            marginRight: "10px",
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Focus Input
        </button>

        <button
          onClick={handleClear}
          style={{
            padding: "8px 16px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Clear Input
        </button>
      </div>
    </div>
  );
}

export default FocusInputExample;
