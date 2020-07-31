zen-3d
========

[![NPM Package][npm]][npm-url]
[![Build Size][build-size]][build-size-url]
[![NPM Downloads][npm-downloads]][npmtrends-url]
[![License][license-badge]][license-badge-url]
[![Issues][issues-badge]][issues-badge-url]
![Dev Dependencies][devDependencies-badge]
[![Language Grade][lgtm]][lgtm-url]

### JavaScript 3D library ###

The aim of the project is to create an easy to use, lightweight, 3D/2D library. The library only provides WebGL renderers.

[Examples](https://shawn0326.github.io/zen-3d/examples/) &mdash;
[RoadMap](https://trello.com/b/7Ie3DDBP) &mdash;
[Documentation](https://shawn0326.github.io/zen-3d/docs/) &mdash;
[Tests](https://shawn0326.github.io/zen-3d/tests/)

[![image](./examples/resources/screenshot/screenshot1.png)](https://shawn0326.github.io/zen-3d/examples/#material_cubetexture_realtimeenvmap)
[![image](./examples/resources/screenshot/screenshot0.png)](https://shawn0326.github.io/zen-3d/examples/#geometry_loader_gltf)
[![image](./examples/resources/screenshot/screenshot3.png)](https://shawn0326.github.io/zen-3d/examples/#canvas2d_canvas2d)
[![image](./examples/resources/screenshot/screenshot4.png)](https://shawn0326.github.io/zen-3d/examples/#stereo_webvr_car)
<br />
[![image](./examples/resources/screenshot/screenshot5.png)](https://shawn0326.github.io/zen-3d/examples/#animation_monster)
[![image](./examples/resources/screenshot/screenshot6.png)](https://shawn0326.github.io/zen-3d/examples/#sprite_sprites)
[![image](./examples/resources/screenshot/screenshot7.png)](https://shawn0326.github.io/zen-3d/examples/#material_shadermaterial)
[![image](./examples/resources/screenshot/screenshot8.png)](https://shawn0326.github.io/zen-3d/examples/#particle_particle)

### Usage ###

you can use `zen3d.js` or `zen3d.min.js` in your page simply by this:

````html
<script src="zen3d.min.js"></script>
````

or import as es6 module:

````javascript
import * as zen3d from 'js/zen3d.module.js';
````

### 3D Format Support ###

[GLTF](https://github.com/KhronosGroup/glTF) /
[assimp2json](https://github.com/acgessler/assimp2json)

### WebGL2 Support ###

* [Multiple Render Targets](https://shawn0326.github.io/zen-3d/examples/#custompass_gbuffer). (WebGL 1.0 extension / WebGL 2.0)
* [Instancing](https://shawn0326.github.io/zen-3d/examples/#webgl_instanced_draw). (WebGL 1.0 extension / WebGL 2.0)
* Vertex Array Object. (WebGL 1.0 extension / WebGL 2.0)
* [Shader Texture LOD](https://shawn0326.github.io/zen-3d/examples/#material_cubetexture_skybox). (WebGL 1.0 extension / WebGL 2.0)
* [Shadow Sampler](https://shawn0326.github.io/zen-3d/examples/#light_softshadow). (WebGL 2.0)
* Fragment Depth. (TODO)
* Transform Feedback. (TODO)
* Sampler Objects. (TODO)
* [3D Texture](https://shawn0326.github.io/zen-3d/examples/#material_texture3d). (WebGL 2.0)
* [Multisampled Renderbuffers](https://shawn0326.github.io/zen-3d/examples/#custompass_msaa). (WebGL 2.0)

### Projects ###

* [zen-viewer](https://shawn0326.github.io/zen-viewer/)

### Change log ###

[Releases](https://github.com/shawn0326/zen-3d/releases)


[npm]: https://img.shields.io/npm/v/zen-3d
[npm-url]: https://www.npmjs.com/package/zen-3d
[build-size]: https://badgen.net/bundlephobia/minzip/zen-3d
[build-size-url]: https://bundlephobia.com/result?p=zen-3d
[npm-downloads]: https://img.shields.io/npm/dw/zen-3d
[npmtrends-url]: https://www.npmtrends.com/zen-3d
[license-badge]: https://img.shields.io/npm/l/zen-3d.svg
[license-badge-url]: ./LICENSE
[issues-badge]: https://img.shields.io/github/issues/shawn0326/zen-3d.svg
[issues-badge-url]: https://github.com/shawn0326/zen-3d/issues
[devDependencies-badge]: https://img.shields.io/librariesio/github/shawn0326/zen-3d.svg
[lgtm]: https://img.shields.io/lgtm/alerts/github/shawn0326/zen-3d
[lgtm-url]: https://lgtm.com/projects/g/shawn0326/zen-3d/