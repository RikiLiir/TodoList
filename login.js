function onSubmit() {
    console.log("xddd")
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var data = {
        username: username,
        password: password
    }
    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
        localStorage.setItem('username', data.username)
        localStorage.setItem('todos', JSON.stringify(data.todos))
        window.location.href = 'index.html'
    })
}

var button = document.getElementById('submitBtn')
button.addEventListener('click', onSubmit)