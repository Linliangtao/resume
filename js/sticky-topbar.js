//topbar 的定位
!function(){
  window.onscroll = function(x){
    if(window.scrollY > 0){
      topNavBar.classList.add('sticky')
    }else{
      topNavBar.classList.remove('sticky')
    }
  }
}.call()
