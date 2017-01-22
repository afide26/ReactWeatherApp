var React          = require('react');

var Nav = require('Nav');

// Stateless Functional Component
var Main = (props)=>{
  return(
    <div>
      <Nav/>
      <div className="row">
        <div className="col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
