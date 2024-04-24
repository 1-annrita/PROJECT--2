var index = 0;

show_image(index);

function show_image(i){
    index += i;

    var images = document.getElementsByClassName("image");

    var dots =  document.getElementsByClassName("dots");

    // BLOCK ALL IMAGES FROM SHOWING UP ON THE SCREEN
    // EVERY TIME THE USER CLICKS ON THE NEXT OR PREVIOUS BUTTON
    // ALL OF THE IMAGES REAPPEAR ON THE SCREEN
    // WE HAVE TO BLOCK THEM EACH TIME
    for(i = 0; i < images.length;  i++)
        images[i].style.display = "none";

    for(i = 0; i < dots.length; i++)
        dots[i].className = dots[i].className.replace("active","");

    // USER ON LAST IMAGE->CLICKS NXT->SEND THEM TO THE BEGINNING
    if(index>images.length - 1)
        index = 0;

    // USER ON 1ST IMAGE->CLICKS PREV->SEND THEM TO THE LAST IMAGE
    if(index< 0)
        index = images.length-1;

    images[index].style.display = "block";
    dots[index].className += "active";


}