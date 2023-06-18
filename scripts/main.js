"use strict";

function dtime(num) {
  var date = new Date();
  date.setDate(date.getDate() + num);
  var options = {
    month: 'long',
    day: 'numeric'
  };
  document.write(date.toLocaleString("en-US", options));
}
function headerSlider() {
  var headerScrollList = document.querySelector('.header__scroll-list');
  var headerScrollItems = document.querySelectorAll('.header__scroll-list li');
  var headerButtonScroll = document.querySelector('.header__button-scroll');
  var headerButtonScrollEnd = document.querySelector('.header__button-scroll-end');
  var headerScrollListWidth = document.querySelector('.header__scroll-list-wrap').clientWidth;
  var headerScrollItemsWidth = 0;
  var translateX = 0;
  headerScrollList.style.transform = "translateX(0px)";
  headerButtonScrollEnd.style.display = 'none';
  if (window.innerWidth <= 1040) {
    headerScrollItemsWidth = headerScrollItems.length * 16;
    for (var i = 0; i < headerScrollItems.length; i++) {
      headerScrollItemsWidth += headerScrollItems[i].clientWidth;
    }
    if (headerScrollItemsWidth >= headerScrollListWidth) {
      headerButtonScroll.style.display = 'block';
      headerButtonScroll.addEventListener('click', function () {
        translateX += headerScrollListWidth;
        if (translateX >= headerScrollItemsWidth - headerScrollListWidth) {
          translateX = headerScrollItemsWidth - headerScrollListWidth;
          headerButtonScroll.style.display = 'none';
        }
        headerScrollList.style.transform = "translateX(-".concat(translateX, "px)");
        headerButtonScrollEnd.style.display = 'block';
      });
      headerButtonScrollEnd.addEventListener('click', function () {
        translateX -= headerScrollListWidth;
        if (translateX <= 0) {
          headerButtonScrollEnd.style.display = 'none';
          translateX = 0;
        }
        headerButtonScroll.style.display = 'block';
        headerScrollList.style.transform = "translateX(-".concat(translateX, "px)");
      });
    } else {
      headerButtonScroll.style.display = 'none';
      headerButtonScrollEnd.style.display = 'none';
    }
  }
}
window.addEventListener('load', function () {
  headerSlider();
  window.addEventListener('resize', headerSlider);
  var mainHeaderMetaW = document.querySelector('.main__header-meta-w');
  var count = 170.653;
  mainHeaderMetaW.innerText = count;
  function financial(x) {
    return Number.parseFloat(x).toFixed(3);
  }
  window.setInterval(function () {
    count += 0.004;
    mainHeaderMetaW.innerText = financial(count);
  }, 5000);
  var scrollElem = document.querySelectorAll('[data-href]');
  for (var i = 0; i < scrollElem.length; i++) {
    scrollElem[i].addEventListener('click', function () {
      window.location.hash = '#' + this.dataset.href;
      var element = document.querySelector("#".concat(this.dataset.href));
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest"
      });
    });
  }
  var likes = document.querySelectorAll('.like');
  for (var _i = 0; _i < likes.length; _i++) {
    likes[_i].addEventListener('click', function () {
      if (this.classList.contains('like--down')) {
        this.classList.remove('like--down');
        this.innerText = --this.innerText;
      } else {
        this.classList.add('like--down');
        this.innerText = ++this.innerText;
      }
    });
  }
});