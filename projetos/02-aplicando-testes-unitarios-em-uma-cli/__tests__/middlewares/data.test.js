import { validateDataMiddleware } from "middlewares/data.js";

const middleware = validateDataMiddleware(["email"]);

it("Deve retornar os campos caso o dado seja válido", () => {
  const dados = {
    data: {
      email: "johndoe@email.com",
    },
  };
  const retorno = middleware(dados);
  expect(retorno).toEqual(dados);
});

it("Deve retornar um erro caso os campos não sejam válidos", () => {
  const dados = {
    data: {},
  };
  const retorno = () => middleware(dados);
  expect(retorno).toThrow();
});
