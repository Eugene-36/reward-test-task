const HEADER_NAV_ID = 'header-nav';
const BURGER_ID = 'burger';
const ACTIVE_CLASS = 'active';
console.log('work fine');

const HEADER_NAV_WRAPPER_SELECTOR = '.header-nav-wrapper';

const headerNav = document.getElementById(HEADER_NAV_ID);
const burger = document.getElementById(BURGER_ID);

function navBar() {
  function onHeaderNavClick(e) {
    const headerNavWrapper = e.target.closest(HEADER_NAV_WRAPPER_SELECTOR);

    headerNavWrapper && toggleHeaderTab(headerNavWrapper);
  }

  function toggleHeaderTab(tab) {
    tab.classList.toggle(ACTIVE_CLASS);
  }

  function onBurgerClick() {
    burger.classList.toggle(ACTIVE_CLASS);
    headerNav.classList.toggle(ACTIVE_CLASS);
  }

  headerNav.addEventListener('click', onHeaderNavClick);
  burger.addEventListener('click', onBurgerClick);
}
export default navBar;
