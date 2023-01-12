import React from 'react'
import styled from 'styled-components'
import DashBoardBody from './DashBoardBody'
import DashMenuBar from './DashMenuBar'


const DeshboardMain = () => {
  return (
    <MainContainer>
        <MenuBarSide><DashMenuBar/></MenuBarSide>
        <ContextSide>
            <DashBoardBody/>
        </ContextSide>
    </MainContainer>
  )
}

export default DeshboardMain

const ContextSide =styled.div`
    flex: 8;
`
const MenuBarSide =styled.div`
  background-color: #003466;
  flex: 2;
`
const MainContainer =styled.div`
    width: 100%;
    height: 100vh;
    background-color: #fff;
    display: flex;
`