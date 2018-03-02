import { MortgageModule } from "./mortgage.module";

describe('MortgageModule', () => {
    let mortgageModule: MortgageModule;

    beforeEach(() => {
        mortgageModule = new MortgageModule();
    });

    it('should create an instance', () => {
        expect(mortgageModule).toBeTruthy();
    });
});
