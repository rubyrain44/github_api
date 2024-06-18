async function getUser() {
    console.log('hello')
    var response = await fetch("https://api.github.com/users/rubyrain44");
    console.log(response)
    var userData = await response.json();
    console.log(userData)
    console.log(userData.login)

    document.getElementById('avatar').innerHTML = JSON.stringify(userData.avatar)
    document.getElementById('login').innerHTML = JSON.stringify(userData.login);
    document.getElementById('bio').innerHTML = JSON.stringify(userData.bio);
    return userData;

}