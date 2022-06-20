import React from 'react'
import styled from 'styled-components'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
function 
Header() {
  return (
    <Container>
        <Main>
        <AccessTimeIcon/>
        </Main>
        {/* <UserContainer>

        </UserContainer>
         */}
    </Container>
  )
}

export default Header

const Container = styled.div`

`

const Main = styled.div`
background: red;
`
const UserContainer = styled.div`
background: green;
`