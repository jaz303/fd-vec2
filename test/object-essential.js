var vec2 = require('..');
var test = require('tape');

test("new Vec2()", function(assert) {
    var v = new vec2.Vec2(10, 15);
    assert.equal(v.x, 10);
    assert.equal(v.y, 15);
    assert.end();
});

test("v.eq()", function(assert) {

    var v1 = vec2(10, 15);
    var v2 = vec2(20, 30);
    var v3 = vec2(10, 15);

    assert.ok(v1.eq(v1));
    assert.notOk(v1.eq(v2));
    assert.ok(v1.eq(v3));

    assert.end();

});

test("v.clone()", function(assert) {

    var v1 = vec2(100, 120);
    var v2 = v1.clone();

    assert.ok(v2 instanceof vec2.Vec2);
    assert.ok(v2 !== v1);
    
    assert.equal(v2.x, v1.x);
    assert.equal(v2.y, v1.y);

    assert.end();

});