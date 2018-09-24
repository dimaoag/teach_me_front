$(function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 100, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
            $( "#amount1" ).val(ui.values[ 0 ]);
            $( "#amount2" ).val(ui.values[ 1 ]);
        }
    });
    $( "#amount" ).html( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});

$('.filter-header').on('click', function () {
    $(this).find( ".toggle" ).toggle(10,function() {
        $(this).find('.fa-plus').show();
        $(this).find('.fa-minus').hide();
    });
});

$(document).ready(function () {
    $('.dws-form').on('click', '.tab', function () {
        $('.dws-form').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.tab-form').eq($(this).index()).addClass(' active');
    });
});

//mask
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){var b,c=navigator.userAgent,d=/iphone/i.test(c),e=/chrome/i.test(c),f=/android/i.test(c);a.mask={definitions:{9:"[0-9]",a:"[A-Za-z]","*":"[A-Za-z0-9]"},autoclear:!0,dataName:"rawMaskFn",placeholder:"_"},a.fn.extend({caret:function(a,b){var c;if(0!==this.length&&!this.is(":hidden"))return"number"==typeof a?(b="number"==typeof b?b:a,this.each(function(){this.setSelectionRange?this.setSelectionRange(a,b):this.createTextRange&&(c=this.createTextRange(),c.collapse(!0),c.moveEnd("character",b),c.moveStart("character",a),c.select())})):(this[0].setSelectionRange?(a=this[0].selectionStart,b=this[0].selectionEnd):document.selection&&document.selection.createRange&&(c=document.selection.createRange(),a=0-c.duplicate().moveStart("character",-1e5),b=a+c.text.length),{begin:a,end:b})},unmask:function(){return this.trigger("unmask")},mask:function(c,g){var h,i,j,k,l,m,n,o;if(!c&&this.length>0){h=a(this[0]);var p=h.data(a.mask.dataName);return p?p():void 0}return g=a.extend({autoclear:a.mask.autoclear,placeholder:a.mask.placeholder,completed:null},g),i=a.mask.definitions,j=[],k=n=c.length,l=null,a.each(c.split(""),function(a,b){"?"==b?(n--,k=a):i[b]?(j.push(new RegExp(i[b])),null===l&&(l=j.length-1),k>a&&(m=j.length-1)):j.push(null)}),this.trigger("unmask").each(function(){function h(){if(g.completed){for(var a=l;m>=a;a++)if(j[a]&&C[a]===p(a))return;g.completed.call(B)}}function p(a){return g.placeholder.charAt(a<g.placeholder.length?a:0)}function q(a){for(;++a<n&&!j[a];);return a}function r(a){for(;--a>=0&&!j[a];);return a}function s(a,b){var c,d;if(!(0>a)){for(c=a,d=q(b);n>c;c++)if(j[c]){if(!(n>d&&j[c].test(C[d])))break;C[c]=C[d],C[d]=p(d),d=q(d)}z(),B.caret(Math.max(l,a))}}function t(a){var b,c,d,e;for(b=a,c=p(a);n>b;b++)if(j[b]){if(d=q(b),e=C[b],C[b]=c,!(n>d&&j[d].test(e)))break;c=e}}function u(){var a=B.val(),b=B.caret();if(o&&o.length&&o.length>a.length){for(A(!0);b.begin>0&&!j[b.begin-1];)b.begin--;if(0===b.begin)for(;b.begin<l&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}else{for(A(!0);b.begin<n&&!j[b.begin];)b.begin++;B.caret(b.begin,b.begin)}h()}function v(){A(),B.val()!=E&&B.change()}function w(a){if(!B.prop("readonly")){var b,c,e,f=a.which||a.keyCode;o=B.val(),8===f||46===f||d&&127===f?(b=B.caret(),c=b.begin,e=b.end,e-c===0&&(c=46!==f?r(c):e=q(c-1),e=46===f?q(e):e),y(c,e),s(c,e-1),a.preventDefault()):13===f?v.call(this,a):27===f&&(B.val(E),B.caret(0,A()),a.preventDefault())}}function x(b){if(!B.prop("readonly")){var c,d,e,g=b.which||b.keyCode,i=B.caret();if(!(b.ctrlKey||b.altKey||b.metaKey||32>g)&&g&&13!==g){if(i.end-i.begin!==0&&(y(i.begin,i.end),s(i.begin,i.end-1)),c=q(i.begin-1),n>c&&(d=String.fromCharCode(g),j[c].test(d))){if(t(c),C[c]=d,z(),e=q(c),f){var k=function(){a.proxy(a.fn.caret,B,e)()};setTimeout(k,0)}else B.caret(e);i.begin<=m&&h()}b.preventDefault()}}}function y(a,b){var c;for(c=a;b>c&&n>c;c++)j[c]&&(C[c]=p(c))}function z(){B.val(C.join(""))}function A(a){var b,c,d,e=B.val(),f=-1;for(b=0,d=0;n>b;b++)if(j[b]){for(C[b]=p(b);d++<e.length;)if(c=e.charAt(d-1),j[b].test(c)){C[b]=c,f=b;break}if(d>e.length){y(b+1,n);break}}else C[b]===e.charAt(d)&&d++,k>b&&(f=b);return a?z():k>f+1?g.autoclear||C.join("")===D?(B.val()&&B.val(""),y(0,n)):z():(z(),B.val(B.val().substring(0,f+1))),k?b:l}var B=a(this),C=a.map(c.split(""),function(a,b){return"?"!=a?i[a]?p(b):a:void 0}),D=C.join(""),E=B.val();B.data(a.mask.dataName,function(){return a.map(C,function(a,b){return j[b]&&a!=p(b)?a:null}).join("")}),B.one("unmask",function(){B.off(".mask").removeData(a.mask.dataName)}).on("focus.mask",function(){if(!B.prop("readonly")){clearTimeout(b);var a;E=B.val(),a=A(),b=setTimeout(function(){B.get(0)===document.activeElement&&(z(),a==c.replace("?","").length?B.caret(0,a):B.caret(a))},10)}}).on("blur.mask",v).on("keydown.mask",w).on("keypress.mask",x).on("input.mask paste.mask",function(){B.prop("readonly")||setTimeout(function(){var a=A(!0);B.caret(a),h()},0)}),e&&f&&B.off("input.mask").on("input.mask",u),A()})}})});


((function ($) {
    $(function(){

        $(document).ready(function() {
            $("[data-mask='callback-catalog-phone']").mask("+3 80 9 9  9 9 9  9 9  9 9");
        });
    })
})(jQuery));


$('.open-popup-more_md').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

$('.open-popup-phones_md').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});

$('.center').slick({
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 300,
    prevArrow: $('.gallery-prev'),
    nextArrow: $('.gallery-next'),
    variableWidth: false,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }
    ],
});

$('.clip a').magnificPopup({
    type: 'image'
    // other options
});


$('.accordion-title').on('click', function () {
    $(this).find( ".toggle" ).toggle(10,function() {
        $(this).find('.fa-angle-up').show();
        $(this).find('.fa-angle-down').hide();
    });
});


$('.course-related-carousel').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: $('.related-prev'),
    nextArrow: $('.related-next'),
    variableWidth: false,
    autoplay:true,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});


$('.create-review').magnificPopup({
    type:'inline',
    midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
});


$('.favorite-toggle').on('click', function () {
    if ($(this).html().trim() == '<i class="fa fa-heart-o"></i>') {
        $(this).html('<i class="fa fa-heart"></i>');
    }
    else {
        $(this).html('<i class="fa fa-heart-o"></i>');
    }
    return false;
});

// function favoriteToggle(x) {
//     if (x.classList['value'] === "fa fa-heart-o"){
//         x.classList['value'] = 'fa';
//         x.classList.toggle("fa-heart");
//     } else {
//         x.classList.toggle("fa-heart");
//         x.classList['value'] = 'fa fa-heart-o';
//     }
// }

//feedback-form
$( ".feedback-form" ).submit(function( event ) {
    event.preventDefault();
    $.magnificPopup.open({
        items: {
            src: '#feedback_modal'
        },
        type: 'inline'
    });
});


$(document).ready(function () {
    $('.cabinet-company').on('click', '.tab-company', function () {
        $('.cabinet-company').find('.active').removeClass('active');
        $(this).addClass('active');
        $('.tab-cabinet-container').eq($(this).index()).addClass(' active');
    });
});



$(document).ready(function(){

    $('#btn_main_info').click(function(){

        var error_photo = '';
        var error_name = '';
        var error_city = '';
        var error_category = '';
        var error_price = '';
        var error_type_education = '';
        var error_form_education = '';
        var error_quantity_group = '';
        var error_level = '';
        var error_result = '';

        // var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var filter_price = /^[0-9.]{1,}$/;

        if($.trim($('.photo_course').val()).length == 0) {
            error_photo = 'Загрузите пожалуйста фото курса';
            $('#error_photo').text(error_photo);
        } else {
            error_photo = '';
            $('#error_photo').text(error_photo);
        }

        if($.trim($('#name').val()).length == 0) {
            error_name = 'Введите названия курса';
            $('#error_name').text(error_name);
        } else {
            error_name = '';
            $('#error_name').text(error_name);
        }

        if($('#city').val() == '0') {
            error_city = 'Выберите город';
            $('#error_city').text(error_city);
        } else {
            error_city = '';
            $('#error_city').text(error_city);
        }

        if($('#category').val() == '0') {
            error_category = 'Выберите категорию';
            $('#error_category').text(error_category);
        } else {
            error_category = '';
            $('#error_category').text(error_category);
        }

        if($.trim($('#price').val()).length == 0) {
            error_price = 'Введите цену курса';
            $('#error_price').text(error_price);
        } else {
            if (!filter_price.test($('#price').val())) {
                error_price = 'Введите коректную цену';
                $('#error_price').text(error_price);
            } else {
                error_price = '';
                $('#error_price').text(error_price);
            }
        }

        if($('#type_education').val() == '0') {
            error_type_education = 'Выберите тип курса';
            $('#error_type_education').text(error_type_education);
        } else {
            error_type_education = '';
            $('#error_type_education').text(error_type_education);
        }

        if($('#form_education').val() == '0') {
            error_form_education = 'Выберите форму курса';
            $('#error_form_education').text(error_form_education);
        } else {
            error_form_education = '';
            $('#error_form_education').text(error_form_education);
        }

        if($('#quantity_group').val() == '0') {
            error_quantity_group = 'Выберите групу';
            $('#error_quantity_group').text(error_quantity_group);
        } else {
            error_quantity_group = '';
            $('#error_quantity_group').text(error_quantity_group);
        }

        if($('#level').val() == '0') {
            error_level = 'Выберите уровень подготовки';
            $('#error_level').text(error_level);
        } else {
            error_level = '';
            $('#error_level').text(error_level);
        }

        if($('#result').val() == '0') {
            error_result = 'Выберите документ';
            $('#error_result').text(error_result);
        } else {
            error_result = '';
            $('#error_result').text(error_result);
        }


        if(error_photo != '' || error_name != '' || error_category != '' || error_city != '' || error_price != ''
            || error_type_education != '' || error_form_education != '' || error_quantity_group != ''
            || error_level != '' || error_result != '')
        {
            return false;
        }
        else
        {
            $('#list_main_info').removeClass('active active_tab1');
            $('#list_main_info').removeAttr('href data-toggle');
            $('#main_info').removeClass('active');
            $('#list_main_info').addClass('inactive_tab1');
            $('#list_description_info').removeClass('inactive_tab1');
            $('#list_description_info').addClass('active_tab1 active');
            $('#list_description_info').attr('href', '#description_info');
            $('#list_description_info').attr('data-toggle', 'tab');
            $('#description_info').addClass('active in');
        }
    });

    $('#previous_btn_description').click(function(){
        $('#list_description_info').removeClass('active active_tab1');
        $('#list_description_info').removeAttr('href data-toggle');
        $('#description_info').removeClass('active in');
        $('#list_description_info').addClass('inactive_tab1');
        $('#list_main_info').removeClass('inactive_tab1');
        $('#list_main_info').addClass('active_tab1 active');
        $('#list_main_info').attr('href', '#main_info');
        $('#list_main_info').attr('data-toggle', 'tab');
        $('#main_info').addClass('active in');
    });

    $('#btn_description').click(function(){
        var error_description = '';

        if($.trim($('#description').val()).length == 0) {
            error_description = 'Введите описание о курсе';
            $('#error_description').text(error_description);
        } else {
            error_description = '';
            $('#error_description').text(error_description);
        }

        if(error_description != '')
        {
            return false;
        }
    });

});


$("#photo_course").spartanMultiImagePicker({
    fieldName:  'photo_course',
    maxCount : 1,
});

$("#gallery").spartanMultiImagePicker({
    fieldName:  'galleryPhotos[]',
    maxCount : 10,
});

$("#photo_profile_company").spartanMultiImagePicker({
    fieldName:  'photo_profile_company',
    maxCount : 1,
    rowHeight : '200px',
    groupClassName : 'col-xs-6',
});

// $('.orders-slider-titles').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     fade: true,
//     asNavFor: '.orders-slider-container'
// });
// $('.orders-slider-container').slick({
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     // fade: true,
//     asNavFor: '.orders-slider-titles'
// });

$('.orders-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    adaptiveHeight: true
});