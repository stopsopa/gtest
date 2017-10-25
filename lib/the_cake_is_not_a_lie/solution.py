
import sys
import math

# online tests https://github.com/stopsopa/gtest
def solution(mnm):
    leng = len(mnm)
    half = int(math.floor(leng / 2))
    pattern = ''

    l = 1
    while l <= leng:

        if l > half:
            return 1

        pattern += mnm[l - 1]

        k = l
        while k < leng:

            if l > 0:
                mod = k % l
            else:
                mod = 0

            if pattern[mod] != mnm[k]:
                break

            k += 1

        if k == leng:
            t = leng / l

            if t == int(t):
                return t

        l += 1

def test(val, l):
    sol = solution(val)
    if sol == l:
        print val + ' ' + str(sol)
    else:
        print val + ' returned: ' + str(sol) + ' expected: ' + str(l)

if __name__ == '__main__':
    if len(sys.argv) > 1:
        print str(solution(sys.argv[1]))

if __name__ == '__main__':
    test('a', 1)
    test('aa',2)
    test('aaa',3)
    test('ab',1)
    test('aba',1)
    test('abb',1)
    test('abab',2)
    test('abcd',1)
    test('abcabc', 2)
    test('abcabcabc', 3)
    test('abcabcabcd', 1)
    test('abcdabcd', 2)
    test('abcdabcdabcd', 3)
    test('aabb', 1)
    test('aabba', 1)
    test('aabbaa', 1)
    test('aabbaab', 1)
    test('aabbaabb', 2)
    test('aaa', 3)
    test('aaab', 1)
    test('aaabb', 1)
    test('aaabbba', 1)
    test('aaabbba', 1)
    test('aaabbbaab', 1)
    test('aaabbbaabb', 1)
    test('aaabbbaabbc', 1)

