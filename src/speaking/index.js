import PropTypes from "prop-types";
import "./style.scss";

async function Job({ company, date, title, href }) {
	return (
		<div className="speaking">
			<p className="company">{company}</p>
			<p className="period">
				<span className="start">
					{new Date(date).toLocaleString(["en-au", "en-us"], {
						month: "short",
						year: "numeric",
					})}
				</span>
			</p>
			<p className="title">{title}</p>
			<p className="link">
				<a href={href}>{href}</a>
			</p>
		</div>
	);
}

Job.propTypes = {
	id: PropTypes.string, // TODO: id isn't used
	company: PropTypes.string.isRequired,
	date: PropTypes.string,
	title: PropTypes.string.isRequired,
	href: PropTypes.string,
};

export default Job;
