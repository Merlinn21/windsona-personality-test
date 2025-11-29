import React, { useState } from "react";

function OptionBox({ optionText, onClick }) {
  const [isPressed, setIsPressed] = React.useState(false);

  return (
    <div
      className={`option-box option-box-a ${isPressed ? "pressed" : ""}`}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      onTouchStart={() => setIsPressed(true)}
      onTouchEnd={() => setIsPressed(false)}
      onClick={onClick}
    >
      <div
        className={`option-text ${
            optionText.length <= 40 ? "option-text-center" : ""
        }`}
      >
        <p className="font-courier-prime">{optionText}</p>
      </div>
    </div>
  );
}

export default OptionBox;
