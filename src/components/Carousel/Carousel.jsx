import styled from '@emotion/styled'
import { Box, IconButton, Stack } from '@mui/material'
import React from 'react'
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material';

const CarouselContainer = styled(Box)`
    width: 100%;
    padding: 16px 0;    
    overflow: hidden;
`
const CarouselWrapper = styled(Stack)`
    background-color: #d80101;
    & > * {
        flex: 0 0 calc((100% - ${props => ((props.slidesPerView - 1)*props.spaceBetween)+'px'}) / ${props => props.slidesPerView});
        max-width: calc((100% - ${props => ((props.slidesPerView - 1)*props.spaceBetween)+'px'}) / ${props => props.slidesPerView});
    }
`

const Controllers = styled(Stack)`
    justify-content: center;
    flex-direction: row;
`

const Carousel = ({ children, slidesPerView, spaceBetween}) => {
    const totalElementos = children.lenght;
    
    return (
        <CarouselContainer>
            <CarouselWrapper slidesPerView={slidesPerView} spaceBetween={spaceBetween} spacing={spaceBetween+'px'} direction={'row'}>
                {children}
            </CarouselWrapper>
            <Controllers>
                <IconButton  >
                    <ArrowCircleLeft fontSize='large' color={'inherit'} />
                </IconButton>
                <IconButton >
                    <ArrowCircleRight fontSize='large' color={'inherit'} />
                </IconButton>
            </Controllers>
        </CarouselContainer>
    )
}

export default Carousel