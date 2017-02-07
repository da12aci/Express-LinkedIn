$(() => {//AJAX method that is used to post the LinkdeIn APi on to the page
        $.ajax({
            method: "POST",
            url: "/get-profile",
            })
        .then((results) =>{
            console.log(results);
            if (results != "Nothing"){
                $("#linkData").append(`<p>${results.formattedName}</p>`);
                $("#linkData").append(`<p>${results.industry}</p>`);
                $("#linkData").append(`<p>${results.headline}</p>`);
                $("#linkData").append(`<p>${results.location.name}</p>`); 
            }
            if (results != "Nothing"){
                $("#connData").append(`<p>${results.numConnections}</p>`);
            }
            if (results != "Nothing"){
                $("#sumData").append(`<p>${results.summary}</p>`);
            }
            if(results != "Nothing"){
                let positions = results.positions.values;
                for (let i in positions){
                    $("#posData").append(`<i><h4>${positions[i].company.name}</h4></i>`);
                    $("#posData").append(`<p>${positions[i].company.industry}</p>`);
                    $("#posData").append(`<p>${positions[i].title}</p>`);
                    $("#posData").append(`<p>${positions[i].location.name}</p>`);
                    $("#posData").append(`<p>${positions[i].summary}</p>`);
                    
                }
            }
        });
});
//Parallax
$(document).ready(function () {
    $('.parallax').parallax();
});

// Initialize collapse button
  $(".button-collapse").sideNav();