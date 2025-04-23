import PropTypes from "prop-types";
import ExportedImage from "next-image-export-optimizer";
import styles from "./job.scss";
//import styles from "../../styles.module.css";
// import img from "../images/aad-ia28318.1920x768.jpg";

// If backgrounds are hard to read, add a filter: blur(5px) property
//
// White filter: 80% = filter: invert(calc(0.8 / 2)) brightness(calc(1 + 0.8));
// Black filter: 20% = brightness(0.2)
// hue-rotate should allow for coloured tints, green = 120deg

async function Job({
	children,
	id,
	company,
	start,
	end,
	title,
	description,
	responsibilities,
	href,
	background,
	background_tint,
	font_color,
}) {
	const start_date = new Date(start);
	const end_date = new Date(end);
	return (
		<div className="job" id={id}>
			<div className="bgWrap">
				<ExportedImage
					alt="Background image related to job"
					src={background}
					placeholder={background.src.endsWith(".svg") ? "empty" : "blur"}
					fill
					sizes="100vw"
					style={{
						objectFit: "cover",
					}}
				/>
			</div>
			<div
				className="job-content"
				style={{ backgroundColor: background_tint, color: font_color }}
			>
				<div className="metadata">
					<p className="title">{title}</p>
					<ul className="responsibilities">
						{responsibilities?.map((r) => (
							<li key={r}>{r}</li>
						))}
					</ul>
					<p className="company">{company}</p>
					<p className="period">
						<span className="start">
							{start_date.toLocaleString(["en-au", "en-us"], {
								month: "short",
								year: "numeric",
							})}
						</span>
						<span className="seperator"> &#8680; </span>
						<span className="end">
							{Number.isNaN(end_date)
								? end
								: end_date.toLocaleString(["en-au", "en-us"], {
										month: "short",
										year: "numeric",
									})}
						</span>
					</p>
					<p className="description">{description}</p>
					<p className="link">
						<a href={href}>{href}</a>
					</p>
				</div>
				<div className="description">{children}</div>
			</div>
		</div>
	);
}

Job.propTypes = {
	id: PropTypes.string,
	company: PropTypes.string.isRequired,
	start: PropTypes.string,
	end: PropTypes.string,
	title: PropTypes.string.isRequired,
	responsibilities: PropTypes.array,
	href: PropTypes.string,
};

export default Job;
