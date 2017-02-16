var React            = require('react');
var WeatherForm      = require('WeatherForm');
var WeatherMessage   = require('WeatherMessage');
var openWeatherMap   = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState:function(){
    return{
      isLoading: false
    }
  },
  handleSearch: function(location){
    var that = this;
    this.setState({isLoading: true});
    openWeatherMap.getTemp(location).then(function(temp){
      that.setState({
        isLoading: false,
        location: location,
        temp:temp
      });

    },function(errorMessage){
      that.setState({isLoading:true});
      alert(errorMessage);
    });
  },

    render: function(){
      var {isLoading, location,temp} = this.state;
      function renderMessage(){
        if(isLoading){
          return <h3>Fetching weather....</h3>
        }else if(temp && location){
          return <WeatherMessage location={location} temp={temp}/>
        }
      }
    return(
      <div className="well">
        <h2 className="text-center title"><i className="fa fa-search"></i> React <br/>Weather App</h2>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    )
  }
});
module.exports = Weather;
