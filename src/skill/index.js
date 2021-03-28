import React, { Component } from 'react';
import './style.scss';

class Skill extends Component {
	render() {
		return (
			<div className="skill">
				{ this.props.children }
				<span className="spacer"/>
				{[...Array(Number(this.props.num))].map((e, i) => <span className="star" key={i}/>)}
			</div>
		);
	}
}

Skill.defaultProps = {
	num: 0
};

export default Skill;
