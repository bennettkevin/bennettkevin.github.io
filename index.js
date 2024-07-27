const aboutLink = document.querySelector('#about-link')
const page = document.querySelector('#page')



function aboutPage () {
    page.innerHTML($("#sidebar").load('pages/Sidebar/sidebar.html'));
}



