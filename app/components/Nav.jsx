var React               = require('react');
var {Link, IndexLink}   = require('react-router');


var Nav = React.createClass({
  render: function(){
    return(
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/"><i className="fa fa-home"></i> React Weather App</a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
              <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><i className="fa fa-sun-o"></i> Get Weather</IndexLink></li>
              <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><i className="fa fa-info-circle"></i> About</Link></li>
              <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}><i className="fa fa-tasks"></i> Examples</Link></li>
            </ul>
          </div>{/*.nav-collapse*/}
        </div>
      </nav>
    );
  }
});


module.exports = Nav;
