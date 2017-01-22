var React          = require('react');

var WeatherMessage = React.createClass({
  render:function(){
    var {temp, location} = this.props;
    return(
      <div>
        <h3 className="text-center">It's currently {temp}&deg;C in {location}</h3> 
        {/*(location && temp) ? <h3 className="text-center">It's currently {temp}&deg;C in {location}</h3> : <h4 className="text-center">Welcome to the ReactJS Weather App</h4> */}
      </div>
    )
  }
});
module.exports = WeatherMessage;
