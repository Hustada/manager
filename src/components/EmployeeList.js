import _ from 'lodash';
import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import { employeeFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
	componentWillMount() {
		this.props.employeeFetch();

		this.createDataSource(this.props);
	}

	componentWillReceiveProps(nextProps) {
		//nextProps are then next set of props that this component
		//will be rendered with
		//this.props is still the old set of props

		this.createDataSource(nextProps);
	}

	createDataSource({ employees }) {
		const ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 !== r2
		});

		this.dataSource = ds.cloneWithRows(employees);
	}

	renderRow(employee) {
		return <ListItem employee={employee} />;
	}

	render() { 
		return (
			<ListView
				enableEmptySections
				dataSource={this.dataSource}
				renderRow={this.renderRow}
			/>
		);;
	}
}

//uid is key for employee(key value pair)
//for each key value pair run this fat arrow function
//val is user model
//create new object, push in all values, throw ID on top
//collect all objects and then put them into an array with map

const mapStateToProps = state => {
	const employees = _.map(state.employees, (val, uid) => {
		return { ...val, uid };
	});

	return { employees };
};


export default connect(mapStateToProps, { employeeFetch }) (EmployeeList);