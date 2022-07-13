$html = document.querySelector('html');
$buttom = document.querySelector('#darkMode');


$buttom.addEventListener('click', function darkMode() {
    $html.classList.toggle('darkMode');
});