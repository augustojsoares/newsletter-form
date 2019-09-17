import React from 'react'

import '../styles/Accordion.sass'

const Accordion = ({ msg = '', expanded = true, toggle }) => (
  <div className={`accordion-container${expanded ? ' revealed' : ''}`}>
    <div aria-label="close" onClick={toggle} className="accordion-hide">
      X
    </div>
    <div>{msg}</div>
  </div>
)

export default Accordion
