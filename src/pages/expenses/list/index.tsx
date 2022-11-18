import styles from './expenseList.module.scss';
import Button from '../../../components/Button';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../redux/store';
import { BsTrash } from 'react-icons/bs';
import { useListHook } from './hooks/useListHook';
import { useState } from 'react';
import { removeExpensive } from '../../../redux/expensives/reducer';
import { IExpensive } from '../../../redux/redux.types';


export const Expense = () => {
    const sessionState = useAppSelector((state) => state.session);
    const expensivesState = useAppSelector((state) => state.expensives);

    const navigate = useNavigate();

    const storedExpensives = expensivesState.expensives;
    const expensives: IExpensive[] = storedExpensives !== undefined ? storedExpensives : []

    const { deleteExpensive } = useListHook();

    return (
        <>
            <header className={styles.header}>
                <h2>Hello, @fulano</h2>
            </header>

            <main>
                <div className={styles.amount_container}>
                    <div className={styles.amount}>
                        <p>Amount: </p>
                        <h1>R$ 199,99</h1>
                    </div>
                </div>
                <div className={styles.list}>
                    {expensivesState.expensives.map((item, index) => (
                        <div className={styles.item} key={index}>
                            <h3>{item.name}</h3>

                            <div>
                                <div>
                                    <h3>{item.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
                                </div>

                                <button className={styles.buttonIcon}>
                                    <BsTrash onClick={() => deleteExpensive(item.id)} />
                                </button>
                                
                                <button className={styles.buttonIcon}>
                                    <AiOutlineRight  onClick={() => navigate(`form/view/${item.id}`)} />
                                </button>

                            </div>

                        </div>
                    ))}
                </div>

                <div className={styles.button_area}>
                    <div className={styles.button}>
                        <Button
                            type={'button'}
                            onClick={() => navigate('/wallet/form/new')}
                        >
                            + Expenses
                        </Button>
                    </div>
                </div>
            </main>
        </>
    );
};
