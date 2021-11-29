import {
  getUserByUid,
  getUserByUsernameAndPassword,
} from "../../../src/database/user/read.js";

import { loadDatabase } from "../../../src/database/file.js";
import { ERROR_MESSAGE } from "../../../src/utils/errorMessage";

jest.mock("../../../src/database/file.js");
jest.mock("../../../src/database/path.js");

const mockUsuario = {
  uid: "abc-1234",
  userName: "nomeDeUsuario",
  name: "nome",
  lastName: "DeUsuario",
  email: "email.nome@usuario.com",
  password: "senhasupersecreta",
  role: "USER",
};

loadDatabase.mockResolvedValue([mockUsuario]);

describe("getUserByUid()", () => {
  describe("Quando passar o UID de um usuário", () => {
    describe("e for válido", () => {
      test("encontra usuário e o retorna", async () => {
        expect.assertions(1);
        const user = await getUserByUid("abc-1234");
        expect(user).toEqual(mockUsuario);
      });
    });

    describe("e for inválido", () => {
      test("Dispara um erro caso usuário não seja encontrado", async () => {
        try {
          expect.assertions(1);
          await getUserByUid("uid-nao-existente");
        } catch (error) {
          expect(error.message).toBe(ERROR_MESSAGE.USER_NOT_FOUND);
        }
      });
    });
  });
});

describe("getUserByUsernameAndPassword()", () => {
  describe("Quando passar o nome de usuário e senha de um usuário", () => {
    describe("e for válido", () => {
      test("encontra usuário e o retorna", async () => {
        expect.assertions(1);
        const user = await getUserByUsernameAndPassword(
          "nomeDeUsuario",
          "senhasupersecreta"
        );
        expect(user).toEqual(mockUsuario);
      });
    });

    describe("e for inválido", () => {
      test("Dispara um erro caso usuário não seja encontrado", async () => {
        try {
          expect.assertions(1);
          await getUserByUsernameAndPassword("nomeDeUsuario", "senhaInvalida");
        } catch (error) {
          expect(error.message).toBe(ERROR_MESSAGE.INVALID_CREDENTIALS);
        }
      });
    });
  });
});
