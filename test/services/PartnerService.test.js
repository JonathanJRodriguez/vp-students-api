const PartnerService = require("../../lib/services/PartnerService");

describe("Unit tests for Partner Service", () => {
    test("1. Use the Partner service", () => {
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
          expect(PartnerService.getAllStudents(partners)).toStrictEqual(partners);
    });
});
