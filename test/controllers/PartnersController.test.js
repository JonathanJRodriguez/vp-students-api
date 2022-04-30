const PartnersController = require("./../../lib/controllers/PartnersController");
const Reader = require("./../../lib/utils/Reader")

describe("Unit tests for Partners Controller", () => {
    test("1. Use the Partners Controller", () => {
        const partners = Reader.readJsonFile("data/students-db.json");
          expect(PartnersController.getAllStudents()).toStrictEqual(partners);
          const emailsWithCertification = PartnersController.getEmailsWithCertification();
          expect(emailsWithCertification).toBeDefined();
          expect(PartnersController.getStudentsWithCredits(-1)).toStrictEqual(partners);
          expect(PartnersController.getStudentsWithCredits(10000)).toHaveLength(1);
    });
});