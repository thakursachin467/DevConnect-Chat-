import React from 'react'
import Logo from '../img/logo.png';
export default (props) => {
  return (
    <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: '#004A42' }}>
      <img src={Logo} alt='Logo' className='spin' height='200px' width='200px' style={{ marginLeft: 'auto', marginRight: 'auto', display: 'block', marginTop: '20%' }} />
      <h3 style={{ alignSelf: 'center', marginLeft: '43%', color: 'white' }}>{props.placeHolder} <span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span><span className="loader__dot">.</span></h3>
    </div>
  )
}
