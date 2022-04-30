const Reader = require("./../utils/Reader")
const PartnerService = require("./../services/PartnerService")

class PartnersController{
    static getAllStudents(){
        const partners = Reader.readJsonFile("data/students-db.json");
        return PartnerService.getAllStudents(partners);
    }

    static getEmailsWithCertification(){
        const partners = Reader.readJsonFile("data/students-db.json");
        return PartnerService.getEmailsWithCertification(partners);
    }
}

module.exports = PartnersController