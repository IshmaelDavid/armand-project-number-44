let loader = document.getElementById('preloader');
window.addEventListener('load', function(){
	loader.style.display = 'none';
})

// FUNCTION THAT CONTROLS BACK TO TOP BUTTON
function toTop() {
    window.scrollTo(0, 0);
}

let scrollBlock = document.getElementById('backToTop');

window.onscroll = function(){
    disappearScroll();
}

// FUNCTION THAT BACK TO TOP BUTTON DISAPPEAR WHEN THE PAGE VIEW IS CLOSE TO TOP
function disappearScroll(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        scrollBlock.style.display="block";
    }
    else{
        scrollBlock.style.display="none";
    }
}

// THE FUNCTION THAT TOGGLES HORIZONTAL MENU WITH TOGGLE DEPENDING ON THE SCREEN, ABD MAKE BURGER MENU SLIDES FROM RIGHT.
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

// A FUNCTION THAT OPENS UP POPUP FORM WHEN A BUTTON IS CLICKED
function openPopUp(){
	document.getElementById('contactForm').reset();
	document.getElementById("popUpForm").classList.remove("hide");
}

// A FUNCTION THAT CLOSES POPUP FORM WHEN A CERTAIN BUTTON IS CLICKED OR WHEN THE FORM IS SUCCESSFULLY SUBMITTED
function hidePopUp(){
	document.getElementById("popUpForm").classList.add("hide");
	document.getElementById("contactForm").reset();
}


const wrapper = document.querySelector('.wrapper');
const indicators = [...document.querySelectorAll('.indicators button')];

let currentTestimonial = 0;

// A FUNCTION THAT CONTROLS THE SLIDING EFFECT OF TESTIMONIES SECTION
indicators.forEach((item, i) => {
	item.addEventListener('click' , () =>{
		indicators[currentTestimonial].classList.remove('active');
		wrapper.style.marginLeft = `-${100 * i}%`;
		item.classList.add('active');
		currentTestimonial = i;
	})
})

// END OF FILE
