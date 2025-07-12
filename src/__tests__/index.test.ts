import { Markwind, utils } from "../index";

describe("Markwind", () => {
  let markwind: Markwind;

  beforeEach(() => {
    markwind = new Markwind("Test");
  });

  describe("constructor", () => {
    it("should create instance with provided name", () => {
      expect(markwind.getName()).toBe("Test");
    });

    it("should create instance with default name", () => {
      const defaultInstance = new Markwind();
      expect(defaultInstance.getName()).toBe("Markwind");
    });
  });

  describe("getName", () => {
    it("should return the current name", () => {
      expect(markwind.getName()).toBe("Test");
    });
  });

  describe("setName", () => {
    it("should set a new name", () => {
      markwind.setName("NewName");
      expect(markwind.getName()).toBe("NewName");
    });
  });

  describe("processText", () => {
    it("should process text with name prefix", () => {
      const result = markwind.processText("Hello World");
      expect(result).toBe("[Test] Processing: Hello World");
    });
  });

  describe("transform", () => {
    it("should transform data to JSON string", () => {
      const data = { name: "test", value: 123 };
      const result = markwind.transform(data);
      expect(result).toBe(JSON.stringify(data, null, 2));
    });
  });
});

describe("utils", () => {
  describe("isEmpty", () => {
    it("should return true for empty string", () => {
      expect(utils.isEmpty("")).toBe(true);
    });

    it("should return true for whitespace only string", () => {
      expect(utils.isEmpty("   ")).toBe(true);
    });

    it("should return false for non-empty string", () => {
      expect(utils.isEmpty("hello")).toBe(false);
    });
  });

  describe("capitalize", () => {
    it("should capitalize first letter", () => {
      expect(utils.capitalize("hello")).toBe("Hello");
    });

    it("should handle empty string", () => {
      expect(utils.capitalize("")).toBe("");
    });

    it("should handle single character", () => {
      expect(utils.capitalize("a")).toBe("A");
    });
  });
});
