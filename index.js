var sqrt    = Math.sqrt,
    cos     = Math.cos,
    sin     = Math.sin,
    atan2   = Math.atan2;

//
// Smart constructor

module.exports = exports = smartConstructor;
function smartConstructor(x, y) {
    switch (arguments.length) {
        case 0: return zero();
        case 1: return clone(x);
        case 2: return make(x, y);
        default: throw new Error("invalid number of arguments to vec2 smart constructor");
    }
}

//
// Class

var Vec2 = require('./Vec2');
exports.Vec2 = Vec2;

//
// Constructors

exports.zero = zero;
function zero() {
    return new Vec2(0, 0);
}

exports.clone = clone;
function clone(vec) {
    return new Vec2(vec.x, vec.y);
}

exports.make = make;
function make(x, y) {
    return new Vec2(x, y);
}

//
// Library

exports.eq = function(v1, v2) {
    return v1.x === v2.x && v1.y === v2.y;
}

exports.add = function(v1, v2, out) {
    out.x = v1.x + v2.x;
    out.y = v1.y + v2.y;
}

exports.sub = function(v1, v2, out) {
    out.x = v1.x - v2.x;
    out.y = v1.y - v2.y;
}

exports.mul = function(v, s, out) {
    out.x = v.x * s;
    out.y = v.y * s;
}

exports.div = function(v, s, out) {
    out.x = v.x / s;
    out.y = v.y / s;
}

exports.normalize = function(v, out) {
    var mag = sqrt(v.x * v.x + v.y * v.y);
    out.x = v.x / mag;
    out.y = v.y / mag;
}

// exports.transform = function(vec, pos, rotation, out) {
//     var nx = pos.x + (Math.cos(rotation) * vec.x - Math.sin(rotation) * vec.y);
//     out.y = pos.y + (Math.sin(rotation) * vec.x - Math.sin(rotation) * vec.y);
//     out.x = nx;
// }

exports.distance = function(v1, v2) {
    var dx = v1.x - v2.x, dy = v1.y - v2.y;
    return Math.sqrt(dx*dx + dy*dy);
}

exports.distancesq = function(v1, v2) {
    var dx = v1.x - v2.x, dy = v1.y - v2.y;
    return dx*dx + dy*dy;
}

exports.magnitude = magnitude;
function magnitude(v) {
    return sqrt(v.x*v.x + v.y*v.y);
}

exports.magnitudesq = function(v) {
    return v.x*v.x + v.y*v.y;
}

exports.midpoint = function(v, out) {
    out.x = v.x / 2;
    out.y = v.y / 2;
}

exports.adjust = function(v, delta, amount, out) {
    out.x = v.x + delta.x * amount;
    out.y = v.y + delta.y * amount;
}

exports.cross = cross;
function cross(v1, v2) {
    return v1.x*v2.y - v1.y*v2.x;
}

exports.dot = dot;
function dot(v1, v2) {
    return v1.x*v2.x + v1.y*v2.y;
}

exports.angle = function(v1, v2) {
    return atan2(cross(v1, v2), dot(v1, v2));
}
