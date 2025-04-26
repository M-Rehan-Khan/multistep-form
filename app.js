// const forms = document.querySelectorAll('form');

// const progressBar = document.querySelector(".progressBar");

// const form1ToSecond = ()=>{
//     forms [0].style.left = '-100%';
//     forms [1].style.left = '0%';
//     progressBar.style.width = '66%';
// }

// const form2ToThird = ()=>{
//     forms [1].style.left = '-100%';
//     forms [2].style.left = '0%';
//     progressBar.style.width = '100%';
// }

// const form2ToFirst = ()=>{
//     forms [0].style.left = '0%';
//     forms [1].style.left = '100%';
//     progressBar.style.width='33%';
// }

// const form3ToSecond = ()=>{
//     forms [1].style.left = '0%';
//     forms [2].style.left = '100%';
//     progressBar.style.width='66%';
// }


const forms = document.querySelectorAll('form');
const progressBar = document.querySelector(".progressBar");

// Save data from Form 1 and move to Form 2
const form1ToSecond = () => {
    // Capture data from Form 1
    const email = forms[0].querySelector('input[type="email"]').value;
    const password = forms[0].querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = forms[0].querySelectorAll('input[type="password"]')[1].value;

    const step1Data = { email, password, confirmPassword };
    localStorage.setItem('step1', JSON.stringify(step1Data)); // Store data from Form 1

    // Transition to Form 2
    forms[0].style.left = '-100%';  // Hide Form 1
    forms[1].style.left = '0%';     // Show Form 2
    progressBar.style.width = '66%'; // Update progress bar
}

// Save data from Form 2 and move to Form 3
const form2ToThird = () => {
    // Capture data from Form 2
    const firstName = forms[1].querySelectorAll('input')[0].value;
    const lastName = forms[1].querySelectorAll('input')[1].value;
    const phone = forms[1].querySelectorAll('input')[2].value;

    const step2Data = { firstName, lastName, phone };
    localStorage.setItem('step2', JSON.stringify(step2Data)); // Store data from Form 2

    // Transition to Form 3
    forms[1].style.left = '-100%';  // Hide Form 2
    forms[2].style.left = '0%';     // Show Form 3
    progressBar.style.width = '100%'; // Update progress bar
}

// Go back from Form 2 to Form 1
const form2ToFirst = () => {
    forms[0].style.left = '0%';    // Show Form 1
    forms[1].style.left = '100%';  // Hide Form 2
    progressBar.style.width = '33%'; // Update progress bar
}

// Go back from Form 3 to Form 2
const form3ToSecond = () => {
    forms[1].style.left = '0%';    // Show Form 2
    forms[2].style.left = '100%';  // Hide Form 3
    progressBar.style.width = '66%'; // Update progress bar
}

// Final form submission, save and combine all data
forms[2].addEventListener('submit', function (e) {
    e.preventDefault();  // Prevent form submission and page reload

    // Capture data from Form 3
    const linkedin = forms[2].querySelectorAll('input')[0].value;
    const github = forms[2].querySelectorAll('input')[1].value;
    const upwork = forms[2].querySelectorAll('input')[2].value;

    const step3Data = { linkedin, github, upwork };
    localStorage.setItem('step3', JSON.stringify(step3Data)); // Store data from Form 3

    // Combine all form data into one object
    const allData = {
        ...JSON.parse(localStorage.getItem('step1') || '{}'),
        ...JSON.parse(localStorage.getItem('step2') || '{}'),
        ...step3Data
    };

    // Store all form data together in localStorage
    localStorage.setItem('formData', JSON.stringify(allData));

    alert('Form submitted and saved to localStorage!');
});
