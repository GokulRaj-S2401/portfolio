$(document).on('click','#menu',function(){
    $('[id=menu]').removeClass('active')
    if (window.matchMedia("(max-width: 767px)").matches) 
    {
        $('nav').animate({opacity: '0'}, 1000);
        $('nav').css('display','none')
        $('#header').removeClass('extheader')
    }
    
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
let navVisible = false
$('#menubtn').click(function(){
    console.log('helo');
    $('nav').css('display','block')
    $('nav').css('opacity','1')
    $('#header').addClass('extheader')
})

window.addEventListener('click',function(e){
    console.log(e.target.className);
    if(e.target.className=='extheader' || e.target.className=='wrapper' || e.target.className=='bImg' ){
        $('nav').animate({opacity: '0'}, 1000);
        $('nav').css('display','none')
        $('#header').removeClass('extheader')
    }
})