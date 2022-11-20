import { ITextFieldProps } from '../../types/Interfaces.type';
import styles from './textfield.module.scss';

const TextField = (props: ITextFieldProps) => {
    return (
        <div className={styles.textfield}>
            <label
                className={styles.label}
                htmlFor={props.name}
            >
                {props.labeltext}
            </label>
            <input 
                type={props.type} 
                name={props.name}  
                id={props.id}
                value={props.value}
                placeholder={props.placeholder}
                disabled={props.disabled}
                onChange={props.onChange}
                className={styles.input}
                style={{border: props.errorMessage ? '2px solid #E44060' : '2px solid #000000'}}
            />
            <h5 className={styles.error}>{props.errorMessage}</h5>
        </div>
    );
};

export default TextField;
