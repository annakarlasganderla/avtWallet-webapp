import axios from 'axios';
import { useEffect, useState } from 'react';
import { removeExpensive } from '../../../../redux/expensives/reducer';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';


export const useListHook = () => {

    const dispatch = useAppDispatch();
    const expensivesState = useAppSelector((state) => state.expensives);
    const [amount, setAmount] = useState<Number>(0);

    useEffect(() => {
        getAmount();
    }, [expensivesState]);

    const getAmount = async () => {
        getBid();
        if (expensivesState.expensives.length === 0) {
            return setAmount(0);
        }
        axios.get(`http://economia.awesomeapi.com.br/json/last/USD-BRL`)
        .then((response) => {
            setAmount(expensivesState.expensives.map((expense) => 
                expense.coin === 'USD' ? expense.value * Number(response.data.USDBRL.bid) : expense.value
            ).reduce((prev, curr) => 
                Number(prev) + Number(curr), 0
            ));  
        }).catch((error: any) => {
            console.log(error);
        });
       
    };

    const getBid = async () => {
        
    };

    const deleteExpensive = (id: number) => {
        dispatch(removeExpensive(id))
    };

    return { expensivesState, deleteExpensive, amount };
};
