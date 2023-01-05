chrome.runtime.sendMessage({method: "current_profile"}, function (response) {
  if (JSON.parse(response) === null) {
      return;
  } else {          
    // iframe.contentWindow
    if (
      window !== top &&
      location.href === 'about:blank'
    ) {
      try {
        top.document;

        const script = document.createElement('script');
        script.textContent = `{
          const nav = top.navigator;
          const fscreen = top.screen

          navigator.__defineGetter__('userAgent', () => nav.userAgentConst);
          navigator.__defineGetter__('appVersion', () => nav.appVersion);
          navigator.__defineGetter__('platform', () => nav.platform);
          navigator.__defineGetter__('vendor', () => nav.vendor);
          navigator.__defineGetter__('productSub', () => nav.productSub);
          navigator.__defineGetter__('hardwareConcurrency', () => nav.hardwareConcurrency);
          navigator.__defineGetter__('vendorSub', () => nav.vendorSub);
          navigator.__defineGetter__('cpuClass', () => nav.cpuClass);
          navigator.__defineGetter__('deviceMemory', () => nav.deviceMemory);
          navigator.__defineGetter__('appName', () => nav.appName);
          navigator.__defineGetter__('appCodeName', () => nav.appCodeName);
          navigator.__defineGetter__('product', () => nav.product);
          navigator.__defineGetter__('language', () => nav.language);
          navigator.__defineGetter__('languages', () => nav.languages);

          if (nav.userAgent.indexOf('Firefox') > -1) {
            navigator.__defineGetter__('buildID', () => nav.buildID);
            navigator.__defineGetter__('oscpu', () => nav.oscpu);
            navigator.__defineGetter__('webdriver', () => false);
          }
          
          screen.__defineGetter__('availWidth', () => fscreen.availWidth);
          screen.__defineGetter__('availHeight', () => fscreen.availHeight);
          screen.__defineGetter__('availTop', () => fscreen.availTop);
          screen.__defineGetter__('availLeft', () => fscreen.availLeft);
          screen.__defineGetter__('width', () => fscreen.width);
          screen.__defineGetter__('height', () => fscreen.height);
          screen.__defineGetter__('colorDepth', () => fscreen.colorDepth);
          screen.__defineGetter__('pixelDepth', () => fscreen.pixelDepth);


          document.documentElement.dataset.adblock = true;
        }`;
        document.documentElement.appendChild(script);
        script.remove();
        // make sure the script is injected
        if (document.documentElement.dataset.adblock !== 'true') {
          document.documentElement.dataset.adblock = true;
          const script = document.createElement('script');
          Object.assign(script, {
            textContent: `
              [...document.querySelectorAll('iframe[sandbox]')]
                .filter(i => i.contentDocument.documentElement.dataset.adblock === 'true')
                .forEach(i => {
                  const nav = i.contentWindow.navigator;
                  const scren = i.contentWindow.screen;

                    nav.__defineGetter__('userAgent', () => navigator.userAgentConst);
                    nav.__defineGetter__('appVersion', () => navigator.appVersion);
                    nav.__defineGetter__('platform', () => navigator.platform);
                    nav.__defineGetter__('vendor', () => navigator.vendor);
                    nav.__defineGetter__('productSub', () => navigator.productSub);
                    nav.__defineGetter__('hardwareConcurrency', () => navigator.hardwareConcurrency);
                    nav.__defineGetter__('vendorSub', () => navigator.vendorSub);
                    nav.__defineGetter__('cpuClass', () => navigator.cpuClass);
                    nav.__defineGetter__('deviceMemory', () => navigator.deviceMemory);
                    nav.__defineGetter__('appName', () => navigator.appName);
                    nav.__defineGetter__('appCodeName', () => navigator.appCodeName);
                    nav.__defineGetter__('product', () => navigator.product);
                    nav.__defineGetter__('language', () => navigator.language);
                    nav.__defineGetter__('languages', () => navigator.languages);
                  if (navigator.userAgent.indexOf('Firefox') > -1) {
                    nav.__defineGetter__('buildID', () => navigator.buildID);
                    nav.__defineGetter__('oscpu', () => navigator.oscpu);
                    nav.__defineGetter__('webdriver', () => false);
                  }
                    scren.__defineGetter__('availWidth', () => screen.availWidth);
                    scren.__defineGetter__('availHeight', () => screen.availHeight);
                    scren.__defineGetter__('availTop', () => screen.availTop);
                    scren.__defineGetter__('availLeft', () => screen.availLeft);
                    scren.__defineGetter__('width', () => screen.width);
                    scren.__defineGetter__('height', () => screen.height);
                    scren.__defineGetter__('colorDepth', () => screen.colorDepth);
                    scren.__defineGetter__('pixelDepth', () => screen.pixelDepth);                              
                });
            `
          });
          top.document.documentElement.appendChild(script);
          script.remove();
        }
        delete document.documentElement.dataset.adblock;
      }
      catch (e) {}
    }
  }
});