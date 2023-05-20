//click sliding  
    var heroImage = document.getElementById('heroImage');
    var sliderBoxImage = document.getElementById('slider-box-image');
    console.log(sliderBoxImage)
    var images = ['slide1.jpg','slide2.jpg','slide3.jpg','slide4.jpg'];
    let i = 0;
    let len = images.length;

    function showNext(){    
        if(i < len)  
        {   i++;
            console.log(i)
        }        
        
        else 
        {
            i = 0;   
            i++;
            console.log(i)
        }
        console.log(i)
        console.log(images[i-1])       
        return setImage();
    }

    function setImage(){        
        setSliderBoxImage();
        fillQuarter()
        return heroImage.src='./images/'+images[i-1]       
    }
    function setSliderBoxImage(){
        sliderBoxImage.src='./images/'+images[i]
        console.log(sliderBoxImage)
        return sliderBoxImage.src='./images/'+images[i]
    }

    var clicks = 0;
    var box = document.getElementById('box');

    function fillQuarter() {
    clicks++;
    console.log("clicked"+clicks)
    if (clicks === 1) {
        box.classList.remove('quarter-border');
        box.classList.add('quarter-border-1');
    } else if (clicks === 2) {
        box.classList.remove('quarter-border-1');
        box.classList.add('quarter-border-2');
    } else if (clicks === 3) {
        box.classList.remove('quarter-border-2');
        box.classList.add('quarter-border-3');
    } else if (clicks === 4) {
        box.classList.remove('quarter-border-3');
        box.classList.add('full-border');
    }
    }

    // Autoplay functionality
    var intervalId = setInterval(showNext, 3500); 


