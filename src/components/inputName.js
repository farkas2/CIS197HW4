import React, { useState, useEffect } from 'react'

export default props => (
  <input type="text" value={props.input} onChange={e => props.setter(e.target.value)} />
)
