chrome.runtime.sendMessage({method: "current_profile"}, function (response) {
	var scriptCode = '(' + function (WebGLImageInject) {
		let response = JSON.parse(webglImageResponseStr);
		const webglNoise = response.webglNoise;
	    const webglNoiseString1 = response.webglNoiseString1;
	    const webglNoiseString2 = response.webglNoiseString2;
		const seed = response.seed;

		var originalReadPixels = WebGLRenderingContext.prototype.readPixels;
	    var originalReadPixelsTwo = WebGL2RenderingContext.prototype.readPixels;

		if (webglNoise === 1) {
			WebGLRenderingContext.prototype.readPixels = function readPixels(x, y, width, height, format, type, pixels) {
			   originalReadPixels.call(this, x, y, width, height, format, type, pixels);
			   fakePixelData(pixels);
			};

			WebGL2RenderingContext.prototype.readPixels = function readPixels(x, y, width, height, format, type, pixels) {
			   originalReadPixelsTwo.call(this, x, y, width, height, format, type, pixels);
			   fakePixelData(pixels);
			};
		}

		function randomBoolean() {
		    return randomNumber(0, 2) ? true : false;
		}

		function randomNumber(min, max) {
		    return Math.floor(Math.random() * (max - min) + min);
		}

		function fakePixelData(pixels) {
		   Math.seedrandom(seed);              
		   for (var i = 0; i < pixels.length; i++) {
		       pixels[i] += (randomBoolean() ? 1 : -1);
		   }

		   return pixels;
		}

	} + ')();';


	if (JSON.parse(response) === null) {
	  return;
	} else {

	    var script = document.createElement('script');
	    script.textContent = `var webglImageResponseStr = '${response}'; \n ` + scriptCode;
	    (document.head || document.documentElement).appendChild(script);
	    script.remove();

	    var inject=function(filePath,seed){
	    var script=document.createElement('script');
	    script.src=chrome.extension.getURL(filePath);
	    script.onload = function(){
	      this.remove();
	    };
	      (document.head||document.documentElement).appendChild(script);
	    }

	    inject("js/lib/seedrandom.js");
	}
});		