import React, { useState } from "react";

function useForm(state) {
  const [form, setForm] = useState(state);
  const getValue = function (event) {
    const value = event.target.value;
    const name = event.target.name;
    const copyForm = {...form, [name] : value};
    setForm(copyForm);
  };
  return { form, setForm, getValue };
}

export default useForm;
