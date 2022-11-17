import { ISelectOption, ISelectProps } from '../../types/Interfaces.type';
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
            defaultValue={props.value || ''}
        >
            {
                props.optionDefault ? 
                    <option 
                        disabled={true} 
                        hidden
                        value={props.value || ''}
                    >
                        {props.value ? props.options.find((e) => e.data.toString() === props.value.toString())?.text : props.optionDefault}
                    </option>
                : null
            }
            {props.options.map((item: ISelectOption, index) => (
                <option key={index} value={item.data}>{item.text}</option>
            ))}
        </select>
    );
};

export default Select;
