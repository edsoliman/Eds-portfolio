function showAbout() {
    $('main').on('click', '#about_button', function(event) {
        $('main').find('#main_container_home').hide();
        $('main').find('#main_container_about').show();
    });
};

function showProjects() {
    $('main').on('click', '#projects_button', function(event) {
        $('main').find('#main_container_home').hide();
        $('main').find('#main_container_projects').show();
    });
};

function showContact() {
    $('main').on('click', '#contact_button', function(event) {
        $('main').find('#main_container_home').hide();
        $('main').find('#main_container_contact').show();
    });
};

function showHideLogic() {
    showAbout();
    showProjects();
    showContact();
};

$(showHideLogic);