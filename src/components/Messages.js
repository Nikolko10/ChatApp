import React, { Component } from 'react';

export default class Messages extends Component {
	constructor(props) {
		super(props)
		this.handleSend = this.handleSend.bind(this)
	}

	handleSend(e) {
		if ((e.keyCode == 10 || e.keyCode == 13) && e.ctrlKey) {
			this.props.send(this.refs.comment.value);
			this.refs.comment.value = '';
		}
	}

	getFieldChat() {
		return <div className='add_msg'>
				<div className='default_img'></div>
				<textarea ref='comment' onKeyDown={this.handleSend}></textarea>
			</div>
	}

	render() {
		const { index, massage, data } = this.props;

		return <div className='msg'>
			<h2>Comments { index !== 0 ? '#' + index : '' }</h2>
			<div className='wrapper_msg'>
				{ 
					massage.map((item, i) => {
						return <div key={i} className='block_msg'>
							<div className='img_user'></div>
							<p>{item.msg}</p>
						</div>
					}) 
				}
			</div>
			{
				data.length !== 0 ? this.getFieldChat() : <div className='empty'>Empty</div> 
			}
		</div>
	}
} 