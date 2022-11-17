import { useParams } from 'react-router';
import Button from '../../../components/Button';
import Header from '../../../components/Header';
import InputValue from '../../../components/InputValue';
import Select from '../../../components/Select';
import TextField from '../../../components/TextField';
import styles from './form.module.scss';
import useFormHook from './hooks/useFormHook';

const ExpensesForm = () => {

    const { type, id } = useParams();
    const { 
        handleChange, 
        disabled, 
        handleSubmit,
        tags,
        paymethod,
        coin,
        navigate,
        expensive
    } = useFormHook({type: type, id: id});

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
                        value={expensive.name}
                        onChange={(e) => handleChange(e)}
                    />
                    <InputValue
                        disabled={disabled}
                        nameInput={'value'}
                        placeholder={'Value'} 
                        options={coin} 
                        valueInput={expensive.value}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <div className={styles.inputRow}>
                    <Select
                        disabled={disabled}
                        name={'tag'} 
                        optionDefault={'Tag'}
                        options={tags} 
                        value={expensive.tag}
                        onChange={(e) => handleChange(e)}
                    />
                    <Select
                        disabled={disabled}
                        name={'methodPayment'} 
                        optionDefault={'Pay Method'}
                        options={paymethod} 
                        value={expensive.methodPayment}
                        onChange={(e) => handleChange(e)}
                    />
                </div>
                <textarea 
                    disabled={disabled}
                    className={styles.textarea}
                    name={'description'}
                    placeholder='Description'
                    value={expensive.description}
                    onChange={(e) => handleChange(e)}
                />
                <div className={styles.row}>
                    <Button 
                        type={'button'} 
                        width={'40%'} height={'35px'}
                        textsize={'16px'}
                        outlined 
                        onClick={() => navigate('/wallet')}
                    >
                        Cancel
                    </Button> 
                    <Button 
                        disabled={disabled}
                        width={'40%'} height={'35px'}
                        textsize={'16px'}
                        type={'submit'}
                        onClick={() => handleSubmit()}
                    >
                        Save
                    </Button>
                </div>
            </div>
        </>
    );
};

export default ExpensesForm;
