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

        // it('TC-029 Name field accepts letters.', function () {
        //     let nameLetters = $(sel.name).setValue('Little Green Man 009');
        //     nameLetters.toBeDisplayed();
        //     expect(nameLetters).toEqual(true);
        // });
    });
