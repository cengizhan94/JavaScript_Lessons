document.addEventListener('DOMContentLoaded',function(){
    var myHeaders = new Headers();
    myHeaders.append("apikey", "wVibG00pFnaiwto6J1IRBikXqohYNo3x");
    
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
      headers: myHeaders
    };
    
    fetch("https://api.apilayer.com/exchangerates_data/convert?to=USD&from=TRY&amount=1",requestOptions)
      .then(response => response.json())
      .then(result =>{ 
            console.log(result)   
        });
});