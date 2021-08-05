$(function () {
    
    $('.tabs_pop li').on('click', function () {
        var tabId = $(this).attr('data-tab1')
        $('.tabs_pop li').removeClass('current2')
        $('.tab-pane_pop').removeClass('current2')
        $(this).addClass('current2')
        $('#' + tabId).addClass('current2')
    })
})
