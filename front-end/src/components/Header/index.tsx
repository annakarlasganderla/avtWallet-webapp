import { BsCurrencyEuro } from "react-icons/bs";
import styles from "./header.module.scss";
import { IHeaderProps } from "./header.types";

const Header = (props: IHeaderProps) => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>
				<BsCurrencyEuro color="white" size={50} />
			</div>
			<div className={styles.title_area}>
				{!props.text && (
					<p>
						<strong>Welcome </strong> to<strong> your</strong> best web
						<strong> wallet</strong>
					</p>
				)}
				<strong>{props.text}</strong>
			</div>
		</header>
	);
};

export default Header;
