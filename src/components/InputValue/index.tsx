import { IInputValueProps } from '../../types/Interfaces.type';
import styles from './inputvalue.module.scss';

const InputValue = (props: IInputValueProps) => {
    return (
        <div className={styles.area} >
            <select
                disabled={props.disabled}
                name={props.nameSelect}
                onChange={props.onChange}
                className={styles.select}
                value={props.valueSelect}
                defaultValue={props.valueSelect}
                data-testid={props.datatestid0}
            >   
                {props.options.map((item: any, index) => (
                    <option key={index} value={item.data}>{item.text}</option>
                ))}
            </select>
            <input 
                step={0.50}
                min={0}
                type='number'
                disabled={props.disabled}
                name={props.nameInput}
                value={props?.valueInput || ''}
                placeholder={props.placeholder}
                onChange={props.onChange}
                className={styles.input}
                data-testid={props.datatestid1}
            />  
        </div>
    );
};

export default InputValue;
