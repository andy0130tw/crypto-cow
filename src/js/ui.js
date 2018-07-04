import {MDCTemporaryDrawer} from '@material/drawer';
import {MDCRipple}          from '@material/ripple';
import {MDCDialog}          from '@material/dialog';
import {MDCTextField}       from '@material/textfield';

let drawer = new MDCTemporaryDrawer(document.querySelector('.mdc-drawer--temporary'));

let menuButton = document.getElementById('menuButton');
let menuButtonRipple = new MDCRipple(menuButton);
menuButtonRipple.unbounded = true;


const buySellDialog = new MDCDialog(document.getElementById('my-mdc-dialog'));

menuButton.disabled = false;
menuButton.addEventListener('click', () => {
    drawer.open = true;
});

document.getElementById('menuBuy').addEventListener('click', () => {
    buySellDialog.show();
});

const buySellEthWrapper = new MDCTextField(document.getElementById('buySellEthWrapper'));
const buySellCowWrapper = new MDCTextField(document.getElementById('buySellCowWrapper'));

export default {
  drawer,
  menuButton,
  buySellDialog
};
