import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './timeline.scss';

class Timeline extends Component {
	render() {
		const start = Number(this.props.startYear);
		const end = Number(this.props.endYear);
		const years = Array.from(new Array(end-start+1),(v,i)=>i+start).reverse();
		return (
			<div className="timeline">
				<div className="years">
					{years.map(y => <div className="year" key={y}>{y}</div>)}
				</div>
			</div>
		);
	}
}

Timeline.propTypes = {
	startYear: PropTypes.number.isRequired,
	endYear: PropTypes.number.isRequired,
};

export default Timeline;
