import { createUser } from "database/user/create";

import * as file from "database/file.js";
import { ROLES } from "constants/roles";

jest.mock("database/file.js");
jest.mock("database/path.js");

const usuario = {
  name: "John",
  lastName: "Doe",
  userName: "johndoe",
  email: "johndoe@email.com",
  password: "123456",
};

beforeEach(() => {
  file.loadDatabase.mockResolvedValueOnce([]);
});

afterEach(() => {
  jest.clearAllMocks();
});

afterAll(() => {
  jest.restoreAllMocks();
});

test("Cria usuario corretamente", async () => {
  expect.assertions(4);
  const user = await createUser(usuario);
  expect(file.loadDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledWith([user]);
  expect(user).toEqual({
    ...usuario,
    uid: expect.any(String),
    role: ROLES.USER,
  });
});

test("Cria usuário corretamente com role 'ADMIN'", async () => {
  expect.assertions(4);
  const user = await createUser({ ...usuario, role: ROLES.ADMIN });
  expect(file.loadDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledTimes(1);
  expect(file.saveDatabase).toHaveBeenCalledWith([user]);
  expect(user).toEqual({
    ...usuario,
    uid: expect.any(String),
    role: ROLES.ADMIN,
  });
});
