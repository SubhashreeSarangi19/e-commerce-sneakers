const mainImages = document.querySelectorAll(".default .main-img img");
const thumbnails = document.querySelectorAll(".default .thumb-list div");
const lightboxMainImages = document.querySelectorAll(".lightbox .main-img img");
const lightboxThumbnails = document.querySelectorAll(".lightbox .thumb-list div");
const lightbox = document.querySelector('.lightbox');
const iconClose = document.querySelector('.icon-close');
const iconPrev = document.querySelector('.icon-prev');
const iconNext = document.querySelector('.icon-next');

let currIndex = 0;

thumbnails.forEach((thumb,index)=>{
    thumb.addEventListener('click',()=>{
        changeImage(index,mainImages,thumbnails);
    });
});

const changeImage = (index, mainImages, thumbnails)=>{
    mainImages.forEach((img)=>{
        img.classList.remove('active');
    });
    thumbnails.forEach((thumb)=>{
        thumb.classList.remove('active');
    });
    mainImages[index].classList.add('active');
    thumbnails[index].classList.add('active');
    currIndex = index;
};

//For LightBox
lightboxThumbnails.forEach((thumb,index)=>{
    thumb.addEventListener('click',()=>{
        changeImage(index,lightboxMainImages,lightboxThumbnails);
    });
});

mainImages.forEach((img,index)=>{
    img.addEventListener('click',()=>{
        lightbox.classList.add('active');
        changeImage(index,lightboxMainImages,lightboxThumbnails);
    });
});

iconPrev.addEventListener('click',()=>{
    if(currIndex <= 0){
        changeImage(mainImages.length-1, lightboxMainImages, lightboxThumbnails);
    }else{
        changeImage(currIndex-1, lightboxMainImages, lightboxThumbnails);
    }
})
iconNext.addEventListener('click',()=>{
    if(currIndex >= mainImages.length-1){
        changeImage(0, lightboxMainImages, lightboxThumbnails);
    }else{
        changeImage(currIndex+1, lightboxMainImages, lightboxThumbnails);
    }
})
iconClose.addEventListener('click',()=>{
    lightbox.classList.remove('active');
})