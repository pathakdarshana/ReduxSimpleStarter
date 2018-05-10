import React, { Component } from 'react';


class SearchBar extends Component {
	constructor(props) {
		super(props);
		this.state = { term:''};
	}

	render () {
		onInputChange(term) {
			this.setState({term});
			this.props.onSearchTermChange(term);
		}

		return (
			<div>
				<input 
					value = {this.state.term}
					onChange={event => this.onInputChange(event.target.value)} />
			</div>
		);
	}
}

export default SearchBar;