

const myGallery = ['Dinny-01.jpg', 'Dinny-02.jpg', 'Dinny-03.jpg', 'Dinny-04.jpg', 'Dinny-05.jpg', 'Dinny-06.jpg', 'Dinny-07.jpg', 'Dinny-08.jpg', 'Dinny-09.jpg'];

let myImageCount = 0;
let myGalleryElement = document.getElementById("gallery_image")

let myForwardButton = document.getElementById("gallery_forward")

myForwardButton.addEventListener('click', (e) => {

    myImageCount++;

    if (myImageCount >= myGallery.length) {
        myImageCount = 0;
    }
    showImage()
})

let myBackButton =document.getElementById("gallery_back")

myBackButton.addEventListener('click', (e) => {

    myImageCount--;

    if(myImageCount < 0) {
        myImageCount = myGallery.length -1
    }
    showImage()
})











showImage();

// vises billede i dom
function showImage(){
    let myURL = 'assets/images/GFX/' + myGallery[myImageCount];
    myGalleryElement.src = myURL;
}