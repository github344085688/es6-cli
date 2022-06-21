/**
 * Created by f on 2022/6/20.
 */
import './layout.scss';
import tpl from './layout.html';
function Layout(){
  return {
    name:'layout',
    tpl:tpl
  }
}
export default Layout;
/*export class  Layout {
  constructor() {
    // this.tpl = tpl;
  }

  get tpl(){
    return tpl;
  }


}
export default new Layout();*/
