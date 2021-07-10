let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)



function formSubmit(event) {
    event.preventDefault() // default islemi engelledik...
    let iban = document.querySelector("#iban")
    let warning= document.querySelector("#warning")
    let dropdown= document.querySelector("#dropdown")
    let money=document.querySelector("#numericBox").value;
   
    
    
    let moneyValue=dropdown.options[dropdown.selectedIndex].value;
    document.getElementById("submit").disabled = false;
    money=Number(money)
    moneyValue=Number(moneyValue)
    

    if( (moneyValue=="null" && iban.value=="")||(moneyValue=="null" || iban.value=="") )
    {

        warning.innerHTML="Hesap seçmediniz veya iban hatalı.";
        document.getElementById("submit").disabled = true;
       
    }
    
    else
    {
        
        
    if(money>moneyValue)
    {
        warning.innerHTML="Bakiye Yetersiz";
        document.getElementById("submit").disabled = true;
    
    
    }
    

    
        else if(money<moneyValue && money<=500)
        {
            warning.innerHTML="Başarılı";
        }
       
       else 
        {
            let counter=1;
            let password = prompt('Telefonunuza gönderilen şifreyi giriniz.');
    
            if(password==1234)
      warning.innerHTML="Giriş Başarılı!";

      while(password!=1234)
      {
        password=prompt(`Girilen şifre yanlış.Tekrar giriniz. ${counter} kere yanlış girdiniz`);
        if(password==1234)
        {
            warning.innerHTML="Giriş Başarılı!";
            break;

        }

        if (counter==3) {
            alert('Hesabınız bloke oldu!');
           break;
          }
          counter++;
          
      }
      
      
      
      
      
      
    }




         
         

    
            

        

    }
}


   
        

    
    
    
