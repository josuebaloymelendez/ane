// Menu
window.onload = init;
const topnavButton = document.getElementById('sitenav_main_mobile_toggle');
const topnavDisplay = document.getElementById('sitenav_main');

function init() {
    topnavButton.onclick = toggleNav;
}

function toggleNav(){
    topnavDisplay.classList.toggle("open");
    topnavButton.classList.toggle("open");
}
function goBack() {
      window.history.back();
}

document.addEventListener('DOMContentLoaded', function() {
    $(function() {
        $('#sitenav_main').accessibleMegaMenu({
            openOnMouseover: true
        });
    });
});

// Modal
const modalTriggers = document.querySelectorAll('.popup-trigger')
const modalCloseTrigger = document.querySelector('.popup-modal__close')

modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        const { popupTrigger } = trigger.dataset
        const popupModal = document.querySelector(`[data-popup-modal="${popupTrigger}"]`)

        popupModal.classList.add('is--visible')
    
        popupModal.querySelector('.popup-modal__close').addEventListener('click', () => {
            popupModal.classList.remove('is--visible') 
        })
  })
})

// Mitos
const quizItem = '#quiz_container .qlink-item';
const quizAction = $('#quiz_container .action');

quizAction.each(function(){
    if($(this).hasClass('true')) {
        $(this).on('click', function() {
            $(this).closest(quizItem).addClass('quiz-true');
            $(this).closest(quizItem).removeClass('quiz-false');
            
            setTimeout(function() {
                $(quizItem).removeClass('quiz-true');
            }, 5000);
        }); 
    }
    if($(this).hasClass('false')) {
        $(this).on('click', function() {
            $(this).closest(quizItem).addClass('quiz-false');
            $(this).closest(quizItem).removeClass('quiz-true');
                         
            setTimeout(function() {
                $(quizItem).removeClass('quiz-false');
            }, 5000);
        });
    }
})

// Custom Select
for (const dropdown of document.querySelectorAll(".custom-select-item")) {
    dropdown.addEventListener('click', function () {
        this.querySelector('.custom-select').classList.toggle('open');
    })
}

for (const option of document.querySelectorAll(".custom-option")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.custom-option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.custom-select').querySelector('.custom-select__trigger span').textContent = this.textContent;
        }
    })
}

window.addEventListener('click', function (e) {
    for (const select of document.querySelectorAll('.custom-select')) {
        if (!select.contains(e.target)) {
            select.classList.remove('open');
        }
    }
});

// Tabs
$('ul.tabs').each(function(){
    var $active, $content, $links = $(this).find('a');
    $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
    $active.addClass('active');

    $content = $($active[0].hash);

    $links.not($active).each(function () {
        $(this.hash).hide();
    });

    $(this).on('click', 'a', function(e){
        $active.removeClass('active');
        $content.hide();

        $active = $(this);
        $content = $(this.hash);

        $active.addClass('active');
        $content.show();

        e.preventDefault();
    });
});