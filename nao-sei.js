$(function(){
    $("button").click(function(){
        for(let i=0; i<5; i++){
            $("#text").append("<p>Eu</p>");
            $("#text").append("<p>te</p>");
            $("#text").append("<p>amo</p>");
            $("#text").append("<p><span>&hearts;</span></p>");
        }
        $("#text").append("<p><strong>Você é uma pessoa maravilhosa!</strong></p>")
    });     
});
