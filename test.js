const mkbool = require('./index');

let values = [
    [],
    [1, 2, 3, 0, false],
    NaN,
    undefined,
    '',
    '"',
    'hello mkbool',
    0/2,
    2/0,
    5,
    4.1,
    {},
    {'mkbool': 'awesome'},
];

values.forEach( (value, i) => {
    let sl = i +1;
    console.log(`${sl}: mkbool of ${value} is ${mkbool(value)}`);
});
