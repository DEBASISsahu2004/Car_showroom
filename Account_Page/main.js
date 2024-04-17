// Select the login and register forms from the DOM
const loginForm = document.querySelector('.login .form');
const registerForm = document.querySelector('.register .form');

// Add a submit event listener to the login form
loginForm.addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the user input and password fields from the form
    let userInput = this.elements['txt'];
    let passInput = this.elements['pswd'];

    // Check if the username is empty
    if (!userInput.value) {
        alert('Username cannot be empty');
        return;
    }

    if(userInput.value.includes(' ')){
        alert('Username should not contain space!!');
        userInput.value = '';
        return;
    }

    // Check if the password is less than or equal to 6 characters
    if (passInput.value.length <= 6) {
        alert('Password should be more than 6 characters');
        passInput.value = '';
        return;
    }
    
    // If validation passes, set a flag in local storage and redirect to the main page
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', userInput.value);
    window.location.href = '/Car_showroom/Main_Page/index.html';
});

// Select the login button and add a click event listener
let button = document.querySelector('.login button');
button.addEventListener('click', ()=>{
    console.log("Clicked");
})

// Add a submit event listener to the register form
registerForm.addEventListener('submit', function(event) {
    // Prevent the form from submitting normally
    event.preventDefault();

    // Get the user input, email, password and confirm password fields from the form
    let userInput = this.elements['txt'];
    let emailInput = this.elements['email'];
    let passInput = this.elements['pswd'];
    let cpassInput = this.elements['cpswd'];

    // Check if the username is empty
    if (!userInput.value) {
        alert('Username cannot be empty');
        return;
    }

    // Check if the email is valid
    if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(emailInput.value)) {
        alert('Please enter a valid email');
        emailInput.value = '';
        return;
    }

    // Check if the password is less than or equal to 6 characters
    if (passInput.value.length <= 6) {
        alert('Password should be more than 6 characters');
        passInput.value = '';
        cpassInput.value = '';
        return;
    }

    // Check if the password and confirm password match
    if (passInput.value !== cpassInput.value) {
        alert('Password and Confirm Password should be the same');
        cpassInput.value = '';
        return;
    }

    // If validation passes, set a flag in local storage and redirect to the main page
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', userInput.value);
    window.location.href = '/Car_showroom/Main_Page/index.html';
});

// Initialize an array to keep track of the visibility state of password fields
let visibilityStates = [];
// Select all elements with the class 'show'
let shows = document.querySelectorAll('.show');
// For each 'show' element, add a click event listener
shows.forEach((show, index)=>{
    // Set the initial visibility state to 1 (visible)
    visibilityStates[index] = 1;
    show.addEventListener('click',()=>{
        // Get the previous sibling element (the password field)
        let field = show.previousElementSibling;
        // If the password field is visible, hide it and update the visibility state
        if(visibilityStates[index]){
            field.type = 'text';
            show.innerHTML = '<svg class="show" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M12.0003 3C17.3924 3 21.8784 6.87976 22.8189 12C21.8784 17.1202 17.3924 21 12.0003 21C6.60812 21 2.12215 17.1202 1.18164 12C2.12215 6.87976 6.60812 3 12.0003 3ZM12.0003 19C16.2359 19 19.8603 16.052 20.7777 12C19.8603 7.94803 16.2359 5 12.0003 5C7.7646 5 4.14022 7.94803 3.22278 12C4.14022 16.052 7.7646 19 12.0003 19ZM12.0003 16.5C9.51498 16.5 7.50026 14.4853 7.50026 12C7.50026 9.51472 9.51498 7.5 12.0003 7.5C14.4855 7.5 16.5003 9.51472 16.5003 12C16.5003 14.4853 14.4855 16.5 12.0003 16.5ZM12.0003 14.5C13.381 14.5 14.5003 13.3807 14.5003 12C14.5003 10.6193 13.381 9.5 12.0003 9.5C10.6196 9.5 9.50026 10.6193 9.50026 12C9.50026 13.3807 10.6196 14.5 12.0003 14.5Z"></path></svg>';
            visibilityStates[index] = 0;
        }else{
            // If the password field is hidden, show it and update the visibility state
            field.type = 'password';
            show.innerHTML = '<svg class="show" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="rgba(0,0,0,1)"><path d="M9.34268 18.7819L7.41083 18.2642L8.1983 15.3254C7.00919 14.8874 5.91661 14.2498 4.96116 13.4534L2.80783 15.6067L1.39362 14.1925L3.54695 12.0392C2.35581 10.6103 1.52014 8.87466 1.17578 6.96818L3.14386 6.61035C3.90289 10.8126 7.57931 14.0001 12.0002 14.0001C16.4211 14.0001 20.0976 10.8126 20.8566 6.61035L22.8247 6.96818C22.4803 8.87466 21.6446 10.6103 20.4535 12.0392L22.6068 14.1925L21.1926 15.6067L19.0393 13.4534C18.0838 14.2498 16.9912 14.8874 15.8021 15.3254L16.5896 18.2642L14.6578 18.7819L13.87 15.8418C13.2623 15.9459 12.6376 16.0001 12.0002 16.0001C11.3629 16.0001 10.7381 15.9459 10.1305 15.8418L9.34268 18.7819Z"></path></svg>';
            visibilityStates[index] = 1;
        }
    });
});