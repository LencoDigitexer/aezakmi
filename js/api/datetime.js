chrome.runtime.sendMessage({method: "current_profile"}, function (response) {

var inject = '(' + function (Datetime) {
  var response = JSON.parse(timeResponseStr);
  var gmtRegion = response.sysTimeRegion;
  var dateOffset = response.daylightOffset;
  var o = {"name": gmtRegion, "value": dateOffset};
  var locale = "en";

  var originOffset = new Date();
  originOffset = originOffset.getTimezoneOffset();

  if (response.language_Const1 == "ru-RU") {
    locale = "ru"
  }
  const convertToGMT = function (n) {
    const format = function (v) {return (v < 10 ? '0' : '') + v};
    return (n <= 0 ? '+' : '-') + format(Math.abs(n) / 60 | 0) + format(Math.abs(n) % 60);
  };

  const resolvedOptions = Intl.DateTimeFormat().resolvedOptions();

  // try
  let originalDate = Date;

  // Date = function Date() {
  //   let profileTime = new originalDate();
  //   let profileSeconds = profileTime.getTime() + (originOffset - o.value) * 60 * 1000;
  //   profileTime.setTime(profileSeconds);
  //   return profileTime;
  // }

  Date.parse = originalDate.parse;

  Date.UTC = originalDate.UTC;

  Date.now = function now() {
    let profileTime = new originalDate();
    let profileSeconds = profileTime.getTime() + (originOffset - o.value) * 60 * 1000;
    return profileSeconds;
  }

  Date.prototype = originalDate.prototype;

  const {
    toJSON, getYear, getMonth, getHours, toString, getMinutes, getSeconds, getUTCMonth, getFullYear, getUTCHours,
    getUTCFullYear, getMilliseconds, getTimezoneOffset, getUTCMilliseconds, toLocaleTimeString, toLocaleDateString,
    toISOString, toGMTString, toUTCString, toTimeString, toDateString, getUTCSeconds, getUTCMinutes, toLocaleString,
    getDay, getUTCDate, getUTCDay, getDate
  } = Date.prototype;


  Object.defineProperty(Date.prototype, '_offset', {"configurable": true, get() {return getTimezoneOffset.call(this)}});
  Object.defineProperty(Date.prototype, '_date', {"configurable": true, get() {
    return this._nd !== undefined ? this._nd : new Date(this.getTime() + (this._offset - o.value) * 60 * 1000);
  }});

  Object.defineProperty(Date.prototype, 'toJSON', {"value": function () {return toJSON.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getDay', {"value": function () {return getDay.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getDate', {"value": function () {return getDate.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getYear', {"value": function () {return getYear.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getTimezoneOffset', {"value": function () {return Number(o.value)}});
  Object.defineProperty(Date.prototype, 'getMonth', {"value": function () {return getMonth.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getHours', {"value": function () {return getHours.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getUTCDay', {"value": function () {return getUTCDay.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getUTCDate', {"value": function () {return getUTCDate.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getMinutes', {"value": function () {return getMinutes.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getSeconds', {"value": function () {return getSeconds.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getUTCMonth', {"value": function () {return getUTCMonth.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getUTCHours', {"value": function () {return getUTCHours.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getFullYear', {"value": function () {return getFullYear.call(this._date)}});
  Object.defineProperty(Date.prototype, 'toISOString', {"value": function () {return toISOString.call(this._date)}});
  Object.defineProperty(Date.prototype, 'toGMTString', {"value": function () {return toGMTString.call(this._date)}});
  Object.defineProperty(Date.prototype, 'toUTCString', {"value": function () {return toUTCString.call(this._date)}});
  Object.defineProperty(Date.prototype, 'toDateString', {"value": function () {return toDateString.call(this._date)}});
  Object.defineProperty(Date.prototype, 'toTimeString', {"value": function () {return toTimeString.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getUTCSeconds', {"value": function () {return getUTCSeconds.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getUTCMinutes', {"value": function () {return getUTCMinutes.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getUTCFullYear', {"value": function () {return getUTCFullYear.call(this._date)}});
  Object.defineProperty(Date.prototype, 'toLocaleString', {"value": function () {return toLocaleString.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getMilliseconds', {"value": function () {return getMilliseconds.call(this._date)}});
  Object.defineProperty(Date.prototype, 'getUTCMilliseconds', {"value": function () {return getUTCMilliseconds.call(this._date)}});
  Object.defineProperty(Date.prototype, 'toLocaleTimeString', {"value": function () {return toLocaleTimeString.call(this._date)}});
  Object.defineProperty(Date.prototype, 'toLocaleDateString', {"value": function () {return toLocaleDateString.call(this._date)}});
  Object.defineProperty(Date.prototype, 'toString', {"value": function () {
    return toString.call(this._date).replace(convertToGMT(this._offset), convertToGMT(o.value)).replace(/\(.*\)/, '(' + o.name.replace(/\//g, ' ') + ' Standard Time)');
  }});

  Date.prototype.constructor.now = function now() {
    let profileTime = new Date();
    return Date.parse(profileTime);
  }
  Date.prototype.constructor = function Date() {
    let profileTime = new Date();
    return profileTime;
  }

  var original_Object_getOwnPropertyNames = Object.getOwnPropertyNames;
  Object.prototype.constructor.getOwnPropertyNames = function () {
  if (arguments[0] instanceof Navigator || arguments[0] instanceof Screen) {
      return [];
  } else {
    return original_Object_getOwnPropertyNames(arguments[0]);
  }
}

  Object.defineProperty(Intl.DateTimeFormat.prototype, 'resolvedOptions', {"value": function () {return Object.assign(resolvedOptions, {"timeZone": o.name, "locale": locale})}});

  document.documentElement.dataset.datetimer = true;
} + ')();';


if (JSON.parse(response) === null || JSON.parse(response).disableTimezone) {
  return;
} else {
  var script_1 = document.createElement('script');
  script_1.textContent = `const timeResponseStr = '${response}'; \n ` + inject;
    document.documentElement.appendChild(script_1);
    script_1.remove();

  if (document.documentElement.dataset.datetimer !== "true") {
    var script_2 = document.createElement('script');
    script_2.textContent = `{
      const iframes = window.top.document.querySelectorAll("iframe[sandbox]");
      for (var i = 0; i < iframes.length; i++) {
        if (iframes[i].contentWindow) {
          if (iframes[i].contentWindow.Date.prototype) {
            iframes[i].contentWindow.Date.prototype = Date.prototype;
          }
          if (iframes[i].contentWindow.Intl.DateTimeFormat.prototype) {
            iframes[i].contentWindow.Intl.DateTimeFormat.prototype = Intl.DateTimeFormat.prototype;
          }
        }
      }
    }`;
    window.top.document.documentElement.appendChild(script_2);
    script_2.remove();
  }
}
});