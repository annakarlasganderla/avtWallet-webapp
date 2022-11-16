import { useState } from "react";
import { IExpensive } from "../../../../redux/redux.types";
import { addExpensive } from "../../../../redux/store/actionCreators";
import { IUseFormHookProps } from "../expensives.types";

const useFormHook = (props: IUseFormHookProps) => {

    const [expense, setExpense] = useState<IExpensive>(
        {
            id: 0,
            name: "",
            value: 0,
            tag: null,
            methodPayment: null,
            description: ""
        }
    );

    console.log(expense);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setExpense({...expense, [event.target.name]: event.target.value})
    };

    const handleSubmit = () => {
        addExpensive(expense);
    };

    return { handleChange, handleSubmit };
};

export default useFormHook;
