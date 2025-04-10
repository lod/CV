import Timeline, { Period, Event } from "@/timeline/timeline";
import Skill from "@/skill";
import Speaking from "@/speaking";
import Qualification from "@/qualification";
import Titleblock from "@/titleblock";
import * as Job from "@/Jobs";
import "@/App.scss";

// Timeline idea https://codepen.io/rogerkuik/pen/JjyGmdo
// Blurry image placeholder, conflicts with background image shading https://leanrada.com/notes/css-only-lqip/

async function App() {
	return (
		<div className="App">
			<Titleblock>
				<div className="summary">
					{/* Goal:
					 *    Broad skills
					 *    Technical Mastery
					 *    Soft skills
					 */}
					<p>
						An SRE manager with experience in both software and hardware
						devolopment. I am looking for engaging work with a skilled team.
					</p>
					<p>
						I offer a broad base of demonstrated technical proficiency,
						leadership, and creativity developed across diverse fields of
						experience. I have the skills and the insight to add value to
						projects and teams.
					</p>
				</div>
			</Titleblock>

			{/* TODO Do I need some context like the timeline? */}
			{/* TODO: Do I need context for the volunteering? */}

			{/*
				<Timeline startYear={2011} endYear={2022}>
					<div>
						<p className="heading">Employment</p>
			/*}
						{/* FD start adjusted to look prettier */}
			{/* 
			      <Period start='2021-06-21' end='now' href="#capricorn">Capricorn</Period>
			      <Period start='2021-06-21' end='now' href="#planet">Planet</Period>
			      <Period start='2020-04-01' end='2021-05-30' href="#fd">FD</Period>
						<Period start='2019-04-25' end='2020-03-20' href="#unsw">UNSW</Period>
						<Period start='2015-01-01' end='2019-01-01' href="#inventing">Inventoring</Period>
						<Period start='2012-07-01' end='2014-10-01' href="#m5-network-security" short="NG">Northrop</Period>
						<Period start='2010-08-14' end='2012-04-01' href="#aad" short="AAD">AAD</Period>
					</div>
				</Timeline>
				*/}

			<Job.Capricorn />
			<Job.Planet />
			<Job.FD />
			<Job.Unsw />

			<div className="pagebreak" />

			<Job.Inventing />
			<Job.M5 />
			<Job.AAD />

			<div className="pagebreak vspace" />

			{/*
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
						<Period start='2019-05-17' end='2020-12-06'>LCA</Period>
						<Period start='2015-01-01' end='2019-04-21' href="#csiro">CSIRO SIS</Period>
			/*}
						{/* Extended the period to get the element big enough
						    real dates, start='2012-09-01' end='2013-02-05' */}
			{/*
						<Period start='2012-06-01' end='2013-03-05'>LCA</Period>
					</div>
				</Timeline>
			*/}

			<h1>Speaking</h1>
			<div className="row">
				<Speaking
					id="lca2020"
					company="linux.conf.au"
					date="2020-01-15"
					title="Kicad for software developers (tutorial)"
					href="https://youtu.be/0MzvESM0ZFE"
				/>

				<Speaking
					id="lca2018"
					company="linux.conf.au"
					date="2018-01-24"
					title="Lessons from three years of volunteering to teach students code"
					href="https://youtu.be/FLD3Ui80M98"
				/>

				<Speaking
					id="pycon2017"
					company="PyCon AU"
					date="2017-08-04"
					title="Rapid GUI development for IOT systems"
					href="https://youtu.be/_LBgIFPct-o"
				/>

				<Speaking
					id="lca2016"
					company="linux.conf.au"
					date="2016-02-03"
					title="Linux driven microwave"
					href="https://youtu.be/R3DADx5z-XY"
				/>
			</div>

			<h1>Volunteering</h1>

			<Job.SES />
			<Job.CSIRO />

			<div className="pagebreak" />

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

				<Qualification title="Australian Security Clearance - NV1" details="" />
			</div>
		</div>
	);
}

export default App;

// export async function getStaticProps() { return {props: {}} }

// vim: ts=2 sw=2
