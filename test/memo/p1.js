


class GeneralClock extends React.Component {

    render () {
        <Clock />
    }
}



const Clock = (props) => {
    return (
        <h1>{ props.time.hours } : { props.time.minutes } : { props.time.seconds }</h1>
      );
}

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {time: this.props.time};
      this._update = this._updateTime.bind(this);
    }
  
    render() {
      var time = this._formatTime(this.state.time);
      
    }
  
    componentDidMount() {
      this._interval = setInterval(this._update, 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this._interval);
    }
  
    _formatTime(time) {
      var [ hours, minutes, seconds ] = [
        time.getHours(),
        time.getMinutes(),
        time.getSeconds()
      ].map(num => num < 10 ? '0' + num : num);
  
      return {hours, minutes, seconds};
    }
  
    _updateTime() {
      this.setState({time: new Date(this.state.time.getTime() + 1000)});
    }
  }
  
  ReactDOM.render(<Clock time={ new Date() }/>, ...);