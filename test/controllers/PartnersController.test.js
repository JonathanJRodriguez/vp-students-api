const PartnersController = require("./../../lib/controllers/PartnersController");

describe("Unit tests for Partners Controller", () => {
    test("1. Use the Partners Controller", () => {
        const partners = [{
            "id": "6264d5d89f1df827eb84bb23",
            "name": "Warren",
            "email": "Todd@visualpartnership.xyz",
            "credits": 508,
            "enrollments": [
              "Visual Thinking Intermedio",
              "Visual Thinking Avanzado"
            ],
            "previousCourses": 1,
            "haveCertification": true
          }];
          expect(PartnersController.getAllStudents(partners)).toStrictEqual(partners);
    });
});