import React from 'react'
import styled from 'styled-components'

const DashBoardBody = () => {
  return (
    <MainContainer>
        <DashHead>
            <DashHeadText>Dashboard</DashHeadText>
            <ProfileLog>
                <ProfileImage src="" alt="Profile" />
                <Logout>Log out</Logout>
            </ProfileLog>
            <WelcomePart></WelcomePart>
        </DashHead>
    </MainContainer>
  )
}

export default DashBoardBody

const WelcomePart = styled.span`
    width: 100%;
    font-size: 25px;
` 
const Logout = styled.span` 
    margin-left: 5%;
    color: red;
    cursor: pointer;
    font-weight: 500
`
const ProfileImage = styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #000;
`
const ProfileLog = styled.div`
    display: flex;
    /* margin-right: 10%; */
    align-items: center;
    width: 200px;
`
const DashHeadText = styled.span`
    font-size: 25px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serifsans-serif;
    font-weight: 700;
    margin-left: 5%;
    color: gray
`
const DashHead = styled.div`
    width: 100%;
    height: 70px;
    background-color: #ffffff;
    box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.33);
    -webkit-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.33);
    -moz-box-shadow: 0px 2px 5px 0px rgba(0,0,0,0.33);
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    background: #f7f6f6;
`