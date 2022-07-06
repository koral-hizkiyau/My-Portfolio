
  // Wrap every letter in a span in "Hi,IM KORAL"
var textWrapper = document.querySelector('#kh');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'><b>$&</b></span>");
anime.timeline({loop: true})
  .add({
    targets: '#kh .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '#kh',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  
// Wrap every letter in a span in "full-stack developer"
var textWrapper = document.querySelector('#fsd');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter1'><b>$&</b></span>");
anime.timeline({loop: false})
  .add({
    targets: '#fsd .letter1',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  }).add({
    targets: '#fsd',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });
