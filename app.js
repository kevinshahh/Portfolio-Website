(function () {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
            document.querySelector(".active").classList.remove("active");
            document.getElementById(button.dataset.id).classList.add("active");
        })
    });
    document.querySelector(".theme-btn").addEventListener("click", () => {
        document.body.classList.toggle("light-mode");
    })
})();

// (function () {
//     // Existing code for button click
//     [...document.querySelectorAll(".control")].forEach(button => {
//         button.addEventListener("click", function() {
//             document.querySelector(".active-btn").classList.remove("active-btn");
//             this.classList.add("active-btn");
//             document.querySelector(".active").classList.remove("active");
//             document.getElementById(button.dataset.id).classList.add("active");
//         })
//     });

//     // Dropdown functionality
//     $('.sub-dropdown-content a').click(function(e) {
//         e.preventDefault();
//         var selectedSkill = $(this).text();
//         var parentSkill = $(this).parent().siblings('.sub-dropbtn').text();
//         $('#selected-skill').text(parentSkill + ' (' + selectedSkill + ')');
//         // Additional code to update progress bar or perform other actions based on the selected skill
//     });

//     // Toggle light/dark mode
//     document.querySelector(".theme-btn").addEventListener("click", () => {
//         document.body.classList.toggle("light-mode");
//     });    
// })();