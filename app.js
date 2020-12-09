var Bread = props => (
  <div>
    Bread
  </div>
)
var Butter = props => (
  <div>
    Butter
  </div>
)

var GroceryList = props => (
  <ul>
    {props.items.map((item, i) => {
      return <GroceryListItem item={item} key={i} />
    })}
  </ul>
);

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    }
    this.onHoverHandler = this.onHoverHandler.bind(this);
  }
  onHoverHandler() {
    this.setState({
      done: !this.state.done
    });
  }
  render() {

    var style = {
      fontWeight: this.state.done ? '800' : '300'
    };

    return (
      <li style={style} onMouseOver={this.onHoverHandler}>{this.props.item}</li>
    )
  }
} 

var list = ['brocolli', 'carrot', 'lettuce', 'cucumber'];

ReactDOM.render(<GroceryList items={list} />, document.querySelector('#app'));