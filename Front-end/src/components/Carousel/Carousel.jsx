import React from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';

import { IconButton, Stack, Typography } from '@mui/material';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';



const getBreakpoints = () => {
    return {
      0: { slidesPerView: 1, spaceBetween: 0 },
      600: { slidesPerView: 2, spaceBetween: 8 },
      900: { slidesPerView: 3, spaceBetween: 16 },
      1200: { slidesPerView: 4, spaceBetween: 32 },
      1536: { slidesPerView: 5, spaceBetween: 48 }
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
     console.log(children)

    return (
        <>
            <Typography variant={'h5'} color={'white'} component={'div'} display={'flex'} alignItems={'center'}> {titulo} <KeyboardArrowRight fontSize='large' color="secondary" /> </Typography>
            {children.length
                ? <Swiper
                    modules={[Navigation]}
                    style={{ padding: '32px 0'}}
                    breakpoints={getBreakpoints()}
                
                >
                    <SwiperNvegation />
                    {children.map((slide, index) => (
                        <SwiperSlide style={{display:'flex', justifyContent:'center'}} key={index}>{slide}</SwiperSlide>
                    ))
                    }
                </Swiper>
                : vazio
            }
        </>
    );
};

export default Carousel;
