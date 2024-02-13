function showMessage(message, newImage) {
    document.querySelector('.title').innerText = message;
    document.querySelector('.cat-img').src = newImage;
    document.querySelector('.btn--yes').classList.add('hidden');
    document.querySelector('.btn--no').classList.add('hidden');
  }
  
  function moveNoButton() {
    var buttonNo = document.querySelector('.btn--no');
    var randomX = Math.random() * (window.innerWidth - buttonNo.clientWidth);
    var randomY = Math.random() * (window.innerHeight - buttonNo.clientHeight);
    
    buttonNo.style.position = 'absolute';
    buttonNo.style.top = randomY + 'px';
    buttonNo.style.left = randomX + 'px';
  }
  