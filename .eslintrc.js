{
  "extends": [
    "eslint:recommended",
    "plugin:json/recommended",
    "plugin:prettier/recommended"
  ],
    "env": {
    "es6": true,
      "node": true,
        "jest": true
  },
  "rules": {
    "comma-dangle": [
      "error",
      {
        "arrays": "always-multiline",
        "objects": "always-multiline",
        "imports": "always-multiline",
        "exports": "always-multiline",
        "functions": "never"
      }
    ]
  },
  "parserOptions": {
    "ecmaVersion": 2020,
      "sourceType": "module"
  }
}
