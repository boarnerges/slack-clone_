import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

function 
Header() {
  return (
    <Container>
        <Main>
        <AccessTimeIcon/> 
        <SearchContainer> 
            <Search> 
              <input type = "text" placeholder = "search..."/>
              </Search>
          </SearchContainer>

        <HelpOutlineIcon/>
        </Main>
        <UserContainer>
          <Nam

        </UserContainer>
          
    </Container>
  )
}

export default Header

const Container = styled.div`

`
const Main = styled.div`
  display: flex;

`
const UserContainer = styled.div`

`
const SearchContainer = styled.div`

`
const Search = styled.div`

 `
 const UserContainer = styled.div`
 
 `
