import { Matrix4 } from '../../math/Matrix4.js';

var _offsetMatrix = new Matrix4();

/**
 * Use an array of bones to create a skeleton that can be used by a SkinnedMesh.
 * @constructor
 * @memberof zen3d
 */
function Skeleton(bones) {
	// bones in array
	bones = bones || [];

	/**
     * The array of bones.
     * @type {zen3d.Bone[]}
     * @default []
     */
	this.bones = bones.slice(0);

	/**
     * The array buffer holding the bone data.
     * @type {Float32Array}
     */
	this.boneMatrices = new Float32Array(16 * this.bones.length);

	/**
     * The {@link zen3d.Texture2D} holding the bone data when using a vertex texture.
     * Use vertex texture to update boneMatrices, by that way, we can use more bones on phone.
     * @type {zen3d.Texture2D|undefined}
     * @default undefined
     */
	this.boneTexture = undefined;
}

Object.assign(Skeleton.prototype, /** @lends zen3d.Skeleton.prototype */{

	/**
     * Returns the skeleton to the base pose.
     * @method
     */
	pose: function() {
		for (var i = 0; i < this.bones.length; i++) {
			var bone = this.bones[i];
			bone.worldMatrix.getInverse(bone.offsetMatrix);
		}

		for (var i = 0; i < this.bones.length; i++) {
			var bone = this.bones[i];
			if (bone.parent && bone.parent.type == "bone") {
				bone.matrix.getInverse(bone.parent.worldMatrix);
				bone.matrix.multiply(bone.worldMatrix);
			} else {
				bone.matrix.copy(bone.worldMatrix);
			}

			bone.matrix.decompose(bone.position, bone.quaternion, bone.scale);
		}
	},

	/**
     * Updates the boneMatrices and boneTexture after changing the bones.
     * This is called automatically if the skeleton is used with a SkinnedMesh.
     * @method
     * @param {string} name -- String to match to the Bone's .name property.
     * @return {zen3d.Bone}
     */
	updateBones: function() {
		for (var i = 0; i < this.bones.length; i++) {
			var bone = this.bones[i];
			_offsetMatrix.multiplyMatrices(bone.worldMatrix, bone.offsetMatrix);
			_offsetMatrix.toArray(this.boneMatrices, i * 16);
		}

		if (this.boneTexture !== undefined) {
			this.boneTexture.version++;
		}
	},

	/**
     * Searches through the skeleton's bone array and returns the first with a matching name.
     * @param {string} name -- String to match to the Bone's .name property.
     * @return {zen3d.Bone}
     */
	getBoneByName: function(name) {
		for (var i = 0, il = this.bones.length; i < il; i++) {
			var bone = this.bones[i];
			if (bone.name === name) {
				return bone;
			}
		}

		return undefined;
	}

});

export { Skeleton };