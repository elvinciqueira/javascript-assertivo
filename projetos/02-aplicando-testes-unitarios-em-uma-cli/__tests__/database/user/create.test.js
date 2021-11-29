import { createUser } from "../../../src/database/user/create";

import * as file from "../../../src/database/file.js";
import { ROLES } from "../../../src/constants/roles";

jest.mock("../../../src/database/file.js");
jest.mock("../../../src/database/path.js");

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
