(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({"C:\\_Projects_\\cloudnews\\assets\\js\\global.js":[function(require,module,exports){
(function (global){
"use strict";

var _global = require("./modules/global");

var _global2 = _interopRequireDefault(_global);

var _HOME = require("./modules/HOME");

var _HOME2 = _interopRequireDefault(_HOME);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.body.className += 'ontouchstart' in window ? 'touch' : 'no-touch';

var init = function init() {},
    load = function load() {},
    scroll = function scroll() {};

if (global.vars !== undefined) {
    switch (global.vars.page) {
        case 'home_page':
            init = _HOME2.default.init.bind(_HOME2.default);
            break;
    }
}

$(document).ready(_global2.default.init(), init());

// $(window).scroll(GLOBAL.scroll);
//
// $(window).resize(GLOBAL.resize);
//
// $(window).on('load', ()=>{
//     GLOBAL.load();
//     load();
// });

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./modules/HOME":"C:\\_Projects_\\cloudnews\\assets\\js\\modules\\HOME.js","./modules/global":"C:\\_Projects_\\cloudnews\\assets\\js\\modules\\global.js"}],"C:\\_Projects_\\cloudnews\\assets\\js\\modules\\HOME.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    init: function init() {
        console.log('home init');
    }
};

},{}],"C:\\_Projects_\\cloudnews\\assets\\js\\modules\\global.js":[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    init: function init() {
        console.log('global init');
    }
};

},{}]},{},["C:\\_Projects_\\cloudnews\\assets\\js\\global.js"])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhc3NldHMvanMvZ2xvYmFsLmpzIiwiYXNzZXRzL2pzL21vZHVsZXMvSE9NRS5qcyIsImFzc2V0cy9qcy9tb2R1bGVzL2dsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztBQ0FBOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVMsSUFBVCxDQUFjLFNBQWQsSUFBNEIsa0JBQWtCLE1BQW5CLEdBQTZCLE9BQTdCLEdBQXVDLFVBQWxFOztBQUVBLElBQUksT0FBTyxnQkFBVSxDQUFFLENBQXZCO0FBQUEsSUFDSSxPQUFPLFNBQVAsSUFBTyxHQUFVLENBQUUsQ0FEdkI7QUFBQSxJQUVJLFNBQVMsU0FBVCxNQUFTLEdBQVUsQ0FBRSxDQUZ6Qjs7QUFJQSxJQUFHLE9BQU8sSUFBUCxLQUFnQixTQUFuQixFQUE4QjtBQUMxQixZQUFRLE9BQU8sSUFBUCxDQUFZLElBQXBCO0FBQ0ksYUFBSyxXQUFMO0FBQ0ksbUJBQU8sZUFBSyxJQUFMLENBQVUsSUFBVixDQUFlLGNBQWYsQ0FBUDtBQUNBO0FBSFI7QUFLSDs7QUFFRCxFQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLGlCQUFPLElBQVAsRUFBbEIsRUFBaUMsTUFBakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztrQkMxQmU7QUFDWCxRQURXLGtCQUNMO0FBQ0YsZ0JBQVEsR0FBUixDQUFZLFdBQVo7QUFDSDtBQUhVLEM7Ozs7Ozs7O2tCQ0FBO0FBQ1gsUUFEVyxrQkFDTDtBQUNGLGdCQUFRLEdBQVIsQ0FBWSxhQUFaO0FBQ0g7QUFIVSxDIiwiZmlsZSI6Imdsb2JhbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJpbXBvcnQgR0xPQkFMIGZyb20gXCIuL21vZHVsZXMvZ2xvYmFsXCI7XG5pbXBvcnQgSE9NRSBmcm9tIFwiLi9tb2R1bGVzL0hPTUVcIjtcblxuZG9jdW1lbnQuYm9keS5jbGFzc05hbWUgKz0gKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgPyAndG91Y2gnIDogJ25vLXRvdWNoJztcblxubGV0IGluaXQgPSBmdW5jdGlvbigpe30sXG4gICAgbG9hZCA9IGZ1bmN0aW9uKCl7fSxcbiAgICBzY3JvbGwgPSBmdW5jdGlvbigpe307XG5cbmlmKGdsb2JhbC52YXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICBzd2l0Y2ggKGdsb2JhbC52YXJzLnBhZ2UpIHtcbiAgICAgICAgY2FzZSAnaG9tZV9wYWdlJzpcbiAgICAgICAgICAgIGluaXQgPSBIT01FLmluaXQuYmluZChIT01FKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbn1cblxuJChkb2N1bWVudCkucmVhZHkoR0xPQkFMLmluaXQoKSwgaW5pdCgpKTtcblxuLy8gJCh3aW5kb3cpLnNjcm9sbChHTE9CQUwuc2Nyb2xsKTtcbi8vXG4vLyAkKHdpbmRvdykucmVzaXplKEdMT0JBTC5yZXNpemUpO1xuLy9cbi8vICQod2luZG93KS5vbignbG9hZCcsICgpPT57XG4vLyAgICAgR0xPQkFMLmxvYWQoKTtcbi8vICAgICBsb2FkKCk7XG4vLyB9KTsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnaG9tZSBpbml0Jyk7XG4gICAgfSxcbn07XG4iLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgaW5pdCgpe1xuICAgICAgICBjb25zb2xlLmxvZygnZ2xvYmFsIGluaXQnKTtcbiAgICB9XG59OyJdLCJwcmVFeGlzdGluZ0NvbW1lbnQiOiIvLyMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSnpiM1Z5WTJWeklqcGJJbTV2WkdWZmJXOWtkV3hsY3k5aWNtOTNjMlZ5TFhCaFkyc3ZYM0J5Wld4MVpHVXVhbk1pTENKaGMzTmxkSE12YW5NdloyeHZZbUZzTG1weklpd2lZWE56WlhSekwycHpMMjF2WkhWc1pYTXZTRTlOUlM1cWN5SXNJbUZ6YzJWMGN5OXFjeTl0YjJSMWJHVnpMMmRzYjJKaGJDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN096dEJRMEZCT3pzN08wRkJRMEU3T3pzN096dEJRVVZCTEZOQlFWTXNTVUZCVkN4RFFVRmpMRk5CUVdRc1NVRkJORUlzYTBKQlFXdENMRTFCUVc1Q0xFZEJRVFpDTEU5QlFUZENMRWRCUVhWRExGVkJRV3hGT3p0QlFVVkJMRWxCUVVrc1QwRkJUeXhuUWtGQlZTeERRVUZGTEVOQlFYWkNPMEZCUVVFc1NVRkRTU3hQUVVGUExGTkJRVkFzU1VGQlR5eEhRVUZWTEVOQlFVVXNRMEZFZGtJN1FVRkJRU3hKUVVWSkxGTkJRVk1zVTBGQlZDeE5RVUZUTEVkQlFWVXNRMEZCUlN4RFFVWjZRanM3UVVGSlFTeEpRVUZITEU5QlFVOHNTVUZCVUN4TFFVRm5RaXhUUVVGdVFpeEZRVUU0UWp0QlFVTXhRaXhaUVVGUkxFOUJRVThzU1VGQlVDeERRVUZaTEVsQlFYQkNPMEZCUTBrc1lVRkJTeXhYUVVGTU8wRkJRMGtzYlVKQlFVOHNaVUZCU3l4SlFVRk1MRU5CUVZVc1NVRkJWaXhEUVVGbExHTkJRV1lzUTBGQlVEdEJRVU5CTzBGQlNGSTdRVUZMU0RzN1FVRkZSQ3hGUVVGRkxGRkJRVVlzUlVGQldTeExRVUZhTEVOQlFXdENMR2xDUVVGUExFbEJRVkFzUlVGQmJFSXNSVUZCYVVNc1RVRkJha003TzBGQlJVRTdRVUZEUVR0QlFVTkJPMEZCUTBFN1FVRkRRVHRCUVVOQk8wRkJRMEU3UVVGRFFUczdPenM3T3pzN096dHJRa014UW1VN1FVRkRXQ3hSUVVSWExHdENRVU5NTzBGQlEwWXNaMEpCUVZFc1IwRkJVaXhEUVVGWkxGZEJRVm83UVVGRFNEdEJRVWhWTEVNN096czdPenM3TzJ0Q1EwRkJPMEZCUTFnc1VVRkVWeXhyUWtGRFREdEJRVU5HTEdkQ1FVRlJMRWRCUVZJc1EwRkJXU3hoUVVGYU8wRkJRMGc3UVVGSVZTeERJaXdpWm1sc1pTSTZJbWRsYm1WeVlYUmxaQzVxY3lJc0luTnZkWEpqWlZKdmIzUWlPaUlpTENKemIzVnlZMlZ6UTI5dWRHVnVkQ0k2V3lJb1puVnVZM1JwYjI0b0tYdG1kVzVqZEdsdmJpQnlLR1VzYml4MEtYdG1kVzVqZEdsdmJpQnZLR2tzWmlsN2FXWW9JVzViYVYwcGUybG1LQ0ZsVzJsZEtYdDJZWElnWXoxY0ltWjFibU4wYVc5dVhDSTlQWFI1Y0dWdlppQnlaWEYxYVhKbEppWnlaWEYxYVhKbE8ybG1LQ0ZtSmlaaktYSmxkSFZ5YmlCaktHa3NJVEFwTzJsbUtIVXBjbVYwZFhKdUlIVW9hU3doTUNrN2RtRnlJR0U5Ym1WM0lFVnljbTl5S0Z3aVEyRnVibTkwSUdacGJtUWdiVzlrZFd4bElDZGNJaXRwSzF3aUoxd2lLVHQwYUhKdmR5QmhMbU52WkdVOVhDSk5UMFJWVEVWZlRrOVVYMFpQVlU1RVhDSXNZWDEyWVhJZ2NEMXVXMmxkUFh0bGVIQnZjblJ6T250OWZUdGxXMmxkV3pCZExtTmhiR3dvY0M1bGVIQnZjblJ6TEdaMWJtTjBhVzl1S0hJcGUzWmhjaUJ1UFdWYmFWMWJNVjFiY2wwN2NtVjBkWEp1SUc4b2JueDhjaWw5TEhBc2NDNWxlSEJ2Y25SekxISXNaU3h1TEhRcGZYSmxkSFZ5YmlCdVcybGRMbVY0Y0c5eWRITjlabTl5S0haaGNpQjFQVndpWm5WdVkzUnBiMjVjSWowOWRIbHdaVzltSUhKbGNYVnBjbVVtSm5KbGNYVnBjbVVzYVQwd08yazhkQzVzWlc1bmRHZzdhU3NyS1c4b2RGdHBYU2s3Y21WMGRYSnVJRzk5Y21WMGRYSnVJSEo5S1NncElpd2lhVzF3YjNKMElFZE1UMEpCVENCbWNtOXRJRndpTGk5dGIyUjFiR1Z6TDJkc2IySmhiRndpTzF4dWFXMXdiM0owSUVoUFRVVWdabkp2YlNCY0lpNHZiVzlrZFd4bGN5OUlUMDFGWENJN1hHNWNibVJ2WTNWdFpXNTBMbUp2WkhrdVkyeGhjM05PWVcxbElDczlJQ2duYjI1MGIzVmphSE4wWVhKMEp5QnBiaUIzYVc1a2IzY3BJRDhnSjNSdmRXTm9KeUE2SUNkdWJ5MTBiM1ZqYUNjN1hHNWNibXhsZENCcGJtbDBJRDBnWm5WdVkzUnBiMjRvS1h0OUxGeHVJQ0FnSUd4dllXUWdQU0JtZFc1amRHbHZiaWdwZTMwc1hHNGdJQ0FnYzJOeWIyeHNJRDBnWm5WdVkzUnBiMjRvS1h0OU8xeHVYRzVwWmlobmJHOWlZV3d1ZG1GeWN5QWhQVDBnZFc1a1pXWnBibVZrS1NCN1hHNGdJQ0FnYzNkcGRHTm9JQ2huYkc5aVlXd3VkbUZ5Y3k1d1lXZGxLU0I3WEc0Z0lDQWdJQ0FnSUdOaGMyVWdKMmh2YldWZmNHRm5aU2M2WEc0Z0lDQWdJQ0FnSUNBZ0lDQnBibWwwSUQwZ1NFOU5SUzVwYm1sMExtSnBibVFvU0U5TlJTazdYRzRnSUNBZ0lDQWdJQ0FnSUNCaWNtVmhhenRjYmlBZ0lDQjlYRzU5WEc1Y2JpUW9aRzlqZFcxbGJuUXBMbkpsWVdSNUtFZE1UMEpCVEM1cGJtbDBLQ2tzSUdsdWFYUW9LU2s3WEc1Y2JpOHZJQ1FvZDJsdVpHOTNLUzV6WTNKdmJHd29SMHhQUWtGTUxuTmpjbTlzYkNrN1hHNHZMMXh1THk4Z0pDaDNhVzVrYjNjcExuSmxjMmw2WlNoSFRFOUNRVXd1Y21WemFYcGxLVHRjYmk4dlhHNHZMeUFrS0hkcGJtUnZkeWt1YjI0b0oyeHZZV1FuTENBb0tUMCtlMXh1THk4Z0lDQWdJRWRNVDBKQlRDNXNiMkZrS0NrN1hHNHZMeUFnSUNBZ2JHOWhaQ2dwTzF4dUx5OGdmU2s3SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR2x1YVhRb0tYdGNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvSjJodmJXVWdhVzVwZENjcE8xeHVJQ0FnSUgwc1hHNTlPMXh1SWl3aVpYaHdiM0owSUdSbFptRjFiSFFnZTF4dUlDQWdJR2x1YVhRb0tYdGNiaUFnSUNBZ0lDQWdZMjl1YzI5c1pTNXNiMmNvSjJkc2IySmhiQ0JwYm1sMEp5azdYRzRnSUNBZ2ZWeHVmVHNpWFgwPSJ9
