// var currentPage = window.location.hash.substr(1);

// // Tìm liên kết có ID tương ứng với trang hiện tại và thêm lớp active
// var currentLink = document.getElementById(currentPage);
// if (currentLink) {
//     currentLink.classList.add('active');
// }


// var checkboxDarkMode = document.getElementById('checkbox');
// console.log(checkbox_toggle);
// checkbox_toggle.addEventListener("change", function() {
//     // Thêm hoặc xoá class 'dark' cho phần tử có ID là 'section'
//     console.log("Checkbox state changed!");
//     var section = document.getElementById('content');
//     section.classList.toggle('dark');S
// });


var checkboxDarkMode = document.getElementById('checkbox');
// console.log(checkboxDarkMode);
checkboxDarkMode.addEventListener('click', () => {
    if (checkboxDarkMode.checked == true) {
        document.body.classList.add("dark_theme");
     
        // clound
        document.querySelector('.clound').innerHTML = `<img class="animate__animated animate__fadeInLeft clound-left animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652852065/My-portfolio/clound-moon-left_jaocus_optimized_dmjzjr.png" alt="">
        <img class="animate__animated animate__fadeInRight clound-right animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652852066/My-portfolio/clound-moon_peb6rn_optimized_hzeqz3.png" alt="">`

        //logo
        document.querySelector('.logo').innerHTML = `<img class="animate__animated animate__fadeInLeft clound-left animate__delay-1s" src="https://res.cloudinary.com/dtceaigd3/image/upload/v1713158349/My-portfolio/logo2.png" alt="">`
     }
    else if (checkboxDarkMode.checked == false) {
        document.body.classList.remove("dark_theme");

        //clound
        document.querySelector('.clound').innerHTML = `  <img class="animate__animated animate__fadeInLeft clound-left animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652802792/My-portfolio/clound-left_optimized_xjoubm.png" alt="">
        <img class="animate__animated animate__fadeInRight clound-right animate__delay-1s" src="https://res.cloudinary.com/dvzingci9/image/upload/v1652802792/My-portfolio/clound-right_optimized_riwik8.png" alt="">`
         //logo
         document.querySelector('.logo').innerHTML = `<img class="animate__animated animate__fadeInLeft clound-left animate__delay-1s" src="https://res.cloudinary.com/dtceaigd3/image/upload/v1713157771/My-portfolio/logo.png" alt="">`
    }
})
