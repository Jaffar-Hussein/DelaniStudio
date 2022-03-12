$(document).ready(function(){
    // design toggle image
    $('#design_icon,#design').click(function(){
        $('#design_icon').toggle();
        $('#design').toggle();
    })
    // development toggle
    $('#dev_icon,#development').click(function(){
        $('#dev_icon').toggle();
        $('#development').toggle();
    })
    // Product management
    $('#products_icon,#products').click(function(){
        $('#products').toggle();
        $('#products_icon').toggle();

    })
})