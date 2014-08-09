var test = require('tape');
var vec2 = require('..');

test("zero", function(assert) {
    var v = vec2.zero();
    assert.equal(v.x, 0);
    assert.equal(v.y, 0);
    assert.end();
});

test("clone", function(assert) {
    var v1 = new vec2.Vec2(1.5, 2.5);
    var v2 = vec2.clone(v1);
    assert.ok(v1 !== v2);
    assert.equal(v1.x, v2.x);
    assert.equal(v1.y, v2.y);
    assert.end();
});

test("make", function(assert) {
    var v = vec2.make(12.3, 14.6);
    assert.ok(v instanceof vec2.Vec2);
    assert.equal(v.x, 12.3);
    assert.equal(v.y, 14.6);
    assert.end();
});

test("smart constructor - 0 args", function(assert) {
    var v = vec2();
    assert.ok(v instanceof vec2.Vec2);
    assert.equal(v.x, 0);
    assert.equal(v.y, 0);
    assert.end();
});

test("smart constructor - 1 arg", function(assert) {
    var v1 = new vec2.Vec2(99, 100);
    var v2 = vec2(v1);
    assert.ok(v2 instanceof vec2.Vec2);
    assert.ok(v1 !== v2);
    assert.equal(v1.x, v2.x);
    assert.equal(v1.y, v2.y);
    assert.end();
});

test("smart constructor - 2 args", function(assert) {
    var v = vec2(15, 23.2);
    assert.ok(v instanceof vec2.Vec2);
    assert.equal(v.x, 15);
    assert.equal(v.y, 23.2);
    assert.end();
});
