class ShadowMerge extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: 'iVan',
				more: {
					love: '36D'
				}
			}
		}
		this.onButtonClick = this.onButtonClick.bind(this);
	}

	onButtonClick() {
		this.setState({
			user: {
				more: {
					love:'36B'
				}
			}
		});
	}

	render() {
		return (<div>
      <h1>My love is {this.state.user.more.love} and my
name is {this.state.user.name}</h1>
      <button onClick={this.onButtonClick}>show the love!</button>
    </div>)
	}
	
}

ReactDOM.render(<ShadowMerge />, document.getElementById('app'));