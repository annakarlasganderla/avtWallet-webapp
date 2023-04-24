import styles from "./expenseList.module.scss";
import Button from "../../../components/Button";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import { BsCurrencyEuro } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";

const RevenueList = () => {
	const navigate = useNavigate();

	return (
		<>
			<header className="w-full h-20 flex items-center bg-black text-gray-50 ">
				<div className="w-full flex justify-between items-center mx-8">
					<BsCurrencyEuro className="block" color="white" size={50} />
					<h2>Hello, @fulano</h2>
					<div className="flex items-center gap-4 cursor-pointer hover:opacity-50 transition-all ease-in-out delay-150">
						<p className="font-bold">Logout</p>
						<CiLogin className={styles.iconLogout} color="white" size={30} />
					</div>
				</div>
			</header>

			<main>
				<div className="w-100 flex flex-col justify-center items-center">
					<div className="w-2/3 flex flex-col border-2 py-8 gap-4">
						<p>Amount: </p>
						<h1>R$ 199,99</h1>
					</div>
				</div>

				<div className={styles.list}>
					<div className={styles.item}>
						<h3>item.name</h3>
						<div>
							<h3>
								item?.value?.toLocaleString("pt-br", style: "currency", currency: "BRL", )
							</h3>
							<AiOutlineRight />
						</div>
					</div>
				</div>

				<div className="w-100 flex justify-center items-center">
					<div className={styles.button}>
						<Button type={"button"} onClick={() => navigate("/wallet/form/new")}>
							+ Expenses
						</Button>
					</div>
				</div>
			</main>
		</>
	);
};
export default RevenueList;
