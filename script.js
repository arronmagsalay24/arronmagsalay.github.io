     let users = JSON.parse(localStorage.getItem('users')) || {};

        // Login event listener
        document.getElementById('login').addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('loginUsername').value;
            const password = document.getElementById('loginPassword').value;
            const messageDiv = document.getElementById('loginMessage');

            if (users[username] && users[username] === password) {
                messageDiv.textContent = 'Login successful!';
                messageDiv.style.color = 'green';

                // Save login session
                localStorage.setItem('isLoggedIn', 'true');

                setTimeout(() => {
                    window.location.href = 'file:///C:/Users/MAGSALAY/OneDrive/Desktop/myportfolio.html'; // Redirect to portfolio
                }, 1000);
            } else {
                messageDiv.textContent = 'Invalid username or password.';
                messageDiv.style.color = 'red';
            }
        });

        // Registration event listener
        document.getElementById('register').addEventListener('submit', function (event) {
            event.preventDefault();
            const username = document.getElementById('registerUsername').value;
            const password = document.getElementById('registerPassword').value;
            const messageDiv = document.getElementById('registerMessage');

            if (users[username]) {
                messageDiv.textContent = 'Username already exists.';
                messageDiv.style.color = 'red';
            } else {
                users[username] = password;
                localStorage.setItem('users', JSON.stringify(users));

                messageDiv.textContent = 'Registration successful!';
                messageDiv.style.color = 'green';

                // Clear input fields after registration
                document.getElementById('registerUsername').value = "";
                document.getElementById('registerPassword').value = "";

                showLogin();
            }
        });

        function showRegister() {
            document.getElementById('loginForm').style.display = 'none';
            document.getElementById('registerForm').style.display = 'block';
            document.getElementById('loginMessage').textContent = "";
            document.getElementById('registerMessage').textContent = "";
        }

        function showLogin() {
            document.getElementById('loginForm').style.display = 'block';
            document.getElementById('registerForm').style.display = 'none';
            document.getElementById('loginMessage').textContent = "";
            document.getElementById('registerMessage').textContent = "";
        }

        // Logout Functionality
        document.getElementById('logoutBtn').addEventListener('click', function () {
            localStorage.removeItem('isLoggedIn'); // Clear session
            window.location.href = 'file:///C:/Users/MAGSALAY/OneDrive/Desktop/my%20portfolio/eto%20ang%20save%20sa%20vscode.html#'; // Redirect to Login/Register page
        });

        // Check if user is logged in and show logout button
        if (localStorage.getItem('isLoggedIn')) {
            document.getElementById('logoutBtn').style.display = 'block';
        }

        // Show register form initially
        showRegister();