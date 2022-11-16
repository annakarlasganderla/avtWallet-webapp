import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { Dispatch } from 'redux';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import InputValue from '../../../components/InputValue';
import Select from '../../../components/Select';
import TextField from '../../../components/TextField';
import { IExpensive } from '../../../redux/redux.types';
import { expensiveTags, paymentMethods } from './expensives.types';
import styles from './form.module.scss';
import useFormHook from './hooks/useFormHook';

const ExpensesForm = () => {

    const { type, id } = useParams();
    const { handleChange, disabled, expensive } = useFormHook({type: type, id: id});
    const navigate = useNavigate();
    const dispatch: Dispatch<any> = useDispatch();
    
    const tag = [
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

    return (
        <>
            <Header text={'New expense'} />
            <h1 className={styles.title}>
                New Expense{/* {title} */}
            </h1>   
            <div className={styles.form}>
                <div className={styles.inputRow}>
                    <TextField 
                        disabled={disabled}
                        type={'text'}
                        name={'name'}
                        placeholder={'Name'}
                        onChange={(e) => handleChange(e)}
                    />
                    <InputValue
                        disabled={disabled}
                        nameInput={'value'}
                        placeholder={'Value'} 
                        options={coin} 
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputRow}>
                    <Select
                        disabled={disabled}
                        name={'tag'} 
                        optionDefault={'Tag'}
                        options={tag} 
                        onChange={(e) => handleChange(e)}
                    />
                    <Select
                        disabled={disabled}
                        name={'methodPayment'} 
                        optionDefault={'Pay Method'}
                        options={paymethod} 
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <textarea 
                    disabled={disabled}
                    className={styles.textarea}
                    name={'description'}
                    placeholder='Description'
                    onChange={(e) => handleChange(e)}
                />
                <div className={styles.row}>
                    <Button 
                        type={'button'} 
                        width={'40%'} height={'35px'}
                        textsize={'16px'}
                        outlined 
                    >
                        Cancel
                    </Button> 
                    <Button 
                        disabled={disabled}
                        width={'40%'} height={'35px'}
                        textsize={'16px'}
                        type={'submit'}
                        onClick={() => {navigate('/wallet')}}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ExpensesForm;
