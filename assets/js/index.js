/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

  toggle.addEventListener('click', () =>{
      // Add show-menu class to nav menu
      nav.classList.toggle('show-menu')

      // Add show-icon to show and hide the menu icon
      toggle.classList.toggle('show-icon')
  })
}

showMenu('nav-toggle','nav-menu')


///*=============== SCROLL TECHNOLOGIES ===============*/

 const scrollers = document.querySelectorAll('.scroller');

 if ( !window.matchMedia('(prefers-reduced-motion: reduce)').matches ) {
  addAnimation();

 }

 function addAnimation(){
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
    const scrollerInner = scroller.querySelector('.scroller__inner'),
    scrollerContent = Array.from(scrollerInner.children);

    console.log(scrollerContent);

    scrollerContent.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem);
    }
    );
    
    
  });
 }