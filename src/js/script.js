import * as PIXI from 'pixi.js';
import CountUp from 'countup.js';
import FontFaceObserver from 'fontfaceobserver';

import ui from './ui';
import utils from './utils';
import { addrContract, etherscanDomain } from './constants';

PIXI.utils.skipHello();
let app = new PIXI.Application({
  width: window.innerWidth,
  height: window.innerHeight,
  backgroundColor: 0x7AC654
});

document.body.appendChild(app.view);

let stage = new PIXI.Container();
let topStage = new PIXI.Container();

let cowAreaWidth = window.innerWidth;
let cowAreaHeight = window.innerHeight;

function setupStage() {
  let texture = PIXI.Texture.fromFrame('grass');

  let tilingSprite = new PIXI.extras.TilingSprite(
      texture,
      app.screen.width,
      app.screen.height);

  let tileScale = 0.15;
  tilingSprite.tileScale.x = tileScale;
  tilingSprite.tileScale.y = tileScale;

  app.stage.addChild(tilingSprite);
  app.stage.addChild(stage);
  app.stage.addChild(topStage);

  window.addEventListener('resize', () => {
    app.renderer.resize(window.innerWidth, window.innerHeight);

    tilingSprite.width = app.screen.width;
    tilingSprite.height = app.screen.height;

    let stageScale = Math.min(window.innerWidth / cowAreaWidth, window.innerHeight / cowAreaHeight);

    stage.x = (window.innerWidth - cowAreaWidth * stageScale) / 2;
    stage.y = (window.innerHeight - cowAreaHeight * stageScale) / 2;

    stage.scale.x = stageScale;
    stage.scale.y = stageScale;
  });

  window.dispatchEvent(new Event('resize'));
}

let cows = [];

function assetsLoaded() {
  function produceCow(flavor) {
    let frames = [ 'cow-2', 'cow-3', 'cow-4', 'cow-3' ];
    // if (flavor) {
    //   frames = [ 'cow-1b', 'cow-2b' ];
    // }
    let cowInst = new PIXI.extras.AnimatedSprite.fromFrames(frames);

    cowInst.x = (0.04 + Math.random() * 0.92) * cowAreaWidth;
    cowInst.y = (0.08 + Math.random() * 0.84) * cowAreaHeight;

    let sz = 1 + 0.3 * Math.pow(cowInst.y / app.screen.height, 2);
    let dir = (Math.random() >= 0.5 ? 1 : -1);
    let spd = (Math.random() + 1);

    cowInst.isWalking = true;
    // probabilities of walk->stop & stop->walk
    cowInst.transProb = [Math.random() * 0.1, Math.random() * 0.1 + 0.1];
    cowInst.period = Math.random();
    cowInst.dir = dir;
    cowInst.scale.x = sz * .3 * dir;
    cowInst.scale.y = sz * .3;
    cowInst.anchor.set(0.5);
    cowInst.animationSpeed = 0.05 * spd;
    cowInst.moveSpeed = 0.8 * spd;

    return cowInst;
  }

  let elemContractAddress = document.getElementById('contractAddress');
  elemContractAddress.href = `https://${etherscanDomain}/address/${addrContract}`;

  const ethProvider = utils.getMetaMaskProvider();

  let textScale = 1;
  if (window.innerWidth < 800) {
    textScale = 0.4;
  }

  let textStyleFatal = new PIXI.TextStyle({
      fontFamily: 'Philosopher, -apple-system, Roboto, Helvetica, sans-serif',
      fontSize: 64 * textScale,
      fill: ['#f1f2f3', '#ff8a80'], // gradient
      stroke: '#222',
      lineJoin: 'bevel',
      lineHeight: 90 * textScale,
      fillGradientStops: [0.29, 0.71],
      align: 'center',
      strokeThickness: 5 * textScale,
      dropShadow: true,
      dropShadowColor: '#333333aa',
      dropShadowBlur: 10 * textScale,
      dropShadowAngle: Math.PI / 4,
      dropShadowDistance: 6 * textScale,
      wordWrap: true,
      wordWrapWidth: window.innerWidth
    });

  // loading phase ends
  document.body.classList.remove('loading');
  document.body.classList.add('complete');

  if (ethProvider == null) {
    let richText = new PIXI.Text('No Web3 detected.\nYou should install MetaMask to see cows!', textStyleFatal);

    richText.x = app.screen.width / 2;
    richText.y = app.screen.height / 2;
    richText.anchor.set(0.5);
    topStage.addChild(richText);

    return;
  }

  const web3 = utils.getWeb3Instance();

  web3.eth.net.getId()
    .then(netId => {
      switch (netId) {
      case  1: return [netId, 'mainnet'];
      case  3: return [netId, 'testnet (Ropsten)'];
      case  4: return [netId, 'testnet (Rinkeby)'];
      case 42: return [netId, 'testnet (Kovan)'];
      default: return [netId, 'unknown'];
      }
    })
    .then(([netId, netName]) => {
      if (netId != 1) {  // main net
        let richText = new PIXI.Text(`The contract is deployed on main net.\nPlease switch the network and refresh.`, textStyleFatal);

        richText.x = app.screen.width / 2;
        richText.y = app.screen.height / 2;
        richText.anchor.set(0.5);
        app.stage.addChild(richText);

        return Promise.reject(null);
      }

      return web3.eth.getAccounts();
    })
    .then(accList => {
      if (accList[0] == null) {
        let richText = new PIXI.Text('No wallet address detected.\nYou may need to unlock your account, and refresh.', textStyleFatal);

        richText.x = app.screen.width / 2;
        richText.y = app.screen.height / 2;
        richText.anchor.set(0.5);
        topStage.addChild(richText);

        return Promise.reject(null);
      }

      let elemWalletAddress = document.getElementById('walletAddress');
      web3.eth.defaultAccount = accList[0];

      let accountTruncator = s => s.slice(0, 10) + '…' + s.slice(-8);
      elemWalletAddress.textContent = accountTruncator(web3.eth.defaultAccount);

      let accChangeWatcher = setInterval(() => {
        web3.eth.getAccounts().then(acc => {
          if (!acc || acc[0] != web3.eth.defaultAccount) {
            console.log('acc change detected');
            elemWalletAddress.textContent = '---';
            clearInterval(accChangeWatcher);
            location.reload();
          }
        });
      }, 500);

      return utils.getContract(addrContract);
    })
    .then(contract => {
      return contract.methods.balanceOf(web3.eth.defaultAccount).call();
    })
    .then(tokBal => {
      const tokThershold = 1e-4;
      let tokBalInDecimal = parseFloat(web3.utils.fromWei(tokBal));

      let renderingCows = Math.floor(tokBalInDecimal);
      let tokBalFraction = tokBalInDecimal - renderingCows;

      if (tokBalInDecimal <= tokThershold) {
        // give 3 free cows for previewing
        renderingCows = 3.0;

        let textScale = 1;
        if (window.innerWidth < 800) {
          textScale = 0.6;
        }

        let tStyle = new PIXI.TextStyle({
          fontFamily: '-apple-system, Roboto, Helvetica, sans-serif',
          fontWeight: 'bold',
          fontSize: 72 * textScale,
          align: 'center',
          wordWrap: true,
          wordWrapWidth: window.innerWidth
        });

        let richText = new PIXI.Text('You have no cows :(\n(These 3 cows are for previewing)', tStyle);
        richText.rotation = -Math.PI / 36;
        richText.alpha = 0.3;
        richText.x = app.screen.width / 2;
        richText.y = app.screen.height / 2;
        richText.anchor.set(0.5);
        topStage.addChild(richText);
      }


      // capped at 300
      if (tokBalInDecimal > 300) {
        renderingCows = 300;
        tokBalFraction = 0;
      }

      // eth addr is 40-char; 40 * 8 > 300
      let no = 0;
      for (let i = 0; i < renderingCows; i += 16) {
        for (let j = 0; j < 16 && i + j < renderingCows; j++) {
          let cow = produceCow(parseInt(web3.eth.defaultAccount[no + 2], 16) == j);
          // console.log('j, no, addr[no], isFlavor?',
          //             j,
          //             no,
          //             parseInt(web3.eth.defaultAccount[no + 2], 16),
          //             parseInt(web3.eth.defaultAccount[no + 2], 16) == j);
          cows.push(cow);
        }
        no++;
      }

      if (tokBalFraction > tokThershold) {
        let cowAlpha = produceCow();
        cowAlpha.alpha = tokBalFraction;
        cows.push(cowAlpha);
      }

      cows.sort((a, b) => {
        return a.y - b.y;
      });

      cows.forEach(cow => {
        stage.addChild(cow);
        cow.play();
      });

      let animTokBal = new CountUp('tokenBalance', 0, tokBalInDecimal, 2, 0.5, {
        useEasing: true,
        useGrouping: true
      });

      if (!animTokBal.error) {
        animTokBal.start();
      } else {
        console.error(animTokBal.error);
      }
    })
    .catch(err => console.log(err));
}

let fontLoaderPromises = [
  ['Philosopher', null, 2000],
  ['Fira Sans', null, 2000]
].map(([s, opt, t]) => ((new FontFaceObserver(s)).load(opt, t)));


Promise.all(fontLoaderPromises)
.catch(fontspec => {
  // ignore the error, actually
  console.warn(`Failed to load webfont "${fontspec.family}" in time:`, fontspec);
})
.then(() => {
  PIXI.loader
    .add('cow-2', 'assets/cow-2.png')
    .add('cow-3', 'assets/cow-3.png')
    .add('cow-4', 'assets/cow-4.png')
    .load(assetsLoaded);
});

let stageLoader = new PIXI.loaders.Loader();

stageLoader
  .add('grass', 'assets/grass.jpg')
  .load(setupStage);

app.ticker.add(() => {
  cows.forEach(cow => {
    cow.period += 0.01 * cow.moveSpeed;

    if (cow.period > 1) {
      cow.period -= 1;
      // decide the next state
      let prob = Math.random();

      if (cow.isWalking && prob <= cow.transProb[0]) {
        cow.isWalking = false;
        cow.gotoAndStop(1);
      } else if (!cow.isWalking && prob <= cow.transProb[1]) {
        cow.isWalking = true;
        cow.play();
      }

      // randomly determine new direction
      if (cow.isWalking && prob <= 0.2) {
        cow.dir *= -1;
        cow.scale.x *= -1;
      }
    }

    if (cow.x < 0 && cow.dir == 1) {
      cow.dir = -1;
      cow.scale.x *= -1;
    } else if (cow.x > cowAreaWidth && cow.dir == -1) {
      cow.dir = 1;
      cow.scale.x *= -1;
    }

    if (cow.isWalking) {
      cow.x += -cow.dir * cow.moveSpeed * (Math.sin(cow.period * 6.28) * 0.4 + 1);
    }

  });
});
