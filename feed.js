 document.getElementById("but").addEventListener("click", function()
                     {
           document.querySelector('.bg-modal').style.display= 'flex';
           document.body.style.overflow = "hidden";
           

});

document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display= 'none';
    document.body.style.overflow = "auto";
});
