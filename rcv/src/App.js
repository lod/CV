import React, { Component } from 'react';
import Timeline, {Period,Event} from './timeline/timeline';
import Job from './job/job';
import './App.css';

class App extends Component {
	render() {
		const now = new Date().toISOString();
		return (
			<div className="App">
				<Timeline startYear={2010} endYear={2018}>
					<div>
						<p className="heading">Employment</p>
						<Period start='2015-01-01' end={now} href="#inventing">Inventoring</Period>
						<Period start='2012-07-01' end='2014-10-01' href="#m5-network-security">M5 Network Security</Period>
						<Period start='2010-08-01' end='2012-04-01' href="#aad">Australian Antarctic Division</Period>
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
					company="Minimal details"
					title="Testing display"
				>
					Some content
				</Job>

			</div>
		);
	}
}

export default App;

// vim: ts=2 sw=2
