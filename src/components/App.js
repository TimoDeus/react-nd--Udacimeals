import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addRecipe, removeFromCalendar} from '../actions'

import './App.css';

class App extends Component {

	doThing = () => this.props.selectRecipe({});

	render() {
		return (
			<div>
				Hello World
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	selectRecipe: data => dispatch(addRecipe(data)),
	remove: data => dispatch(removeFromCalendar(data))
});

const mapStateToProps = ({calendar, food}) => {
	const dayOrder = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];
	return {
		calendar: dayOrder.map(day => ({
			day,
			meals: Object.keys(calendar[day]).reduce((meals, meal) => {
				meals[meal] = calendar[day][meal] ? food[calendar[day][meal]] : null;
				return meals;
			}, {})
		}))
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
