const headerScrollList = document.querySelector('.header__scroll-list');
const headerScrollItems = document.querySelectorAll('.header__scroll-list li');
const headerButtonScroll = document.querySelector('.header__button-scroll');
let headerScrollListWidth = document.querySelector('.header__scroll-list-wrap').clientWidth;
let headerScrollItemsWidth = 0;
let translateX = 0;

console.log(headerScrollItems.length);
if (window.innerWidth <= 1040) {
	headerScrollItemsWidth = headerScrollItems.length + 16;
	for (let i = 0; i < headerScrollItems.length; i++) {
		headerScrollItemsWidth += headerScrollItems[i].clientWidth;
	}
	if (headerScrollItemsWidth > headerScrollListWidth) {
		headerButtonScroll.style.display = 'block';
		headerButtonScroll.addEventListener('click', () => {
			console.log(`translateX(-${headerScrollListWidth}px)`);
			headerScrollList.style.transform = `translateX(-${headerScrollListWidth}px)`;
		});
	}
}
