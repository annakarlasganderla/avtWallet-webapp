import styles from "./expenseList.module.scss";
import Button from "../../../components/Button";
import { AiOutlineRight } from "react-icons/ai";
import { useNavigate } from "react-router";
import { useAppSelector } from "../../../redux/store";
import { BsTrash } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { useListHook } from "./hooks/useListHook";
import { BsCurrencyEuro } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";

export const Expense = () => {
  const navigate = useNavigate();

  const { expensivesState, deleteExpensive, amount } = useListHook();

  return (
    <>
      <header className={styles.header}>
        <div className={styles.subheader}>
          <BsCurrencyEuro className={styles.icon} color="white" size={50} />
          <h2>Hello, @fulano</h2>
          <div className={styles.logout}>
            <p>Logout</p>
            <CiLogin className={styles.iconLogout} color="white" size={30} />
          </div>
        </div>
      </header>

      <main>
        <div className={styles.amount_container}>
          <div className={styles.amount}>
            <p>Amount: </p>
            <h1 data-testid={"amount"}>
              {amount.toLocaleString("pt-br", {
                style: "currency",
                currency: "BRL",
              })}
            </h1>
          </div>
        </div>

        <div className={styles.list}>
          {expensivesState.expensives.map((item, index) => (
            <div className={styles.item} key={index}>
              <h3>{item.name}</h3>

              <div>
                <div>
                  <h3>
                    {`${
                      item.coin === "BRL"
                        ? item.value.toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })
                        : item.value.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })
                    } 
                                            `}
                  </h3>
                </div>

                <button
                  className={styles.buttonIcon}
                  onClick={() => navigate(`form/edit/${item.id}`)}
                >
                  <MdEdit />
                </button>

                <button
                  className={styles.buttonIcon}
                  onClick={() => deleteExpensive(item.id)}
                  data-testid={"delete-expensive"}
                >
                  <BsTrash />
                </button>

                <button
                  className={styles.buttonIcon}
                  onClick={() => navigate(`form/view/${item.id}`)}
                >
                  <AiOutlineRight />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.button_area}>
          <div className={styles.button}>
            <Button
              type={"button"}
              onClick={() => navigate("/wallet/form/new")}
              datatestid={"add-expensive"}
            >
              + Expenses
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};
