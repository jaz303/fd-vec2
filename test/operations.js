var vec2 = require('..');
var test = require('tape');

function testResult(assert, expected, actual, opts) {
    
    if (Array.isArray(expected)) {
        expected = new vec2.Vec2(expected[0], expected[1]);
    }

    if (expected instanceof vec2.Vec2) {
        assert.ok(actual instanceof vec2.Vec2);
        assert.equal(actual.x, expected.x);
        assert.equal(actual.y, expected.y);
    } else {
        if (opts && opts.inexact) {
            console.log(expected, actual);
            assert.ok(Math.abs(expected - actual) < 0.00001);
        } else {
            assert.ok(expected === actual); 
        }
    }

}

function testObjectMethod(receiver, method, args, expected, opts) {
    test("." + method + "()", function(assert) {
        var actual = receiver[method].apply(receiver, args);
        testResult(assert, expected, actual, opts);
        assert.end();
    });
}

function testSelfMutatingObjectMethod(receiver, method, args, expected, opts) {
    method += '_';
    if (!receiver[method]) {
        return;
    }

    test("." + method + "()", function(assert) {
        receiver[method].apply(receiver, args);
        testResult(assert, expected, receiver, opts);
        assert.end();
    });
}

function testFunctionInterface(receiver, method, args, expected, opts) {
    
    test("vec2." + method + "()", function(assert) {
        
        args.unshift(receiver);

        if (Array.isArray(expected)) {
            args.push(receiver);
            vec2[method].apply(null, args);
            testResult(assert, expected, receiver, opts);
        } else {
            var res = vec2[method].apply(null, args);
            testResult(assert, expected, res, opts);
        }

        assert.end();

    });

}

function testAll(receiver, name, args, result, opts) {

    function mkargs() {
        return args.map(function(a) {
            return Array.isArray(a) ? new vec2.Vec2(a[0], a[1]) : a
        });
    }

    testObjectMethod(receiver.clone(), name, mkargs(), result, opts);
    testSelfMutatingObjectMethod(receiver.clone(), name, mkargs(), result, opts);
    testFunctionInterface(receiver.clone(), name, mkargs(), result, opts);
}

function testBinaryOperator(name, l, r, result, opts) {
    testAll(
        new vec2.Vec2(l[0], l[1]),
        name,
        [Array.isArray(r) ? new vec2.Vec2(r[0], r[1]) : r],
        result,
        opts
    );
}

function testUnaryOperator(name, l, result, opts) {
    testAll(
        new vec2.Vec2(l[0], l[1]),
        name,
        [],
        result,
        opts
    );
}

test("clone", function(assert) {

    var v1 = new vec2.Vec2(13,20);
    var v2 = v1.clone();

    assert.ok(v2 instanceof vec2.Vec2);
    assert.ok(v1 !== v2);
    assert.ok(v1.x === v2.x);
    assert.ok(v1.y === v2.y);
    assert.end();

});

testBinaryOperator('eq', [1,2], [1,2], true);
testBinaryOperator('eq', [1,5], [1,8], false);
testBinaryOperator('add', [1,2], [3,4], [4,6]);
testBinaryOperator('sub', [5,6], [4,1], [1,5]);
testBinaryOperator('mul', [1,2], 10, [10,20]);
testBinaryOperator('div', [30,90], 3, [10,30]);
testBinaryOperator('distance', [3,0], [0,4], 5);
testBinaryOperator('distancesq', [3,0], [0,4], 25);
testBinaryOperator('angle', [0,100], [100,0], -Math.PI / 4, {inexact: false});

testUnaryOperator('normalize', [0,10], [0,1]);
testUnaryOperator('magnitude', [3,4], 5);
testUnaryOperator('magnitudesq', [3,4], 25);
testUnaryOperator('midpoint', [10,10], [5,5]);

testAll(
    new vec2.Vec2(10, 15),
    'adjust',
    [[20, 10], 0.5],
    [20, 20]
);

// TODO: dot