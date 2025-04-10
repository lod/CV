import PropTypes from "prop-types";
import "./style.scss";

async function Qualification({ title, institution, details, start, end }) {
	/* Each supported proptype becomes a span, in order.
	 * Then all the layout is done by CSS
	 */
	const args = { title, institution, details, start, end };
	return (
		<div className="qualification">
			{Object.keys(args).map(
				(k) =>
					args[k] && (
						<span className={k} key={k}>
							{args[k]}
						</span>
					),
			)}
		</div>
	);
}

Qualification.propTypes = {
	title: PropTypes.string.isRequired,
	institution: PropTypes.string,
	details: PropTypes.string,
	start: PropTypes.string,
	end: PropTypes.string,
};

export default Qualification;
