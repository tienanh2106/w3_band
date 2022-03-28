var mobileMenu = document.getElementById('header');
var headerHeight = mobileMenu.clientHeight;

 function mobileMenuOnclick () {
    var closed = mobileMenu.clientHeight === headerHeight;
    if(closed) {
        mobileMenu.style.height = 'auto';
    }
    else {
        mobileMenu.style.height = null  ;
    }
}

var menuItems = document.querySelectorAll('.header-list li a[href*="#"]');
for (var i = 0; i<menuItems.length; i++){
    var menuItem = menuItems[i];
    
    menuItem.onclick = function (event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('header-item__link__subnav');
        if(!isParentMenu){
         mobileMenu.style.height = null;   
        }
        else{
            event.preventDefault();
        }
           
    }
    
}

// mobileMenu.onmouseleave = function () {
//     var closed = mobileMenu.clientHeight === headerHeight;
//     if(!closed) {
//         mobileMenu.style.height = null  ;
//     }
// }