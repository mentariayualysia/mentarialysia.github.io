 var i=-100;
  setInterval(function(){
   if (i!=0) {
    slide = document.getElementById('slide');
    slide.style="margin-left:"+i+"%;transition: 1s ease-in;";
    if (i== -300) {
     i=0;
    }else{
     i=i+-100;
    }
    return i;

   }else{
    slide = document.getElementById('slide');
    slide.style="margin-left:"+i+"%;";
    if (i== -300) {
     i=0;
    }else{
     i=i+-100;
    }
    return i;
   }

  }, 4000);
  
  
