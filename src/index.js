import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video-list';
import VideoDetails from './components/video-details';

const API_KEY = 'AIzaSyAxjFJrP9jm7VX5GQcQ1avrhMQM16XSdtQ' ;

class App extends Component {
	constructor(props){
		super(props)

		this.state = {videos: []}
		YTSearch({ key:API_KEY, term:'surfboards'}, (videos) => {
			this.setState({ videos });
		});
	}
	render(){
		return (
			<div>
				<SearchBar />
				<VideoDetails video={this.state.videos[0]} />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("container"));