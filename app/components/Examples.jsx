var React          = require('react');
var {Link}   = require('react-router');
// Stateless Functional Component
var Examples = (props)=>{
  return(
    <div>
      <h1 className="text-center">Examples</h1>
      <p className="text-center">Here are a few examples to try out:</p>
      <ol>
        <li>
          <Link to='/?location=Sydney'>Sydney, Australia</Link>
        </li>
        <li>
          <Link to='/?location=Rio'>Rio De Janeiro, Brazil</Link>
        </li>
      </ol>
    </div>


  );
}
module.exports = Examples;
