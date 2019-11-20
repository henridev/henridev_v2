import React from "react";

export default function Switch(props) {
  const { checkHandler, checked } = props;
  return (
    <div className="switch_wrapper">
      <input
        type="checkbox"
        className="switch_checkbox"
        id={`new_switch`}
        onClick={checkHandler}
        checked={checked}
      />
      <label
        htmlFor={`new_switch`}
        className="switch_label"
        style={{ background: checked && "rgb(72, 151, 224)" }}
      >
        <span className={`react_switch_btn`}></span>
      </label>
    </div>
  );
}
