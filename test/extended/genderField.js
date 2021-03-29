import sel from '../../data/selectors';
import {name, gender, age, story} from '../../data/testData';

describe('Gender', function () {

    before('Open App', function () {
        browser.url('');
    });

    it('TC-041.a Button "he" is enabled', function () {
        $$(sel.radioButtons)[gender.he].click();
        let radioButtonIsBlue = $$(sel.radioButtons)[gender.he].isEnabled();
        expect(radioButtonIsBlue).toEqual(true);
    });

    it('TC-042 Button "she" is enabled', function () {
        $$(sel.radioButtons)[gender.she].click();
        let radioButtonIsBlue = $$(sel.radioButtons)[gender.she].isEnabled();
        expect(radioButtonIsBlue).toEqual(true);
    });

    it('TC-043 Button "it" is enabled', function () {
        $$(sel.radioButtons)[gender.it].click();
        let radioButtonIsBlue = $$(sel.radioButtons)[gender.it].isEnabled();
        expect(radioButtonIsBlue).toEqual(true);
    });

    // it('TC-044.a User can choose only one button at the time: he', function () {
    //     $$(sel.radioButtons)[gender.he].click();
    //     browser.pause(3000)
    //     $$(sel.radioButtons)[gender.she].click();
    //     let radioButtonIsGray = $$(sel.radioButtons)[gender.it].isEnabled();
    //     browser.pause(3000)
    //     expect(radioButtonIsGray).toEqual(true);
    // });

    it('TC-053 Not chosen button -> Reqiured', function () {
        browser.refresh();
        $(sel.name).setValue(name.default);
        $(sel.age).setValue(age.default);
        $(sel.storyType).click();
        $$(sel.storyList)[story.comedy].click();
        let submitDisabled = $(sel.submit).isEnabled();
        expect(submitDisabled).toEqual(false);
    });

});