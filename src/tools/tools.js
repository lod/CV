import PropTypes from "prop-types";

async function Tools({ map }) {
	return (
		<div className="tools">
			<p>Tools used included:</p>
			<ul className="tools">
				{Object.entries(map).map(([k, v]) => {
					return (
						<li key={k}>
							{k}: &nbsp; {v.join(", ")}
						</li>
					);
				})}
			</ul>
		</div>
	);
}

Tools.propTypes = {
	map: PropTypes.object.isRequired,
};

export default Tools;
