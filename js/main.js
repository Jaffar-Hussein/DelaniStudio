$(document).ready(function () {
    // design toggle image
    $('#design_icon,#design').click(function () {
        $('#design_icon').toggle();
        $('#design').toggle();
    })
    // development toggle
    $('#dev_icon,#development').click(function () {
        $('#dev_icon').toggle();
        $('#development').toggle();
    })
    // Product management
    $('#products_icon,#products').click(function () {
        $('#products').toggle();
        $('#products_icon').toggle();

    })
    // Portfolio Page Functionality
    $('#portfolio').children().children().hover(function () {
        $('img', this).toggleClass('blurry_effect');
        $('p', this).toggle();

    })
    // Form validation
    $('#mc-embedded-subscribe-form').submit(function (e) {
        e.preventDefault();

        function validateEmail(mail) {
            let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            if (mail.match(regex)) {
                return (true);
            } else {
                return (false);
            }
        }
        var fname = $('#name').val();
        var mail = $('#email').val();
        var message = $('#text').val();

        if (fname === '') {
            alert("Please input your name");
            return
        } else if (mail === '') {
            alert('Please input your mail address');
            return
        } else if (validateEmail(mail) === false) {
            alert('Input an appropriate email');
            return
        } else if (message === '') {
            alert('Please leave us a message ')
        }


    })

})