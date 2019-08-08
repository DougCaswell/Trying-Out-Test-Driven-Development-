import mapChooser from '../mapChooser';
import { isRegExp } from 'util';

describe("mapChooser", function () {
    it("returns image based on string given", function () {
        let expected = "portland.jpg";
        let actual = mapChooser("portland");
        expect(actual).toEqual(expected);
    });
});