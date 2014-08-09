module.exports = Vec2;

var sqrt    = Math.sqrt,
    cos     = Math.cos,
    sin     = Math.sin,
    atan2   = Math.atan2;

function Vec2(x, y) {
    this.x = x;
    this.y = y;
}

//
// Clone

Vec2.prototype.clone = function() {
    return new Vec2(this.x, this.y);
}

//
// Operations returning new vectors

Vec2.prototype.add = function(rhs) {
    return new Vec2(this.x + rhs.x, this.y + rhs.y);
}

Vec2.prototype.sub = function(rhs) {
    return new Vec2(this.x - rhs.x, this.y - rhs.y);
}

Vec2.prototype.mul = function(rhs) {
    return new Vec2(this.x * rhs, this.y * rhs);
}

Vec2.prototype.div = function(rhs) {
    return new Vec2(this.x / rhs, this.y / rhs);
}

Vec2.prototype.normalize = function() {
    var mag = this.magnitude();
    return new Vec2(this.x / mag, this.y / mag);
}

Vec2.prototype.midpoint = function() {
    return new Vec2(this.x/2, this.y/2);
}

Vec2.prototype.adjust = function(rhs, amount) {
    return new Vec2(
        this.x + rhs.x * amount,
        this.y + rhs.y * amount
    );
}

//
// Modify in place

Vec2.prototype.add_ = function(rhs) {
    this.x += rhs.x;
    this.y += rhs.y;
}

Vec2.prototype.sub_ = function(rhs) {
    this.x -= rhs.x;
    this.y -= rhs.y;
}

Vec2.prototype.mul_ = function(rhs) {
    this.x *= rhs;
    this.y *= rhs;
}

Vec2.prototype.div_ = function(rhs) {
    this.x /= rhs;
    this.y /= rhs;
}

Vec2.prototype.normalize_ = function() {
    var mag = this.magnitude();
    this.x /= mag;
    this.y /= mag;
}

Vec2.prototype.midpoint_ = function() {
    this.x /= 2;
    this.y /= 2;
}

Vec2.prototype.adjust_ = function(rhs, amount) {
    this.x += rhs.x * amount;
    this.y += rhs.y * amount;
}

//
// Scalar

Vec2.prototype.eq = function(rhs) {
    return this.x === rhs.x && this.y === rhs.y;
}

Vec2.prototype.distance = function(rhs) {
    var dx = this.x - rhs.x,
        dy = this.y - rhs.y;
    return sqrt(dx*dx + dy*dy);
}

Vec2.prototype.distancesq = function(rhs) {
    var dx = this.x - rhs.x,
        dy = this.y - rhs.y;
    return dx*dx + dy*dy;
}

Vec2.prototype.magnitude = function() {
    return sqrt(this.x*this.x + this.y*this.y);
}

Vec2.prototype.magnitudesq = function() {
    return this.x*this.x + this.y*this.y;
}

Vec2.prototype.cross = function(rhs) {
    return this.x*rhs.y - this.y*rhs.x;
}

Vec2.prototype.dot = function(rhs) {
    return this.x*rhs.x + this.y*rhs.y;
}

// returns angle through which this vector must be rotated to equal rhs
Vec2.prototype.angle = function(rhs) {
    return atan2(rhs.cross(this), rhs.dot(this));
}