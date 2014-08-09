var test = require('tape');
var vec2 = require('..');

test("vec2.eq()", function(assert) {

    var v1 = vec2(10, 15);
    var v2 = vec2(20, 30);
    var v3 = vec2(10, 15);

    assert.ok(vec2.eq(v1, v1));
    assert.notOk(vec2.eq(v1, v2));
    assert.ok(vec2.eq(v1, v3));

    assert.end();

});