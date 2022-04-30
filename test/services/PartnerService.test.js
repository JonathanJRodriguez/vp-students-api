const PartnerService = require("../../lib/services/PartnerService");

describe("Unit tests for Partner Service", () => {
    test("1. Use the PartnerService method getAllStudents", () => {
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
    test("2. Use the PartnerService method getEmailsWithCertification", () => {
      const partner1 = {
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
      };
      const partner2 = {
        "id": "6264d5d85cf81c496446b67f",
        "name": "Lucinda",
        "email": "Sexton@visualpartnership.xyz",
        "credits": 677,
        "enrollments": [
          "Visual Thinking Avanzado"
        ],
        "previousCourses": 6,
        "haveCertification": false
      };
      const partners = [partner1,partner2];
      const partnerArray1 = [partner1];

      expect(PartnerService.getAllCertifications(partners)).toStrictEqual(partnerArray1);
      expect(PartnerService.getEmails(partners)).toStrictEqual([partner1.email, partner2.email])
      expect(PartnerService.getEmailsWithCertification(partners)[0]).toStrictEqual(partners[0].email);
  });
});
