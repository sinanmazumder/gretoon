// search keyword suggest
jQuery('document').ready(function () {
    jQuery(function () {
        var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme",
      "Fiverr",
     "Episode",
     "List"
    ];

        function split(val) {
            return val.split(/,\s*/);
        }

        function extractLast(term) {
            return split(term).pop();
        }

        jQuery("#tags")
            // don't navigate away from the field on tab when selecting an item
            .on("keydown", function (event) {
                if (event.keyCode === jQuery.ui.keyCode.TAB &&
                    jQuery(this).autocomplete("instance").menu.active) {
                    event.preventDefault();
                }
            })
            .autocomplete({
                minLength: 0,
                source: function (request, response) {
                    // delegate back to autocomplete, but extract the last term
                    response(jQuery.ui.autocomplete.filter(
                        availableTags, extractLast(request.term)));
                },
                focus: function () {
                    // prevent value inserted on focus
                    return false;
                },
                select: function (event, ui) {
                    var terms = split(this.value);
                    // remove the current input
                    terms.pop();
                    // add the selected item
                    terms.push(ui.item.value);
                    // add placeholder to get the comma-and-space at the end
                    terms.push("");
                    this.value = terms.join(", ");
                    return false;
                }
            });
    });


    jQuery('.bel12').click(function () {
        jQuery('.npopup').slideToggle();
        jQuery('.arrow').toggle();
    });

    jQuery('.w15 .box button').click(function () {
        jQuery(this).toggleClass('activeq');
        jQuery('.subs-noti').toggle();
    });

    jQuery('.subs-noti .cross').click(function () {
        jQuery('.subs-noti').hide();
    });
    $(".header .content input").click(function () {
        $(".header .content form .src").hide();
        $(".header .content form .crs").show();
        $(".overlay").show();
    }); 
    $(".overlay").click(function () {
        $(".header .content form .src").show();
        $(".header .content form .crs").hide();
        $(".overlay").hide();
    });
    $(".user #dropdownMenuButton").click(function () {
        $(this).toggleClass('acr');
    });
});




jQuery(function () {
    jQuery(".profile-area #tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
    jQuery(".profile-area #tabs li").removeClass("ui-corner-top").addClass("ui-corner-left");
});




jQuery(document).ready(function () {
    jQuery.validator.addMethod('date', function (value, element, param) {
        return (value != 0) && (value <= 31) && (value == parseInt(value, 10));
    }, 'Please enter a valid date!');
    jQuery.validator.addMethod('month', function (value, element, param) {
        return (value != 0) && (value <= 12) && (value == parseInt(value, 10));
    }, 'Please enter a valid month!');
    jQuery.validator.addMethod('year', function (value, element, param) {
        return (value != 0) && (value >= 1900) && (value == parseInt(value, 10));
    }, 'Please enter a valid year not less than 1900!');
    jQuery.validator.addMethod('username', function (value, element, param) {
        var nameRegex = /^[a-zA-Z0-9]+jQuery/;
        return value.match(nameRegex);
    }, 'Only a-z, A-Z, 0-9 characters are allowed');

    var val = {
        // Specify validation rules
        rules: {
            fname: "required",
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 5,
                maxlength: 5,
                digits: true
            },
            date: {
                date: true,
                required: true,
                minlength: 2,
                maxlength: 2,
                digits: true
            },
            month: {
                month: true,
                required: true,
                minlength: 2,
                maxlength: 2,
                digits: true
            },
            year: {
                year: true,
                required: true,
                minlength: 4,
                maxlength: 4,
                digits: true
            },
            username: {
                username: true,
                required: true,
                minlength: 4,
                maxlength: 16,
            },
            password: {
                required: true,
                minlength: 8,
                maxlength: 16,
            }
        },
        // Specify validation error messages
        messages: {
            fname: "Enter Valid Phone Number",
            email: {
                required: "Email is required",
                email: "Please enter a valid e-mail",
            },
            phone: {
                required: "Enter the Code",
                minlength: "Not a valid validation code. Please check the number again",
                maxlength: "Please enter 5 digit mobile number",
                digits: "Only numbers are allowed in this field"
            },
            date: {
                required: "Date is required",
                minlength: "Date should be a 2 digit number, e.i., 01 or 20",
                maxlength: "Date should be a 2 digit number, e.i., 01 or 20",
                digits: "Date should be a number"
            },
            month: {
                required: "Month is required",
                minlength: "Month should be a 2 digit number, e.i., 01 or 12",
                maxlength: "Month should be a 2 digit number, e.i., 01 or 12",
                digits: "Only numbers are allowed in this field"
            },
            year: {
                required: "Year is required",
                minlength: "Year should be a 4 digit number, e.i., 2018 or 1990",
                maxlength: "Year should be a 4 digit number, e.i., 2018 or 1990",
                digits: "Only numbers are allowed in this field"
            },
            username: {
                required: "Id is required",
                minlength: "Id should be minimum 4 characters",
                maxlength: "Id should be maximum 16 characters",
            },
            password: {
                required: "Password is required",
                minlength: "Password should be minimum 8 characters",
                maxlength: "Password should be maximum 16 characters",
            }
        }
    }
    jQuery("#myForm").multiStepForm({
        // defaultStep:0,
        beforeSubmit: function (form, submit) {
            console.log("called before submiting the form");
            console.log(form);
            console.log(submit);
        },
        validations: val,
    }).navigateTo(0);
});


function vali() {
    var bool = true;

    var checkedCount = jQuery('input[class="gender"]:checked').length;
    if (checkedCount == 0) {
        jQuery("#textspan").addClass('act');
        jQuery("#textspan").html('Please agree on the required items');
        bool = false;
    }
    if (checkedCount >= 1) {
        jQuery("#textspan").html('');
        bool = true;
    }

    return bool;
}




jQuery('document').ready(function () {
    jQuery('.rate ul li').click(function () {
        jQuery(this).toggleClass('actv')
    });


    // upload validation
    jQuery(document).ready(function () {
        jQuery('input[type="file"]').imageuploadify();
    });

    jQuery('#addButton').click(function () {
        var avatar = jQuery("#avatarupload").val();
        var extension = avatar.split('.').pop().toUpperCase();
        if (avatar.length < 1) {
            avatarok = 0;
        } else if (extension != "PNG" && extension != "JPG" && extension != "GIF" && extension != "JPEG") {
            avatarok = 0;
            alert("invalid extension " + extension);
        } else {
            avatarok = 1;
        }
        if (avatarok == 1) {
            jQuery('.formValidation').addClass("sending");
            jQuery("#form").submit();
        } else {
            jQuery('.formValidation').addClass("validationError");
        }
        return false;
    });
});





// thumbnail upload

var btnUpload = jQuery("#upload_file"),
    btnOuter = jQuery(".button_outer");
btnUpload.on("change", function (e) {
    var ext = btnUpload.val().split('.').pop().toLowerCase();
    if (jQuery.inArray(ext, ['gif', 'png', 'jpg', 'jpeg']) == -1) {
        jQuery(".error_msg").text("Not an Image...");
    } else {
        jQuery(".error_msg").text("");
        btnOuter.addClass("file_uploading");
        setTimeout(function () {
            btnOuter.addClass("file_uploaded");
        }, 3000);
        var uploadedFile = URL.createObjectURL(e.target.files[0]);
        setTimeout(function () {
            jQuery("#uploaded_view").append('<img src="' + uploadedFile + '" />').addClass("show");
        }, 3500);
    }
});
jQuery(".file_remove").on("click", function (e) {
    jQuery("#uploaded_view").removeClass("show");
    jQuery("#uploaded_view").find("img").remove();
    btnOuter.removeClass("file_uploading");
    btnOuter.removeClass("file_uploaded");
});



//pricing toggle
$(document).ready(function () {
    $(".js-pricing-switcher").click(function () {
        $(".pricing-plan .hide").toggle();
    });
    $(".js-pricing-switcher").click(function () {
        $(".pricing-plan .show").toggle();
    });


    $('.esies').click(function () {
        $('.series-popup').fadeIn();
    });
    $('.series-popup .popup .cross').click(function () {
        $('.series-popup').fadeOut();
    });
    
    
    
    $('.publish').click(function(){
        $('.upopup').fadeIn();
        $('.upopup2').fadeOut();
    });
    $('.cross').click(function(){
       $('.upopup').fadeOut(); 
    });
    $('.upload-content .bar button').click(function(){
        $('.upopup2').fadeIn();
    });
    $('.cross').click(function(){
       $('.upopup2').fadeOut(); 
    });
});
