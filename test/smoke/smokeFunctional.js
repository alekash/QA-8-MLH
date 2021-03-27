import sel from '../../data/selectors';
import exp from '../../data/expected.json';
describe('Required fields and story created', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-026 Submit button is enable after fields 1 - 4 are filled in with valid value', function () {
        $(sel.name).setValue("Little Green Man 009");
        $$(sel.radioButtons)[1].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        browser.pause(2000);
        let submitBtn = $(sel.submit).isEnabled();
        expect(submitBtn).toEqual(true);
    });

    it('TC-027 User is redirected to the story page', function () {
        $(sel.name).setValue("Little Green Man 009");
        $$(sel.radioButtons)[0].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submit).click();
        let tryAgainBtn = $(sel.tryAgain).isDisplayed();
        expect(tryAgainBtn).toEqual(true);
    });

    it('TC-028.a story appears with valid value', function () {
        browser.refresh();
        $(sel.name).setValue("Little Green Man 009");
        $$(sel.radioButtons)[0].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submit).click();
        let storyHead= $(sel.storyHeader).getText();
        expect(storyHead).toEqual(exp.storyHeader);
    });

    //  Until bug fixed
    // it('TC-028.b story appears with valid value', function () {
    //     browser.refresh();
    //     $(sel.name).setValue("Little Green Man 009");
    //     $$(sel.radioButtons)[0].click();
    //     $(sel.age).setValue('1234567890');
    //     $(sel.storyType).click();
    //     $$(sel.storyList)[6].click();
    //     $(sel.submit).click();
    //
    //     browser.pause(2000);
    //     let storyBody= $$(sel.storyB)[0].getText();
    //     expect(storyBody).toEqual(exp.storyBody);
    // });

    it('TC-028.c story appears with valid value', function () {
        browser.refresh();
        $(sel.name).setValue("Little Green Man 009");
        $$(sel.radioButtons)[0].click();
        $(sel.age).setValue('1234567890');
        $(sel.storyType).click();
        $$(sel.storyList)[6].click();
        $(sel.submit).click();
        let storyMoral = $$(sel.storyB)[1].getText();
        expect(storyMoral).toEqual(exp.storyMoral);
    });

});