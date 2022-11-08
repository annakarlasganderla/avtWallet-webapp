import styles from './expenseList.module.scss';
import Button from '../../../components/Button';
import { AiOutlineRight } from 'react-icons/ai';

export const Expense = () => {

    const expenses = [
        {
            id: 1,
            name: 'Makeup',
            price: 99
        },
        {
            id: 2,
            name: 'Makeup',
            price: 99
        },
        {
            id: 3,
            name: 'Makeup',
            price: 99
        },
        {
            id: 4,
            name: 'Makeup',
            price: 99
        }
    ]

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
                    {expenses.map((item) => (
                        <div className={styles.item}>
                            <h3>{item.name}</h3>

                            <div>
                                <h3>{item.price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}</h3>

                                <AiOutlineRight />
                            </div>

                        </div>
                    ))}
                </div>

                <div className={styles.button_area}>
                    <div className={styles.button}>
                        <Button type='submit'>
                            + Expenses
                        </Button>
                    </div>

                </div>


            </main>

        </>
    );
}