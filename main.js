$(document).ready(function() {
    var pastries = [
     
        {
            name: "cakes",
               category: "sweet",
            price: "50.00dt",
            images: ["IMG-20240520-WA0013.jpg", "IMG-20240520-WA0016.jpg","IMG-20240520-WA0017.jpg","IMG-20240520-WA0018.jpg"]
        },
        {
            name: "salty prestige",
            category: "salty",
            price: "140.50dt",
            images: ["IMG-20240520-WA0014.jpg", "IMG-20240520-WA0024.jpg","IMG-20240520-WA0025.jpg","IMG-20240520-WA0021.jpg"]
        },
       
    ];

    $('.change-pic').click(function() {
        var pastry = $(this).closest('.pastry');
        var index = pastry.index(); 
        var img = pastry.find('.pastry-img');
        var currentSrc = img.attr('src');

        var newSrc;
        if (currentSrc === pastries[index].images[0]) {
            newSrc = pastries[index].images[1];
        } else if (currentSrc === pastries[index].images[1]) {
            newSrc = pastries[index].images[2];
        } else if (currentSrc === pastries[index].images[2]) {
            newSrc = pastries[index].images[3];
        } else {
            newSrc = pastries[index].images[0];
        }
        img.attr('src', newSrc);

        var pastryDetails = pastry.find('.pastry-details');
        pastryDetails.find('h2').text(pastries[index].name);
        pastryDetails.find('p:eq(0)').text('Category: ' + pastries[index].category);
        pastryDetails.find('.price').text(pastries[index].price);
    });

});



  $("#btn").click(function(){
      $("#order").toggle()
 })