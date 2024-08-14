// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    "postcss-import": {},
    "postcss-url": {},
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {}
  }
}
var jsontext = encodeURIComponent('{"functionname":"stateOfNutrition","title":"2","year":"3"}');
this.$http.get("http://127.0.0.1:8000/webtest/?jsontext="+jsontext).then(response => {
       let data=response.data
  })
