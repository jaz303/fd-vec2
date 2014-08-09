var vec2 = require('..');
var test = require('fd-geom-test')(require('tape'), vec2);

test.binaryOperator(
    'add',
    vec2(1,2),
    vec2(3,4),
    vec2(4,6)
);

test.binaryOperator(
    'sub',
    vec2(5,6),
    vec2(4,1),
    vec2(1,5)
);

test.binaryOperator(
    'mul',
    vec2(1,2),
    10,
    vec2(10,20)
);

test.binaryOperator(
    'div',
    vec2(30,90),
    3,
    vec2(10,30)
);

test.binaryOperator(
    'distance',
    vec2(3,0),
    vec2(0,4),
    5
);

test.binaryOperator(
    'distancesq',
    vec2(3,0),
    vec2(0,4),
    25
);

test.binaryOperator(
    'angle',
    vec2(0,5),
    vec2(5,0),
    Math.PI / 2,
    {inexact: true}
);

test.binaryOperator(
    'angle',
    vec2(0,5),
    vec2(-5,0),
    -Math.PI / 2,
    {inexact: true}
);

test.unaryOperator(
    'normalize',
    vec2(0,10),
    vec2(0,1)
);

test.unaryOperator(
    'magnitude',
    vec2(3,4),
    5
);

test.unaryOperator(
    'magnitudesq',
    vec2(3,4),
    25
);

test.unaryOperator(
    'midpoint',
    vec2(10,20),
    vec2(5,10)
);

test.test(
    'adjust',
    vec2(10,15),
    [vec2(20,10), 0.5],
    vec2(20,20)
);

// // TODO: dot