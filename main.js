function handleAboutButton() {
    $('main').on('click', '#about_button', function(event) {
        $('main').find('#main_container_home').hide();
        $('main').find('#main_container_about').show();
    });
};

function handleProjectsButton() {
    $('main').on('click', '#projects_button', function(event) {
        $('main').find('#main_container_home').hide();
        $('main').find('#main_container_projects').show();
    });
};

function handleContactButton() {
    $('main').on('click', '#contact_button', function(event) {
        $('main').find('#main_container_home').hide();
        $('main').find('#main_container_contact').show();
    });
};

function handleEdsPortfolio() {
    handleAboutButton();
    handleProjectsButton();
    handleContactButton();
};

$(handleEdsPortfolio);