import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

import { IconButton, Stack, Typography } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { breakpoints } from '@mui/system';



const getBreakpoints = () => {
    return {
      320: { slidesPerView: 1, spaceBetween: 10 },
      600: { slidesPerView: 2, spaceBetween: 10 },
      900: { slidesPerView: 3, spaceBetween: 10 },
      1024: { slidesPerView: 4, spaceBetween: 10 },
      1440: { slidesPerView: 5, spaceBetween: 10 }
    };
  };

const SwiperNvegation = () => {
    const swiper = useSwiper();



    return (
        <Stack direction={'row'} spacing={4} justifyContent={'center'} padding={2}>
            <IconButton onClick={() => swiper.slidePrev()}>
                <KeyboardArrowLeft fontSize='large' color={'primary'} />
            </IconButton>
            <IconButton onClick={() => swiper.slideNext()}>
                {swiper.allowSlideNext ? <KeyboardArrowRight fontSize='large' color={'primary'} /> : <KeyboardArrowRight fontSize='large' color="primary"/>}

            </IconButton>
        </Stack>
    )
};

const Carousel = ({ children, titulo, vazio = <div></div> }) => {
    const swiper = useSwiper();

    return (
        <>
            <Typography variant='h4' color={'white'} component={'div'} display={'flex'} alignItems={'center'}> {titulo} <KeyboardArrowRight fontSize='large' color="secondary" /> </Typography>
            {children
                ? <Swiper
                    modules={[Navigation]}
                    style={{ padding: '32px 0', justifyContent: 'center' }}
                    breakpoints={getBreakpoints()}
                
                >
                    <SwiperNvegation />
                    {children.map((slide, index) => (
                        <SwiperSlide key={index}>{slide}</SwiperSlide>
                    ))
                    }
                </Swiper>
                : vazio
            }
        </>
    );
};

export default Carousel;
