import {MDCTemporaryDrawer} from '@material/drawer';

let drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));
document.getElementById('menuButton').addEventListener('click', () => {
    drawer.open = true;
});

export default {
  drawer: drawer
};
