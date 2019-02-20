class MyApp extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        inputValue: ''
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
      this.setState({
        inputValue: event.target.value
      });
    }
    render() {
      return (
         <div>
          { /* change code below this line */ }
            <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
            <RenderInput input={this.state.inputValue}/>
          { /* change code above this line */ }
         </div>
      );
    }
  };
  
  class GetInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Get Input:</h3>
          <input
            value={this.props.input}
            onChange={this.props.handleChange}/>
        </div>
      );
    }
  };
  
  class RenderInput extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return (
        <div>
          <h3>Input Render:</h3>
          <p>{this.props.input}</p>
        </div>
      );
    }
  };


  //==========================================


  class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      };
      this.handleChange = this.handleChange.bind(this);
      this.submitMessage = this.submitMessage.bind(this);
    }
    
    // add handleChange() and submitMessage() methods here
    handleChange(evt)
    { this.setState( {
      input: evt.target.value
    });
    }
    submitMessage() { 
      this.setState({
         input:'',
         messages: this.state.messages.concat(this.state.input) 
      });
  
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* render an input, button, and ul here */}
          <input onChange={this.handleChange} value={this.state.input} />
          <button onClick={this.submitMessage}>Submit</button>
          <ul>{this.state.messages.map((x, y) => { return (<li key={y}> {x} </li>) })}</ul>
          { /* change 
          code above this line */ }
        </div>
      );
    }
  };