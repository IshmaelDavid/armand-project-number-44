var loader = document.getElementById('preloader');
window.addEventListener('load', function(){
	loader.style.display = 'none';
})

function toTop() {
    window.scrollTo(0, 0);
}

let scrollBlock = document.getElementById('backToTop');

window.onscroll = function(){
    disappearScroll();
}

function disappearScroll(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        scrollBlock.style.display="block";
    }
    else{
        scrollBlock.style.display="none";
    }
    console.log('hello');
}


const navSlide = () => {
	//burger sign
	const burger = document.querySelector('.burger');
	
	//Navigation block
	const nav = document.querySelector('.menu');
	
	//All links
	const navLinks = document.querySelectorAll('.menu li');
	
	burger.addEventListener("click", () => {
		//toggle active class on click
		nav.classList.toggle('menu-active');
		
		//animate links on click
		navLinks.forEach((link, index) =>{
			if(link.style.animation){
				link.style.animation = '';
			}else{
				link.style.animation = `navLinkFade 0.4s ease forwards ${index/ 7 + 0.4}s`;
			}
		});
		
		//burger animation
		burger.classList.toggle('oblique')
		});	
}

navSlide();

let testimoniesBtn = document.getElementsByClassName('Tbtn');
let slide = document.getElementById('slide');

testimoniesBtn[0].onclick = function(){
	slide.style.transform = "translateX(0px)";
	for(i=0; i<4; i++){
		testimoniesBtn[i].classList.remove('active');
	}
	this.classList.add('active');
}

testimoniesBtn[1].onclick = function(){
	slide.style.transform = "translateX(-800px)";
	for(i=0; i<4; i++){
		testimoniesBtn[i].classList.remove('active');
	}
	this.classList.add('active');
}

testimoniesBtn[2].onclick = function(){
	slide.style.transform = "translateX(-1600px)";
	for(i=0; i<4; i++){
		testimoniesBtn[i].classList.remove('active');
	}
	this.classList.add('active');
}

testimoniesBtn[3].onclick = function(){
	slide.style.transform = "translateX(-2400px)";
	for(i=0; i<4; i++){
		testimoniesBtn[i].classList.remove('active');
	}
	this.classList.add('active');
}
