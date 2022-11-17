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
            />
        </div>
    );
};

export default TextField;
