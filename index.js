const aboutLink = document.querySelector('#about-link')
const page = document.querySelector('#page')



function aboutPage () {
    page.innerHTML($("#page").load('pages/about/about.html'));
}



