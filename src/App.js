import React from 'react'
import styled from 'styled-components'
import {Lock} from 'styled-icons/material'
import {Zap} from 'styled-icons/octicons/Zap'
export const LockIcon = styled(Lock)`
  color: ${props => (props.important ? 'red' : 'blue')};
  height: 100px;
`
export const ZapIcon = styled(Zap)`
  color: ${props => (props.important ? 'pink' : 'orange')};
  height: 50px;
  &:hover {
    color: ${props => (props.important ? 'red' : 'blue')};
  }
`
class App extends React.Component {
  render() {
    return (
      <>
        <LockIcon important={true} />
        <LockIcon important={false} />
        <ZapIcon important={false} />
        <ZapIcon important={true} />
      </>
    )
  }
}

export default App
