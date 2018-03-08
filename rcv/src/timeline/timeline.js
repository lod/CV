import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './timeline.scss';

export class Period extends Component {
	render() {
		// Position period vs timeline, using left and width
		// Percentage based values make us impervious to resizing
		// Full width includes start, end and a half year at each end
		// Remember timeline is reverse, newer (end) on left to start on right
		const year_ms = Date.parse(1971);
		const tend_ms = Date.parse(this.context.endYear)+year_ms/2;
		const twidth_ms = (this.context.endYear - this.context.startYear + 1)*year_ms;

		const pstart_ms = Date.parse(this.props.start);
		const pend_ms = Date.parse(this.props.end);

		const left_p = (tend_ms-pend_ms)/twidth_ms*100;
		const width_p = (pend_ms-pstart_ms)/twidth_ms*100;

		return (
			<a className="period" href={this.props.href} style={{left: left_p+'%', width: width_p+'%'}}>{this.props.children}</a>
		)
	}
}

Period.propTypes = {
	start: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
	end: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

Period.contextTypes = {
	startYear: PropTypes.number,
	endYear: PropTypes.number,
};

export class Event extends Component {
	render() {
		// Position period vs timeline, using left and width
		// Percentage based values make us impervious to resizing
		// Full width includes start, end and a half year at each end
		// Remember timeline is reverse, newer (end) on left to start on right
		const year_ms = Date.parse(1971);
		const tend_ms = Date.parse(this.context.endYear)+year_ms/2;
		const twidth_ms = (this.context.endYear - this.context.startYear + 1)*year_ms;

		const pstart_ms = Date.parse(this.props.date);
		const pend_ms = pstart_ms+1000;

		const left_p = (tend_ms-pend_ms)/twidth_ms*100;

		// TODO: Content - link, popup? - how to print?
		return (
			<div className="event" style={{left: left_p+'%'}}></div>
		)
	}
}

Event.propTypes = {
	date: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

Event.contextTypes = {
	startYear: PropTypes.number,
	endYear: PropTypes.number,
};

class Timeline extends Component {
	getChildContext() {
		return {
			startYear: Number(this.props.startYear),
			endYear: Number(this.props.endYear),
		};
	}

	render() {
		const start = Number(this.props.startYear);
		const end = Number(this.props.endYear);
		const years = Array.from(new Array(end-start+1),(v,i)=>i+start).reverse();
		return (
			<div className="timeline">
				<div className="years">
					{years.map(y => <div className="year" key={y}>{y}</div>)}
				</div>
				<div className="content">
			{this.props.children}
				</div>
			</div>
		);
	}
}

Timeline.propTypes = {
	startYear: PropTypes.number.isRequired,
	endYear: PropTypes.number.isRequired,
};

Timeline.childContextTypes = {
	startYear: PropTypes.number,
	endYear: PropTypes.number,
};

export default Timeline;
