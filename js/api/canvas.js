chrome.runtime.sendMessage({method: "current_profile"}, function (response) {
  if (JSON.parse(response) === null){
    return;
  } else {
    const canvasNoise = JSON.parse(response).canvasNoise;
    const webglNoiseR = JSON.parse(response).webglNoiseR;
    const webglNoiseG = JSON.parse(response).webglNoiseG;
    const webglNoiseB = JSON.parse(response).webglNoiseB;
    const webglNoiseA = JSON.parse(response).webglNoiseA;

if (canvasNoise == 1) {
  var injectCanvas = function (webglNoiseR, webglNoiseG, webglNoiseB, webglNoiseA) {
    var overwrite = function (name) {
      const OLD = HTMLCanvasElement.prototype[name];
      Object.defineProperty(HTMLCanvasElement.prototype, name, {
        "value": function () {
          var shift = {
            'r': webglNoiseR,
            'g': webglNoiseG,
            'b': webglNoiseB,
            'a': webglNoiseA
          };
          var width = this.width, height = this.height, context = this.getContext("2d");
          try {
            var imageData = context.getImageData(0, 0, width, height);
          } catch {
            var someCanvas = document.createElement("CANVAS");
            var someCTX = someCanvas.getContext('2d');
            var fakeImage = new Image();
            fakeImage.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACWCAYAAABkW7XSAAAOAUlEQVR4Xu2dXYhkRxXHT92e2cWHgAFBfVjpRSXmQTGCEgWhRxAMKCiC6IOwgwoR8SHggyLaM0Ew+OAHCAoK2wMKeVDiU/ADnAEfEog6cdfN4CamW0cz0Q1uklUXdzNzpe7t2e7p7Z7pj3ur6lT95mUfcrvq1P9/8qP69Km6RvhDARRAASUKGCVxEiYKoAAKCMAiCVAABdQoALDUWEWgKIACAIscQAEUUKMAwFJjFYGiAAoALHIABVBAjQIAS41VBIoCKACwyAEUQAE1CgAsNVYRKAqgAMAiB1AABdQoALDUWEWgKIACAIscQAEUUKMAwFJjFYGiAAoALHIABVBAjQIAS41VBIoCKACwyAEUQAE1CgAsNVYRKAqgAMAiB1AABdQoALDUWEWgKIACAIscqFyBPJemiDSNka3KB2fApBUAWEnbX8/ib+bSWhLZFJEVoFWPxqmOCrBSdb7Gdee5tEVkTUR6xsjZGqdi6MQUAFiJGe5iuQe5bBqRVn+uLWNkxcW8zBG/AgArfo+drvB6Ls3TIt2RxFozRtadBsJkUSoAsKK01d+ibP2qIcUOa/SPepY/W6KZGWBFY2UYC9nPpW1E1iYkFtAKwya1UQAstdaFGfgruWxmIq0JiUURPkzb1EQFsNRYFX6gtn61LNLNRI57pThF+PCtDDZCgBWsNfoCs/UrI8UO6zhg2YV1jJFVfSskYt8KACzfDkQ0/81+/WoKYNlVU8+KyHtXSwFYrpROYJ6b/f6rKYEFtBLIiaqXCLCqVjTR8Wz9aqnffzUDsCjCJ5ov8y4bYM2rHJ87osD1/vlBm1AzAMuOQRGeXJpaAYA1tVQ8eJwC/8ulnfX7r2YEFtAitaZWAGBNLRUPHqfAjX79ao4d1uGwq8ZIB5VR4DgFABb5sbACtn6VDfVfzbHDOoyBXw4XdiPuAQBW3P46WZ2tX2VD/VcLAKvXb3ew//KHArcpALBIioUVuN6vXx2CagFgUc9a2I24BwBYcfvrZHXX++cHKwIW0HLims5JAJZO34KJ2tavpF+/qhBYdn3coRWMy+EEArDC8UJlJNf6/VcWVhUDy+pBEV5lVtQXNMCqT9skRrb1K7sbqglYQCuJLJp+kQBreq14cowC/x06P1jDDsvOyPEdMu+WAgCLZJhbgatD97fXuMOiCD+3Q/F9EGDF56mzFdn61eH97TUDiyK8M1fDnghghe1P0NH9Z+j+dgfAop4VdDa4CQ5gudE5yln+PXR/uyNgAa0oM2n6RQGs6bXiySEFbP1q+P52h8CiCJ9wJgKshM1fZOlXc2ktj5wfrOlXwnFhcofWIuYp/izAUmyez9Cvjdzf7nCHdbhsOuF9JoCnuQGWJ+G1T/vymPODDndYh/LRCa89kWaMH2DNKBiPlwq8nEs+uqvyACyK8IklJMBKzPAqlmsL7o0xB549AYsifBWmKhkDYCkxKqQwXxqqXw1DyhOwrDQU4UNKkBpjAVg1ihvr0C8O1a8CAZaVmiJ8rAk3tC6AlYDJVS/xxaH6VUDAop5VtdEBjgewAjQl5JBs/coM1a8CAxbQCjl5KogNYFUgYkpDXM3lnBE5f/gLYYDAoggfcUICrIjNrWNpV0fuvwoQWBTh6zA+kDEBViBGaAnjai5dI8V7CIsrkQMFFkV4LQk1Y5wAa0bBUn7c1q/sCycO3+4cOLCoZ0WYrAArQlPrWtILuZxriJxXBCygVVcyeBoXYHkSXuO0/+rXr5QBiyK8xmSbEDPAisjMupeiFFgU4etODIfjAyyHYmueai+X5ql+/5WyHdah7Bzf0ZyA/dgBVgQmuljClVxa2ZgL+wL+lXCcLKvGSMeFXsxRjwIAqx5doxv1yoT7r5QBiyK88swEWMoNdBV+RMDqiYi9+M/+y58yBQCWMsN8hGvrV0sT7r9SuMOiCO8jiSqaE2BVJGTMw+zl0lrq169GAaUUWEBLacICLKXGuQz7Si5te9/UuM52xcCyEnKHlstEqmAugFWBiLEP8c+RA89K2xom2cSLLBQlMMBSZJaPUG39yt7fPgypyIDFL4c+EmvOOQHWnMKl8jFbv2qIbEYOLI7vKElogKXEKF9h/mNf2sbWeiZcJ6O8hjWQ1ciWyWTFl87MO50CAGs6nZJ96vkbspmJtKIHlnXYyJpZlvVkzVawcIClwCRfIe5dl6bJpTtpF6XgPqzZpduXFXOHbM3+QT7hQgGA5UJlpXPsXpPW8pjzgxEW3UcdAlqB5izACtSYEMLae0naJi/7r5L4SjgQvWdeLWdD8IAYjioAsMiIiQo890JZv0oQWFaTLfMaivCh/e8BsEJzJJB49vakmWdl/SpRYFkn1sxrKcIHkpJFGAArJDcCimV3V1qNrNhhpQwskQNZMWcowoeSmgArFCcCi+Pvu4P6VcI7rNIV+8vhWaAVQooCrBBcCDCG57qyKf36VfLAEumZsxThQ0hTgBWCC4HF0N2R5qmlyecHE2hrGOfIlnkzRXjfqQqwfDsQ4Py7O9LKzOTzg4kCq+yEv4sivM+UBVg+1Q907t1L0s7yyecHkwWW9SuXFfNW6lm+Uhdg+VI+4Hl3L8hmlk8+P5g0sKxv9pfDe4CWjxQGWD5UD3jO7rY0l044P5g8sGwR/h0U4X2kMcDyoXrAc3Yfk9ZSo+y/mnQcB2AVBm6Zd1GEd53KAMu14oHP95fHpJ31728HWCeatWbeTRH+RJUqfABgVShmDEP99TfFr4PHnh9kh3XE6RXzXupZrnIfYLlSWsE83U1pZubk84MAa8RM+8vhCtBykeIAy4XKSubo/kpa2RTnBwHWiKH2euX3Uc9ykeYAy4XKSubo/mJQv6LoPpVpPTmQdXOfdKZ6mocWVgBgLSxhPAN0Hx3cfwWwjvW1J0Y65j4K7q6zH2C5VjzQ+bqPSFMag/oVwBprVAmqDwEqX2kMsHwpH9i8Tz8iraX+/e0n3YGVYA2rJyId8xFA5TttAZZvBwKZv/tTaUv//naAdcuUYkclN2TDfEIstPjzrADA8mxAKNM/+/Cg/wpgFXDaklzWAVUoGVrGAbDC8sNbNM/+WPJpvuqN1raiefPzQPmOHMiG+SR9Vd6S8ZiJAVaIrjiOaee8NE9nRy/sS7DoblsUVs0qoHKcfjNNB7BmkivOh/98vry/PdEdVq/46vcpeqk0ZDfA0uBSzTE+84Oy/yopYBmxoOqYz/DLX83pVenwAKtSOXUO9sz3JJ+2NjXtcwEnVtmi8FlApTFbA84rjXLqi3nnW9JcXi4bRiPfYZVNn58DVPqydBAxwNLsXgWxP/2dwfsHIwVW2Utlf/l7gF6qClLG6xAAy6v8/ie//M3y/vYId1hlL1Um64DKf55VFQHAqkpJpeNc/kbxdbAZGbA6si8b5ku0KChNy4lhA6zYHJ1hPTtfl2aj/8KJSIDVk31ZNV8BVDOkgapHAZYqu6oNdudBOdcwcn7cURxVjaO2RcHeS/VVeqmqzZDwRgNY4XniLKLLbdmU/v3tSndYZS/Vg/zy5yxpPE8EsDwb4HP6P31ZusaU9StVwMqlbFH4GqDymT8+5gZYPlQPYM6dL5YvnBhuZVDQ1lDuqB4CVAGkkJcQAJYX2f1PuvMFaWWmuFKm2F0FvsMqQCVLsmEeopfKf/b4iwBg+dPe68w7D8hmZo6eHwxwh1X2UtmC+rcBldeECWRygBWIEa7D2Pl84MCy3em2l+q7tCi4zo2Q5wNYIbtTU2w79w9eOBHgV0JbUF8FVDWZr3xYgKXcwHnCv3j/4IUTAQHLfv1bN9+nl2oeT1P5DMBKxemhdV769OCFqd6Bddii8EN++UswFWdeMsCaWTL9H3hqdfDCCY/AKlsUOoBKf0a5WwHAcqd1EDNtn5Pmqf3BC1M9AKsE1Y8AVRAJoSwIgKXMsEXDvfhxaWVZcSXybb1XNbc1FDd9FvdSPUyLwqI+pvp5gJWY85c+Jm0xsuYQWGUvlZF1QJVYstWwXIBVg6ghD/nHjx59YWrNXwk7YmTD/IReqpBzQlNsAEuTWwvGuv1haS7L5PODFX4l7BmRVfMzQLWgZXx8RAGAlVBKbH9QWssy+fzgosBq5NI7yGX91KP0UiWUVk6XCrCcyu13sosfkLYxR1+YWtFXwl6WS+f0z/nlz6/D8c8OsOL3+NYKL7z/+PODc+yweg2Rzqt+CagSSiOvSwVYXuV3N/l2S5qN7Pb3D865wypAdcevAZU7B5nJKgCwEsmD7Za0GnnZfzUJUlPssIqvfpLJxp1b9FIlkjpBLRNgBWVHfcH84T1l/WpOYPUyka3Gvqzf+Tigqs8lRj5JAYB1kkKR/Pcn7y12V7e9MPWkr4T2q9+ByMbrH6dFIZJUUL0MgKXavumC375XmmaK84MjXwlti8Lqmd8CqulU5ikXCgAsFyp7nmP77dIy5uTzg31g9Uwu6294kl4qz7Yx/RgFAFYCabH9NmkbOfH8oO1O75y9wC9/CaSE2iUCLLXWTR/49t2yaUxZvxpTdC9aFN74FKCaXlGe9KUAwPKlvKN5t98iTcnHnh8sWhTuugyoHFnBNBUoALAqEDHkIZ54U3l/+62Cei49Y6STvSIbd/doUQjZO2K7XQGAFXlW/K5Z3t9uRIpeqn2R9XsAVeSux7s8gBWvt8XKfn+m2F3Za4k37vkbLQqR2x398gBW5BY/8TppvfN5QBW5zcksD2AlYzULRQH9CgAs/R6yAhRIRgGAlYzVLBQF9CsAsPR7yApQIBkFAFYyVrNQFNCvAMDS7yErQIFkFABYyVjNQlFAvwL/Bxc+YbVUIeoCAAAAAElFTkSuQmCC";
            someCTX.drawImage(fakeImage, 33, 71, 104, 124, 21, 20, 87, 104);
            var imageCreate = someCTX.createImageData(2000, 200);
            var imageData = someCTX.getImageData(0, 0, 2000, 200);
          }
          for (var i = 0; i < height; i++) {
            for (var j = 0; j < width; j++) {
              var n = ((i * (width * 4)) + (j * 4));
              imageData.data[n + 0] = imageData.data[n + 0] + shift.r;
              imageData.data[n + 1] = imageData.data[n + 1] + shift.g;
              imageData.data[n + 2] = imageData.data[n + 2] + shift.b;
              imageData.data[n + 3] = imageData.data[n + 3] + shift.a;
            }
          }
          try {
            context.putImageData(imageData, 0, 0);
          } catch {
            someCTX.putImageData(imageData, 0, 0);
          }
          return OLD.apply(this, arguments);
        }
      });
    };
    overwrite('toBlob');
    overwrite('toDataURL');
    document.documentElement.dataset.canvasbuffer = true;
  };



    var script_1 = document.createElement('script');
      script_1.textContent = "(" + injectCanvas + ")(" + webglNoiseR + "," + webglNoiseG + "," + webglNoiseB + "," + webglNoiseA + ")";

    document.documentElement.appendChild(script_1);

    if (document.documentElement.dataset.canvasbuffer !== "true") {
      var script_2 = document.createElement('script');
      script_2.textContent = `{
        const iframes = window.top.document.querySelectorAll("iframe[sandbox]");
        for (var i = 0; i < iframes.length; i++) {
          if (iframes[i].contentWindow) {
            if (iframes[i].contentWindow.HTMLCanvasElement) {
              let tb = iframes[i].contentWindow.HTMLCanvasElement.prototype.toBlob;
              if (tb !== HTMLCanvasElement.prototype.toBlob) {
                iframes[i].contentWindow.HTMLCanvasElement.prototype.toBlob = HTMLCanvasElement.prototype.toBlob;
                iframes[i].contentWindow.HTMLCanvasElement.prototype.toDataURL = HTMLCanvasElement.prototype.toDataURL;
              }
            }
          }
        }
      }`;
      window.top.document.documentElement.appendChild(script_2);
    }
} else {}
}
});