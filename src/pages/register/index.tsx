import { useState } from "react";
import accountIcon from "../../assets/account.svg";
import Button from "../../components/Button";
import Header from "../../components/Header";
import TextField from "../../components/TextField";
import styles from "./register.module.scss";

export const Register = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div>
			<Header />
			<div className={styles.container}>
				<div className={styles.input_area}>
					<div className={styles.title_area}>
						<img src={accountIcon} style={{ height: "30px", width: "30px" }} />
						<p>
							<strong>Register</strong>
						</p>
					</div>

					<div className={styles.inputs}>
						<TextField type={"text"} name={"name"} labeltext={"Name"} />
						<TextField
							type={"text"}
							name={"email"}
							labeltext={"Email"}
							onChange={(e) => setEmail(e.target.value)}
						/>
						<TextField
							type={"text"}
							name={"password"}
							labeltext={"Password"}
							onChange={(e) => setPassword(e.target.value)}
						/>
						<TextField type={"text"} name={"confirmPassword"} labeltext={"Confirm Password"} />

						<Button type="submit" onClick={() => {}} spacing={20}>
							Register
						</Button>
					</div>

					<div className={styles.links}>
						<a href="#">Login</a>
					</div>
				</div>
			</div>
		</div>
	);
};
