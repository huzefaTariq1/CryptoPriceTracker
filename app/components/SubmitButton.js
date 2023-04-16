import React from "react";
import { useFormikContext } from "formik";

import AppButton from "./AppButton";

function SubmitButton({ title }) {
  const { handleSubmit } = useFormikContext();

  return (
    <AppButton
      title={title}
      textcolor="#16181D"
      color="primaryGreen"
      borderColor="#4FFC34"
      onPress={handleSubmit}
    />
  );
}

export default SubmitButton;
