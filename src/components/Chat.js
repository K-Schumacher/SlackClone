import React from 'react'
import styled from 'styled-components'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';

function chat() {
    return (
        <Container>
            <Main>
                <ChannelName>
                    # Channel 1
                    <StarOutlineIcon />
                </ChannelName>
                <ChannelDescription>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </ChannelDescription>
            </Main>
            <Details>
                Details
                <ErrorOutlineIcon />
            </Details>


        </Container>
    )
}

export default chat


const Container = styled.div`
    height: 64px;
    box-shadow: 0 1px rgb(20 20 20 / 10%);
    display: flex;
    align-items: center;
`

const Main = styled.div`
    padding-left: 16px

`

const ChannelName = styled.div`
    padding-top: 5px;
    display: flex;
    align-items: center;
    font-weight: 500;  
`

const ChannelDescription = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.85rem;
    font-weight: 200;
    color: rgba(10, 10, 10, 0.75)
`

const Details = styled.div`
    display: flex;
    position: absolute;
    right: 0;
    padding-right: 16px;
`