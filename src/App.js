import React, { Component } from 'react';
import Timeline, {Period,Event} from './timeline/timeline';
import Job from './job/job';
import Skill from './skill';
import Speaking from './speaking';
import Qualification from './qualification';
import './App.scss';

class App extends Component {
	render() {
		const now = new Date().toISOString();
		return (
			<div className="App">
				<div className="titleblock">
					<div className="row">
						<div>
							<div className="name">David Tulloh</div>
							<div className="role">Manager, Developer, Engineer</div>
						</div>
						<dl>
							<dt>email</dt><dd><a href="mailto:david@tulloh.id.au">david@tulloh.id.au</a></dd>
							<dt>webpage</dt><dd><a href="https://david.tulloh.id.au/">https://david.tulloh.id.au</a></dd>
							<dt>phone</dt><dd><a href="tel:+61-439-069-336">+61 439 069 336</a></dd>
							<dt>github</dt><dd><a href="https://github.com/lod">https://github.com/lod</a></dd>
							<div className="printonly">
								<dt>online cv</dt><dd><a href="https://david.tulloh.id.au/cv/">https://david.tulloh.id.au/cv/</a></dd>
							</div>
							<div className="screenonly">
								<dt>printable cv</dt><dd><a href="https://david.tulloh.id.au/cv/david_tulloh.pdf">david_tulloh.pdf</a></dd>
							</div>
						</dl>
					</div>
					<div className="summary">
						{/* Goal:
							*    Broad skills
							*    Technical Mastery
							*    Soft skills
						  */}
			 <p>
          An SRE manager with experience in both software and hardware devolopment.
          I am looking for engaging work with a skilled team.
        </p>
        <p>
          I offer a broad base of demonstrated technical proficiency, leadership, and creativity developed across diverse fields of experience.  I have the skills and the insight to add value to projects and teams.
        </p>
					</div>
				</div>

				<Timeline startYear={2011} endYear={2021}>
					<div>
						<p className="heading">Employment</p>
						{/* FD start adjusted to look prettier */}
			      <Period start='2020-04-01' end={now} href="#fd">FD</Period>
						<Period start='2019-04-25' end='2020-03-20' href="#space">UNSW</Period>
						<Period start='2015-01-01' end='2019-01-01' href="#inventing">Inventoring</Period>
						<Period start='2012-07-01' end='2014-10-01' href="#m5-network-security" short="NG">Northrop</Period>
						<Period start='2010-08-14' end='2012-04-01' href="#aad" short="AAD">AAD</Period>
			{/*
				<Period start='2009-11-01' end='2010-08-01' href="#airservices" short="AA">AA</Period>
				*/}
					</div>
				</Timeline>
			<Job
				id="fd"
				company="FifthDomain"
				start='2019-04-25' end='present'
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

				<div className="pagebreak"></div>

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

				<div className="pagebreak vspace"></div>

				<Timeline startYear={2011} endYear={2021}>
					<div>
						<p className="heading">Speaking</p>
						<Event date='2020-01-15'>Linux.conf.au Speaker</Event>
						<Event date='2018-01-24'>Linux.conf.au Speaker</Event>
						<Event date='2017-08-04'>PyCon Australia Speaker</Event>
						<Event date='2016-02-03'>Linux.conf.au Speaker</Event>
					</div>
					<div>
						<p className="heading">Volunteering</p>
						<Period start='2015-01-01' end='2019-04-21' href="#ses">VICSES</Period>
						<Period start='2010-01-01' end='2014-01-01'>TADACT</Period>
					</div>
					<div>
						<Period start='2015-01-01' end='2019-04-21' href="#csiro">CSIRO SIS</Period>
						{/* Extended the period to get the element big enough
						    real dates, start='2012-09-01' end='2013-02-05' */}
						<Period start='2012-06-01' end='2013-03-05'>LCA</Period>
					</div>
				</Timeline>

			<h1>Speaking</h1>
			<div className="row">
				<Speaking
					id="lca2020"
					company="linux.conf.au"
					date="2020-01-15"
					title="Kicad for software developers (tutorial)"
					href="https://youtu.be/0MzvESM0ZFE"
				>
				</Speaking>

				<Speaking
					id="lca2018"
					company="linux.conf.au"
					date="2018-01-24"
					title="Lessons from three years of volunteering to teach students code"
					href="https://youtu.be/FLD3Ui80M98"
				>
				</Speaking>

				<Speaking
					id="pycon2017"
					company="PyCon AU"
					date="2017-08-04"
					title="Rapid GUI development for IOT systems"
					href="https://youtu.be/_LBgIFPct-o"
				>
				</Speaking>

				<Speaking
					id="lca2016"
					company="linux.conf.au"
					date="2016-02-03"
					title="Linux driven microwave"
					href="https://youtu.be/R3DADx5z-XY"
				>
				</Speaking>
			</div>

			<h1>Volunteering</h1>

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
				<p>The CSIRO STEM Professionals in Schools program matches school teachers with STEM professionals to enhance science and technical learning in classrooms.</p>
			<p>
			For four years I attended the Bellarine Secondary College weekly to assist the IT teacher with senior classes. Working predominantly with year twelve students, I assisted with specific technical problems, helped guide their learning and provide real world grounding for what they learn. Having an extra pair of hands in the classroom allows for extra one on one guidance for students who are struggling or students who are open to extension activities to help them grow.
			</p>

				</Job>
					
					

			<div className="pagebreak"></div>

			<h1>Skills</h1>

				<div className="skills">
					<div className="group">
						<h2>General skills</h2>
						<Skill num="4">Management and Leadership</Skill>
						<Skill num="5">Explaining technical concepts</Skill>
						<Skill num="4">Teaching</Skill>
						<Skill num="3">Marketing</Skill>
					</div>
					<div className="group">
						<h2>Cloud Orchestration</h2>
						<Skill num="4">Terraform</Skill>
						<Skill num="3">Ansible</Skill>
						<Skill num="3">AWS</Skill>
						<Skill num="3">Google Cloud</Skill>
						<Skill num="3">Kubernetes</Skill>
					</div>
					<div className="group">
						<h2>Languages</h2>
						<Skill num="5">C</Skill>
						<Skill num="5">Python</Skill>
						<Skill num="5">Perl</Skill>
						<Skill num="4">Javascript</Skill>
						<Skill num="3">PHP</Skill>
						<Skill num="3">Assembly</Skill>
					</div>
					<div className="group">
						<h2>Electronics</h2>
						<Skill num="4">Circuit design</Skill>
						<Skill num="4">Manufacturing</Skill>
						<Skill num="4">Microprocessors</Skill>
						<Skill num="3">VHDL &amp; Verilog</Skill>
						<Skill num="3">RF design</Skill>
						<Skill num="3">Compliance</Skill>
					</div>
					<div className="group">
						<h2>Operating Environments</h2>
						<Skill num="5">Linux</Skill>
						<Skill num="4">Android</Skill>
						<Skill num="4">Windows</Skill>
						<Skill num="4">Virtual Machines</Skill>
						<Skill num="3">Containerisation</Skill>
					</div>
					<div className="group">
						<h2>Databases</h2>
							<Skill num="4">SQL design</Skill>
							<Skill num="3">Key Store</Skill>
							<Skill num="3">Database scripting</Skill>
							<Skill num="3">Version control</Skill>
					</div>
					<div className="group">
						<h2>Networking</h2>
						<Skill num="4">Full OSI 1-7 layer experience</Skill>
						<Skill num="3">Military grade security</Skill>
						<Skill num="3">Encryption techniques</Skill>
					</div>
				</div>

			<h1>Qualifications</h1>

			<div className="qualifications">

			<Qualification
				title="Bachelor of Information Technology"
				institution="Australian National University"
				details="Majoring in software development"
				start="2000"
				end="2004"
			/>

			<Qualification
				title="Bachelor of Engineering with Honours"
				institution="Australian National University"
				details="Majoring in Robotics and Computer Vision"
				start="2000"
				end="2004"
			/>

			<Qualification
				title="Certificate III in Public Safety (SES Rescue)"
				details="PUA30412"
				start="2014"
				end="2018"
			/>

			<Qualification
				title="Australian Security Clearance - NV1"
				details=""
			/>

			</div>


			</div>
		);
	}
}

export default App;

// vim: ts=2 sw=2
