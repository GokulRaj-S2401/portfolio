$(document).on('click','#menu',function(){
    $('[id=menu]').removeClass('active')
    $(this).toggleClass('active')
    let hash = this.hash
    $('html,body').animate({
        scrollTop: $(hash).offset().top},
        1000);
})
$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (window.matchMedia("(max-width: 767px)").matches) 
    {
        if(scroll>50){
            $('.bImg').animate({opacity: '0'}, 10);
        }
        else{
            $('.bImg').animate({opacity: '1'},10);
        }
    }
    else{
        window.addEventListener("scroll", (event) => {
            let scroll = this.scrollY;
            if(scroll>50){
                document.getElementById('header').className = "sticky"
            }
            else{
                document.getElementById('header').className = ""
            }
        });
    }
});
$("#skillm").click(function() {
    console.log('he');
    
});
