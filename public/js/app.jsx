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
  onButtonClick: function(e){
    e.preventDefault();

    var nameRef    = this.refs.name;
    var name       = nameRef.value;
    var messageRef = this.refs.message;
    var message    = this.refs.message.value;

    if(typeof name === 'string' && typeof message === 'string' && name.length >0 && message.length >0){
      this.setState({
        name:name,
        message:message
      });
    }

    nameRef.value = '';
    messageRef.value = '';
  },
  render: function(){
    var message = this.state.message;
    var name    = this.state.name;
    return(
      <div classnName="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <h1>Hello {name}</h1>
            <p>{message + '!'}</p>

            <form onSubmit={this.onButtonClick}>
              <div className="form-group">
              <input type="text" ref="name" placeholder="Your name" className="form-control" />
              <input type="text" ref="message" placeholder="Your message" className="form-control" />
              <br/>
              <button className="btn btn-success btn-sm">Set Message</button>
              </div>
            </form>
          </div>
        </div>

      </div>
      );
  }
});

ReactDOM.render(
  <Greeter />,
  document.getElementById('app')
  );