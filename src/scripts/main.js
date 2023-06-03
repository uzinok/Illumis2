function dtime(num) {
	const date = new Date();

	date.setDate(date.getDate() + num);
	var options = {
		month: 'long',
		day: 'numeric',
	};
	document.write(date.toLocaleString("en-US", options));
}

function headerSlider() {
	const headerScrollList = document.querySelector('.header__scroll-list');
	const headerScrollItems = document.querySelectorAll('.header__scroll-list li');
	const headerButtonScroll = document.querySelector('.header__button-scroll');
	const headerButtonScrollEnd = document.querySelector('.header__button-scroll-end');
	let headerScrollListWidth = document.querySelector('.header__scroll-list-wrap').clientWidth;
	let headerScrollItemsWidth = 0;
	let translateX = 0;

	headerScrollList.style.transform = `translateX(0px)`;
	headerButtonScrollEnd.style.display = 'none';

	if (window.innerWidth <= 1040) {
		headerScrollItemsWidth = (headerScrollItems.length) * 16;
		for (let i = 0; i < headerScrollItems.length; i++) {
			headerScrollItemsWidth += headerScrollItems[i].clientWidth;
		}
		if (headerScrollItemsWidth >= headerScrollListWidth) {
			headerButtonScroll.style.display = 'block';

			headerButtonScroll.addEventListener('click', () => {
				translateX += headerScrollListWidth;
				if (translateX >= headerScrollItemsWidth - headerScrollListWidth) {
					translateX = headerScrollItemsWidth - headerScrollListWidth;
					headerButtonScroll.style.display = 'none';
				}
				headerScrollList.style.transform = `translateX(-${translateX}px)`;
				headerButtonScrollEnd.style.display = 'block';
			});

			headerButtonScrollEnd.addEventListener('click', () => {
				translateX -= headerScrollListWidth;
				if (translateX <= 0) {
					headerButtonScrollEnd.style.display = 'none';
					translateX = 0;
				}
				headerButtonScroll.style.display = 'block';
				headerScrollList.style.transform = `translateX(-${translateX}px)`;
			});

		} else {
			headerButtonScroll.style.display = 'none';
			headerButtonScrollEnd.style.display = 'none';
		}

	}
}

window.addEventListener('load', function() {
	headerSlider();
	window.addEventListener('resize', headerSlider);

	const mainHeaderMetaW = document.querySelector('.main__header-meta-w');
	let count = 170.653;
	mainHeaderMetaW.innerText = count;

	function financial(x) {
		return Number.parseFloat(x).toFixed(3);
	}
	window.setInterval(function() {
		count += 0.004;
		mainHeaderMetaW.innerText = financial(count);
	}, 5000);

	const scrollElem = document.querySelectorAll('[data-href]');

	for (let i = 0; i < scrollElem.length; i++) {
		scrollElem[i].addEventListener('click', function () {
			window.location.hash = '#' + this.dataset.href;
			const element = document.querySelector(`#${this.dataset.href}`);
			element.scrollIntoView({
				behavior: "smooth",
				block: "start",
				inline: "nearest"
			});
		});
	}

	const likes = document.querySelectorAll('.like');

	for (let i = 0; i < likes.length; i++) {
		likes[i].addEventListener('click', function () {
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
