import {transform} from "../src/romanizer";
import _ from 'romanize';
describe('romanizer', () => {
    it('should return X when 10', () => {
        const result = transform(10);

        expect(result).toEqual("X");
    });

    it('should return X when 10', () => {
        var romanize = require('romanize');
        const result = romanize(10);

        expect(result).toEqual("X");
    });
});