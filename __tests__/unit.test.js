// unit.test.js

const functions = require('../code-to-unit-test/unit-test-me.js');

// TODO - Part 2
// Testing isPhoneNumber
test('isPhoneNumber 3-3-4 pattern', () => {
    let number = '111-222-3333';
    expect(functions.isPhoneNumber(number)).toBe(true);
});

test('isPhoneNumber san diego number', () => {
    let number = '858-302-8490';
    expect(functions.isPhoneNumber(number)).toBe(true);
});

test('isPhoneNumber empty number', () => {
    let number = '';
    expect(functions.isPhoneNumber(number)).toBe(false);
});

test('isPhoneNumber another country number', () => {
    let number = '0739-833-892';
    expect(functions.isPhoneNumber(number)).toBe(false);
});

// Testing isEmail
test('isEmail khosla', () => {
    let email = 'khosla@ucsd.edu';
    expect(functions.isEmail(email)).toBe(true);
});

test('isEmail prof', () => {
    let email = 'tpowell2@ucsd.edu';
    expect(functions.isEmail(email)).toBe(true);
});

test('isEmail empty email', () => {
    let email = '';
    expect(functions.isEmail(email)).toBe(false);
});

test('isEmail no @', () => {
    let email = 'khosla.ucsd.edu';
    expect(functions.isEmail(email)).toBe(false);
});

// Testing isStrongPassword
test('isStrongPassword sameletters true', () => {
    let password = 'aaaa';
    expect(functions.isStrongPassword(password)).toBe(true);
});

test('isStrongPassword 15 digits true', () => {
    let password = 'a23456789012345';
    expect(functions.isStrongPassword(password)).toBe(true);

});

test('isStrongPassword does not start with lettter', () => {
    let password = '1aaa';
    expect(functions.isStrongPassword(password)).toBe(false);
});

test('isStrongPassword over 15 digits', () => {
    let password = '1234567890123456';
    expect(functions.isStrongPassword(password)).toBe(false);
});

// Testing isDate
test('isDate Jan 1st 2020', () => {
    let date = '1/1/2020';
    expect(functions.isDate(date)).toBe(true)
});

test('isDate Dec 31st 2020', () => {
    let date = '12/31/2020';
    expect(functions.isDate(date)).toBe(true)
});

test('isDate 2-digit year', () => {
    let date = '12/31/20';
    expect(functions.isDate(date)).toBe(false)
});

test('isDate non-numeric', () => {
    let date = 'a/w/2020';
    expect(functions.isDate(date)).toBe(false)
});

// Testing isHexColor
test('isHexColor with hashtag', () => {
    let color = '#ffffff';
    expect(functions.isHexColor(color)).toBe(true)
});

test('isHexColor without hashtag', () => {
    let color = 'ffffff';
    expect(functions.isHexColor(color)).toBe(true)
});

test('isHexColor less than 3 digits', () => {
    let color = 'ff';
    expect(functions.isHexColor(color)).toBe(false);
});

test('isHexColor random characters', () => {
    let color = 'ff_#f0';
    expect(functions.isHexColor(color)).toBe(false);
});



