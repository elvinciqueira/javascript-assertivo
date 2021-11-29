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
