import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Tools extends Component {
	render() {
		return (
			<div className="tools">
			<p>Tools used included:</p>
			<ul className="tools">
			  { Object.entries(this.props.map).map(([k,v]) => { return (
				  <li>{ k }: &nbsp; { v.join(', ') }</li>
			  ); }) }
			</ul>
			</div>
		);
	}
}

Tools.propTypes = {
	map: PropTypes.object.isRequired,
}
