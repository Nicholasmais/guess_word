import React from 'react'

const EndScreen = ({retry}) => {
  return (
    <div>EndScreen
        <button onClick={retry}>Tentar novamente</button>
    </div>
  )
}

export default EndScreen