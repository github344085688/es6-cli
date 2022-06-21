/**
 * Created by f on 2022/6/20.
 */
import layout from './layout/layout.js'
const App = function(){
  var dom= document.getElementById('app');
  var Layout = new layout();
  dom.innerHTML = Layout.tpl;
}

new App();
