import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, story} from '../../data/testData';


describe('Age field suit', function () {

    beforeEach('Open App', function () {
        browser.url('');
    });

    describe('Placeholder', function () {

        it('TC-054 Age field placeholder = "Hero\'s age"', function () {
            let agePH = $(sel.age).getAttribute('placeholder')
            expect(agePH).toEqual(exp.agePlaceholder);
        });

    });

    describe('Positive cases', function () {

        it('TC-055 Age Field spinner is present', function () {
            let ageSpin = $(sel.ageSpinner).isExisting();
            expect(ageSpin).toEqual(true);
        });

        it('TC-056 Age input field accepts 1 digit', function () {
            let oneDigit = $(sel.age).setValue(age.min);
            expect(oneDigit).toEqual(oneDigit);
        });

        it('TC-057 Age input field accepts 12 digit', function () {
            let maxAmountOfDigit = $(sel.age).setValue(age.max);
            expect(maxAmountOfDigit).toEqual(maxAmountOfDigit);
        });

        it('TC-058 Age input field accepts any digits in range 1-12', function () {
            let anyDigit = $(sel.age).setValue(age.default);
            expect(anyDigit).toEqual(anyDigit);
        });

        it('TC-059 Age input field accepts 0 before digits', function () {
            let zerosBeforeDigits = $(sel.age).setValue(age.zerosBeforeNum);
            expect(zerosBeforeDigits).toEqual(zerosBeforeDigits);
        });

        it('TC-060 Age input field accepts spaces', function () {
            let spacesBeforeDigits = $(sel.age).setValue(age.spacesBeforeNum);
            expect(spacesBeforeDigits).toEqual(spacesBeforeDigits);
        });

        it('TC-061 Clicking up the spinner increases empty Age input field', function () {
            browser.refresh;
            $(sel.ageSpinnerUp).click();
            let increase = $(sel.age).getValue();
            expect(increase).toEqual(age.min);
        });

        it('TC-062 Clicking up the spinner increases the digit', function () {
            $(sel.age).setValue(age.min);
            $(sel.ageSpinnerUp).click();
            let increase = $(sel.age).getValue();
            expect(increase).toEqual(age.two);
        });

        it('TC-063 Clicking down the spinner decreases the digit', function () {
            $(sel.age).setValue(age.two);
            $(sel.ageSpinnerDown).click();
            let decrease = $(sel.age).getValue();
            expect(decrease).toEqual(age.min);
        });

        // it('TC-064 User can copy/paste the number', function () {
        //     let a = $(sel.name).setValue(1234);
        //     let b = $(sel.name).getValue(a);
        //     let c = $(sel.age).setValue(b);
        //     expect(c).toEqual(a);
        // });

    });

    // describe('Negative cases', function () {
    //
    //     it('TC-065 Age input field accepts 13 digits', function () {
    //         $(sel.age).setValue(age.thirteenDigits);
    //         error
    //         expect(submitBtn).toEqual(true);
    //     });
    //
    //     it('TC-xxx Age = 1000000000000', function () {
    //         expect(submitBtn).toEqual(true);
    //     });
    //
    // });

});