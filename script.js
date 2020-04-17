
window.addEventListener('scroll', function(e) {
    let last_known_scroll_position = window.scrollY;
    if (scrollY > 530) {
        document.getElementById("nav").className = "nav-onscroll";
    }else{
        document.getElementById("nav").className = "";
    }
});

function onSubmit() {
    event.preventDefault();
    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    if(fname == ""){

    }else{

    }
    alert('Thanks for your contact ' + fname +' We have received your email: '+ email);
}