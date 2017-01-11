var GreeterMessage = React.createClass({
  render: function(){
    var name    = this.props.name;
    var message = this.props.message;
    return(
      <div className="row">
        <div className="col-md-8 col-md-offset-2">
          <h1>Hello {name}</h1>
          <p>{message}!!!</p>
        </div>
      </div>
      );
  }
});

var GreeterForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var updates = {};
    var name = this.refs.name.value;
    var message = this.refs.message.value;

    if(name.length > 0 && typeof name === "string"){
      this.refs.name.value    = '';
      updates.name = name;
    }

    if(message.length >0 && typeof message === "string"){
      this.refs.message.value = '';
      updates.message = message;
    }


    this.props.onNewValues(updates);
  },
  render: function(){
    return(
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <form onSubmit = {this.onFormSubmit}>
              <div className="form-group">
                <input type="text" ref="name" placeholder="Your name" className="form-control" />
                <textarea rows="5" ref="message" placeholder="Your message" className="form-control"></textarea>
                <br/>
                <button className="btn btn-success btn-sm">Submit</button>
              </div>
            </form>
          </div>
        </div>
      );
  }
});


var Greeter = React.createClass({
  getDefaultProps: function(){
    return {
      name:"React",
      message: "React is awesome"
    };
  },
  getInitialState: function(){
    return{
      name: this.props.name,
      message: this.props.message
    };
  },
  handleNewValues: function(updates){
      this.setState(updates);
  },
  render: function(){
    var message = this.state.message;
    var name    = this.state.name;
    return(
      <div className="container">
        <GreeterMessage name={name} message={message}/>
        <GreeterForm onNewValues={this.handleNewValues}/>
      </div>
      );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
  );