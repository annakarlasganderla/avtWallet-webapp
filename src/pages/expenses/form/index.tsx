import Button from '../../../components/Button';
import Header from '../../../components/Header';
import InputValue from '../../../components/InputValue';
import Select from '../../../components/Select';
import TextField from '../../../components/TextField';
import styles from './form.module.scss';

const ExpensesForm = () => {
    const teste = [
        {
            text: 'teste',
            data: 'teste'
        },
        {
            text: 'teste1',
            data: 'teste1'
        }
    ]

    const coin = [
        {
            text: 'R$',
            data: 'R$'
        },
        {
            text: 'US$',
            data: 'US$'
        }
    ]

    return (
        <>
            <Header text={'New expense'} />
            <h1 className={styles.title}>
                New Expense{/* {title} */}
            </h1>   
            <div className={styles.form}>
                <div className={styles.inputRow}>
                    <TextField 
                        type={'text'}
                        name={'name'}
                        placeholder={'Name'}
                    />
                    <InputValue
                        nameInput={'value'}
                        placeholder={'Value'} 
                        options={coin} 
                    />
                </div>
                <div className={styles.inputRow}>
                    <Select
                        name={'tag'} 
                        optionDefault={'Tag'}
                        options={teste} 
                    />
                    <Select
                        name={'payMethod'} 
                        optionDefault={'Pay Method'}
                        options={teste} 
                    />
                </div>
                <textarea 
                    className={styles.textarea}
                    placeholder='Description'
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
                        width={'40%'} height={'35px'}
                        textsize={'16px'}
                        type={'submit'} 
                    >
                        Save
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ExpensesForm;
