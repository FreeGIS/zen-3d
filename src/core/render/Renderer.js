import { RenderTargetBack } from './RenderTargetBack.js';
import { WebGLCore } from './WebGL/WebGLCore.js';
import { ShadowMapPass } from './prePass/ShadowMapPass.js';

/**
 * A simple forward renderer.
 * @constructor
 * @memberof zen3d
 * @param {HTMLCanvasElement} view - The canvas elements.
 * @param {Object} [options=] - The {@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext options for webgl context}.
 */
function Renderer(view, options) {
	var defaultContextParams = {
		antialias: true, // antialias
		alpha: false, // effect performance, default false
		// premultipliedAlpha: false, // effect performance, default false
		stencil: true
	};

	var gl = view.getContext("webgl2", options || defaultContextParams) || view.getContext("webgl", options || defaultContextParams);

	this.glCore = new WebGLCore(gl);

	console.info("ForwardRenderer use WebGL Version: " + this.glCore.capabilities.version);

	this.backRenderTarget = new RenderTargetBack(view);

	this.shadowMapPass = new ShadowMapPass();

	/**
     * Defines whether the shadow pass should automatically update.
     * @type {boolean}
     * @default true
     */
	this.shadowAutoUpdate = true;

	/**
     * If {@link zen3d.Renderer.shadowAutoUpdate} is set true and this set true, shadow will update and set this to false automatically.
     * @type {boolean}
     * @default false
     */
	this.shadowNeedsUpdate = false;

	/**
     * Defines whether the scene should automatically update its matrix.
     * @type {boolean}
     * @default true
     */
	this.matrixAutoUpdate = true;

	/**
     * Defines whether the scene should automatically update its lights.
     * @type {boolean}
     * @default true
     */
	this.lightsAutoUpdate = true;

	/**
     * Defines whether the renderer should automatically clear its output before rendering a frame.
     * @type {boolean}
     * @default true
     */
	this.autoClear = true;
}

/**
 * Render a scene using a camera.
 * The render is done to the renderTarget (if specified) or to the canvas as usual.
 * @param {zen3d.Scene} scene - The scene.
 * @param {zen3d.Camera} camera - The camera.
 * @param {zen3d.RenderTargetBase} [renderTarget=] - The render is done to the renderTarget (if specified) or to the canvas as usual.
 * @param {boolean} [forceClear=false] - If set true, the depth, stencil and color buffers will be cleared before rendering even if the renderer's autoClear property is false.
 */
Renderer.prototype.render = function(scene, camera, renderTarget, forceClear) {
	this.matrixAutoUpdate && scene.updateMatrix();
	this.lightsAutoUpdate && scene.updateLights();

	if (this.shadowAutoUpdate || this.shadowNeedsUpdate) {
		this.shadowMapPass.render(this.glCore, scene);

		this.shadowNeedsUpdate = false;
	}

	if (renderTarget === undefined) {
		renderTarget = this.backRenderTarget;
	}
	this.glCore.renderTarget.setRenderTarget(renderTarget);

	if (this.autoClear || forceClear) {
		this.glCore.clear(true, true, true);
	}

	this.glCore.render(scene, camera);

	if (!!renderTarget.texture) {
		this.glCore.renderTarget.updateRenderTargetMipmap(renderTarget);
	}
}

export { Renderer };