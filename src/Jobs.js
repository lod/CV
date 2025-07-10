import Job from "./job/job";

import capricorn_img from "./images/capricorn-drone-green1-crop.jpg";

const present = new Date().toISOString().substring(0, 10);  // year-month-day

async function Capricorn() {
	return (
		<Job
			id="capricorn"
			company="Capricorn Space"
			start="2024-08-01"
			end="2025-02-01"
			title="Systems Reliability Engineer"
			responsibilities={[]}
			href="https://www.capricornspace.com.au/"
			description="Australian owned and operated ground segment service provider for the space industry."
			background={capricorn_img}
			background_tint="rgba(0, 0, 0, 0.7)"
			font_color="#FFF"
		>
			<p>Engaged specifically to drive critical technical change.</p>
			<p>Key Achievements:</p>
			<ul>
				<li>
				  Rearchitected alerting systems to provide clearer signals and 
		      reduce cognitive load of those on call.
				</li>
				<li>
					Rearchitected monitoring and control systems to improve operation
					visibility and significantly reduce ongoing licence costs.
				</li>
				<li>
					Improved the company&apos;s development, deployment and testing
					patterns.
				</li>
			</ul>
		</Job>
	);
}

import planet_img from "./images/planet_otowa.jpg";
async function Planet() {
	return (
		<Job
			id="planet"
			company="Planet"
			start="2021-06-21"
			end="2024-08-01"
			title="Systems Reliability Engineer"
			responsibilities={[
				"Maintain ground stations",
				"Improve systems",
				"Design future systems",
			]}
			href="https://www.planet.com/"
			description="An earth observation company manufacturing and operating over 200 satellites to provide responsive and quality imagery."
			background={planet_img}
			background_tint="rgba(0, 0, 0, 0.7)"
			font_color="#FFF"
		>
			<p>
				Led a rebuild of Planet&apos;s global ground station server systems, and
				worked on a range of other shorter term projects.
			</p>
			<ul>
				<li>
					Developed and maintained working relationships with internal and
					external stakeholders located across the world.
				</li>
				<li>
					Rearchitected the ground station server deployment automation, driving
					acceptance and adoption. This significantly reduced the system
					complexity improving reliability, enabling new functionality and
					increasing development speed.
				</li>
				<li>
					Participated in the design and implementation of the next generation
					of Planet&apos;s satellite communication systems. Through
					documentation drove cross team coordination, system design changes and
					reliability improvements.
				</li>
				<li>
					Prototyped future changes including high availability server design,
					monitoring alternatives and network hardening.
				</li>
				<li>
					Maintained high reliability operational service delivery as the third
					timezone.
				</li>
			</ul>
		</Job>
	);
}

import fd_img from "./images/fd-logo-9.png";
async function FD() {
	return (
		<Job
			id="fd"
			company="FifthDomain"
			start="2020-04-01"
			end="2021-05-30"
			title="Engineering Manager"
			responsibilities={[
				"Managing multiple squads",
				"Leading project delivery",
				"SRE improvements",
			]}
			href="https://www.fifthdomain.com.au/"
			description="A cyber security training provider, delivering a platform and services to Defence and educational institutions."
			background={fd_img}
			background_tint="rgba(0, 17, 55, 0.8)"
			font_color="#FFF"
		>
			<p>
				Reporting directly to the CTO, led delivery of complex technical
				solutions and systems reliability engineering services while managing
				diverse project teams and key stakeholder relationships.
			</p>

			<p>Key Achievements:</p>

			<ul>
				<li>
					Led development and successful delivery of a cyber skills competition
					for 700+ Defence participants under a compressed timeline.
				</li>
				<li>
					Co-designed an exercise environment for Defense&apos;s joint cyber
					units to prove their operational readiness. Then led a team to develop
					the environment and operate it for the exercise.
				</li>
				<li>
					Managed staff in a remote and then hybrid environment including
					contractors and a client placement.
				</li>
			</ul>
		</Job>
	);
}

import unsw_img from "./images/unsw-1616471297782.jpeg";
async function Unsw() {
	return (
		<Job
			id="unsw"
			company="UNSW Canberra Space"
			start="2019-04-25"
			end="2020-03-20"
			title="Electronics Engineer"
			responsibilities={[
				"Electronics design",
				"Firmware development",
				"Electronics assembly",
			]}
			href="https://www.unsw.adfa.edu.au/space-research/"
			description="UNSW Canberra Space designs and builds satellites for research purposes."
			background={unsw_img}
			background_tint="rgba(0, 0, 0, 0.7)"
			font_color="#FFF"
		>
			<p>
				As a senior member of the electronics engineering team at Australia’s
				leading satellite production group, I:
			</p>

			<ul>
				<li>
					Developed hardware, firmware and software elements of next generation
					satellites;
				</li>
				<li>Performed manufacturing, testing and process improvement; and</li>
				<li>
					Developed business plans for expansion of the organisation’s
					electronics capability.
				</li>
			</ul>
			<p>
				This role involved navigating and reconciling competing cultural
				expectations between business, academic and defence stakeholders.
			</p>
		</Job>
	);
}

import microwave_img from "./images/microwave-notebook.jpg";
async function Inventing() {
	return (
		<Job
			id="inventing"
			company="Self Employed"
			start="2015-01-01"
			end="2019-01-01"
			title="Founder"
			responsibilities={[
				"Product development",
				"Software development",
				"Electronics design",
				"Marketing",
			]}
			href="https://youtu.be/R3DADx5z-XY"
			description="Worked on independent products to meet gaps I observed in the market."
			background={microwave_img}
			background_tint="rgba(255, 255, 255, 0.8)"
			font_color="#000"
		>
			<p>
				Enabled by a significant shift in my partner’s career, I explored
				entrepreneurial opportunities including:
			</p>

			<ul>
				<li>Developed innovative products to prototype stage;</li>
				<li>Explored manufactory partnership and regulatory considerations;</li>
				<li>
					Developed comprehensive business assessment leading to the conclusion
					the product, while technically sound, was not commercially viable.
				</li>
			</ul>
		</Job>
	);
}

import m5_img from "./images/m5-SCS400.jpg";
async function M5() {
	return (
		<Job
			id="m5-network-security"
			company="Northrop Grumman"
			start="2012-07-01"
			end="2014-10-01"
			title="Network Security Engineer"
			responsibilities={[
				"Firmware development",
				"Hardware development",
				"Compliance testing",
			]}
			href="https://www.northropgrumman.com/who-we-are/global-locations/australian-intelligence-cyber-solutions/"
			description="M5 Network security, a branch of NG, designs and manufactures devices to facilitate secure communications over insecure networks."
			background={m5_img}
			background_tint="rgba(0, 0, 0, 0.7)"
			font_color="#FFF"
		>
			<p>
				Developed firmware for multiple systems as well as contributing to the
				electronics design, testing and certification processes.
			</p>

			<p>Key achievements in this role include:</p>

			<ul>
				<li>
					Developed firmware for the next generation of product across multiple
					cooperating microcontrollers.
				</li>
				<li>
					Supported the support team and developed fixes for older, contractor
					developed products.
				</li>
				<li>Achieved Australian telecommunications certifications.</li>
				<li>Performed Tempest testing and certification.</li>
				<li>Liaised between hardware and software development teams.</li>
			</ul>
		</Job>
	);
}

import aad_img from "./images/aad-ia28318.1920x768.jpg";

async function AAD() {
	return (
		<Job
			id="aad"
			company="Australian Antarctic Division"
			start="2010-08-01"
			end="2012-04-01"
			title="Electronics Support Engineer"
			responsibilities={[
				"Maintenance of observatory",
				"Maintenance of weather radars",
				"Support LIDAR experiments",
				"Support field experiments",
			]}
			href="http://www.antarctica.gov.au/science"
			description="The AAD maintains several stations on Antarctica to support scientific research."
			background={aad_img}
			background_tint="rgba(255, 255, 255, 0.90)"
			font_color="#000"
			// background-image: linear-gradient(rgba(255, 255, 255, 0.90), rgba(255, 255, 255, 0.90)), url("images/aad-ia28318.1920x768.jpeg");
			// background-size: cover;
			// background-position: center;
			// color: #000;
			//
		>
			<p>
				As the support engineer I spent three seasons living at Davis Station, I
				was responsible for providing technical assistance to over twenty
				different experiments.
			</p>

			<p>Key achievements in this role include:</p>

			<ul>
				<li>
					Maintained equipment including atmospheric radars, lidars, and
					observation systems.
				</li>
				<li>Lived and worked closely with a diverse group of people.</li>
				<li>Led multiple field teams and performed deep field work.</li>
				<li>Led visits to foreign stations.</li>
			</ul>
		</Job>
	);
}

import ses_img from "./images/ses-truck.webp";

async function SES() {
	return (
		<Job
			id="ses"
			company="Victoria State Emergency Service, Bellarine Unit"
			title="Deputy Controller of Operations"
			start="2015-01-01"
			end="2019-04-21"
			href="https://www.ses.vic.gov.au/"
			responsibilities={[
				"Member of unit management team",
				"Ensure operational readiness",
				"Divisional commander",
			]}
			description="Respond to floods, storms, and rescues such as car accidents"
			background={ses_img}
			background_tint="rgba(255, 210, 190, 0.85)"
			font_color="#000"
		>
			<p>
				I was a senior member of the VICSES, a volunteer emergency response
				service responsible for storm, flood, rescue and assisting other
				emergency agencies on the Bellarine peninsula.
			</p>
			<p>
				As Deputy Controller of Operations of the Bellarine unit I developed my
				leadership and management skills. I managed a team of six volunteers
				with responsibility for ensuring our operational readiness through
				ongoing maintenance, scheduling and planning. Working with highly
				skilled members I enabled their work by liaising with external
				stakeholders, acquiring the equipment and coordinating significant work.
				As a member of the unit management team I also intervened on personnel
				issues, particularly those arising during operations.
			</p>
			<p>
				During significant localised storm events I performed the role of
				divisional commander setting the strategy for the response. This
				involved coordinating teams on the ground, managing logistics such as
				meals and transport, ensuring team member wellbeing including managing
				fatigue, triaging jobs, liaising with incident control staff, and
				managing CFA support. During these events I led over eighty responding
				personnel at the Bellarine unit.
			</p>
		</Job>
	);
}

import csiro_img from "./images/CSIRO_Logo.svg";

async function CSIRO() {
	return (
		<Job
			id="csiro"
			company="CSIRO STEM Professionals in Schools"
			title="Mentor"
			start="2015-01-01"
			end="2019-04-21"
			href="https://www.csiro.au/en/Education/Programs/STEM-Professionals-in-Schools"
			responsibilities={[
				"Support and guide year 12 IT students",
				"Assist teacher with professional development",
				"Extend skills of advanced students",
			]}
			description="Partnering with a teacher to support students"
			background={csiro_img}
			background_tint="rgba(120, 217, 255, 0.85)"
			font_color="#000"
		>
			<p>
				The CSIRO STEM Professionals in Schools program matches school teachers
				with STEM professionals to enhance science and technical learning in
				classrooms.
			</p>
			<p>
				For four years I attended the Bellarine Secondary College weekly to
				assist the IT teacher with senior classes. Working predominantly with
				year twelve students, I assisted with specific technical problems,
				helped guide their learning and provide real world grounding for what
				they learn. Having an extra pair of hands in the classroom allows for
				extra one on one guidance for students who are struggling or students
				who are open to extension activities to help them grow.
			</p>
		</Job>
	);
}

import lca_img from "./images/tasmanian_tux_reference.png";

async function LCA() {
	return (
		<Job
			id="lca"
			company="linux.conf.au"
			title="Participant"
			start="2015-01-01"
			end={present}
			href="https://www.csiro.au/en/Education/Programs/STEM-Professionals-in-Schools"
			responsibilities={[
				"Support and guide year 12 IT students",
				"Assist teacher with professional development",
				"Extend skills of advanced students",
			]}
			description="Partnering with a teacher to support students"
			background={lca_img}
			background_tint="rgba(0, 0, 0, 0.75)"
			font_color="#FFF"
		>
		  <ul>
		  <li>Volunteered LCA Canberra 2005</li>
		  <li>Organising committee LCA Canberra 2013</li>
		  <li>Organising committee LCA Canberra 2021 & 2022 (cancelled due to COVID)</li>
		  <li>2016 - Presentation, Linux driven Microwave <a href="https://youtu.be/R3DADx5z-XY">https://youtu.be/R3DADx5z-XY</a></li>
		  <li>2017 - PyConf Presentation,  Rapid GUI development for IOT systems <a href="https://youtu.be/_LBgIFPct-o">https://youtu.be/_LBgIFPct-o</a></li>
		  <li>2018 - Lessons from three years of volunteering to teach students code <a href="https://youtu.be/FLD3Ui80M98">https://youtu.be/FLD3Ui80M98</a></li>
		  <li>2020 - Tutorial, Kicad for software developers <a href="https://youtu.be/0MzvESM0ZFE">https://youtu.be/0MzvESM0ZFE</a></li>
		  <li>Organising committee Everything Open Canberra 2026</li>
		  </ul>
		</Job>
	);
}

import tadact_img from "./images/tadact_woman.jpg";

async function TADACT() {
	return (
		<Job
			id="tadact"
			company="TADACT"
			title="Board Secretary"
			start="2014-03-03"
			end={present}
			href="https://tadact.org.au/"
			responsibilities={[
				"Support and guide year 12 IT students",
				"Assist teacher with professional development",
				"Extend skills of advanced students",
			]}
			description="Technology for Aging and Disability, ACT"
			background={tadact_img}
			background_tint="rgba(0, 0, 0, 0.75)"
			font_color="#FFF"
		>
		  <p>Volunteer and Board Secretary.</p>
		  <p>As a volunteer I have been developing marketing plans to reinvigorate TADACT.</p>
		  <p>My original involvement with TADACT started as a volunteer in 2014, ceasing when I moved to Geelong and only recently being reinvigorated in 2025.</p>
		</Job>
	);
}

// Call with import * as Job from './Jobs'; Job.CSIRO
export { Capricorn, Planet, FD, Unsw, Inventing, M5, AAD, SES, CSIRO, LCA, TADACT };

// vim: ts=2 sw=2
