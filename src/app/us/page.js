'use client';

import Timeline, {Period,Event} from '@/timeline/timeline';
import Skill from '@/skill';
import Qualification from '@/qualification';
import Titleblock from '@/titleblock';
import * as Job from '@/Jobs';
import '@/App.scss';
import '@/US.scss';


export default function Home() {
	return (
		<div className="App US">
		<Titleblock variant="us" />
		<div id="columns">

		<div id="jobs">
			<Timeline startYear={2011} endYear={2022}>
				<div>
					<p className="heading">Employment</p>
					{/* FD start adjusted to look prettier */}
				<Period start='2021-06-21' end='now' href="#planet">Planet</Period>
				<Period start='2020-04-01' end='2021-05-30' href="#fd">FD</Period>
					<Period start='2019-02-01' end='2020-03-20' href="#unsw">UNSW</Period>
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
					<Period start='2019-05-17' end='2020-12-06'>LCA</Period>
					<Period start='2015-01-01' end='2019-04-21' href="#csiro">CSIRO SIS</Period>
					{/* Extended the period to get the element big enough
						real dates, start='2012-09-01' end='2013-02-05' */}
					<Period start='2012-06-01' end='2013-03-05'>LCA</Period>
				</div>
			</Timeline>

			<Job.Planet/>
			<Job.FD/>
			<Job.Unsw/>
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

// vim: ts=2 sw=2
