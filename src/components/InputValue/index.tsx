import { IInputValueProps } from '../../types/Interfaces.type';
import styles from './inputvalue.module.scss';

const InputValue = (props: IInputValueProps) => {
    return (
        <div className={styles.area} >
            <select
                disabled={props.disabled}
                name={props.nameSelect}
                value={props.valueSelect}
                onChange={props.onChange}
                className={styles.select}
            >
                {props.options.map((item: any, index) => (
                    <option key={index} value={item.data}>{item.text}</option>
                ))}
            </select>
            <input 
                type='number'
                disabled={props.disabled}
                name={props.nameInput}
                value={props.valueInput}
                placeholder={props.placeholder}
                onChange={props.onChange}
                className={styles.input}
            />
        </div>
    );
};

export default InputValue;
