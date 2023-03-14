const home = document.getElementById("home-button");
const about = document.getElementById("about-button");
const projects = document.getElementById("projects-button");
const contact = document.getElementById("contact-button");
const send = document.getElementById("send-button");

window.onbeforeunload = function () {
    window.scrollTo(0, 0)
}
function homeButton() {
    document.getElementById('home-line').style.display = 'block';

    document.getElementById('about-line').style.display = 'none';
    document.getElementById('projects-line').style.display = 'none';
    document.getElementById('contact-line').style.display = 'none';
}
function aboutButton() {
    document.getElementById('about-line').style.display = 'block';

    document.getElementById('home-line').style.display = 'none';
    document.getElementById('projects-line').style.display = 'none';
    document.getElementById('contact-line').style.display = 'none';
}
function projectsButton() {
    document.getElementById('projects-line').style.display = 'block';

    document.getElementById('home-line').style.display = 'none';
    document.getElementById('about-line').style.display = 'none';
    document.getElementById('contact-line').style.display = 'none';
}
function contactButton() {
    document.getElementById('contact-line').style.display = 'block';

    document.getElementById('home-line').style.display = 'none';
    document.getElementById('about-line').style.display = 'none';
    document.getElementById('projects-line').style.display = 'none';
}
home.addEventListener('click', ()=> {
    homeButton();
    document.getElementById('home-content').scrollIntoView({behavior: 'smooth', block: 'center'});
});

about.addEventListener('click', ()=> {
    aboutButton();
    document.getElementById('about-content').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
});

projects.addEventListener('click', ()=> {
    projectsButton();
    document.getElementById('projects-content').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
});

contact.addEventListener('click', ()=> {
    contactButton();
    document.getElementById('contact-content').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});
});

document.addEventListener('scroll', () => {
    let homeContent = document.getElementById('home-content').getBoundingClientRect();
    let abtContent = document.getElementById('about-content').getBoundingClientRect();
    let pjtContent = document.getElementById('projects-content').getBoundingClientRect();
    let conContent = document.getElementById('contact-content').getBoundingClientRect();
    
    if((homeContent.top >= 0 && homeContent.top + 200 <= window.innerHeight) || (homeContent.bottom >= 0 && homeContent.bottom <= window.innerHeight)){
        homeButton();
    }
    if((abtContent.top >= 0 && abtContent.top + 200 <= window.innerHeight) || (abtContent.bottom >= 0 && abtContent.bottom <= window.innerHeight)){
        aboutButton();
    }
    if((pjtContent.top >= 0 && pjtContent.top + 200 <= window.innerHeight) || (pjtContent.bottom >= 0 && pjtContent.bottom <= window.innerHeight)){
        projectsButton();
    }
    if((conContent.top >= 0 && conContent.top + 200 <= window.innerHeight) || (conContent.bottom >= 0 && conContent.bottom <= window.innerHeight)){
        contactButton();
    }
})

send.addEventListener('click', () => {
    let sendTo = "sonia899998@gmail.com";

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let sub = document.getElementById('subject').value;

    let text = document.getElementById('message');
    let body = ""+text.value+'%0A%0A%0A';
        body += "From："+name+'%0A';
        body += "Email："+email+'%0A';

    document.getElementById('mailto').href = "mailto:" + sendTo + "?subject=" + sub + "&body=" + body;
    document.getElementById('mailto').click();

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('subject').value = '';
    document.getElementById('message').value = '';
})