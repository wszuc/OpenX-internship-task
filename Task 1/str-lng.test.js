const strlng = require('./str-lng');
const bool = new Boolean(true);

test('test cases from the task description', () => {
    expect(strlng('abcabcbb')).toBe(3);
    expect(strlng('bbbbb')).toBe(1);
});

test('function works for letters', () => {
    expect(strlng('abcdccdye')).toBe(4);
    expect(strlng('abcde')).toBe(5);
    expect(strlng('xddxxdd')).toBe(2);
});

test('function isn\'t case sensitive', () => {
    expect(strlng('sScCvV')).toBe(6);
    expect(strlng('SsabcCcd')).toBe(6);
})

test('whitespaces are treated correctly', () => {
    expect(strlng('ab c')).toBe(4);
    expect(strlng('a     ')).toBe(2);
    expect(strlng(' x\n')).toBe(3);
})

test('function works for numeric characters', () => {
    expect(strlng('12344')).toBe(4);
    expect(strlng('112233')).toBe(2);
})

test('function works for the rest of characters', () => {
    expect(strlng('©./##/')).toBe(4);
    expect(strlng('..,.,..')).toBe(2);
})

test('function works only for string datatype', () => {
    expect(() => { strlng(123) }).toThrow();
    expect(() => { strlng(bool) }).toThrow();
})

test('function returns 0 for an empty string', () => {
    expect(strlng('')).toBe(0);
})