function validateEmail () {
    let emailInput = document.getElementById('inputEmail');
    let emailErrorMsg = document.getElementById('emailErrorMsg');
    let userInformation = document.getElementById('userInformation');
    let emailForm = document.getElementById('emailForm');
    var mailformat = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailInput.value.match(mailformat)) {
        emailErrorMsg.style.display = 'none';
        emailForm.style.display = 'none';
        userInformation.style.display = 'block';
    } else {
        emailErrorMsg.style.display = 'block'
    }
}

window.onload=function(){
    var viewMores = document.getElementsByClassName('view-more');
    for(let i = 0; i < viewMores.length; i++) {
        viewMores[i].addEventListener('click', e => {
            var inner = viewMores[i].innerHTML;
            if (inner === "View less") {
                var parentContainer = viewMores[i].closest('.container-item')
                var content = parentContainer.getElementsByClassName('content');
                content[0].style.display = 'none';
                viewMores[i].innerHTML = 'View more'
            } else {
                var parentContainer = viewMores[i].closest('.container-item')
                var content = parentContainer.getElementsByClassName('content');
                content[0].style.display = 'block';
                viewMores[i].innerHTML = 'View less'
            }
        })
    }
}