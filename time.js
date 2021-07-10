   
        $(function(){
            
            var minute = 02;
            var second = 00;
            let Countdown=document.querySelector("#counter");
            
            var counter = setInterval(function(){
                   
               $("#counter").html(minute+":"+second)
                   if (minute != 00 && second == 00) {
                       minute--;
                       second = 60;
                   }
                   if (second != 00) {
                       second--;
                   }
                   if(second == 00 && minute == 00 ){
                      
                      
                       Countdown.innerHTML="<span style='color: red;'>Oturumunuz sonlanmıştır</span>"
                       window.location.reload(false);
                   }
                   
            },1000)
        })