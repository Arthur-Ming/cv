function getCoords(elem) {
   let box = elem.getBoundingClientRect();

   return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
   }
}

document.querySelector('.nav').onclick = function (event) {

   const target = event.target.closest('.nav__item');

   if (!target) return

   event.preventDefault();

   const href = target.getAttribute('href');
   const scrollTarget = document.querySelector(href);

   const header = document.querySelector('.header').clientHeight
   const offSetY = getCoords(scrollTarget)
   const clientWidth = document.documentElement.clientWidth;

   window.scrollTo({
      top: clientWidth > 767.98 ? offSetY.top : offSetY.top - header,
      behavior: 'smooth'
   })
}


