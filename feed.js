 document.getElementById("but").addEventListener("click", function()
                     {
           document.querySelector('.bg-modal').style.display= 'flex';
           

});

document.querySelector('.close').addEventListener("click", function() {
    document.querySelector('.bg-modal').style.display= 'none';
});