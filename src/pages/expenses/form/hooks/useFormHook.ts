import React, { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { addExpensive } from '../../../../redux/expensives/reducer';
import { IExpensive } from '../../../../redux/redux.types';
import { useAppDispatch, useAppSelector } from '../../../../redux/store';
import { expensiveTags, IUseFormHookProps, paymentMethods } from '../expensives.types';

const useFormHook = (props: IUseFormHookProps) => {

    const disabled = props.type === 'view' ? true : false;
    const expensivesState = useAppSelector((state) => state.expensives);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const tags = [
        {
            text: 'Alimentação',
            data: expensiveTags.alimentacao
        },
        {
            text: 'Lazer',
            data: expensiveTags.lazer
        },
        {
            text: 'Trabalho',
            data: expensiveTags.trabalho
        },
        {
            text: 'Transporte',
            data: expensiveTags.transporte
        },
        {
            text: 'Saúde',
            data: expensiveTags.saude
        }
    ];

    const paymethod = [
        {
            text: 'Dinheiro',
            data: paymentMethods.dinheiro
        },
        {
            text: 'Cartão de Crédito',
            data: paymentMethods.credito
        },
        {
            text: 'Cartão de Débito',
            data: paymentMethods.debito
        }
    ];

    const coin = [
        {
            text: 'R$',
            data: 'R$'
        },
        {
            text: 'US$',
            data: 'US$'
        }
    ];

    const [expensive, setExpensive] = useState<IExpensive>({
        id: expensivesState.expensives.length + 1,
        name: '',
        value: 0,
        tag: null,
        methodPayment: null,
        description: '',
    });

    useEffect(() => {
        if (props.id && (props.type === 'edit' || props.type === 'view')) {
            getById(Number(props.id));
        }
    }, []);

    const getById = (id: number) => {
        let expenseFind = expensivesState.expensives.find((expensive) => expensive.id === id);
        if (expenseFind) {
            setExpensive(expenseFind);
        }
    };

    const handleChange = (
        event: React.ChangeEvent<
            HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
        >
    ) => {
        setExpensive({ ...expensive, [event.target.name]: event.target.value });
    };

    const handleSubmit = () => {
        dispatch(addExpensive(expensive));
        navigate('/wallet');
    };

    return { handleChange, disabled, handleSubmit, expensive, tags, paymethod, coin, navigate };
};

export default useFormHook;
