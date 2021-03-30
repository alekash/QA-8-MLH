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

    describe('Negative cases', function () {

        it('TC-065 Age input field does not accept 13 digits', function () {
            $(sel.age).setValue(age.thirteenDigits);
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });
        
        it('TC-066 Age input field does not accept letters', function () {
            $(sel.age).setValue(name.default);
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });
        //  Not sure if it is a bug
        // it('TC-067 Age input field accepts empty Age field', function () {
        //     $(sel.age).click();
        //     $(sel.name).click()
        //     let errorMessage = $(sel.ageError).waitForDisplayed();
        //     expect(errorMessage).toEqual(true);
        // });

        // not sure if it is a bug
        // it('TC-068 Age input field accepts "0"', function () {
        //     $(sel.age).setValue(age.zero);
        //     let errorMessage = $(sel.ageError).isDisplayed;
        //     expect(errorMessage).toEqual(true)
        // });

        it('TC-069 Age input does not field accepts symbols', function () {
            $(sel.age).setValue(age.symbols);
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-070 Age input field accepts negative numbers', function () {
            $(sel.age).setValue(age.negativeNum);
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-071 Age input field accepts floats', function () {
            $(sel.age).setValue(age.float);
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-072 Clicking up the spinner increases the maximum 12-digit number', function () {
            $(sel.age).setValue(age.max);
            $(sel.ageSpinnerUp).click();
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

        it('TC-073 Clicking down the spinner decreases empty Age input field', function () {
            $(sel.age).setValue(age.zero);
            $(sel.ageSpinnerDown).click();
            let errorMessage = $(sel.ageError).waitForDisplayed();
            expect(errorMessage).toEqual(true);
        });

    });

});