import React from 'react'

import '../styles/Error.sass'

const Error = ({ msg = '' }) => {
  return <>{!!msg && <div className="error">{msg}</div>}</>
}

export default Error
