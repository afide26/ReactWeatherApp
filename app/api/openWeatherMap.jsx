var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?&appid=8e6661691320ef1ee16f82a20b1ddc01&units=metric';

module.exports = {
  getTemp: function(location){
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function(res,err){
      if(res.data.cod && res.data.message){
        throw new Error('res.data.message');
      }else{
        return res.data.main.temp;
      }
    }, function(err){
      throw new Error('Unable to fetch weather for that location');
    });
  }
}
