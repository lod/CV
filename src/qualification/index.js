import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

class Qualification extends Component {
	render() {
		/* Each supported proptype becomes a span, in order.
		 * Then all the layout is done by CSS
		 */
		return (
			<div className="qualification">
			{ Object.keys(this.props).map(k=>
				this.props[k] &&
				<span className={k} key={k}>{ this.props[k] }</span>
			) }
			</div>
		);
	}
}

Qualification.propTypes = {
	title: PropTypes.string.isRequired,
	institution: PropTypes.string,
	details: PropTypes.string,
	start: PropTypes.string,
	end: PropTypes.string,
};

export default Qualification;
