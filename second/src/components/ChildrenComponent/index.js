import React from "react";

function ChildrenComponent({
  label,
  value,
  onChangeValue,
  children,
  isDisabled,
  name,
}) {
  return (
    <div>
      <label>
        {label}

        <input
          name={name}
          value={value}
          onChange={onChangeValue}
          disabled={"disabled" ? isDisabled : "false"}
        />
      </label>
      {children}
    </div>
  );
}

export default ChildrenComponent;
