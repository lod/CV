import PropTypes from "prop-types";

async function Titleblock({ variant, children }) {
	const cv_url = `https://cv.david.tulloh.id.au/${variant ? `${variant}/` : ""}`;
	const cv_pdf = `david_tulloh${variant ? `_${variant}` : ""}.pdf`;
	return (
		<div className="titleblock">
				<div>
					<div className="name">David Tulloh</div>
					<div className="role">Manager, Developer, Engineer</div>
				</div>
				<dl>
					<dt>email</dt>
					<dd>
						<a href="mailto:david@tulloh.id.au">david@tulloh.id.au</a>
					</dd>
					<dt>webpage</dt>
					<dd>
						<a href="https://david.tulloh.id.au/">https://david.tulloh.id.au</a>
					</dd>
					<dt>phone</dt>
					<dd>
						<a href="tel:+61-439-069-336">+61 439 069 336</a>
					</dd>
					<dt>github</dt>
					<dd>
						<a href="https://github.com/lod">https://github.com/lod</a>
					</dd>
					<div className="printonly">
						<dt>online cv</dt>
						<dd>
							<a href={cv_url}>{cv_url}</a>
						</dd>
					</div>
					<div className="screenonly">
						<dt>download cv</dt>
						<dd>
							<a href={cv_url+cv_pdf}>{cv_url}{cv_pdf}</a>
						</dd>
					</div>
				</dl>
			<div>
				{children}
			</div>
		</div>
	);
}

Titleblock.propTypes = {
	variant: PropTypes.string,
};

export default Titleblock;
