
/* global Deck */

var prefix = Deck.prefix

var transform = prefix('transform')

var translate = Deck.translate
document.getElementById("hitme").addEventListener("click", hitme);
var $container = document.getElementById('container')
var $phand= document.getElementById('playerHand')
var $lphand= document.getElementById('leftPlayerHand')
var $rphand= document.getElementById('rightPlayerHand')
var $tphand= document.getElementById('topPlayerHand')
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

var deckone = deck.cards.splice(0,2);
var decktwo = deck.cards.splice(0,2);
var deckthree = deck.cards.splice(0,2);
var deckfour = deck.cards.splice(0,2);
deck.mount($container);
var sum=0;
var i=0;
while(i<2)
{
  deckone[i].mount($phand);
  deckone[i].enableDragging();
  deckone[i].enableFlipping();
  sum+=deckone[i].rank;
  console.log(sum );
  i++;
}
i=0;
while(i<2)
{
  decktwo[i].mount($lphand);
  i++;
}
i=0;
while(i<2)
{
  deckthree[i].mount($rphand);
  i++;
}
i=0;
while(i<2)
{
  deckfour[i].mount($tphand);
  i++;
}
function hitme()
{
  var len=deckone.length;
  deckone[len]= deck.cards.splice(0,1);
  deckone[len][0].mount($phand);
  deckone[len][0].enableDragging();
  deckone[len][0].enableFlipping();

  
}