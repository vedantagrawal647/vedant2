const a2Elements = document.querySelectorAll('.eles');
const cards=document.querySelectorAll('.carder');
console.log(a2Elements);
const imagy=document.getElementById("img1");
cards.forEach((element) => {
    element.addEventListener('click', function() 
    {
        const eles = element.querySelector(".eles");
        console.log(eles.dataset.imagurl);
        imagy.src=eles.dataset.imagurl;
        
        a2Elements.forEach((el) => {
            el.classList.remove('a2');
        });
        eles.classList.add('a2');
    });
    
});
