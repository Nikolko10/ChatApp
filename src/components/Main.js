import React, { Component } from 'react';
import Rooms from './Rooms.js';
import Messages from './Messages.js';

import { loadState, saveState } from './../storage/index.js';

export default class Main extends Component {
	constructor() {
		super();
		this.state = {
			data: [],
			currentRoomId: null
		}
	}

	addRoom(room) {
		function ID() {
  			return '_' + Math.random().toString(36).substr(2, 9);
		};

		var id = ID();

		const state = this.state;
		state.data.push({ room, id, massages: [] });
		state.currentRoomId = id;
		this.setState( state );
		saveState(state);
	}

	deleteRoom(id) {
		const state = this.state;
		state.data.forEach((item, i, arr) => {
			if (id === item.id) {
				arr.splice(i, 1);
				if (arr.length !== 0) {
					i !== 0 ? state.currentRoomId = state.data[i - 1].id : state.currentRoomId = state.data[0].id;
				} else if (arr.length === 0) {
					state.currentRoomId = null;
				}
			}
		});
		saveState(state);
		this.setState( state );
	}

	swapRoom(id) {
		const state = this.state;
		state.currentRoomId = id;
		this.setState({ state })
	}

	sendMessage(comment) {
		const state = this.state;
		state.data.forEach((item, i) => {
			if (state.currentRoomId === item.id) {
				item.massages.push({msg: comment})
			}
		})
		saveState(state);
		this.setState( state )
	}

	componentWillMount() {
		loadState() === undefined ? saveState(this.state) : this.setState(loadState())
	}

	render() {
		const cur = this.state.currentRoomId;
		let indexRoom = 0;
		this.state.data.forEach((item, i) => {
			if (cur === item.id) {
				indexRoom = i;
			}
		});
    	return <div className='main'>
    	    <Rooms data={this.state.data} current={this.state.currentRoomId} addRoom={(room) => this.addRoom(room)} delete={(id) => this.deleteRoom(id)} swap={(id) => this.swapRoom(id)} />
    	    <Messages data={this.state.data} massage={ cur !== null ? this.state.data[indexRoom].massages : this.state.data } index={ cur !== null ? indexRoom + 1 : indexRoom } send={(comment) => this.sendMessage(comment)} />
    	  </div>
  	}
}