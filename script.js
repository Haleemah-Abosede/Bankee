
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


// another one

// DOM here
// let nav = document.querySelector(".eight");

// // Handlers here
// const clickHandler = function (e) {
//   if (e.target.classList.contains("question")) {
//     const link = e.target; // clicked link

//     const siblings = link.closest(".eight").querySelectorAll(".question");

//     link.classList.toggle("active");
//     link.children[0].classList.toggle("answer");

//     // removes all actives except for the clicked one
//     siblings.forEach((el) => {
//       if (el !== link) {
//         el.classList.remove("active");
//         el.children[0].classList.add("answer");
//       }
//     });
//   }
// };

// // Listeners here
// nav.addEventListener("click", clickHandler);

