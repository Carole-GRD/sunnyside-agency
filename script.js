let sidenav = document.getElementById("sidenav");
let btntogglenav = document.getElementById("btntogglenav");

btntogglenav.addEventListener('click', togglenav);

function togglenav() {
    sidenav.classList.toggle("inactive");
    console.log('test');
}