import React from 'react';
import Job from './job/job';

class Planet extends Job {
	render() {
		return (
			<Job
			  id="planet"
			  company="Planet"
			  start="2021-06-21" end="present"
			  title="Systems Reliability Engineer"
				responsibilities={[
					"Maintain ground stations",
					"Improve systems",
					"Design future systems"
				]}
				href="https://www.planet.com/"
			  description="An earth observation company manufacturing and operating over 200 satellites to provide responsive and quality imagery."
			>
			<p>
			Manage, maintain and operate Planet's 48 ground stations located at 11 countries around the world. 
			</p>
			<p>
			Key achievements in this role include:
			</p>
			<ul>
			<li>Led system design and prototype implementation for next generation of ground station systems.</li>
			<li>Designed and implemented replacement monitoring system.</li>
			<li>Working remotely, coordinated across teams to manage requirements and </li>
			</ul>
			</Job>
		)
	}
}

class FD extends Job {
	render() {
		return (
			<Job
				id="fd"
				company="FifthDomain"
				start='2020-04-01' end='2021-05-30'
				title="Engineering Manager"
				responsibilities={[
					"Managing multiple squads",
					"Leading project delivery",
					"SRE improvements"
				]}
				href="https://www.fifthdomain.com.au/"
			  description="A cyber security training provider, delivering a platform and services to Defence and educational institutions."
			>
			<p>
			Managing multiple project specific teams to deliver SRE improvements, implement new product features, and deliver special projects.
			Additionally, reporting directly to the CEO, managing stakeholder relationships and delivering client tailored solutions.
			</p>

			<p>
			Key achievements in this role include:
			</p>

			<ul>
			<li>Managing a small team and partner organisation to deliver a major cyber range to Defence in a truncated timeframe eliciting positive feedback from the client.</li>

			<li>Led the delivery of Defence's premier cyber skills competition with over 700 domestic and international participants.</li>

			<li>Developed and pitched an innovative server security solution for inclusion in the Defence budget cycle.</li>

			<li>
			Assisted junior team members in developing their technical and professional skills to achieve their career goals.</li>

			</ul>
			</Job>
		)
	}
}

class Space extends Job {
	render() {
		return (
			<Job
				id="space"
				company="UNSW Canberra Space"
				start='2019-04-25' end='2020-03-20'
				title="Electronics Engineer"
				responsibilities={[
					"Electronics design",
					"Firmware development",
					"Electronics assembly",
				]}
				href="https://www.unsw.adfa.edu.au/space-research/"
			  description="UNSW Canberra Space designs and builds satellites for research purposes."
			>

			<p>
			As a member of the electronics engineering team I developed hardware, firmware, and software, as well as performed manufacturing, testing, and process improvement.
			</p>

			<p>
			Key achievements in this role include:
			</p>

			<ul>
			<li>
			Manufactured, tested and cleaned flight boards used in a working satellite.
			</li>

			<li>
			Designed a next generation satellite system, including negotiating buyin from stakeholders for cutting edge technologies to take advantage of the inherent radiation tolerance of new chip layouts.
			</li>

			<li>
			Developed the firmware for the secondary camera system as well as test scripts and ground station improvements.
			</li>

			<li>
			Drove process improvements such as electronics source control, component inventory management and explored manufacturing capability improvements.
			</li>

			</ul>
			</Job>
		)
	}
}

class Inventing extends Job {
	render() {
		return (
			<Job
				id="inventing"
				company="Self Employed"
				start='2015-01-01' end='2019-01-01'
				title="Founder"
				responsibilities={[
					"Product development",
					"Software development",
					"Electronics design",
					"Marketing",
				]}
				href="https://youtu.be/R3DADx5z-XY"
			  description="Worked on independent products to meet gaps I observed in the market."
			>
			<p>
			Enabled by my partner’s move interstate for work, I established myself working on independent projects to meet gaps I observed in the market.
			</p>

			<p>
			Key achievements in this role include:
			</p>

			<ul>
			<li>Developed a heat sensor based microwave that was not commercially viable.</li>
			<li>Prototyped a presence sensor using thermal vision to replace PIR systems.</li>
			<li>Prototyped a personal alarm system for travellers in hotel rooms.</li>
			<li>Prototyped a flexible programmable LED sign.</li>
			</ul>

			<p>
			This built my whole of system design experience, bringing together a product from concept to selecting each component of the system, building the environment, software and hardware. It has also been invaluable in building my business, marketing and financial skills.
			</p>

			</Job>
		)
	}
}

class M5 extends Job {
	render() {
		return (
			<Job
				id="m5-network-security"
				company="Northrop Grumman"
				start='2012-07-01' end='2014-10-01'
				title="Network Security Engineer"
				responsibilities={[
					"Firmware development",
					"Hardware development",
					"Compliance testing",
				]}
				href="https://www.northropgrumman.com/who-we-are/global-locations/australian-intelligence-cyber-solutions/"
				description="M5 Network security, a branch of NG, designs and manufactures devices to facilitate secure communications over insecure networks."
			>
			<p>
			Developed firmware for multiple systems as well as contributing to the electronics design, testing and certification processes.
			</p>

			<p>
			Key achievements in this role include:
			</p>

			<ul>
			<li>Developed firmware for the next generation of product across multiple cooperating microcontrollers.</li>
			<li>Supported the support team and developed fixes for older, contractor developed products.</li>
			<li>Achieved Australian telecommunications certifications.</li>
			<li>Performed Tempest testing and certification.</li>
			<li>Liaised between hardware and software development teams.</li>
			</ul>
			</Job>
		)
	}
}

class AAD extends Job {
	render() {
		return (
			<Job
				id="aad"
				company="Australian Antarctic Division"
				start='2010-08-01' end='2012-04-01'
				title='Electronics Support Engineer'
				responsibilities={[
					"Maintenance of observatory",
					"Maintenance of weather radars",
					"Support LIDAR experiments",
					"Support field experiments",
				]}
				href="http://www.antarctica.gov.au/science"
				description="The AAD maintains several stations on Antarctica to support scientific research."
			>
			<p>
			As the support engineer I spent three seasons living at Davis Station, I was responsible for providing technical assistance to over twenty different experiments.
			</p>

			<p>
			Key achievements in this role include:
			</p>

			<ul>
			<li>Maintained equipment including atmospheric radars, lidars, and observation systems.</li>
			<li>Lived and worked closely with a diverse group of people.</li>
			<li>Led multiple field teams and performed deep field work.</li>
			<li>Led visits to foreign stations.</li>
			</ul>

			</Job>
		)
	}
}

class SES extends Job {
	render() {
		return (
			<Job
				id="ses"
				company="Victoria State Emergency Service, Bellarine Unit"
				title="Deputy Controller of Operations"
				start='2015-01-01' end='2019-04-21'
				href="https://www.ses.vic.gov.au/"
				responsibilities={[
					"Member of unit management team",
					"Ensure operational readiness",
					"Divisional commander",
				]}
			>
			<p>
					I was a senior member of the VICSES, a volunteer emergency response service responsible for storm, flood, rescue and assisting other emergency agencies on the Bellarine peninsula.
			</p>
			<p>
			As Deputy Controller of Operations of the Bellarine unit I developed my leadership and management skills.  I managed a team of six volunteers with responsibility for ensuring our operational readiness through ongoing maintenance, scheduling and planning. Working with highly skilled members I enabled their work by liaising with external stakeholders, acquiring the equipment and coordinating significant work. As a member of the unit management team I also intervened on personnel issues, particularly those arising during operations.
			</p>
			<p>
			During significant localised storm events I performed the role of divisional commander setting the strategy for the response.
			This involved coordinating teams on the ground, managing logistics such as meals and transport, ensuring team member wellbeing including managing fatigue, triaging jobs, liaising with incident control staff, and managing CFA support. During these events I led over eighty responding personnel at the Bellarine unit.
			</p>
			</Job>
		)
	}
}

class CSIRO extends Job {
	render() {
		return (
			<Job
				id="csiro"
				company="CSIRO STEM Professionals in Schools"
				title="Mentor"
				start='2015-01-01' end='2019-04-21'
				href="https://www.csiro.au/en/Education/Programs/STEM-Professionals-in-Schools"
				responsibilities={[
					"Support and guide year 12 IT students",
					"Assist teacher with professional development",
					"Extend skills of advanced students",
				]}
			>
			<p>
			The CSIRO STEM Professionals in Schools program matches school teachers with STEM professionals to enhance science and technical learning in classrooms.
			</p>
			<p>
			For four years I attended the Bellarine Secondary College weekly to assist the IT teacher with senior classes. Working predominantly with year twelve students, I assisted with specific technical problems, helped guide their learning and provide real world grounding for what they learn. Having an extra pair of hands in the classroom allows for extra one on one guidance for students who are struggling or students who are open to extension activities to help them grow.
			</p>

			</Job>
		)
	}
}

// Call with import * as Job from './Jobs'; Job.CSIRO
export {
	Planet,
	FD,
	Space,
	Inventing,
	M5,
	AAD,
	SES,
	CSIRO,
}

// vim: ts=2 sw=2
