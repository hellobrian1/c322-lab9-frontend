const mode = 0;
const host_local = "http://localhost:8080";
const host_remote = "https://ducks-service-latest-1-skjd.onrender.com";

function getHost() {
    return mode === 0 ? host_local : host_remote;
}

function isLoggedIn() {
    if(localStorage.getItem("token")) {
        return true;
    } else {
        return false;
    }
}

function getTheToken() {
    return localStorage.getItem("token");
}

function saveTheToken(token) {
    localStorage.setItem("token", token);
    updateTheNavigationBar();
}

function removeTheToken() {
    localStorage.removeItem("token");
    updateTheNavigationBar();
}
let configuration = {
    isLoggedIn: () => isLoggedIn(),
    host: () => getHost(),
    token: () => getTheToken(),
};

updateTheNavigationBar();
async function updateTheNavigationBar() {
    const navigation = document.getElementsByClassName("topnav")[0];
    let loginTag = navigation.children[navigation.children.length - 1];
    if (isLoggedIn()) {
        loginTag.innerHTML = 
            `<li class="right"><a href="#" onclick="logout()">Logout</a></li>`;
    } else {
        loginTag.innerHTML = 
            `<li class="right"><a href="login.html">Login</a></li>`;
    }
}




