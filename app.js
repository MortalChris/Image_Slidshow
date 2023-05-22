function start(){
    // // =======================================================
    const prevButton = document.getElementById("previous-button");
    const nextButton = document.getElementById("next-button");
    // =======================================================
    const dotbuttonOne = document.getElementById("dot-button-1");
    const dotbuttonTwo = document.getElementById("dot-button-2");
    const dotbuttonThree = document.getElementById("dot-button-3");
    // =======================================================
    prevButton.addEventListener("click",() => {
        plusSlides(-1);
    })
    nextButton.addEventListener("click",() => {
        plusSlides(1);
    })

    dotbuttonOne.addEventListener("click",() => {
        currentSlides(1);
    })
    dotbuttonTwo.addEventListener("click",() => {
        currentSlides(2);
    })
    dotbuttonThree.addEventListener("click",() => {
        currentSlides(3);
    })


    let slideShowIndex = 1;
    showSlides(slideShowIndex);

    //Next/prev controls
    function plusSlides(n){
        showSlides(slideShowIndex += n)
    }

    //Thumbnail image controls
    function currentSlides(n){
        showSlides(slideShowIndex = n)
    }


    setInterval(function(){plusSlides(1)}, 5000);


    function showSlides(n){
        let i;
        let slides = document.getElementsByClassName("all-image-div");
        let dots = document.getElementsByClassName("dots");
        console.log(n);
        if (n > slides.length) {slideShowIndex = 1}
        if (n < 1) {slideShowIndex = slides.length}

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }

        slides[slideShowIndex-1].style.display = "flex";
        dots[slideShowIndex-1].className += " active";
    }
};
start();



// nextButton.addEventListener("click", () =>{
    //     i++
    //     allImages.style.display = "block";
    //     imageArray[i].style.display = "block";
    //     console.log("hi");
    // });