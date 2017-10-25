
const fn = require('../lib/the_cake_is_not_a_lie');

const test = (mnm, e) => {

    const t = fn(mnm);

    it(`${mnm} - ${t}`, () =>
        expect(t).toBe(e))

}

test('a', 1);
test('aa',2);
test('aaa',3);
test('ab',1);
test('aba',1);
test('abb',1);
test('abab',2);
test('abcd',1);
test('abcabc', 2);
test('abcabcabc', 3);
test('abcabcabcd', 1);
test('abcdabcd', 2);
test('abcdabcdabcd', 3);
test('aabb', 1);
test('aabba', 1);
test('aabbaa', 1);
test('aabbaab', 1);
test('aabbaabb', 2);
test('aaa', 3);
test('aaab', 1);
test('aaabb', 1);
test('aaabbba', 1);
test('aaabbba', 1);
test('aaabbbaab', 1);
test('aaabbbaabb', 1);
test('aaabbbaabbc', 1);
