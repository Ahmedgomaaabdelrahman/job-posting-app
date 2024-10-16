
 



// Handle profile and burger menu clicks with vanilla js not jQuery
const slideLinks = document.querySelectorAll('.profile-link, .burger-menu')
const profileDropDown = document.querySelector('.profile-dropdown')
const mainContainer = document.querySelector('main')
slideLinks.forEach((link) => {
    link.addEventListener('click' , () => {
        profileDropDown.classList.toggle('open');
        mainContainer.classList.add('overlay')
    })
})


// Handle dropdown toggle
$('.menu-item.dropdown').click(function() { 
    $(this).toggleClass('open');
});
 

// Handle overlay click by delegating the click event to the document
$(document).on('click', 'main.overlay', function() { 
    $(".profile-dropdown").removeClass('open'); 
    $('main').removeClass('overlay');
});

$('.side-bar-menu').click(function() { 
    $(".menu").addClass('open');
});

$('.back-btn-menu').click(function() {
    $(".menu").removeClass('open');
    $(' button.cancel-menu-changes , .edit-item, .show-item, .hide-item, .drag-drop-item, .not-visible, #menu-settings-actions').fadeOut();
    $('.menu-item-dropdown-icon, #cog-icon').fadeIn();  
})




// Handle sorting dropdown toggle
$('.sorting-by-container-title').click(function() { 
    $(this).toggleClass('open-dropdown');
    $(this).find('.chosen-sorting i').toggleClass('rotate-icon') 
    $(".sorting-by-dropdown-choices").toggleClass('open');
});


$('.sorting-by-dropdown-choices li a').click(function() { 
    $(this).parent().siblings().find('a').removeClass('active')
    $(this).addClass('active')
    const chosenText = $(this).text();
    $('.chosen-sorting').html(chosenText + '<i class="fa-solid fa-chevron-down"></i>')
    $('.sorting-by-container-title').removeClass('open-dropdown')
    $(".sorting-by-dropdown-choices").removeClass('open');
});


$(document).ready(function() {
    // Initially hide settings actions and edit/show/hide icons
    $('#menu-settings-actions').hide();
    $('.edit-item, .show-item, .hide-item, .drag-drop-item, .not-visible').hide();

    // When the click on cog icon.
    $('#cog-icon').click(function() {
        $('#cog-icon , .menu-item-dropdown-icon').fadeOut(500, function() {
            // Show the settings (check and close) icons
            $('#menu-settings-actions').fadeIn(500);
            $('button.cancel-menu-changes').fadeIn(500);
            
            $('.menu-item > div > span, .dropdown-content  div > span').fadeOut(500, function() { 
                $('.edit-item, .show-item, .hide-item, .drag-drop-item, .not-visible').fadeIn(500);
                $('.menu-item.dropdown').addClass('open');
                $(".job-app-text").text("Application");
                $('.menu-item > div > span').fadeIn(500);
                $('.dropdown-content  div > span').fadeIn(500);
                
            }); 
        });
    });

    
     $('#close-settings, .save-menu-changes , button.cancel-menu-changes').click(function() {
        $('#menu-settings-actions, button.cancel-menu-changes').fadeOut(500, function() { 
            $('#cog-icon').fadeIn(500);
            $('.menu-item > div > span , .dropdown-content div > span').fadeOut(500, function() { 
                $('.edit-item, .show-item, .hide-item, .drag-drop-item, .not-visible').fadeOut(500, function() {
                    $('.menu-item-dropdown-icon').fadeIn(500);
                }) 
                $(".job-app-text").text("Job application")
                $('.menu-item > div > span').fadeIn(500);
                $('.dropdown-content  div > span').fadeIn(500);
            }); 
        });
    }); 
    
});



