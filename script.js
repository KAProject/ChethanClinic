function toggleNavbar() {
    const navbar = document.getElementById('navbar');
    if (navbar.style.left === '0px') {
        navbar.style.left = '-250px';
    } else {
        navbar.style.left = '0px';
    }
}