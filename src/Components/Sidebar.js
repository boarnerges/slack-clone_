import React , { Component}  from 'react';
import styled from 'styled-components'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {SidebarItemsData} from '../data/SidebarData'
import AddIcon from '@mui/icons-material/Add';
 

function Sidebar() {
  return (
    <Container>
      <WorkSpaceContainer>
        <Name>
          Jim Moriaty
        </Name>
        <NewMessage>
          <AddCircleOutlineIcon/>
        </NewMessage>
      </WorkSpaceContainer>
      <MainChannels>
          {
              SidebarItemsData.map( item => (
                  <MainChannelItem>
                    {item.icon}
                    {item.text}
                  </MainChannelItem>
                )
              )
            }
        
        <MainChannelItem>
          <AddCircleOutlineIcon />
          Add
        </MainChannelItem>
      </MainChannels>
      <ChannelsContainer>
        <NewChannelContainer>
          <ChannelList>
            <Channel>
              #Channel
            </Channel>
            <Channel>
              #Channel
            </Channel>

          </ChannelList>
        <AddIcon />  
        </NewChannelContainer>
       
      </ChannelsContainer>
    </Container>
  )
}

export default Sidebar

const Container = styled.div`
    background: #3F0E40;
`

const WorkSpaceContainer = styled.div`
    color: white;
    height: 64px;
    display: flex;
    align-items: center;
    padding-left: 19px
    justify-content: space-between;
    border-bottom: 1px solid #532753;
`

const Name = styled.div`

`

const NewMessage = styled.div`
     width: 36px;
     height: 36px;
     background: white;
     color: #3F0E40;
     fill: #3F0E40;
     display: flex;
     justify-content: center;
     align-items: center;
     border-radius: 50%;
     margin-right: 20px;
     cursor: pointer;
`
const MainChannels = styled.div`
      padding-top: 20px;
`

const MainChannelItem = styled.div`
      color: rgb(188, 171, 188);
      dispaly: grid;
      grid-template-columns: 15% auto;
      height: 28px;
      align-items: center;
      padding-left: 19px;
      cursor: pointer;
      :hover {
        background: #350D36;
      }
`

const ChannelsContainer =styled.div`
      color: rgb(188, 171, 188);
      Margin-top: 10px
`

const NewChannelContainer = styled.div`
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 28px;
      padding-left: 19px;
      padding-right: 12px;
`

const ChannelList = styled.div`

`
const Channel = styled.div`
    height: 28px
    dispaly: flex;
    aligh-items: center;
    padding-left: 19px
    cursor: pointer;
    :hover {
      background: #350D36;
    }
`