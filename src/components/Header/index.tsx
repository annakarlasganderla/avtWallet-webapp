import { BsCurrencyEuro } from 'react-icons/bs';
import styles from './header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <BsCurrencyEuro color='white' size={50} />
            </div>
        </header>
    );
};

export default Header;
