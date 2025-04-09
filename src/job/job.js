import React from 'react';
import PropTypes from 'prop-types';
import Image from "next/image";
import styles from './job.scss';
//import styles from "../../styles.module.css";
// import img from "../images/aad-ia28318.1920x768.jpg";


// If backgrounds are hard to read, add a filter: blur(5px) property
//
// White filter: 80% = filter: invert(calc(0.8 / 2)) brightness(calc(1 + 0.8));
// Black filter: 20% = brightness(0.2)
// hue-rotate should allow for coloured tints, green = 120deg

export default class Job extends React.Component {
	render() {
		const start_date = new Date(this.props.start);
		const end_date = new Date(this.props.end);
		return (
			<job id={this.props.id}>
				<div className="bgWrap">
          <Image
            alt="Mountains"
            src={this.props.background}
            placeholder={this.props.background.src.endsWith('.svg') ? "empty" : "blur"}
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: "cover",
            }}
          />
				</div>
        <div className="job-content" style={{ backgroundColor: this.props.background_tint, color: this.props.font_color }}>
				<div className="metadata">
					<p className="title">{this.props.title}</p>
					<ul className="responsibilities">
						{ this.props.responsibilities && this.props.responsibilities.map(r => 
							<li key={r}>{r}</li>
						) }
					</ul>
					<p className="company">{this.props.company}</p>
					<p className="period">
						<span className="start">
							{start_date.toLocaleString(["en-au", "en-us"], { month: "short", year: "numeric" })}
						</span>
						<span className="seperator"> &#8680; </span>
						<span className="end">
							{isNaN(end_date) ? this.props.end : end_date.toLocaleString(["en-au", "en-us"], { month: "short", year: "numeric" })}
						</span>
					</p>
			        <p className="description">{this.props.description}</p>
					<p className="link">
						<a href={this.props.href}>{this.props.href}</a>
					</p>
				</div>
				<div className="description">
					{ this.props.children }
				</div>
        </div>
			</job>
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
