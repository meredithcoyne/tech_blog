async function signupFormHandler(event) {
    event.preventDefault();

    const username = document.querySelector('#username_signup').value.trim();
    const email = document.querySelector('#email_signup').value.trim();
    const password = document.querySelector('#password_signup').value.trim();

    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST', 
            body: JSON.stringify({
                username,
                email,
                password   
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        };
    };
};

document.querySelector('.signup_form').addEventListener('submit', signupFormHandler);