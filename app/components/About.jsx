var React          = require('react');

// Stateless Functional Component
var About = (props)=>{
  return(
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a sample application from The Complete React Developer Course
        by Andrew Mead.
        Checkout this great course and begin studying it at

      </p>
      <h5 className="text-center">
        <a href="https://www.udemy.com/the-complete-react-web-app-developer-course" target="_blank"><i className= "fa fa-graduation-cap "></i> Udemy</a>
      </h5>
      <p>The repository for this application can be found here:</p>
      <a href="https://github.com/afide26/ReactWeatherApp" target="_blank">
        <h5 className="text-center">
          <i className="fa fa-github fa-fw"></i> React Weather App
        </h5>
      </a>
    </div>

  )
}
module.exports = About;
