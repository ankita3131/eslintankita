module.exports = {
  plugins: ['my-eslint-plugin','regex','eslint-plugin-json', "eslint-plugin-json-files"],
  //Enables rules that report common problems
  extends: "eslint:recommended",
  
  settings: {
    "import/resolver": {
      "node": {
        "extensions": [".js", ".json"]
      }
  }
},
  rules: {
   "json/*": ["error", "allowComments"],
   "no-unused-vars":0,
    'my-eslint-plugin/no-hardcoded-strings': 'warn'
    
  }
}
