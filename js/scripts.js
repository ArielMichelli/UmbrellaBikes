/* ============= SCRIPT para hacer visible / invisible el menu: ============= */ 


jQuery('document').ready(function($){
    var menuBtn = $('.menu')
    menu = $('.absoluto ul')
    menuBtn.click(function(){
        if( menu.hasClass('show') ){
            menu.removeClass('show')
        } else{
            menu.addClass('show')
        }
        
    })

});