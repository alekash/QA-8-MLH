import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, story} from '../../data/testData'

describe('Story Field', function () {
    before('Open App', function () {
        browser.url('');
    });

        it('TC-074 Story field placeholder = "Type of the story"', function () {
            let storyPlaceH = $(sel.story).getAttribute('placeholder');
            expect(storyPlaceH).toEqual(exp.storyPlaceholder);
        });

    it('TC-054 Age field placeholder = "Hero\'s age"', function () {
        let agePH = $(sel.age).getAttribute('placeholder');
        expect(agePH).toEqual(exp.agePlaceholder);
    });

    //     describe('Story Field', function () {
    // });
});