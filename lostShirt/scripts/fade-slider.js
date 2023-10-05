(function(){
    const slides = document.querySelectorAll('.fade-slider_item');
    const activeClass = "fade-slider_item-visible";
    let index = 0;
    setInterval(function(){
        slides[index].classList.remove(activeClass);
        index++;
        if(index+1 > slides.length){
            index=0;
        }
        slides[index].classList.add(activeClass);
    }, 5000);
}())