$(document).ready(function() {
    $('#sidebarCollapse').on('click', function() {
        $('#sidebar').toggleClass('active visible');
        $('#sidebarCollapse').toggleClass('open');
    });
});
