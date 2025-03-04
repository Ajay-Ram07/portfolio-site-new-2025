

document.addEventListener("DOMContentLoaded", function () {
    var typed = new Typed(".multipleText", {
        strings: ["Frontend Developer.", "Graphic Designer.", "MERN Engineer."],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
});

const modeToggle = document.getElementById('modeToggle');
const body = document.body;


if (localStorage.getItem('lightMode') === 'enabled') {
    body.classList.add('light-mode');
    modeToggle.checked = true;
}

modeToggle.addEventListener('change', () => {
    if (modeToggle.checked) {
        body.classList.add('light-mode');
        localStorage.setItem('light', 'enabled');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('lightMode', 'disabled');
    }
});


let menu=document.querySelector("#menuIcon");
let navbar=document.querySelector(".navbar");

menu.addEventListener('click',function() {
    navbar.classList.toggle("active");
});

window.onscroll = () =>{
    navbar.classList.remove("active");
};



const form = document.getElementById('contactForm');
    const errorMessage = document.getElementById('formMessage');

    form.addEventListener('submit', function(event) {
        let valid = true;
        errorMessage.innerHTML = ''; // Clear any previous error message

        // Validate name (can't be empty)
        const name = document.getElementById('name').value;
        if (name.trim() === '') {
            valid = false;
            errorMessage.innerHTML = 'Name is required.';
        }

        // Validate email (basic email format check)
        const email = document.getElementById('email').value;
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email.match(emailPattern)) {
            valid = false;
            errorMessage.innerHTML = 'Please enter a valid email address.';
        }

        // Validate message (minimum length)
        const message = document.getElementById('message').value;
        if (message.trim().length < 10) {
            valid = false;
            errorMessage.innerHTML = 'Message must be at least 10 characters long.';
        }

        if (!valid) {
            event.preventDefault(); // Prevent form submission if invalid
        }
    });


    