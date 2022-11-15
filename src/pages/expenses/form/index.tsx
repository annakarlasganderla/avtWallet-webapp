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
            <div className={styles.form}>
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
