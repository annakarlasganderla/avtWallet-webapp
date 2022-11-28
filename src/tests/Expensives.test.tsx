import { buildStoreLogged, renderWithProvider } from "./testUtils";
import { fireEvent, screen } from "@testing-library/react";
import {
  expensiveTags,
  paymentMethods,
} from "../pages/expenses/form/expensives.types";

describe("Expensives", () => {
  beforeEach(() => {
    const currentState = window.history.state;
    window.history.replaceState(currentState, "", "/");
  });

  it("Should show infos about the expensive", () => {
    window.history.pushState({}, "Expenses page", "/wallet/form/view/1");
    renderWithProvider(buildStoreLogged());

    expect(screen.getByTestId("name-input")).toHaveValue("teste");
    expect(screen.getByTestId("value-input")).toHaveValue(2);
    expect(screen.getByTestId("coin-input")).toHaveValue("BRL");
    expect(screen.getByTestId("tag-input")).toHaveValue("4");
    expect(screen.getByTestId("methodPayment-input")).toHaveValue("2");
    expect(screen.getByTestId("description-input")).toHaveValue(
      "Gastos com vacinação"
    );
  });

  it("Should insert one more expensive", () => {
    window.history.pushState({}, "Expenses page", "/wallet/form/");
    renderWithProvider(buildStoreLogged());

    /**
     * valida se os campos existem na pagina
     */
    expect(screen.getByTestId("name-input")).toBeInTheDocument();
    expect(screen.getByTestId("value-input")).toBeInTheDocument();
    expect(screen.getByTestId("tag-input")).toBeInTheDocument();
    expect(screen.getByTestId("methodPayment-input")).toBeInTheDocument();
    expect(screen.getByTestId("description-input")).toBeInTheDocument();

    const inputName = screen.getByTestId("name-input");
    fireEvent.change(inputName, {
      target: {
        value: "teste1",
      },
    });
    expect(inputName).toHaveValue("teste1");

    const inputValue = screen.getByTestId("value-input");
    fireEvent.change(inputValue, {
      target: {
        value: 2,
      },
    });
    expect(inputValue).toHaveValue(2);

    const inputCoin = screen.getByTestId("coin-input");
    fireEvent.change(inputCoin, {
      target: {
        value: "BRL",
      },
    });
    expect(inputCoin).toHaveValue("BRL");

    const inputTag = screen.getByTestId("tag-input");
    fireEvent.change(inputTag, {
      target: {
        value: expensiveTags.lazer,
      },
    });
    expect(inputTag).toHaveValue("1");

    const inputMethodPayment = screen.getByTestId("methodPayment-input");
    fireEvent.change(inputMethodPayment, {
      target: {
        value: paymentMethods.dinheiro,
      },
    });
    expect(inputMethodPayment).toHaveValue("0");

    const inputDescription = screen.getByTestId("description-input");
    fireEvent.change(inputDescription, {
      target: {
        value: "Cineminha com a gata.",
      },
    });
    expect(inputDescription).toHaveValue("Cineminha com a gata.");


    expect(screen.getByTestId("submit-expensive")).toBeInTheDocument();

    const submiteNewExpensive = screen.getByTestId("submit-expensive");
    fireEvent.click(submiteNewExpensive);

    expect(screen.getByTestId("add-expensive")).toBeInTheDocument();
  });

  it("Should sum the amount of expenses correctly", () => {
    window.history.pushState({}, "Expenses page", "/wallet/form/");
    renderWithProvider(buildStoreLogged());

    /**
     * valida se os campos existem na pagina
     */
    expect(screen.getByTestId("name-input")).toBeInTheDocument();
    expect(screen.getByTestId("value-input")).toBeInTheDocument();
    expect(screen.getByTestId("tag-input")).toBeInTheDocument();
    expect(screen.getByTestId("methodPayment-input")).toBeInTheDocument();
    expect(screen.getByTestId("description-input")).toBeInTheDocument();

    const inputName = screen.getByTestId("name-input");
    fireEvent.change(inputName, {
      target: {
        value: "teste1",
      },
    });
    expect(inputName).toHaveValue("teste1");

    const inputValue = screen.getByTestId("value-input");
    fireEvent.change(inputValue, {
      target: {
        value: 2,
      },
    });
    expect(inputValue).toHaveValue(2);

    const inputCoin = screen.getByTestId("coin-input");
    fireEvent.change(inputCoin, {
      target: {
        value: "BRL",
      },
    });
    expect(inputCoin).toHaveValue("BRL");

    const inputTag = screen.getByTestId("tag-input");
    fireEvent.change(inputTag, {
      target: {
        value: expensiveTags.lazer,
      },
    });
    expect(inputTag).toHaveValue("1");

    const inputMethodPayment = screen.getByTestId("methodPayment-input");
    fireEvent.change(inputMethodPayment, {
      target: {
        value: paymentMethods.dinheiro,
      },
    });
    expect(inputMethodPayment).toHaveValue("0");

    const inputDescription = screen.getByTestId("description-input");
    fireEvent.change(inputDescription, {
      target: {
        value: "Cineminha com a gata.",
      },
    });
    expect(inputDescription).toHaveValue("Cineminha com a gata.");


    expect(screen.getByTestId("submit-expensive")).toBeInTheDocument();

    const submiteNewExpensive = screen.getByTestId("submit-expensive");
    fireEvent.click(submiteNewExpensive);

    expect(screen.getByTestId("add-expensive")).toBeInTheDocument();

    expect(screen.getByTestId("amount")).toBeInTheDocument();
    expect(screen.getByTestId("amount")).toHaveTextContent('R$ 4,00');
  })

  it("Should delete one expenses correctly", () => {
    window.history.pushState({}, "Expenses page", "/wallet/form/");
    renderWithProvider(buildStoreLogged());

    /**
     * valida se os campos existem na pagina
     */
    expect(screen.getByTestId("name-input")).toBeInTheDocument();
    expect(screen.getByTestId("value-input")).toBeInTheDocument();
    expect(screen.getByTestId("tag-input")).toBeInTheDocument();
    expect(screen.getByTestId("methodPayment-input")).toBeInTheDocument();
    expect(screen.getByTestId("description-input")).toBeInTheDocument();

    const inputName = screen.getByTestId("name-input");
    fireEvent.change(inputName, {
      target: {
        value: "teste1",
      },
    });
    expect(inputName).toHaveValue("teste1");

    const inputValue = screen.getByTestId("value-input");
    fireEvent.change(inputValue, {
      target: {
        value: 2,
      },
    });
    expect(inputValue).toHaveValue(2);

    const inputCoin = screen.getByTestId("coin-input");
    fireEvent.change(inputCoin, {
      target: {
        value: "BRL",
      },
    });
    expect(inputCoin).toHaveValue("BRL");

    const inputTag = screen.getByTestId("tag-input");
    fireEvent.change(inputTag, {
      target: {
        value: expensiveTags.lazer,
      },
    });
    expect(inputTag).toHaveValue("1");

    const inputMethodPayment = screen.getByTestId("methodPayment-input");
    fireEvent.change(inputMethodPayment, {
      target: {
        value: paymentMethods.dinheiro,
      },
    });
    expect(inputMethodPayment).toHaveValue("0");

    const inputDescription = screen.getByTestId("description-input");
    fireEvent.change(inputDescription, {
      target: {
        value: "Cineminha com a gata.",
      },
    });
    expect(inputDescription).toHaveValue("Cineminha com a gata.");


    expect(screen.getByTestId("submit-expensive")).toBeInTheDocument();

    const submiteNewExpensive = screen.getByTestId("submit-expensive");
    fireEvent.click(submiteNewExpensive);

    expect(screen.getByTestId("add-expensive")).toBeInTheDocument();
        
    const deleteExpensive = screen.getByTestId("delete-expensive");
    fireEvent.click(deleteExpensive);

    expect(screen.getByTestId("amount")).toBeInTheDocument();
    expect(screen.getByTestId("amount")).toHaveTextContent('R$ 2,00');
  })

});
