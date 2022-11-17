import styles from './expenseList.module.scss';
import Button from '../../../components/Button';
import { AiOutlineRight } from 'react-icons/ai';
import { useNavigate } from 'react-router';
import { useAppDispatch, useAppSelector } from '../../../redux/store';

export const Expense = () => {

    const sessionState = useAppSelector((state) => state.session);
    const expensivesState = useAppSelector((state) => state.expensives);
    
    const dispatch = useAppDispatch();
    
    const navigate = useNavigate();

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
                        <div className={styles.item} key={index} onClick={() => navigate(`form/view/${item.id}`)}>
                            <h3>{item.name}</h3>

                            <div>
                                <h3>{item.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
                                <AiOutlineRight />
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
