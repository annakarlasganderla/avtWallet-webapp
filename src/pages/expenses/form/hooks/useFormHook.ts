import React, { Dispatch } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { IExpensive } from "../../../../redux/redux.types";
import { addExpensive } from "../../../../redux/store/actionCreators";
import { IUseFormHookProps } from "../expensives.types";

const useFormHook = (props: IUseFormHookProps) => {

  const disabled = props.type === "view" ? true : false;
  const [expensive, setExpensive] = useState<IExpensive>({
    id: 0,
    name: "",
    value: 0,
    tag: null,
    methodPayment: null,
    description: "",
  });

  const handleChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setExpensive({ ...expensive, [event.target.name]: event.target.value });
  };

  return { handleChange, disabled, expensive };
};

export default useFormHook;
