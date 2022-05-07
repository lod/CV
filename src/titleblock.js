import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Titleblock extends Component {
  render() {
	const cv_url = "https://david.tulloh.id.au/cv/" + (this.props.variant ? this.props.variant + '/' : '');
	const cv_pdf = "david_tulloh" + (this.props.variant ? '_' + this.props.variant : '') + ".pdf";
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
        {this.props.children}
      </div>
    )
  }
}

Titleblock.propTypes = {
	variant: PropTypes.string
}

export default Titleblock
