/*
	Intensify by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
	aa
*/
$( document ).ready(function() {
	openNav();
	var loc = window.location.href;
	var lista = $("#menuList a")
	var i = 0;
	var j = 0;
    lista.each(function() {		
        if(loc.search(lista[i].href) != -1){			
			if(j > 0){
				$(".dropdown-container").each(function(){					
					if($(this).find(lista[i]).length > 0){
						$(this).css("display", "block");
					}					
				});
			}
			$(lista[i]).addClass("active");
			j++;
		}
		i++;
    });
});

(function ($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function () {

		var $window = $(window),
			$body = $('body'),
			$header = $('#header');

		// Disable animations/transitions until the page has loaded.
		$body.addClass('is-loading');

		$window.on('load', function () {
			window.setTimeout(function () {
				$body.removeClass('is-loading');
			}, 100);
		});

		// Fix: Placeholder polyfill.
		$('form').placeholder();

		// Prioritize "important" elements on medium.
		skel.on('+medium -medium', function () {
			$.prioritize(
				'.important\\28 medium\\29',
				skel.breakpoint('medium').active
			);
		});

		// Scrolly.
		$('.scrolly').scrolly({
			offset: function () {
				return $header.height();
			}
		});

		// Menu.
		$('#menu')
			.append('<a href="#menu" class="close"></a>')
			.appendTo($body)
			.panel({
				delay: 500,
				hideOnClick: true,
				hideOnSwipe: true,
				resetScroll: true,
				resetForms: true,
				side: 'right'
			});

	});

})(jQuery);
function openNav() {	
	var tela = $(window).width();
	if(tela > 1720) {
		$("#mySidenav").css("width","13%");
		document.getElementById("main").style.marginLeft = "13%";
		$(".left").css("display","none");	
		document.getElementById("header").style.width = "87%";
		document.getElementById("main").style.width = "87%";
	}
	if (tela <= 1720 && tela > 1024) {
		$("#mySidenav").css("width","20%");
		$("#main").css("margin-left","20%");
		$("#main").css("width","80%");	
		$(".left").css("display","none");	
		$("#header").css("width", "80%");
		$(".logo-svg").css("display", "none");
	}
	if (tela <= 1024 && tela > 768) {
		$("#mySidenav").css("width","25%");
		$("#main").css("margin-left","25%");
		$("#main").css("width","75%");	
		$(".left").css("display","none");	
		$("#header").css("width", "75%");
		$(".logo-svg").css("display", "none");
	}
	if (tela <= 980) {
		document.getElementById("mySidenav").style.width = "100%";
		document.getElementById("main").style.marginLeft = "100%;";
	} 
}

function closeNav() {
	var tela = $(window).width();
	$("#mySidenav").css("width", "0");
	$("#main").css("margin-left", "0");
	$("#main").css("width", "100%");
	$("#header").css("margin-left", "0");
	$("#header").css("width", "100%");
	$(".left").css("display","block");
	$(".logo-svg").css("display", "block");		
}


var modal = document.getElementById('myModal');
var img = $("img");
var notInclude = $(".logo")
var img_content = $(".modal-content");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.each(function (e) {
	img[e].onclick = function () {
		if(!img[e].className.includes("logo") && !img[e].className.includes("modal-content")){
			modal.style.display = "block";
			modalImg.src = this.src;
			captionText.innerHTML = this.alt;
			img_content.width(img[e].naturalWidth);			
		}		
	}
});
var span = document.getElementsByClassName("close")[0];
span.onclick = function () {
	modal.style.display = "none";
}

function searchNav() {
	$(".dropdown-container").css("display", "block");
	$(".dropdown-btn").css("display", "none");
	$(".dropdown-container").css("background", "none");
	$(".dropdown-container").css("padding-left", "0");
	$(".sub-item-menu").css("display", "none");
	var input, filter, ul, li, a, i;
	input = document.getElementById("myInput");
	filter = input.value.toUpperCase();
	ul = document.getElementById("menuList");
	li = ul.getElementsByTagName("a");
	if (filter == "") {
		$(".dropdown-container").css("display", "none");		
		$(".dropdown-btn").css("display", "block");
		$(".dropdown-container").css("background", "#262626");
		$(".dropdown-container").css("padding-left", "8px");
	}
	for (i = 0; i < li.length; i++) {
		a = li[i];
		if (a.innerHTML.toUpperCase().search(filter) > -1) {
			li[i].style.display = "";
		}		
		else {
			li[i].style.display = "none";
		}
	}
}

var dropdown = document.getElementsByClassName("dropdown-btn");
var i;
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}

window.addEventListener("resize", adaptarMenu);
function adaptarMenu(){
	if($(".sidenav").width() != 0)	{
		openNav();
	}
	if($(window).width() > 980){
		$(".logo-svg").css("display", "block");
	}
}