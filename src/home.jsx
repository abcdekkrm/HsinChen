const home = document.getElementById("home-button");
const about = document.getElementById("about-button");
const projects = document.getElementById("projects-button");
const contact = document.getElementById("contact-button");
const send = document.getElementById("send-button");

window.onbeforeunload = function () {
    window.scrollTo(0, 0)
}
home.addEventListener('click', ()=> {
    document.getElementById('home-line').style.display = 'block';

    document.getElementById('about-line').style.display = 'none';
    document.getElementById('projects-line').style.display = 'none';
    document.getElementById('contact-line').style.display = 'none';
    document.getElementById('home-content').scrollIntoView({behavior: 'smooth', block: 'center'});
});

about.addEventListener('click', ()=> {

    document.getElementById('about-line').style.display = 'block';
    document.getElementById('about-content').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});

    document.getElementById('home-line').style.display = 'none';
    document.getElementById('projects-line').style.display = 'none';
    document.getElementById('contact-line').style.display = 'none';
});

projects.addEventListener('click', ()=> {
    document.getElementById('projects-line').style.display = 'block';
    document.getElementById('projects-content').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});

    document.getElementById('home-line').style.display = 'none';
    document.getElementById('about-line').style.display = 'none';
    document.getElementById('contact-line').style.display = 'none';
});

contact.addEventListener('click', ()=> {
    document.getElementById('contact-line').style.display = 'block';
    document.getElementById('contact-content').scrollIntoView({behavior: 'smooth', block: 'start', inline: 'center'});

    document.getElementById('home-line').style.display = 'none';
    document.getElementById('about-line').style.display = 'none';
    document.getElementById('projects-line').style.display = 'none';
});

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