
const mouse = document.getElementById("mouse");
document.addEventListener("mousemove", (e) => {
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    mouse.style.left = mouseX + "px";
    mouse.style.top = mouseY + "px";
})
const animatedText = document.querySelector('.animated-text');
const text = " Entertain Games Joy|";
let index = 0;
let isDeleting = false;

function animateText() {
    const speed = isDeleting ? 50 : 80; 
  
    if (isDeleting) {
        animatedText.textContent = text.substring(0, index - 1);
    } else {
        animatedText.textContent = text.substring(0, index + 1);
    }

    if (!isDeleting && index === text.length) {
        isDeleting = true;
    } else if (isDeleting && index === 0) {
        isDeleting = false;
    }

    index = isDeleting ? index - 1 : index + 1;
    
    setTimeout(animateText, speed);
}

animateText();
