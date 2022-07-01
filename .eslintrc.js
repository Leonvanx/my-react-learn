'use strict';

module.exports ={
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "react-hooks/exhaustive-deps": ["warn", {
      "additionalHooks": "(useMyCustomHook|useMyOtherCustomHook)"
    }]
  }
};

