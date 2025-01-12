(function (factory) {
	typeof define === 'function' && define.amd ? define(factory) :
	factory();
}(function () { 'use strict';

	var asset1 = 'chunkId=umd.js:moduleId=solved:fileName=assets/asset-solved-9b321da2.txt:format=umd:relativePath=assets/asset-solved-9b321da2.txt:assetReferenceId=6296c678:chunkReferenceId=null';

	var asset2 = 'resolved';

	var asset3 = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __dirname + '/assets/asset-unresolved-9548436d.txt').href : new URL('assets/asset-unresolved-9548436d.txt', document.currentScript && document.currentScript.src || document.baseURI).href);

	console.log(asset1, asset2, asset3);

}));
