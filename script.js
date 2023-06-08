
    //accordion

var acc = document.getElementsByClassName("question")

var i;
for   ( i=0; i < acc.length; i++ ){
    acc[i].addEventListener("click", function() {
         
        // toggle between adding and removing the active class
        this.classList.toggle("active");

        //toggle between hiding and showing the answer
        var answer = this.nextElementSibling;
        console.log(answer)
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            answer.style.display = "block";
        }
    })
}


// menu
let menu = document.querySelector('#menu');
let navbar = document.querySelector('.links' )

menu.onclick = () =>{
    navbar.classList.toggle('active');
}

navbar.onclick = () => {
    navbar.classList.remove('active');
}



window.onscroll = () =>{
    navbar.classList.remove('active');
}