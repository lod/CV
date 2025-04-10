import "./style.scss";

async function Skill({ children, num }) {
	return (
		<div className="skill">
			{children}
			<span className="spacer" />
			{Array.from({ length: num ?? 0 }, (_, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: All we have is the index
				<span className="star" key={i} />
			))}
		</div>
	);
}

Skill.defaultProps = {
	num: 0,
};

export default Skill;
