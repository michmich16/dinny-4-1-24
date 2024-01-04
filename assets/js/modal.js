// THE JAVASCRIPT

// cookie modal
let cookieModal = document.getElementById("Cookie_container")
document.getElementById("Cookie_container").style.display ="block";
document.getElementById("myBody").classList.toggle("noScroll");


// displayModal("Cookie_container");


function displayModal(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById("myBody").classList.toggle("noScroll");

}


function displayGallery(id, src, desc) {
    document.getElementById(id).style.display = "block";
    document.getElementById("desc").innerHTML = desc;
    document.getElementById("myBody").classList.toggle("noScroll");
}


function closeModal(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("myBody").classList.toggle("noScroll");
}


//Reset scroll top found on stackoverflow
// history.scrollRestoration = "manual";

// $(window).on('beforeunload', function(){
//       $(window).scrollTop(0);
// });