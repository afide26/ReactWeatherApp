var React          = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render:function(){
    return(
      <form onSubmit={this.onFormSubmit}>
        <div className="form-group">
          <input type="text" ref="location" placeholder="Enter name of city" className="form-control"/>
        </div>
        <button className="btn btn-block btn-success"><i className="fa fa-search fa-fw"></i> Get weather</button>
      </form>
    )
  }
});
module.exports = WeatherForm;
