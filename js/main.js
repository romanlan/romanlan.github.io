var myImage = document.querySelector('.imgBox li a');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'img/banner/2.jpg') {
      myImage.setAttribute('src', 'img/banner/1.jpg');
    } else {
      myImage.setAttribute('src', 'img/banner/2.jpg');
    }
}