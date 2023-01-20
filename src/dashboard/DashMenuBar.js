import React from 'react'
import styled from 'styled-components'
import Logo from "../asset/Tech Portnew.PNG"
import { MdOutlineSpaceDashboard } from 'react-icons/md'
import { BiBookBookmark } from 'react-icons/bi'
import { AiOutlineCalendar } from 'react-icons/ai'
// import { AiOutlineFolderView } from 'react-icons/ai'

const DashMenuBar = ({Home, Ritual, Attendances}) => {
    const Homeshow = () =>{
        Home(true)
        Ritual(false)
        Attendances(false)
    }
    const Ritualshow = () =>{
        Home(false)
        Ritual(true)
        Attendances(false)
    }
    const Attendanceshow = () =>{
        Home(false)
        Ritual(false)
        Attendances(true)
    }
  return (
    <MainContainer>
       <ImageContainer> <Image src={Logo} atl="text" /></ImageContainer>
       <MenuList onClick={()=>Homeshow()}>
            <MenuHeader>HOME</MenuHeader>
            <MyMenu>
                <MdOutlineSpaceDashboard style={{color: "lightgrey"}}/>
                <span>Dashboard</span>
            </MyMenu>
       </MenuList>
       <MenuList>
            <MenuHeader>LEARN</MenuHeader>
            <MyMenu onClick={()=>Ritualshow()}>
                <BiBookBookmark style={{color: "lightgrey"}}/>
                <span>View Progress</span>
            </MyMenu>
            {/* <MyMenu>
                <AiOutlineFolderView style={{color: "lightgrey"}}/>
                <span>View Progress</span>
            </MyMenu> */}
            <MyMenu 
            onClick={()=>Attendanceshow()}
            >
                <AiOutlineCalendar style={{color: "lightgrey"}}/>
                <span>Attendance & Absences</span>
            </MyMenu>
       </MenuList>
    </MainContainer>
  )
}

export default DashMenuBar

const MyMenu = styled.div`
    display: flex;
    cursor: pointer;
    margin-top: 20px;
    align-items: center;
    margin-left: 5%;

    span{
        color: lightgrey;
        margin-left: 5%;
    }
`
const MenuHeader = styled.div`
    color: rgb(214, 176, 7);
    font-size: 13px;
    font-weight: 500;
    border-bottom: 1px solid #fafbff69;
    height: 25px;
`
const MenuList = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    margin-left: 4%;
    margin-bottom: 20%;
`
const Image = styled.img`
    width: 40%;
    margin: auto;
`
const ImageContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`