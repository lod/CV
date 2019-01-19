const puppeteer = require('puppeteer');
const { spawnSync } = require( 'child_process' );

const css_shrink = '.summary > p { height: 10px; }';
const css_body_page = '@page { margin-top: 20mm; margin-bottom: 20mm }';
const css_first_page = '@page { margin-top: 10mm; margin-bottom: 10mm }';
const footerTemplate = '<footer style="background: red; font-size: 16px; font-family: \"Lato\", sans-serif; font-weight: 400; position: fixed; bottom: 0; right: 0">David Tulloh &nbsp;&emdash;&nbsp; david@tulloh.id.au</footer>';

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('http://localhost:3000/', {waitUntil: 'networkidle2'});

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

	await page.goto('http://localhost:3000/footer.html', {waitUntil: 'networkidle2'});
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
})();

