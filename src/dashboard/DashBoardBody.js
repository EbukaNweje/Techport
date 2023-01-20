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
        </DashHead>
            <WelcomePart>
                <WelBody>
                    <h4>Hi there, Ebuka! Today is January 13,2023</h4>
                    <span>If you can write "hello world" you can change the world</span>

                    <Progress>
                        <ProgressMake>
                            <ProgressMakeText>
                                <h5>Program Progress</h5>
                                <span>4 modules remaining</span>
                            </ProgressMakeText>
                            <h3>0%</h3>
                        </ProgressMake>

                        <ProgressMod>
                            <ProgressModText>
                                <h5>Module Repears</h5>
                                <h3>0/3</h3>
                                <span>Repeated</span>
                            </ProgressModText>
                            <ProgressModText>
                                <h5>Block Repeats</h5>
                                    <h3>0/0</h3>
                                <span>Repeated</span>
                            </ProgressModText>
                        </ProgressMod>
                    </Progress>
                </WelBody>
            </WelcomePart>
    </MainContainer>
  )
}

export default DashBoardBody

const ProgressModText = styled.div`
    width: 45%;
    height: 100%;
    background: #fff;
    box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.39);
    -webkit-box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.39);
    -moz-box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.39);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h5 {
        font-size: 15px;
        margin: 0px;
        padding: 0px;
    }

    h3 {
        margin: 0px;
        padding: 0px;
        font-size: 30px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
`
const ProgressMod = styled.div`
    width: 35%;
    height:  80%;
    display: flex;
    justify-content: space-between;
`
const ProgressMakeText = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
`
const ProgressMake = styled.div`
    width: 50%;
    height:  80%;
    background: #fff;
    box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.39);
    -webkit-box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.39);
    -moz-box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.39);
    align-items: center;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: 30px;
        margin: 0px;
        padding: 0px;
    }
`
const Progress = styled.div`
    width: 100%;
    height: 30%;
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
`
const WelBody = styled.div`
    width: 90%;
    height: 100%;

    h4{
        font-weight: 700;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #535353;
        font-size: 25px;
    }

    span{
        margin-top: 5%;
        color: gray;
        font-size: 15px;
        font-style: italic;
        display: flex;
        justify-content:center;
    }
`
const WelcomePart = styled.div`
    width: 100%;
    height: 82%;
    display: flex;
    justify-content: center;
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