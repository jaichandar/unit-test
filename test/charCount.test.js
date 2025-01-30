const { charCount } = require('../problems/charCount');

describe('character count function', () => {
    test('should count character of "testcase"', () => {
        expect(charCount('testcase')).toEqual({
            t: 2,
            e: 2,
            s: 2,
            a: 1,
            c: 1
        })
    })
    test('should count character of "My Pin Number is 1234"', () => {
        expect(charCount('My Pin Number is 1234')).toEqual({
            m: 2,
            y: 1,
            p: 1,
            i: 2,
            n: 2,
            u: 1,
            b: 1,
            e: 1,
            r: 1,
            s: 1,
            '1': 1,
            '2': 1,
            '3': 1,
            '4': 1
        })
    })
    test('should count character of "my phone is nokia"', () => {
        expect(charCount('my phone is nokia')).toEqual({
            m: 1,
            y: 1,
            p: 1,
            h: 1,
            o: 2,
            n: 2,
            e: 1,
            s: 1,
            i: 2,
            k: 1,
            a: 1
        })
    })

    test("should throw an error for non-string inputs", () => {
        expect(() => charCount(123)).toThrow('Please Enter String');
        expect(() => charCount(["test"])).toThrow('Please Enter String');
        expect(() => charCount({ key: "value" })).toThrow('Please Enter String');
    });
})