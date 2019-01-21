import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

export default class Job extends Component {
	render() {
		return (
				<div className="speaking">
					<p className="company">{this.props.company}</p>
					<p className="period">
						<span className="start">
							{new Date(this.props.date).toLocaleString(["en-au", "en-us"], { month: "short", year: "numeric" })}
						</span>
					</p>
					<p className="title">{this.props.title}</p>
					<p className="link">
						<a href={this.props.href}>{this.props.href}</a>
					</p>
				</div>
		);
	}
}

Job.propTypes = {
	id: PropTypes.string,
	company: PropTypes.string.isRequired,
	date: PropTypes.string,
	title: PropTypes.string.isRequired,
	href: PropTypes.string,
}
