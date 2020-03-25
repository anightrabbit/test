class Parent extends React.Component {
	constructor(props) {
		super(props)
	}
	componentWillMount() {
		this.style = {backgroundColor:'#CCC'}
	}
	render() {
		const { title,rating,color,onRate} = this.props;
		return (<div className="color" style={this.style}>
				<h1 ref="title">{title}</h1>
				<div className="color" style={{backgroundColor:color}}></div>
				<Child starSelected={rating} onRate={onRate} />
			</div>);
	}
}

Parent.defaultProps = {
	title: undefined,
	rating: 0,
	color:'#0000',
	onRate: f=>f
}


class Child extends AnotherClass {
	constructor(props) {
		// code
		super(props);
	}
	render() {
		const {starSelected, onRate} = this.props;
    return <div onClick={onRate}>{starSelected}/分</div>
	}

	// methods
}