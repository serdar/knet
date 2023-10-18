import React, { useEffect, useState } from "react";

import { useIntl } from "react-intl";

export const Input = React.forwardRef((props: any, ref) => {
  const { attribute, disabled, intlLabel, name, onChange, required, value } = props; // these are just some of the props passed by the content-manager

  const { formatMessage } = useIntl();

  const handleChange = (e) => {
    onChange({
      target: { name, type: attribute.type, value: e.currentTarget.value },
    });
  };

  return (
    <label>
      {intlLabel}
      <input
        
        name={name}
        disabled={disabled}
        value={new Date().toDateString()}
        required={required}
        onChange={handleChange}
        defaultValue={new Date().getFullYear() + "/" + new Date().getMonth() + "/slug"}
      />
    </label>
  );
});