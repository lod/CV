import React from 'react';
import PropTypes from 'prop-types';

async function Titleblock({ variant, children }) {
	const cv_url = "https://david.tulloh.id.au/cv/" + (variant ? variant + '/' : '');
	const cv_pdf = "david_tulloh" + (variant ? '_' + variant : '') + ".pdf";
    return (
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
              <dt>online cv</dt><dd><a href={cv_url}>{cv_url}</a></dd>
            </div>
            <div className="screenonly">
              <dt>printable cv</dt><dd><a href={"https://david.tulloh.id.au/cv/" + cv_pdf}>{ cv_pdf }</a></dd>
            </div>
          </dl>
        </div>
        { children }
      </div>
    )
}

Titleblock.propTypes = {
	variant: PropTypes.string
}

/*
export async function getServerSideProps() {
  return {
    props: { ["", "us"] },
  };
}
*/

export default Titleblock
