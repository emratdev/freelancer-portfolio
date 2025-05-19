const nav = document.querySelector('#nav');
const navBtn = document.querySelector("#nav__btn");
const navBtnImg = document.querySelector("#nav__btn_img");

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "./img/icons/nav-close.svg";
    } else {
        navBtnImg.src = "./img/icons/nav-open.svg";
    }
}


AOS.init({
  once: true,
});