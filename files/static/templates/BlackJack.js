
/* global Deck */

var prefix = Deck.prefix

var transform = prefix('transform')

var translate = Deck.translate

document.getElementById("hitme").addEventListener("click", hitme);
document.getElementById("deal").addEventListener("click", deal);
document.getElementById("stand").addEventListener("click", stand);
var $container = document.getElementById('container')
var $phand= document.getElementById('playerHand')
var $lphand= document.getElementById('leftPlayerHand')
var $rphand= document.getElementById('rightPlayerHand')
var $tphand= document.getElementById('topPlayerHand')
$('hitme').attr('disabled','disabled');
var deck = Deck()

deck.cards.forEach(function (card, i) {
  
  function onTouch () {
    var card
    card = Deck.Card(52 + j)
    card.mount(deck.$el)
    card.$el.style[transform] = 'scale(0)'
    card.setSide('front')
    card.enableDragging()
    card.enableFlipping()
   
  }
})

function startWinning () {
  var $winningDeck = document.createElement('div')
  $winningDeck.classList.add('deck')

  $winningDeck.style[transform] = translate(Math.random() * window.innerWidth - window.innerWidth / 2 + 'px', Math.random() * window.innerHeight - window.innerHeight / 2 + 'px')

  $container.appendChild($winningDeck)

  var side = Math.floor(Math.random() * 2) ? 'front' : 'back'

  for (var i = 0; i < 55; i++) {
    addWinningCard($winningDeck, i, side)
  }

  setTimeout(startWinning, Math.round(Math.random() * 1000))
}

function addWinningCard ($deck, i, side) {
  var card = Deck.Card(54 - i)
  var delay = (55 - i) * 20
  var animationFrames = Deck.animationFrames
  var ease = Deck.ease

  card.enableFlipping()

  if (side === 'front') {
    card.setSide('front')
  } else {
    card.setSide('back')
  }

  card.mount($deck)
  card.$el.style.display = 'none'

  var xStart = 0
  var yStart = 0
  var xDiff = -500
  var yDiff = 500

  animationFrames(delay, 1000)
    .start(function () {
      card.x = 0
      card.y = 0
      card.$el.style.display = ''
    })
    .progress(function (t) {
      var tx = t
      var ty = ease.cubicIn(t)
      card.x = xStart + xDiff * tx
      card.y = yStart + yDiff * ty
      card.$el.style[transform] = translate(card.x + 'px', card.y + 'px')
    })
    .end(function () {
      card.unmount()
    })
}





deck.intro();
deck.shuffle();

deck.mount($container);
var deckone;
var decktwo ;
var deckthree;
var deckfour;

var sum=0;
var altsum=0
var rightsum=0;
var altright=0;
var leftsum=0;
var altleft=0;
var topsum=0;
var alttop=0;
var i=0;
var standright=0;
var standleft=0;
var standtop=0;
function deal()
{
  deckone= deck.cards.splice(0,2);
  deckone[0].mount($phand);
  deckone[0].enableDragging();
  deckone[0].enableFlipping();
  deckone[1].mount($phand);
  deckone[1].enableDragging();
  deckone[1].enableFlipping();
  var of=deckone[0].rank
  if(of>10)
  {
    of=10;
  }
  sum+=of;
  if(of==1)
  {
    of=11;
  }
  altsum+=of;

  of=deckone[1].rank
  if(of>10)
  {
    of=10;
  }
  sum+=of;
  if(of==1)
  {
    of=11;
  }
  altsum+=of;
  decktwo= deck.cards.splice(0,2);
  decktwo[0].mount($lphand);
  decktwo[1].mount($lphand);
  of=decktwo[0].rank
  if(of>10)
  {
    of=10;
  }
  leftsum+=of;
  if(of==1)
  {
    of=11;
  }
  altleft+=of;

  of=decktwo[1].rank
  if(of>10)
  {
    of=10;
  }
  leftsum+=of;
  if(of==1)
  {
    of=11;
  }
  altleft+=of;
  deckthree= deck.cards.splice(0,2);
  deckthree[0].mount($rphand);
  deckthree[1].mount($rphand);
  of=deckthree[0].rank
  if(of>10)
  {
    of=10;
  }
  rightsum+=of;
  if(of==1)
  {
    of=11;
  }
  altright+=of;

  of=deckthree[1].rank
  if(of>10)
  {
    of=10;
  }
  rightsum+=of;
  if(of==1)
  {
    of=11;
  }
  altright+=of;
  deckfour= deck.cards.splice(0,2);
  deckfour[0].mount($tphand);
  deckfour[1].mount($tphand);
  var of=deckfour[0].rank
  if(of>10)
  {
    of=10;
  }
  topsum+=of;
  if(of==1)
  {
    of=11;
  }
  alttop+=of;

  of=deckfour[1].rank
  if(of>10)
  {
    of=10;
  }
  topsum+=of;
  if(of==1)
  {
    of=11;
  }
  alttop+=of;
  $('deal').attr('disabled','disabled');
  $('hitme').removeAttr('disabled');
}
function hitme()
{
  var len=deckone.length;
  deckone[len]= deck.cards.splice(0,1);
  deckone[len][0].mount($phand);
  deckone[len][0].enableDragging();
  deckone[len][0].enableFlipping();
  var oof=deckone[len][0].rank;
  if(oof>10)
  {
    oof=10;
  }
  sum+=oof
  if(oof==1)
  {
    oof=11;
  }
  altsum+=oof;

  console.log(altsum)
  if(sum>21)
  {
    document.getElementById("stand").click();
  }
  console.log(sum);
  if(rightsum>15 && standright==0 && altright!=21)
  {
    if(rightsum<21)
    {
       len=deckthree.length;
      deckthree[len]= deck.cards.splice(0,1);
      deckthree[len][0].mount($rphand);
       oof=deckthree[len][0].rank;
      if(oof>10)
      {
        oof=10;
      }
      rightsum+=oof
      if(oof==1)
      {
        oof=11;
      }
      altright+=oof;
       
    }
  }
  else
  {
    if(standright==0)
    {
      standright=1;
    }
  }
  if(leftsum>16 && standleft==0 && altleft!=21)
  {
    if(leftsum<21)
    {
       len=decktwo.length;
      decktwo[len]= deck.cards.splice(0,1);
      decktwo[len][0].mount($lphand);
      decktwo[len][0].enableDragging();
      decktwo[len][0].enableFlipping();
       oof=decktwo[len][0].rank;
      if(oof>10)
      {
        oof=10;
      }
      leftsum+=oof
      if(oof==1)
      {
        oof=11;
      }
      altleft+=oof;
       
    }
  }
  else
  {
    if(standleft==0)
    {
      standleft=1;
    }
  }
  if(topsum>17 && standtop==0 && alttop!=21)
  {
    if(topsum<21)
    {
       len=deckfour.length;
      deckfour[len]= deck.cards.splice(0,1);
      deckfour[len][0].mount($tphand);
      deckfour[len][0].enableDragging();
      deckfour[len][0].enableFlipping();
       oof=deckfour[len][0].rank;
      if(oof>10)
      {
        oof=10;
      }
      topsum+=oof
      if(oof==1)
      {
        oof=11;
      }
      alttop+=oof;
       
    }
  }
  else
  {
    if(standtop==0)
    {
      standtop=1;
    }
  }
}
function stand()
{
  var rsum;
  var lsum;
  var tsum;
  var playersum;
  var pm=0;
  var rm=0;
  var lm=0;
  var tm=0;
  playersum=sum;
  rsum=rightsum;
  lsum=leftsum;
  tsum=topsum;
  if(altsum<22)
  {
    playersum=altsum;
  }
  if(altright<22)
  {
    rsum=altright;
  }
  if(altleft<22)
  {
    lsum=altleft;
  }
  if(alttop<22)
  {
    tsum=alttop;
  }
  pm=playersum;
  tm=tsum;
  rm=rsum;
  lm=lsum;
  if(playersum>21)
  {
    pm=0;
  }
  if(tsum>21)
  {
    tm=0;
  }
  if(rsum>21)
  {
    rm=0;
  }
  if(lsum>21)
  {
    lm=0;
  }
  var win="You lose you loser.";
  if(pm>rm)
  {
    if(pm>lm)
    {
      if(pm>tm)
      {
        win="You win";
      }
    }
  }
  alert("Right Player:"+rsum+"\n"+"Left Player:"+lsum+"\n"+"Top Player:"+tsum+"\n"+"Player:"+playersum+"\n"+win )
  $('deal').attr('disabled','disabled');
  $('hitme').attr('disabled','disabled');
}