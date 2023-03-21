import styles from './textfield.module.scss';
import { ITextFieldProps } from './textfield.types';

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
                placeholder={props.placeholder}
                disabled={props.disabled}
                onChange={props.onChange}
                className={styles.input}
            />
        </div>
    );
};

export default TextField;
