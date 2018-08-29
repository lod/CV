import React, { Component } from 'react';
import Timeline, {Period,Event} from './timeline/timeline';
import Job from './job/job';
import Skill from './skill';
import Speaking from './speaking';
import Qualification from './qualification';
import './App.scss';

// Employment and volunteering format inconsistent
// story vs dot points
// Make all story
// Fix whitespace alignment
// Bulk up content a little, what I did/achieved
//

class App extends Component {
	render() {
		const now = new Date().toISOString();
		return (
			<div className="App">
				<div className="titleblock">
					<div>
						<div className="name">David Tulloh</div>
						<div className="role">Software Developer, Electronics Engineer, Inventor</div>
			<div className="summary">
				<p>
					David Tulloh is an experienced engineer with a broad range of skills having delivered electronics projects, software projects as well as working a technical facilitator for multiple fields.
				</p>
				<p>
					While pursuing private projects David is looking for short term contract work to provide social contact, technical growth and financing.
				</p>
			</div>
					</div>
					<dl>
						<dt>email</dt><dd>david@tulloh.id.au</dd>
						<dt>webpage</dt><dd>https://david.tulloh.id.au/</dd>
						<dt>phone</dt><dd>+61 439 069 336</dd>
						<dt>github</dt><dd>https://github.com/lod</dd>
						<dt>online cv</dt><dd>https://david.tulloh.id.au/cv.pdf</dd>
					</dl>
				</div>
				<Timeline startYear={2010} endYear={2018}>
					<div>
						<p className="heading">Employment</p>
						<Period start='2015-01-01' end={now} href="#inventing">Inventoring</Period>
						<Period start='2012-07-01' end='2014-10-01' href="#m5-network-security">M5 Network Security</Period>
						<Period start='2010-08-14' end='2012-04-01' href="#aad">Australian Antarctic Division</Period>
						<Period start='2009-11-01' end='2010-08-01' href="#airservices">Airservices Australia</Period>
					</div>
				</Timeline>

			<Job
				id="self-employed"
				company="Self Employed"
				start='2015-01-01'
				title="Founder"
				responsibilities={[
					"Product development",
					"Electronics design",
					"Software development",
					"Marketing",
				]}
			>
			<p>
			Enabled by my partner's move interstate and inspired by a terrible microwave purchase I decided to start a new business developing a new microwave.  After the microwave project failed due to difficulties finding a manufacturing partner I designed a PIR sensor replacement that didn't require movement and an alarm system for hotel travellers.
			</p>
			<p>
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
					href="http://www.northropgrumman.com/BusinessVentures/M5NetworkSecurity/About/Pages/default.aspx"
				>
			<p>
				M5 Network Security, a branch of Northrop Grumman's Information Systems Sector, designs and manufactures
				devices to facilitate secure communications across insecure networks. The work included designing hardware,
				firmware, operating system drivers, client software and server infrastructure. All certified to military and civilian
				standards.
			</p>
			<p>
				My primary task was to develop the firmware for the next generation of product with six different microprocessors performing multiple functions. Architectures used were the Cypress PSoC 5LP and the Xilinx Microblaze. Duties also included reviewing and documenting the electronics circuit design, testing boards, diagnosing faults, designing modifications and certifying the system. I also assisted the work of the software development team and support team.
			</p>

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
				>
			<p>
					The Australian Antarctic Division maintains several stations on Antarctica to support scientific research. As the
				electronics support engineer I spent three seasons living at Davis Station. Living and working closely with a diverse group of people significantly improved my social and people skills. In addition to my technical duties I led field teams, visits to foreign stations and fulfilled station roles.
			</p>
			<p>
			I was responsible for providing technical assistance to over twenty different experiments, primarily atmospheric instruments but also including biology, geology and glaciology experiments. My duties included daily monitoring, routine maintenance, annual maintenance programs, emergency and scheduled repairs, process improvement and other tasks as required.
			</p>
			
				</Job>

				<Job
					id="airservices"
					company="Airservices Australia"
					title="Research Programmer"
					start='2009-11-01' end='2010-08-01' 
					href="http://www.airservicesaustralia.com/"
					responsibilities={[
						"Prepare data for processing",
						"Develop new data sources",
						"Produce data visualisations",
						"Contribute to analysis reports",
					]}
				>
					<p>
			The Airservices Australia safety team is responsible for ensuring the safety of Australian flying experience. As part of the qualitive and quantitive analysis teams I supported routine reporting, targetted studies and expanded the teams capability.
					</p>
			<p>
			I worked with a team from USA's Federal Aviation Administration to perform the first statistical analysis of altimeter errors using ADS-B data. In the process I identified and compensated for errors in the ADS-B reporting. I also contributed to multiple internal agency reports and a paper submitted to the International Separation and Airspace Safety Panel.
			</p>
			<p>
			While my primary role was to prepare data for analysis I also liased with multiple other internal and external teams to collect data. In doing so I expanded the breadth of available data, allowing new analysis, and worked towards improved access to data, reducing workload for my collegues and increasing the frequency of reporting.
			</p>
				</Job>

				<div className="pagebreak"></div>

				<Timeline startYear={2010} endYear={2018}>
					<div>
						<p className="heading">Speaking</p>
						<Event date='2018-01-24'>Linux.conf.au Speaker</Event>
						<Event date='2017-08-04'>PyCon Australia Speaker</Event>
						<Event date='2016-02-03'>Linux.conf.au Speaker</Event>
					</div>
					<div>
						<p className="heading">Volunteering</p>
						<Period start='2015-01-01' end={now}>VICSES</Period>
						<Period start='2010-01-01' end='2014-01-01'>TADACT</Period>
					</div>
					<div>
						<Period start='2015-01-01' end={now}>CSIRO SIS</Period>
						<Period start='2012-09-01' end='2013-02-05'>LCA</Period>
					</div>
				</Timeline>

			<h1>Speaking</h1>
			<div className="row">

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
					start='2015-01-01' end={now}
					href="https://www.ses.vic.gov.au/"
					responsibilities={[
						"Member of unit management team",
						"Ensure operational readiness",
						"Divisional commander",
					]}
				>
			<p>
					Member of the VICSES, a volunteer emergency response service responsible for storm, floor, rescue and assisting other agencies in the Bellarine peninsula.
			</p>
			<ul>
			<li>Attending emergency callouts, performing a variety of tasks.</li>
			<li>Certified training in a wide range of skills including first aid, chainsaw operation, road crash rescue and operational leadership.</li>
			<li>Performed as divisional commander, leading over eighty members at a time from around the state</li>
			<li>As Deputy Controller of Operations, manage a team which monitors, maintains and expands the unit's operational capability</li>
			</ul>
				</Job>

				<Job
					id="csiro"
					company="CSIRO STEM Professionals in Schools"
					title="Mentor"
					start='2015-01-01' end={now}
					href="https://www.csiro.au/en/Education/Programs/STEM-Professionals-in-Schools"
					responsibilities={[
						"Support and guide year 12 IT students",
						"Assist teacher with professional development",
						"Extend skills of advanced students",
					]}
				>
				<p>The CSIRO STEM Professionals in Schools program matches school teachers with STEM professionals to enhance STEM learning in classrooms.</p>
				<ul>
			<li>Attend the classroom weekly for consistency of learning.</li>
			<li>Extend students breadth and depth of knowledge.</li>
			<li>Support the teacher with technical expertise.</li>
			<li>Provide private tutoring.</li>
			</ul>

				</Job>
					
					


			<h1>Skills</h1>

				<div className="skills">
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
						<Skill num="3">Cisco iOS</Skill>
					</div>
					<div className="group">
						<h2>Databases</h2>
							<Skill num="4">SQL design</Skill>
							<Skill num="3">KeyStore</Skill>
							<Skill num="3">PgSQL scripting</Skill>
							<Skill num="3">Version control</Skill>
					</div>
					<div className="group">
						<h2>Networking</h2>
						<Skill num="3">Full OSI 1-7 layer experience</Skill>
						<Skill num="3">Military grade security</Skill>
						<Skill num="3">Encryption</Skill>
					</div>
					<div className="group">
						<h2>General skills</h2>
						<Skill num="3">Marketing</Skill>
						<Skill num="2">Management</Skill>

					</div>


				</div>

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
				title="Australian Security clearance NV1"
				details="currently inactive"
			/>

			</div>

			</div>
		);
	}
}

export default App;

// vim: ts=2 sw=2
