// ==========================
// 言語切り替えトグル
// ==========================


// ==========================
// ハンバーガーメニュー
// ==========================

// js-navの要素を取得し、変数navに格納
const hdr = document.querySelector('#js-header');
// js-hamburgerの要素を取得して、変数hamに格納
const ham = document.querySelector('#js-hamburger');
// js-navの要素を取得し、変数navに格納
const nav = document.querySelector('#js-nav');

// ハンバーガーメニューをクリックすると
ham.addEventListener('click', function () {
    // それぞれのメニューにactiveクラス。
    hdr.classList.toggle('active');
    ham.classList.toggle('active');
    nav.classList.toggle('active');
});

// header用 //
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header-links");
    header.classList.toggle("active", window.scrollY > 1);
  });