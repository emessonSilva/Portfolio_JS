
let themeEnabled = false;

function changeTheme() {
    themeEnabled = !themeEnabled;
    const sectionContact = document.querySelector('.section-contact');
    const sectionHome = document.querySelector('.section-home');
    const buttons = document.querySelectorAll('.btn');

    if (themeEnabled) {
        sectionContact.classList.add('changed-theme');
        sectionHome.classList.add('changed-theme');
        buttons.forEach(button => button.classList.add('changed-theme-button'));

    } else {
        sectionContact.classList.remove('changed-theme');
        sectionHome.classList.remove('changed-theme');
        buttons.forEach(button => button.classList.remove('changed-theme-button'));

    }
}


  