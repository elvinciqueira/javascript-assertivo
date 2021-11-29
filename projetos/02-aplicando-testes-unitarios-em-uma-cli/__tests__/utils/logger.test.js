import logger from "utils/logger.js";

const spyLog = jest.spyOn(console, "log").mockImplementation();
const spyError = jest.spyOn(console, "error").mockImplementation();

describe("logger", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    spyLog.mockRestore();
    spyError.mockRestore();
  });

  describe("Funções de log:", () => {
    it("Deve chamar a função log ao executar logger.log('Test')", () => {
      logger.log("Test");
      expect(spyLog).toHaveBeenCalledTimes(1);
    });

    it("Deve chamar a função error ao executar logger.error('Test')", () => {
      logger.error("Test");
      expect(spyError).toHaveBeenCalledTimes(1);
    });

    it("Deve chamar a função de log ao executar logger.success('Test')", () => {
      logger.success("Teste");
      expect(spyLog).toHaveBeenCalledTimes(1);
    });
  });
});
