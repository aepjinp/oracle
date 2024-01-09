document.addEventListener('DOMContentLoaded', function() {
    var divs = document.querySelectorAll('.block-4');
    var contents = document.querySelectorAll('.mini-block-4');

    divs.forEach(function(div, index) {
        div.addEventListener('click', function() {
            contents.forEach(function(content, contentIndex) {
                if (index === contentIndex) {
                    if (content.style.display === 'block') {
                        content.style.display = 'none';
                        divs.innerHTML = '-'
                    } else {
                        content.style.display = 'block';
                        divs.innerHTML = '+ '

                    }
                } else {
                    content.style.display = 'none';
                }
            });
        });
    });
});
