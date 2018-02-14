import React, { Component } from 'react';

class Rooms extends Component {
	constructor(props) {
		super(props);
	}

	handleAdd(newRoom) {
		if (newRoom !== '') {
			this.props.addRoom(newRoom);
			this.refs.addRoom.value = '';
		}
	}

	handleDelete(id) {
		this.props.delete(id);
	}

	handleSwapRoom(id) {
		this.props.swap(id)
	}

	getRoom() {
		return this.props.data.map((item, i) => {
			return <div key={i} className={ item.id === this.props.current ? 'room active' : 'room' }>
				<div className='info_room'>
					<span className='name_room' onClick={() => this.handleSwapRoom(item.id)}><strong>{ item.room }</strong></span>
					<span className='amount_msg'>{ item.massages.length }</span>
				</div>
				<button onClick={() => this.handleDelete(item.id)}>Delete</button>
			</div>
		})
	}

	render() {
		return <div className='rooms'>
			<h2>Items</h2>
			<div className='add_room'>
				<input type='text' ref='addRoom' placeholder='Type name here...' />
				<button onClick={() => this.handleAdd(this.refs.addRoom.value)}>Add new</button>
			</div>
			<div className='wrapper_rooms'>
				{ 
					this.props.data.length === 0 ? <div className='empty'>Please add chat room</div> : this.getRoom()
				}
			</div>
		</div>
	}
}

export default Rooms