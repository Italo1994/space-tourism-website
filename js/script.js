let width = window.screen.width;
let height = window.screen.height;
let menu = document.querySelector(".nav_menu");


$(document).ready( function() {
    
    $("#botao_hamburger").click( function() {
        $("#nav_menu").toggle(1000);
        $("#nav_menu").css("display", "flex");
        
        var imgClose = "../starter-code/assets/shared/icon-close.svg";
        var idImg = document.getElementById("botao_img");
        idImg.src = imgClose;

        $("#botao_hamburger").click( function() {
            var imgHamburger = "../starter-code/assets/shared/icon-hamburger.svg";
            idImg.src = imgHamburger;
        });
    });
});