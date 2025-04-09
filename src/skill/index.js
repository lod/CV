import './style.scss';

async function Skill({ children, num }) {
		return (
			<div className="skill">
				{ children }
				<span className="spacer"/>
				{[...Array(Number(num ?? 0))].map((e, i) => <span className="star" key={i}/>)}
			</div>
		);
}

Skill.defaultProps = {
	num: 0
};

export default Skill;
