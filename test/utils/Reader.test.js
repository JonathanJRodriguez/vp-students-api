const Reader = require("../../lib/utils/Reader");

describe("Unit tests for Reader class", () => {
    test("Create a Reader object", () => {
        const partners = Reader.readJsonFile("./test/data/test-db.json");
        expect(partners.length).toBe(3);
    });
});