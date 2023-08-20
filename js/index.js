import { GetGames } from "./main.js";
new GetGames()



let x =$('#navbar').offset().top
let y =$('#navbar').outerHeight();

console.log(y);
$(Window).scroll(function(){
    let windowScroll =$(window).scrollTop()
if(windowScroll >=x){
    $('#navbar').addClass('top-0').addClass('z-3');
    
}
})

