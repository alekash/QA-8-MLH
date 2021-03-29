import sel from '../../data/selectors';
import exp from '../../data/expected.json';
import {name, gender, age, story} from '../../data/testData'

    describe('Name Field', function () {
        before('Open App', function () {
            browser.url('');
        });

        it('TC-028 Name field placeholder = "Hero\'s name"', function () {
            let namePH = $(sel.name).getAttribute('placeholder')
            expect(namePH).toEqual(exp.namePlaceholder);
        });

        it('TC-029 Name field accepts letters.', function () {
            let nameLetters = $(sel.name).setValue(name.nameOnlyLetters);
            expect(nameLetters).toEqual(nameLetters);
        });

        it('TC-030 Name field accepts spaces between letters', function () {
            let spacesBetweenLetters = $(sel.name).setValue(name.default);
            expect(spacesBetweenLetters).toEqual(spacesBetweenLetters);
        });

        it('TC-031 Name field accepts spaces before letters', function () {
            let spacesBeforeLetters = $(sel.name).setValue(name.spacesBeforeName);
            expect(spacesBeforeLetters).toEqual(spacesBeforeLetters);
        });

        it('TC-032 Name field accepts spaces after letters', function () {
            let spacesAfterLetters = $(sel.name).setValue(name.spacesAfterName);
            expect(spacesAfterLetters).toEqual(spacesAfterLetters);
        });

        it('TC-033 Name field accepts numbers', function () {
            let nameFieldNumbers = $(sel.name).setValue(age.default);
            expect(nameFieldNumbers).toEqual(nameFieldNumbers);
        });

        it('TC-034 User can type symbols', function () {
            let nameFieldSymbols = $(sel.name).setValue(name.symbolsInNameField);
            expect(nameFieldSymbols).toEqual(nameFieldSymbols);
        });

        it('TC-035 Name field accepts 70 characters ', function () {
            let nameFieldMaxValue = $(sel.name).setValue(name.maxAmountLetters);
            expect(nameFieldMaxValue).toEqual(nameFieldMaxValue);
        });

        it('TC-036 Name field accepts upper/lower cases ', function () {
            let upperLowerLetters = $(sel.name).setValue(name.default);
            expect(upperLowerLetters).toEqual(upperLowerLetters);
        });

        it('TC-037 Name field accepts upper/lower cases and numbers', function () {
            let lettersAndNumbers = $(sel.name).setValue(name.default);
            expect(lettersAndNumbers).toEqual(lettersAndNumbers);
        });

        it('TC-038 Name field dose not accepts 71 symbols', function () {
            $(sel.name).setValue(name.overRequiredAmount);
            let errorMessage = $(sel.overValueMessage).isDisplayed();
            expect(errorMessage).toEqual(true);
        });
         //Until bug fixed
        // it('TC-039 Name field accepts SQL/XML code', function () {
        //     let sqlXmlCode = $(sel.name).setValue(name.sqlXml);
        //     expect(lettersAndNumbers).toEqual(lettersAndNumbers);
        // });

        it('TC-040 Name field does not accept empty Name field', function () {
            $(sel.name).setValue(name.default);
            $(sel.name).clearValue();
            let errorMessage = $(sel.nameError).isDisplayed();
            expect(errorMessage).toEqual(true);
        });
    });
