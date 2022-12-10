import HideNavbarScroll from './modules/HideNavbarScroll';
import Search from './modules/Search';
import MobileMenu from './modules/MobileMenu';
import { animationOnScroll } from './modules/animationOnScroll';

const hideNavbarScroll = new HideNavbarScroll();
const search = new Search();
const mobileMenu = new MobileMenu();
animationOnScroll();
