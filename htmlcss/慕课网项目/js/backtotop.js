var backtotop = document.querySelector(".backtotop");
backtotop.onclick = () => {
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}