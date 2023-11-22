// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

// ketika hamburger menu di klik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// jika klik di luar sidebar untuk menghilangkan hamburger menu

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (r) {
  if (!hamburger.contains(r.target) && !navbarNav.contains(r.target)) {
    navbarNav.classList.remove("active");
  }
});

// cta to whatsapp
 const send = document.querySelector('.cta');
 send.addEventListener('click', function () {
  send.href = "https://api.whatsapp.com/send?phone=081382361995"
});
