import React, { useEffect, useState, useRef } from "react";

export const Input = React.forwardRef((props: any, ref) => {
  const { attribute, disabled, intlLabel, name, onChange, required, value } =
    props; // these are just some of the props passed by the content-manager

  const defaultValue: string = `some input`;

  const handleChange = (e) => {
    onChange({
      target: { name, type: attribute.type, value: e.currentTarget.value },
    });
  };

  return (
    <label>
      some input
      <input
        name={name}
        disabled={disabled}
        value={defaultValue}
        required={required}
        onChange={handleChange}
        defaultValue={defaultValue}
      />
    </label>
  );
});
