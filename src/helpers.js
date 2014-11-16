define(["exports"], function (exports) {
  "use strict";

  /**
   * Misc helpers
   */

  var Helpers = {
    isIE: function () {
      return (/msie|MSIE/).test(navigator.userAgent);
    }
  };

  exports.Helpers = Helpers;
});