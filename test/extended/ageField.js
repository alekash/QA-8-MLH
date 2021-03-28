import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, story} from '../../data/testData';
import inputValues4 from '../../helpers/methods';

describe('Age field suit', function () {

    before('Open App', function () {
        browser.url('');
    });

    describe('Placeholder', function () {

        it('TC-xxx Placeholder is correct', function () {
            expect(submitBtn).toEqual(true);
        });

    });

    describe('Positive cases', function () {

        it('TC-xxx Age = 1', function () {
            inputValues4(name.default,gender.he, age.min, story.comedy);
            expect(submitBtn).toEqual(true);
        });

        it('TC-xxx Age = 999999999999', function () {
            expect(submitBtn).toEqual(true);
        });

    });

    describe('Negative cases', function () {

        it('TC-xxx Age = 0', function () {
            expect(submitBtn).toEqual(true);
        });

        it('TC-xxx Age = 1000000000000', function () {
            expect(submitBtn).toEqual(true);
        });

    });

});