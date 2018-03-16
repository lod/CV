import React, { Component } from 'react';
import Timeline, {Period,Event} from './timeline/timeline';
import Job from './job/job';
import Skill from './skill';
import Qualification from './qualification';
import './App.scss';

class App extends Component {
	render() {
		const now = new Date().toISOString();
		return (
			<div className="App">
				<div className="titleblock">
					<div>
						<div className="name">David Tulloh</div>
						<div className="role">Software Developer, Electronics Engineer, Inventor</div>
					</div>
					<dl>
						<dt>email</dt><dd>david@tulloh.id.au</dd>
						<dt>webpage</dt><dd>https://david.tulloh.id.au/</dd>
						<dt>phone</dt><dd>+61 439 069 336</dd>
						<dt>github</dt><dd>https://github.com/lod</dd>
						<dt>online cv</dt><dd>https://david.tulloh.id.au/cv.pdf</dd>
					</dl>
				</div>
			<div><p id="summary">
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id condimentum velit, eget interdum lectus. Donec quam sapien, efficitur blandit tristique eu, ultrices a mauris. Nullam bibendum justo lectus, vitae bibendum justo consectetur ut. Aenean euismod massa sed lorem eleifend dignissim. Etiam at blandit tortor, vel hendrerit dolor. Aenean venenatis tortor ac finibus tempus. Etiam dignissim mauris urna. Curabitur mattis bibendum nulla ac placerat. 
			</p></div>
				<Timeline startYear={2010} endYear={2018}>
					<div>
						<p className="heading">Employment</p>
						<Period start='2015-01-01' end={now} href="#inventing">Inventoring</Period>
						<Period start='2012-07-01' end='2014-10-01' href="#m5-network-security">M5 Network Security</Period>
						<Period start='2010-08-14' end='2012-04-01' href="#aad">Australian Antarctic Division</Period>
						<Period start='2009-11-01' end='2010-08-01' href="#airservices">Airservices Australia</Period>
					</div>
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
						<Period start='2012-09-01' end='2013-02-05'>Linux.conf.au Organiser</Period>
					</div>
				</Timeline>
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
				M5 Network Security, a branch of Northrop Grumman's Information Systems Sector, designs and manufactures
				devices to facilitate secure communications across insecure networks. The work included designing hardware,
				firmware, operating system drivers, client software and server infrastructure. All certified to military and civilian
				standards.

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
					The Australian Antarctic Division maintains several stations on Antarctica to support scientific research. As the
				electronics support engineer at Davis Station, I was responsible for providing technical assistance to short and long
				term biological studies, glaciology research and a variety of atmospheric studies.
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
					<ul>
						<li>Discovered a flaw in ADS-B altimitery data.</li>
						<li>Contributed to reports on Sydney Airport runway approaches and lower level surveillance in Western Australia.</li>
						<li>Co-authored a paper for the International Separation and Airspace Safety Panel.</li>
						<li>Extended and modified existing VBA and Matlab applications to meet changing requirements.</li>
						<li>Developed a range of Perl modules to abstract the vulgarities of the data from processing tasks.</li>
					</ul>
				</Job>

				<div className="skills">
					<div className="group">
						<h2>Languages</h2>
						<Skill num="5">C</Skill>
						<Skill num="5">Python</Skill>
						<Skill num="5">Perl</Skill>
						<Skill num="4">Javascript</Skill>
						<Skill num="3">PHP</Skill>
						<Skill num="3">Assembly</Skill>
						<Skill num="2">Bash</Skill>
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
						<Skill num="4">Andoid</Skill>
						<Skill num="4">Virtual Machines</Skill>
						<Skill num="3">Containerisation</Skill>
						<Skill num="3">Cisco iOS</Skill>
					</div>
				</div>

				<div className="skills">
					<div className="group">
						<h2>Databases</h2>
			SQL design
			KeyStore
			PgSQL scripting
			Version control
					</div>
					<div className="group">
						<h2>Networking</h2>
						Full stack experience, down to physical layer
						Experience with security technologies
						Understanding of encryption
					</div>
					<div className="group">
						<h2>General skills</h2>
						Marketting
						Management

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
