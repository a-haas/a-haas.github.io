$(document).ready(function(){
    // check first if the user is in the right place of the page
    check_navbar();
    //switch transparent to plain and vise versa
    $(document).scroll(function(){
        check_navbar();    
    });
    // convert markdown part to html    
    $.get($("#markdown").attr("location-file"), function(markdown){
        var converter = new showdown.Converter();
        var generated = converter.makeHtml(markdown);
        $("#markdown").html(generated);
    });
});

function check_navbar(){
    var nav_bottom = $("#nav").offset().top + $("#nav").height();
    var content_height = $("#content").offset().top; 
    if(nav_bottom <= content_height){
        $("#nav").removeClass("plain")
        $("#nav").addClass("transparent");
    }
    else{
        $("#nav").removeClass("transparent")
        $("#nav").addClass("plain");
    }
}