import styles from './expenseList.module.scss';
import Button from '../../../components/Button';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { useAppSelector } from '../../../redux/store';
import { BsTrash } from 'react-icons/bs';
import { MdEdit } from 'react-icons/md';
import { useListHook } from './hooks/useListHook';
import Header from '../../../components/Header';

export const Expense = () => {
    const sessionState = useAppSelector((state) => state.session);
    
    const navigate = useNavigate();

    const { expensivesState , deleteExpensive, amount } = useListHook();

    return (
        <>
            <header className={styles.header}>
                <h2>Hello, @fulano</h2>
            </header>

            <main>
                <div className={styles.amount_container}>
                    <div className={styles.amount}>
                        <p>Amount: </p>
                        <h1>{amount.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h1>
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

                                <button 
                                    className={styles.buttonIcon}
                                    onClick={() => navigate(`form/edit/${item.id}`)}
                                >
                                    <MdEdit />
                                </button>

                                <button 
                                    className={styles.buttonIcon}
                                    onClick={() => deleteExpensive(item.id)}
                                >
                                    <BsTrash />
                                </button>
                                
                                <button 
                                    className={styles.buttonIcon}
                                    onClick={() => navigate(`form/view/${item.id}`)}
                                >
                                    <AiOutlineRight/>
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
