import { Vector3 } from './Vector3.js';
import { Matrix3 } from './Matrix3.js';

var _vec3_1 = new Vector3();
var _mat4_1 = new Matrix3();

/**
 * @constructor
 * @memberof zen3d
 * @param {zen3d.Vector3} [normal=Vector3(1, 0, 0)]
 * @param {number} [constant=0]
 */
function Plane(normal, constant) {
	this.normal = (normal !== undefined) ? normal : new Vector3(1, 0, 0);
	this.constant = (constant !== undefined) ? constant : 0;
}

Object.assign(Plane.prototype, /** @lends zen3d.Plane.prototype */{

	/**
     *
     */
	set: function(normal, constant) {
		this.normal.copy(normal);
		this.constant = constant;

		return this;
	},

	/**
     *
     */
	setComponents: function(x, y, z, w) {
		this.normal.set(x, y, z);
		this.constant = w;

		return this;
	},

	/**
     *
     */
	setFromNormalAndCoplanarPoint: function (normal, point) {
		this.normal.copy(normal);
		this.constant = -point.dot(this.normal);

		return this;
	},

	/**
     *
     */
	normalize: function() {
		// Note: will lead to a divide by zero if the plane is invalid.

		var inverseNormalLength = 1.0 / this.normal.getLength();
		this.normal.multiplyScalar(inverseNormalLength);
		this.constant *= inverseNormalLength;

		return this;
	},

	/**
     *
     */
	distanceToPoint: function(point) {
		return this.normal.dot(point) + this.constant;
	},

	/**
     *
     */
	coplanarPoint: function (optionalTarget) {
		var result = optionalTarget || new Vector3();

		return result.copy(this.normal).multiplyScalar(-this.constant);
	},

	/**
     *
     */
	copy: function(plane) {
		this.normal.copy(plane.normal);
		this.constant = plane.constant;
		return this;
	},

	/**
     * @method
     */
	applyMatrix4: function(matrix, optionalNormalMatrix) {
		var normalMatrix = optionalNormalMatrix || _mat4_1.setFromMatrix4(matrix).inverse().transpose();

		var referencePoint = this.coplanarPoint(_vec3_1).applyMatrix4(matrix);

		var normal = this.normal.applyMatrix3(normalMatrix).normalize();

		this.constant = -referencePoint.dot(normal);

		return this;
	}

});

export { Plane };