import { ISelectProps } from '../../types/Interfaces.type';
import styles from './select.module.scss';

const Select = (props: ISelectProps) => {
    return (
        <select
            name={props.name}
            disabled={props.disabled}
            multiple={props.multiple}
            required={props.required}
            onChange={props.onChange}
            className={styles.select}
            value={props.value}
        >
            <option 
                disabled={true} 
                selected
                hidden
                value=''
            >
                {props.optionDefault}
            </option>
            {props.options.map((item: any, index) => (
                <option key={index} value={item.data}>{item.text}</option>
            ))}
        </select>
    );
}

export default Select;
