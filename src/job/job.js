import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './job.scss';

export default class Job extends Component {
	render() {
		return (
			<div className="job" id={this.props.id}>
				<div className="metadata">
					<p className="company">{this.props.company}</p>
					<p className="period">
						<span className="start">
							{new Date(this.props.start).toLocaleString(["en-au", "en-us"], { month: "short", year: "numeric" })}
						</span>
						<span className="seperator"> &#8680; </span>
						<span className="end">
							{new Date(this.props.end).toLocaleString(["en-au", "en-us"], { month: "short", year: "numeric" })}
						</span>
					</p>
					<p className="title">{this.props.title}</p>
					<ul className="responsibilities">
						{ this.props.responsibilities && this.props.responsibilities.map(r => 
							<li key={r}>{r}</li>
						) }
					</ul>
					<p className="link">
						<a href={this.props.href}>{this.props.href}</a>
					</p>
				</div>
				<div className="description">
					{ this.props.children }
				</div>
			</div>
		);
	}
}

Job.propTypes = {
	id: PropTypes.string,
	company: PropTypes.string.isRequired,
	start: PropTypes.string,
	end: PropTypes.string,
	title: PropTypes.string.isRequired,
	responsibilities: PropTypes.array,
	href: PropTypes.string,
}
