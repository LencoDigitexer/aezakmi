let listener = function (request, sender, sendResponse) {
};

chrome.runtime.sendMessage({method: "current_profile"}, function (response) {
    

      
    var scriptCode = '(' + function (navigatorScreenLanguageDatetime) {
        
        response = JSON.parse(responseStr);
        console.log("navigator")
        let userUgent = response.userAgentConst;
        let appVersion = response.appVersionConst;
        let platform = response.platformConst;
        let productSub = response.productSubConst;
        let hardwareConcurrency = response.hardwareConcurrencyConst;
        let vendor = response.vendorConst;
        let oscpu = response.oscpuConst;
        let vendorSub = response.vendorSubConst;
        let buildID = response.buildIDConst;

        let appMinorVersion = response.appMinorVersionConst;
        let buildid = response.buildidminConst;
        let cpuClass = response.cpuClassConst;
        let deviceMemory = response.deviceMemoryConst;
        let appNamet = response.appNameConst;
        let appCodeName = response.appCodeNameConst;
        let product = response.productConst;


        let width = response.widthvar;
        let height = response.heightvar;
        let availWidth = parseInt(response.availWidthvar);
        let availHeight = parseInt(response.availHeighthvar);
        let colorDepth = parseInt(response.colorDepthvar);
        let pixelDepth = parseInt(response.pixelDepthvar);
        let availTop = parseInt(response.availTopvar);
        let availLeft = parseInt(response.availLeftvar);
        
        let clientWidth = response.divWidthvar;
        let clientHeight = response.divHeightvar;


        let language = response.language_Const1;
        let languages = response.languageConst1;

        let gmtNumber =  response.sysTimeConst;
        let gmtRegion = response.sysTimeRegion;


        let rectConst = response.rects;
        let rectNoise = response.rectsNoise;
        let rectMod = 0.00000001

        
        const availablePlugins = {
            "Chrome PDF Plugin": {
                0: {
                    description: "Portable Document Format",
                    enabledPlugin: {},
                    sufixes: "pdf",
                    type: 'application/x-google-chrome-pdf',
                },
                description: "Portable Document Format",
                filename: "internal-pdf-viewer",
                lenght: 1,
                name: "Chrome PDF Plugin",
            }
        };


        let plugins = response.availablePlugins;


        var properties = {
            "nav": [
                {"obj": "window.navigator", "prop": "userAgent", "value": userUgent},
                {"obj": "window.navigator", "prop": "platform", "value": platform},
                {"obj": "window.navigator", "prop": "productSub", "value": productSub},
                {"obj": "window.navigator", "prop": "hardwareConcurrency", "value": hardwareConcurrency},
                {"obj": "window.navigator", "prop": "oscpu", "value": oscpu},
                {"obj": "window.navigator", "prop": "vendor", "value": vendor},
                {"obj": "window.navigator", "prop": "vendorSub", "value": vendorSub},
                {"obj": "window.navigator", "prop": "appVersion", "value": appVersion},
                {"obj": "window.navigator", "prop": "buildID", "value": buildID},
                {"obj": "window.navigator", "prop": "appMinorVersion", "value": appMinorVersion},
                {"obj": "window.navigator", "prop": "buildid", "value": buildid},
                {"obj": "window.navigator", "prop": "cpuClass", "value": cpuClass},
                {"obj": "window.navigator", "prop": "deviceMemory", "value": deviceMemory},
                {"obj": "window.navigator", "prop": "appName", "value": appNamet},
                {"obj": "window.navigator", "prop": "appCodeName", "value": appCodeName},
                {"obj": "window.navigator", "prop": "product", "value": product},
                {"obj": "window.navigator", "prop": "plugins", "value": plugins}
            ],
            "screen": [
                {"obj": "window.screen", "prop": "availWidth", "value": availWidth},
                {"obj": "window.screen", "prop": "availHeight", "value": availHeight},
                {"obj": "window.screen", "prop": "availTop", "value": availTop},
                {"obj": "window.screen", "prop": "availLeft", "value": availLeft},
                {"obj": "window.screen", "prop": "width", "value": width},
                {"obj": "window.screen", "prop": "height", "value": height},
                {"obj": "window.screen", "prop": "colorDepth", "value": colorDepth},
                {"obj": "window.screen", "prop": "pixelDepth", "value": pixelDepth},
                {"obj": "window.document.documentElement", "prop": "clientWidth", "value": clientWidth},
                {"obj": "window.document.documentElement", "prop": "clientHeight", "value": clientHeight}
            ],
            "lang": [
                {"obj": "window.navigator", "prop": "language", "value": language},
                {"obj": "window.navigator", "prop": "languages", "value": languages}
            ]
        };


        
        var _oldFF = false;
        if (properties.nav) {
            var navUA = properties.nav.find(p => p.prop == "userAgent");
            if (navUA) {
                _oldFF = /60.0/.test(navUA.value);
            }
        } else {
            _oldFF = /60.0/.test(navigator.userAgent);
        }

        
        (function (props) {
            let override = ((window, injection) => {

                              

                for (var k in injection) {
                    injection[k].forEach(i => {
                        if (i.obj == "window") {
                            window[i.prop] = i.value;
                        } else {
                            if (i.value == "undef") {
                                i.value = undefined;
                            }

                            Object.defineProperty(i.obj.split('.').reduce((p, c) => p && p[c] || null, window), i.prop, {
                                configurable: true,
                                value: i.value
                            });
                        }
                    });
                }
            });

            
            let {name, ...bypassProps} = props;

            
            
            override(window, props);

            
            let observer = new MutationObserver((mutations) => {
                for (let mutation of mutations) {
                    for (let node of mutation.addedNodes) {
                        if (typeof (node.contentWindow) !== "undefined"
                            && node.contentWindow !== null
                            && typeof (node.contentWindow.navigator) !== "undefined") {
                            override(node.contentWindow, props);
                        }
                    }
                }
            });

            observer.observe(document.documentElement, {
                childList: true,
                subtree: true
            });
        })(properties);


    } + ')();';

if (JSON.parse(response) === null) {
    return;
} else {
    var script = document.createElement('script');
    script.textContent = `const responseStr = '${response}'; \n ` + scriptCode;
    (document.head || document.documentElement).appendChild(script);
    script.remove();
}
});

chrome.runtime.onMessage.addListener(listener);
