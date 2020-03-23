// 数据
const list = [{title:'李白',content:'打野',star:5,},
{title:'露娜',content:'法师、战士、打野',star:5}];

const style = {
	border: '2px solid red',
	marginBottom:20,
	padding:20,
	backgroundColor: 'pink'
};
// 列表项
const Item = ({title,content,star}) => <article style={style}>
	<header>
		<h1>标题：{title}</h1>
	</header>
	<section>
		<div>定位：{content}</div>
		<p>评分：{star}</p>
	</section>
</article>;

// 列表项属性验证
Item.propTypes = {
	title: (props,propName) => (typeof props[propName] !== 'string') ?
		new Error('标题必须是字符串')
		: (props[propName].length > 20) ?
		new Error('标题超过20个字符')
		: null,
	content: React.PropTypes.string.isRequired,
	star: React.PropTypes.number.isRequired
}
// 列表项默认属性
Item.defaultProps = {
	title: '英雄',
	content:'王者荣耀',
	star: 0
}

// 列表
const List = (props) => <div className="article-list">
	{
		props.data.map((item,i) => <Item key={i} title={item.title} content={item.content} star={item.star} />)
	}
</div>;


ReactDOM.render(<List data={list} />, document.getElementById('app'));