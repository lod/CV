import Timeline, { Period, Event } from "@/timeline/timeline";
import Skill from "@/skill";
import Speaking from "@/speaking";
import Qualification from "@/qualification";
import Titleblock from "@/titleblock";
import * as Job from "@/Jobs";
import ExportedImage from "next-image-export-optimizer";
import "@/App.scss";

// Timeline idea https://codepen.io/rogerkuik/pen/JjyGmdo
// Blurry image placeholder, conflicts with background image shading https://leanrada.com/notes/css-only-lqip/

import selfie_img from "../images/PXL_20230519_081103465.jpg";

async function App() {
	return (
		<div className="App">
		<div>
				<div className="bgWrap">
                <ExportedImage
                    alt="Terrible selfie"
                    src={selfie_img}
                    placeholder={selfie_img.src.endsWith(".svg") ? "empty" : "blur"}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: "cover",
                    }}
                />
            </div>
			<Titleblock>
				<div className="summary">
					{/* Goal:
					 *    Broad skills
					 *    Technical Mastery
					 *    Soft skills
					 */}
					<p>
					  An experienced technical lead looking to pivot into management to further
		        increase the impact I can have.
					</p>
					<p>
		        I have a broad base of technical experience as a SRE, software developer,
		        hardware developer, team leader and project leader.  I provide creative
		        solutions and deliver complex projects.
					</p>
					<p>
							Education:
					</p>
							<ul>
								<li>Global Executive Master of Business Administration Duke University 2024</li>
								<li>Bachelor of Engineering with Honours Australian National University 2004</li>
								<li>Bachelor of Information Technology Australian National University 2004</li>
							</ul>
				</div>
			</Titleblock>
		</div>

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


			<h1 style={{display: "none"}}>Volunteering</h1> <!-- for structure -->

			<Job.SES />
			<Job.CSIRO />
			<Job.LCA />

			{ /*

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
			*/ }
		</div>
	);
}

export default App;

// export async function getStaticProps() { return {props: {}} }

// vim: ts=2 sw=2
