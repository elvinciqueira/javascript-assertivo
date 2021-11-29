import applyMiddlewares from "middlewares/index.js";

it("Deve retornar uma nova função que chama os demais middlewares a serem executados", () => {
  const [mid1, mid2] = [jest.fn((data) => data), jest.fn((data) => data)];
  const middlewaresAplicados = applyMiddlewares(mid1, mid2);
  expect(middlewaresAplicados).toBeInstanceOf(Function);
  expect(mid1).not.toHaveBeenCalled();
  expect(mid2).not.toHaveBeenCalled();

  const args = "dados";
  middlewaresAplicados(args);
  expect(mid1).toHaveBeenCalledWith(args);
  expect(mid1).toHaveBeenCalledTimes(1);
  expect(mid2).toHaveBeenCalledWith(args);
  expect(mid2).toHaveBeenCalledTimes(1);
});
