import React from 'react'
import styled from 'styled-components'
import {Lock} from 'styled-icons/material'
import {Zap} from 'styled-icons/octicons/Zap'
import {Baidu} from 'styled-icons/boxicons-logos/Baidu'

export const LockIcon = styled(Lock)`
  color: ${props => (props.important ? 'red' : 'blue')};
  height: 100px;
`
export const ZapIcon = styled(Zap)`
  color: ${props => (props.important ? 'pink' : 'orange')};
  height: 50px;
  padding: 20px;
  transition: 0.3s all;

  &:hover {
    color: ${props => (props.important ? 'red' : 'blue')};
    transform: scale(2) rotate(360deg);
  }
`

export const BaiduIcon = styled(Baidu)`
  color: ${props => props.primaryColor};
  transition: 0.5s all;
  &:hover {
    transform: scale(1.2) translateY(5px);
    color: ${props => props.secondaryColor};
  }
`
class App extends React.Component {
  render() {
    return (
      <>
        <LockIcon important={true} />
        <LockIcon important={false} />
        <ZapIcon important={false} />
        <ZapIcon important={true} title="Zap" />
        <div>
          <BaiduIcon
            size="80px"
            title="puppy"
            primaryColor="purple"
            secondaryColor="red"
          />
          <BaiduIcon
            size="80px"
            title="puppy"
            primaryColor="cyan"
            secondaryColor="orange"
          />
          <BaiduIcon
            size="80px"
            title="puppy"
            primaryColor="blue"
            secondaryColor="yellow"
          />
          <BaiduIcon
            size="80px"
            title="puppy"
            primaryColor="green"
            secondaryColor="green"
          />
          <BaiduIcon
            size="80px"
            title="puppy"
            primaryColor="yellow"
            secondaryColor="blue"
          />
          <BaiduIcon
            size="80px"
            title="puppy"
            primaryColor="orange"
            secondaryColor="cyan"
          />
          <BaiduIcon
            size="80px"
            title="puppy"
            primaryColor="red"
            secondaryColor="purple"
          />
        </div>
      </>
    )
  }
}

export default App
