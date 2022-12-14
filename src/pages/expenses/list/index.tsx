import styles from './expenseList.module.scss';
import Button from '../../../components/Button';
import { AiOutlineRight } from 'react-icons/ai';
import { ExpensiveState, IExpensive, ILogin, LoginState } from '../../../redux/redux.types';
import { shallowEqual, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import accountIcon from '../../../assets/account.svg';
import { BsCurrencyEuro } from 'react-icons/bs';
import {CiLogin} from 'react-icons/ci'


export const Expense = () => {

    const navigate = useNavigate();
    const storedExpensives: IExpensive[] = useSelector((state: ExpensiveState) => state.expensives, shallowEqual);
    const expenses: IExpensive[] = storedExpensives !== undefined ? storedExpensives : []

    const loggedUser: ILogin = useSelector((state: LoginState) => state.logged, shallowEqual)

    console.log(loggedUser);
    console.log(storedExpensives);

    return (
        <>
            <header className={styles.header}>
                <div className={styles.subheader}>
                    <BsCurrencyEuro className={styles.icon} color='white' size={50} />
                    <h2>Hello, @fulano</h2>

                    <div className={styles.logout}>
                        <p>Logout</p>
                        <CiLogin className={styles.iconLogout} color='white' size={30} />
                    </div>
                    
                </div>
                
            </header>

            <main>
                <div className={styles.amount_container}>
                    <div className={styles.amount}>
                        <p>Amount: </p>

                        <h1>R$ 199,99</h1>
                    </div>
                </div>

                <div className={styles.list}>
                    {expenses.map((item) => (
                        <div className={styles.item}>
                            <h3>{item.name}</h3>

                            <div>
                                <h3>{item?.value?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>
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
