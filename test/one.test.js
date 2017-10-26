
const tool = require('../lib/one');

const instance = tool();

const test = (mnm, e) => {

    const t = instance(mnm);

    it(`${mnm} - returned: ${t}, expected: ${e}, length: ${instance.l}, iterations: ${instance.i}`, () =>
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
test('hjfdsuiewhuifhdsuareuwiuifhdsjkafhsaifehwuirheahjfdjksajkfeuwuihfefihdsjka'.repeat(2), 2);
test(
    (k => {
        k = k.substring(0, k.length - 1) + 'B';
        return k;
    })('hjfdsuiewhuifhdsuareuwiuifhdsjkafhsaifehwuirheahjfdjksajkfeuwuihfefihdsjka'.repeat(2)),
    1
);
test('abcdefghij'.repeat(20), 20);
test('ab'.repeat(100), 100);
test('abcdefghij'.repeat(19) + 'abcdefghi', 1);
test('abcdefghij'.repeat(20) + 'a', 1);
