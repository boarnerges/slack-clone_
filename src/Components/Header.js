 // eslint-disable-next-line
import React from 'react'
import styled from 'styled-components'
// // import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function 
Header() {
  return (
    <Container>
        <Main>
        {/* <AccessTimeIcon/>  */}
        <SearchContainer> 
            <Search> 
              <input type = "text" placeholder = "search..."/>
              </Search>
          </SearchContainer>
{/* 
        <HelpOutlineIcon/> */}
        </Main>
        <UserContainer>
          <Name>
            Jim Moriaty
            </Name>
          <UserImage>
            {/* <img src = "https://i.imgur.com/6VBx3io.png"/> */}
            </UserImage>

        </UserContainer>
          
    </Container>
  )
}

export default Header

const Container = styled.div`
    background: #350d36;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative; 
    box-shadow: 0 1px 0 0 rgb(255 255 / 10%); 
`
const Main = styled.div`
  display: flex;
  margin-right: 16px;
  margin-left: 16px;

`
const UserContainer = styled.div`
  display: flex;
  align-items: center;
  padding-right: 16px;
  position: absolute;
  right: 0;
`
const SearchContainer = styled.div`
    min-width: 400px;
    margin-left: 16px;
    margin-right: 16px;

`
const Search = styled.div`
    width: 100%;
    box-shadow: inset 0 0 0 1px rgb(104 74 104)
    border-radius: 6px;
    display: flex;
    align-items: center;

    input {
      background-color: transparent;
      border: none;
      padding-left: 8px;
      padding-right: 8px;
      color: white;
      padding-top: 4px;
      padding-bottom: 4px;
    }

    input:focus {
      outline: none;

    }
 `
 const Name = styled.div`
    padding-right:16px;
 `
 const UserImage = styled.div`
    width: 28px;
    height: 28px;
    border: 2px solid white;
    border-radius: 3px;

    img {
      width: 100%;
    }
 `  