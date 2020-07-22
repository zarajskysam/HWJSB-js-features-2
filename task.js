const cookie = document.getElementById("cookie");
cookie.onclick = function(){
    const cookiecounter = document.getElementById("clicker__counter");
    cookiecounter.textContent = 1 + parseInt(cookiecounter.textContent);
    if (parseInt(cookiecounter.textContent) % 2 === 1) {
        cookie.width = 250;
    } else {
        cookie.width = 200;
    }
};