class PartnerService{
    static getAllStudents(partners){
        return partners;
    }

    static getEmails(partners){
        const partnersEmails = partners.map((partner) => partner.email);
        return partnersEmails;
    }

    static getAllCertifications(partners){
        const partnersWithCertification = partners.filter((partner) => partner.haveCertification == true);
        return partnersWithCertification;
    }

    static getEmailsWithCertification(partners){
        const partnersCertification = this.getAllCertifications(partners);
        const partnersEmail = this.getEmails(partnersCertification);
        return partnersEmail;
    }
}

module.exports = PartnerService;