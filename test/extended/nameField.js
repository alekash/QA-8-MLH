import sel from '../../data/selectors';
import exp from '../../data/expected.json';
    describe('Name Field', function () {
        before('Open App', function () {
            browser.url('');
        });

        it('TC-028 Name field placeholder = "Hero\'s name"', function () {
            let namePH = $(sel.name).getAttribute('placeholder')
            expect(namePH).toEqual(exp.namePlaceholder);
        });

        it('TC-029 Name field accepts letters.', function () {
            let nameLetters = $(sel.name).setValue('LittleGreenMan');
            expect(nameLetters).toEqual(nameLetters);
        });

        it('TC-030 Name field accepts spaces between letters', function () {
            let spacesBetweenLetters = $(sel.name).setValue('Little Green Man 009');
            expect(spacesBetweenLetters).toEqual(spacesBetweenLetters);
        });

        it('TC-031 Name field accepts spaces before letters', function () {
            let spacesBeforeLetters = $(sel.name).setValue('   Little Green Man 009');
            expect(spacesBeforeLetters).toEqual(spacesBeforeLetters);
        });

        it('TC-032 Name field accepts spaces after letters', function () {
            let spacesAfterLetters = $(sel.name).setValue('   Little Green Man 009');
            expect(spacesAfterLetters).toEqual(spacesAfterLetters);
        });

        it('TC-033 Name field accepts numbers', function () {
            let nameFieldNumbers = $(sel.name).setValue('1234567890');
            expect(nameFieldNumbers).toEqual(nameFieldNumbers);
        });

        it('TC-034 User can type symbols', function () {
            let nameFieldSymbols = $(sel.name).setValue("!@#$%^&*()");
            expect(nameFieldSymbols).toEqual(nameFieldSymbols);
        });

        it('TC-035 Name field accepts 70 characters ', function () {
            let nameFieldMaxValue = $(sel.name).setValue("wwwwwwwwwwwwwwwwww20wwwwwwwwwwwwwwwwww40wwwwwwwwwwwwwwwwww60wwwwwwwwww");
            browser.pause(3000);
            expect(nameFieldMaxValue).toEqual(nameFieldMaxValue);
        });

        it('TC-036 Name field accepts upper/lower cases ', function () {
            let upperLowerLetters = $(sel.name).setValue("ABC abc");
            expect(upperLowerLetters).toEqual(upperLowerLetters);
        });

        it('TC-037 Name field accepts upper/lower cases and numbers', function () {
            let lettersAndNumbers = $(sel.name).setValue("LittleGreenMan009");
            expect(lettersAndNumbers).toEqual(lettersAndNumbers);
        });

        it('TC-038 Name field dose not accepts 71 symbols', function () {
            let overValue = $(sel.name).setValue("wwwwwwwwwwwwwwwwww20wwwwwwwwwwwwwwwwww40wwwwwwwwwwwwwwwwww60wwwwwwwww71");
            let errorMessage = $(sel.overValueMessage).isDisplayed();
            expect(errorMessage).toEqual(true);
        });
         //Until bug fixed
        // it('TC-039 Name field accepts SQL/XML code', function () {
        //     let sqlXmlCode = $(sel.name).setValue("<LittleGreenMan009>");
        //     let sqlXmlError
        //     expect(lettersAndNumbers).toEqual(lettersAndNumbers);
        // });

        it('TC-040 Name field does not accept empty Name field', function () {
            let typeInField = $(sel.name).setValue("LittleGreenMan009");
            let emptyField = $(sel.name).clearValue();
            expect(.toEqual(lettersAndNumbers);
        });
    });
