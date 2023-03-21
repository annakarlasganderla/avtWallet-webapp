import styles from "./select.module.scss";
import { ISelectProps } from "./select.types";

const Select = (props: ISelectProps) => {
	return (
		<select
			name={props.name}
			disabled={props.disabled}
			multiple={props.multiple}
			required={props.required}
			onChange={props.onChange}
			className={styles.select}
			defaultValue={props.value || ""}
		>
			{props.optionDefault ? (
				<option disabled={true} hidden value={""}>
					{props.optionDefault}
				</option>
			) : null}
			{props.options.map((item: any, index) => (
				<option key={index} value={item.data}>
					{item.text}
				</option>
			))}
		</select>
	);
};

export default Select;
