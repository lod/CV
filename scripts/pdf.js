'use strict';

// Do this as the first thing so that any code reading it knows the right env.
process.env.BABEL_ENV = 'production';
process.env.NODE_ENV = 'production';

// Makes the script crash on unhandled rejections instead of silently
// ignoring them. In the future, promise rejections that are not handled will
// terminate the Node.js process with a non-zero exit code.
process.on('unhandledRejection', err => {
	if (err.message.startsWith('net::ERR_CONNECTION_REFUSED')) {
		console.log("Must run the local server using `yarn start`.");
		process.exit(1);
	}
	throw err;
});


const puppeteer = require('puppeteer');
const { spawnSync } = require( 'child_process' );

const css_shrink = '.summary > p { height: 10px; }';
const css_body_page = '@page { margin-top: 20mm; margin-bottom: 20mm }';
const css_first_page = '@page { margin-top: 10mm; margin-bottom: 10mm }';
const css_single_page = '@page { margin-left: 0mm; margin-right: 0mm; margin-top:0mm; }';
const footerTemplate = '<footer style="background: red; font-size: 16px; font-family: \"Lato\", sans-serif; font-weight: 400; position: fixed; bottom: 0; right: 0">David Tulloh &nbsp;&emdash;&nbsp; david@tulloh.id.au</footer>';

async function main() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('http://localhost:3001/', {waitUntil: 'networkidle2'});

	await page.mainFrame().addStyleTag({content: css_first_page});
	await page.pdf({
		path: 'first.pdf',
		format: 'A4',
		pageRanges: '1',
		printBackground: true,
		displayHeaderFooter: false,
	});

	await page.mainFrame().addStyleTag({content: css_shrink});
	await page.mainFrame().addStyleTag({content: css_body_page});
	await page.pdf({
		path: 'body.pdf',
		format: 'A4',
		pageRanges: '2-',
		printBackground: true,
		displayHeaderFooter: false,
		/* Header/footer doesn't work properly, doesn't seem to style
		headerTemplate: '<div style="background: blue"></div>',
		footerTemplate,
		*/
		/* - clips content, doesn't rerender - inject css instead
		margin: {
			left:   '18mm',
			right:  '18mm',
			top:    '20mm',
			bottom: '20mm'
		}
		*/
	});

	await page.goto('http://localhost:3001/footer.html', {waitUntil: 'networkidle2'});
	await page.pdf({
		path: 'footer.pdf',
		format: 'A4',
		pageRanges: '1',
		printBackground: true,
		displayHeaderFooter: false,
	});

	await browser.close();

	spawnSync('pdftk', 'body.pdf background footer.pdf output bodybg.pdf'.split(' '));
	spawnSync('pdftk', 'first.pdf bodybg.pdf cat output david_tulloh.pdf'.split(' '));

	// Clean up
	spawnSync('rm', ['-f', 'first.pdf', 'body.pdf', 'footer.pdf', 'bodybg.pdf']);


	console.log("Generated david_tulloh.pdf");
}

async function us() {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('http://localhost:3001/US', {waitUntil: 'networkidle2'});

	await page.mainFrame().addStyleTag({content: css_single_page});

	await page.pdf({
		path: 'david_tulloh_us.pdf',
		format: 'A4',
		pageRanges: '1',
		printBackground: true,
		displayHeaderFooter: false,
	});

	await browser.close();

	console.log("Generated david_tulloh_us.pdf");
}

// Chain, puppeteer seems to occasionally trip over itself in parellel
main()
.then(us)
.then(() => console.log("Generate complete"));
