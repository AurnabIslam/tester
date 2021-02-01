class Covid19{
    async getData(){
      const response = await fetch("https://covid-193.p.rapidapi.com/statistics", {
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "0b6039f332mshf183e9ce909ef3fp1a6f8ejsnf0db83c68163",
            "x-rapidapi-host": "covid-193.p.rapidapi.com"
        }
    });
  
      const data = await response.json()
      // console.log(data);
      return data.response;
  
    }
  }
