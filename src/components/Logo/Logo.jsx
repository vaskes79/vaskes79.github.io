import React from 'react';
import './Logo.css';
import ReactVivus from '../ReactVivus'

import SvgLogo from './vg-logo.svg'


const Logo = (props) => {
    let {} = props;
    return <ReactVivus name="Logo_VasilyGuzov" svg='./vg-logo.svg' color="red" />
};

Logo.propTypes = {
};

Logo.defaultProps = {
};


export default Logo;
