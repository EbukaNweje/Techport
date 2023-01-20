import React, { useState } from 'react'
import styled from 'styled-components'
import DashBoardBody from './DashBoardBody'
import DashMenuBar from './DashMenuBar'
import Rituals from './Rituals'
import Attendance from './Attendance'


const DeshboardMain = () => {
  const [home, setHome] = useState(true)
    const [rituals, setRituals] = useState(false)
    const [attendance, setAttendance] = useState(false)

  return (
    <MainContainer>
        <MenuBarSide><DashMenuBar Home={setHome} Ritual={setRituals} Attendances={setAttendance}  /></MenuBarSide>
        <ContextSide>
        {
                home ? (
                    <DashBoardBody />
                ): rituals ?(
                    <Rituals />
                ): attendance ? (
                    <Attendance />
                ):null
        }
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