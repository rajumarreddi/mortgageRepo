export class MortgageSubmissionDocumentsModel {
    id: number;
    documentType: string;
    documentTitle: string;
    file: File;
    status: string;
    verificationYello = false;
    verificationRed = false;
    verificationGreen = false;
}