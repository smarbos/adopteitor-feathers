module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "rules": {
    "camelcase": 1,
    "complexity": [2, 5],
    "comma-spacing": 1,
    "consistent-return": 0,
    "eol-last": 1,
    "eqeqeq": [2, "smart"],
    "indent": [1, 2],
    "max-depth": [1, 2],
    "max-len": [2, 100],
    "max-nested-callbacks": [1, 1],
    "max-params": [1, 4],
    "max-statements": [1, 15],
    "no-use-before-define": [2, "nofunc"],
    "no-multi-spaces": 1,
    "no-process-exit": 0,
    "no-trailing-spaces": 1,
    "no-underscore-dangle": 0,
    "no-unused-vars": 1,
    "space-infix-ops": 1,
    "quotes": [1, "single"],
    "semi": [1, "always"],
    "semi-spacing": 1,
    "strict": [2, "global"],
    "yoda": [1, "never"]
  },
  "globals": {
    "describe": true,
    "it": true,
    "before": true,
    "beforeEach": true,
    "after": true,
    "afterEach": true
  }
};
