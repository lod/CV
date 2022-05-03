import React, { Component } from 'react';
import Timeline, {Period,Event} from './timeline/timeline';
import Job from './job/job';
import Skill from './skill';
import Qualification from './qualification';
import './App.scss';
import './US.scss';

class US extends Component {
	render() {
		return (
			<div className="App US">
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
								<dt>online cv</dt><dd><a href="https://david.tulloh.id.au/cv/us/">https://david.tulloh.id.au/cv/us/</a></dd>
							</div>
							<div className="screenonly">
								<dt>printable cv</dt><dd><a href="https://david.tulloh.id.au/cv/david_tulloh_us.pdf">david_tulloh_us.pdf</a></dd>
							</div>
						</dl>
					</div>
					</div>
			<div id="columns">

			<div id="jobs">
				<Timeline startYear={2011} endYear={2022}>
					<div>
						<p className="heading">Employment</p>
						{/* FD start adjusted to look prettier */}
						{/* Planet end adjusted to look prettier */}
			      <Period start='2021-06-21' end='now' href="#planet">Planet</Period>
			      <Period start='2020-04-01' end='2021-05-30' href="#fd">FD</Period>
						<Period start='2019-02-01' end='2020-03-20' href="#space">UNSW</Period>
						<Period start='2015-01-01' end='2019-01-01' href="#inventing">Inventoring</Period>
						<Period start='2012-07-01' end='2014-10-01' href="#m5-network-security" short="NG">Northrop</Period>
						<Period start='2010-08-14' end='2012-04-01' href="#aad" short="AAD">AAD</Period>
					</div>
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
						<Period start='2020-03-01' end='2021-10-01'>LCA</Period>
						<Period start='2015-01-01' end='2019-04-21' href="#csiro">CSIRO SIS</Period>
						{/* Extended the period to get the element big enough
						    real dates, start='2012-09-01' end='2013-02-05' */}
						<Period start='2012-06-01' end='2013-03-05'>LCA</Period>
					</div>
				</Timeline>

			<div className="summary" style={{display: 'none'}}>
				{/* Goal:
					*    Broad skills
					*    Technical Mastery
					*    Soft skills
					*/}
			</div>
			<Job
        id="planet"
        company="Planet Labs"
        start="2021-06-21" end="present"
        title="Systems Reliability Engineer"
        responsibilities={[
          "Maintain ground stations",
          "Improve systems",
          "Design future systems"
        ]}
        href="https://www.planet.com/"
        description="An earth observation company manufacturing and operating over 200 satellites to provide current, quality imagery."
      >
			<p>
      Manage, maintain and operate Planet's 48 ground stations, located in 11 countries around the world, including overseeing the safe download of around x terabytes of data each day.
      </p>
      <p>
      Key achievements in this role include:
      </p>
      <ul>
      <li>Led system design and prototype implementation for next generation of ground station systems across the company.</li>
      <li>Designed and implemented replacement monitoring system to achieve significant efficiency gains.</li>
      <li>Working remotely, coordinated across geographically and structurally dispersed teams to manage requirements and achieve consistent, high quality results.</li>
      </ul>
      </Job>


			<Job
				id="fd"
				company="FifthDomain"
				start='2019-04-25' end='2021-05-30'
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
			Drove process improvements such as electronics source control, component inventory management and explored manufacturing capability improvements.
			</li>

			</ul>


				</Job>

			</div> { /* jobs */ }
					
					

			<div id="right">

			<h1>Skills</h1>
				<div className="group"><h2>Management</h2></div>
				<div className="group"><h2>Cloud conducting</h2>
					<Skill>Terraform</Skill>
					<Skill>Ansible</Skill>
					<Skill>AWS</Skill>
					<Skill>Kubernetes</Skill>
				</div>
				<div className="group"><h2>Programming</h2>
					<Skill>C</Skill>
					<Skill>Python</Skill>
					<Skill>Perl</Skill>
					<Skill>Javascript</Skill>
				</div>
				<div className="group"><h2>Computing</h2>
					<Skill>Databases</Skill>
					<Skill>Networking</Skill>
				</div>
				<div className="group"><h2>Electronics design</h2>
					<Skill>Design</Skill>
					<Skill>Manufacturing</Skill>
					<Skill>Compliance</Skill>
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


			</div>
			</div>
		);
	}
}

export default US;

// vim: ts=2 sw=2
