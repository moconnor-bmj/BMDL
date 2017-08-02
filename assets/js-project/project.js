$(function () {

  // project js
  Holder.addTheme('gray', {
    bg: '#757575',
    fg: 'rgba(255,255,255,.7)',
    font: 'Helvetica',
    fontweight: 'normal'
  });

});

// Search Box (components library - temporary)
'use strict';

$(function() {

  $('.search-input input').blur(function() {

    if ($(this).val()) {
      $(this)
        .find('~ label, ~ span:nth-of-type(n+3)')
        .addClass('not-empty');
    } else {
      $(this)
        .find('~ label, ~ span:nth-of-type(n+3)')
        .removeClass('not-empty');
    }
  });

  $('.search-input input ~ span:nth-of-type(4)').click(function() {
    $('.search-input input').val('');
    $('.search-input input')
      .find('~ label, ~ span:nth-of-type(n+3)')
      .removeClass('not-empty');
  });

});

// Readmore for topic pages
$(document).ready(function() {
    // Configure/customize these variables.
    var showChar = 266;  // How many characters are shown by default
    var ellipsestext = "...";
    var moretext = "READ MORE";
    var lesstext = "READ LESS";
    

    $('.more').each(function() {
        var content = $(this).html();
 
        if(content.length > showChar) {
 
            var c = content.substr(0, showChar);
            var h = content.substr(showChar, content.length - showChar);
 
            var html = c + '<span class="moreellipses">' + ellipsestext+ '&nbsp;</span><span class="morecontent"><span>' + h + '</span>&nbsp;&nbsp;<a href="" class="morelink">' + moretext + '</a></span>';
 
            $(this).html(html);
        }
 
    });
 
    $(".morelink").click(function(){
        if($(this).hasClass("less")) {
            $(this).removeClass("less");
            $(this).html(moretext);
        } else {
            $(this).addClass("less");
            $(this).html(lesstext);
        }
        $(this).parent().prev().toggle();
        $(this).prev().toggle();
        return false;

    });
});

// View all
$(function () {

    var active = true;

    $('#collapse-init').click(function () {
        if (active) {
            active = false;
            $('.collapse').collapse('show');
            $('.card-header').attr('data-toggle', '');
            $(this).html('Hide all <span class="material-icons">&#xE5CE;</span>');
        } else {
            active = true;
            $('.collapse').collapse('hide');
            $('.card-header').attr('data-toggle', 'collapse');
            $(this).html('View all <span class="material-icons">&#xE5CF;</span>');
        }
    });
    
    $('#accordion').on('show.bs.collapse', function () {
        if (active) $('#accordion .in').collapse('hide');
    });
    $('#accordion2').on('show.bs.collapse', function () {
        if (active) $('#accordion2 .in').collapse('hide');
    });

});