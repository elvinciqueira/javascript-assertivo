import parse, { validateArgs, MESSAGES } from "../../src/utils/args.js";

const dados = {
  username: "admin",
  password: "admin",
  operation: "operacao",
  data: { uid: "abc-123" },
};

describe("parse", () => {
  it("Faz o parse dos argumentos da CLI", () => {
    const argumentos = [
      "/Users/gabriel.ramos/.nvm/versions/node/v14.11.0/bin/node",
      "/Users/gabriel.ramos/.nvm/versions/node/v14.11.0/bin/jsassertivo",
      "--username=admin",
      "--password=admin",
      "--operation=operacao",
      '--data={"uid": "abc-123"}',
    ];
    const retornado = parse(argumentos);
    expect(retornado).toEqual(dados);
  });
});

describe("Validação de argumentos da CLI", () => {
  it("Valida com sucesso os campos informados", () => {
    const campos = ["username", "password", "operation", "data"];
    expect(validateArgs(dados, campos).valid).toEqual(true);
    expect(validateArgs(dados).valid).toEqual(true);
  });

  it("Valida os cenários de erro e retorna uma mensagem", () => {
    expect(validateArgs()).toEqual({
      valid: false,
      message: MESSAGES.missingArgs(),
    });
    expect(validateArgs(dados, ["email"])).toEqual({
      valid: false,
      message: MESSAGES.missingArg("email"),
    });
  });
});
