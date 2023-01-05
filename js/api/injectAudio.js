chrome.runtime.sendMessage({method: "current_profile"}, function (response) {

if (JSON.parse(response) === null){
  return;
};
if (JSON.parse(response).audioNoise === 1){
  var inject = function () {
      let response = JSON.parse(audioResponseStr);  
      const FAKECONST1 = response.audioNoiseConst1; 
      const FAKECONST2 = response.audioNoiseConst2; 
      const config = {
        "BUFFER": null,
        "getChannelData": function (e) {
            const getChannelData = e.prototype.getChannelData;
            Object.defineProperty(e.prototype, "getChannelData", {
                "value": function () {
                    const results_1 = getChannelData.apply(this, arguments);
                    if (config.BUFFER !== results_1) {
                        config.BUFFER = results_1;
                        window.top.postMessage("audiocontext-fingerprint-defender-alert", '*');
                        for (var i = 0; i < results_1.length; i += 100) {
                            let index = Math.floor(FAKECONST1 * i);
                            results_1[index] = results_1[index] + FAKECONST2 * 0.0000001;
                        }
                    }
                    return results_1;
                }
            });
        },
        "createAnalyser": function (e) {
              const FAKECONST3 = response.audioNoiseConst3;
              const FAKECONST4 = response.audioNoiseConst4;
              const createAnalyser = e.prototype.__proto__.createAnalyser;
              Object.defineProperty(e.prototype.__proto__, "createAnalyser", {
                  "value": function () {
                      const results_2 = createAnalyser.apply(this, arguments);
                      const getFloatFrequencyData = results_2.__proto__.getFloatFrequencyData;
                      Object.defineProperty(results_2.__proto__, "getFloatFrequencyData", {
                          "value": function () {
                              window.top.postMessage("audiocontext-fingerprint-defender-alert", '*');
                              const results_3 = getFloatFrequencyData.apply(this, arguments);
                              for (var i = 0; i < arguments[0].length; i += 100) {
                                  let index = Math.floor(FAKECONST3 * i);
                                  arguments[0][index] = arguments[0][index] + FAKECONST4 * 0.1;
                              }
                              return results_3;
                          }
                      });
                      return results_2;
                  }
              });
          }
      };

      config.getChannelData(AudioBuffer);
      config.createAnalyser(AudioContext);
      config.createAnalyser(OfflineAudioContext);
      document.documentElement.dataset.htmlaudiobuffer = true;
  };


var script_1 = document.createElement('script');
script_1.textContent = `const audioResponseStr = '${response}'; \n ` + "(" + inject + ")()";
document.documentElement.appendChild(script_1);
script_1.remove();

if (document.documentElement.dataset.htmlaudiobuffer !== "true") {
  var script_2 = document.createElement('script');
  script_2.textContent = `{
  const iframes = window.top.document.querySelectorAll("iframe[sandbox]");
  for (var i = 0; i < iframes.length; i++) {
    if (iframes[i].contentWindow) {
      if (iframes[i].contentWindow.AudioBuffer) {
        if (iframes[i].contentWindow.AudioBuffer.prototype) {
          if (iframes[i].contentWindow.AudioBuffer.prototype.getChannelData) {
            iframes[i].contentWindow.AudioBuffer.prototype.getChannelData = AudioBuffer.prototype.getChannelData;
          }
        }
      }
      if (iframes[i].contentWindow.AudioContext) {
        if (iframes[i].contentWindow.AudioContext.prototype) {
          if (iframes[i].contentWindow.AudioContext.prototype.__proto__) {
            if (iframes[i].contentWindow.AudioContext.prototype.__proto__.createAnalyser) {
              iframes[i].contentWindow.AudioContext.prototype.__proto__.createAnalyser = AudioContext.prototype.__proto__.createAnalyser;
            }
          }
        }
      }
      if (iframes[i].contentWindow.OfflineAudioContext) {
        if (iframes[i].contentWindow.OfflineAudioContext.prototype) {
          if (iframes[i].contentWindow.OfflineAudioContext.prototype.__proto__) {
            if (iframes[i].contentWindow.OfflineAudioContext.prototype.__proto__.createAnalyser) {
              iframes[i].contentWindow.OfflineAudioContext.prototype.__proto__.createAnalyser = OfflineAudioContext.prototype.__proto__.createAnalyser;
            }
          }
        }
      }
    }
  }
}`;
  window.top.document.documentElement.appendChild(script_2);
  script_2.remove();
}
};

});
