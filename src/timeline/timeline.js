import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './timeline.scss';

export class TimeElement extends Component {
	// See https://stackoverflow.com/a/21015393/2438650
	getTextWidth(text, font) {
		// re-use canvas object for better performance
		var canvas = this.canvas || (this.canvas = document.createElement("canvas"));
		var context = canvas.getContext("2d");
		context.font = font;
		var metrics = context.measureText(text);
		return metrics.width;
	}
	
	getPosition(pstart_ms, pend_ms) {
		// Position period vs timeline, using left and width
		// Percentage based values make us impervious to resizing
		// Full width includes start, end and a half year at each end
		// Remember timeline is reverse, newer (end) on left to start on right
		const year_ms = Date.parse(1971); // length of 1 year, epoch is 1970
		const tend_ms = Date.parse(this.context.endYear)+year_ms*1.5;
		const twidth_ms = (this.context.endYear - this.context.startYear + 2)*year_ms;

		if (pstart_ms < Date.parse(this.context.startYear)-year_ms*0.5) {
			pstart_ms = Date.parse(this.context.startYear)-year_ms*0.5;
		}
		if (pend_ms > tend_ms) {
			pend_ms = tend_ms;
		}

		const left_p = (tend_ms-pend_ms)/twidth_ms*100;
		const width_p = (pend_ms-pstart_ms)/twidth_ms*100;

		console.log({entry: this.props.children, year_ms, tend_ms, twidth_ms, pstart_ms, pend_ms, left_p, width_p});

		return [left_p, width_p];
	}
}

export class Period extends TimeElement {
	render() {
		const year_ms = Date.parse(1971); // length of 1 year, epoch is 1970
		const pstart_ms = Date.parse(this.props.start);
		const pend_ms = (this.props.end === 'now') ?
			Date.parse(this.context.endYear)+year_ms*1.5 :
			Date.parse(this.props.end);

		const [left_p, width_p] = this.getPosition(pstart_ms, pend_ms);

		// Determine if the content is going to fit in the box
		// if (this.getTextWidth(this.props.children, "16px Lato") > 
		// "Lato", sans-serif


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

export class Event extends TimeElement {
	render() {
		// Position period vs timeline, using left and width
		// Percentage based values make us impervious to resizing
		// Full width includes start, end and a half year at each end
		// Remember timeline is reverse, newer (end) on left to start on right

		const pstart_ms = Date.parse(this.props.date);
		const [left_p, ] = this.getPosition(pstart_ms, pstart_ms);


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
	constructor(props) {
		super(props);
		this.state = {
			mql: window.matchMedia("(max-device-width: 767px)"),
		}
	}

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
		// Marker is at the start of the year, covers six months either side
		
		console.log("TL RENDER", this.state.mql, this.state.mql.matches);

		if (this.state.mql.matches) {
			// Mobile mode
			return "";
		}

		return (
			<div className="timeline">
				<div className="years">
					<div className="halfyear"></div>
					{years.map(y => <div className="year" key={y}>{y}</div>)}
					<div className="halfyear"></div>
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
