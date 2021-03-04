import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NasaScreen.css';

 export const NasaScreen = ({data}) => {

      
        const [activeIndex, setActiveIndex] = useState(0);
        const [animating, setAnimating] = useState(false);
      
        const next = () => {
          if (animating) return;
          const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
          setActiveIndex(nextIndex);
        }
      
        const previous = () => {
          if (animating) return;
          const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
          setActiveIndex(nextIndex);
        }
      
        const goToIndex = (newIndex) => {
          if (animating) return;
          setActiveIndex(newIndex);
        }
      
        const slides = data.map((item) => {
          return (
              <CarouselItem
              onExiting={() => setAnimating(true)}
              onExited={() => setAnimating(false)}
              key={item.title}
              className="carr-item"  
              >                
              <img src={item.url} alt={item.title} width="100%" height="100%" />
              <CarouselCaption 
                    captionHeader={item.title+' / '+item.date}
                    captionText={ (item.explanation.length >50 ? item.explanation.slice(0,50) : item.explanation) +' COPYRIGHT: '+item.copyright}
                    />
            </CarouselItem>
          );
        });
      
        return (
          <Carousel
            activeIndex={activeIndex}
            next={next}
            previous={previous}
            className="carr-nasa"
          >
            <CarouselIndicators items={data} activeIndex={activeIndex} onClickHandler={goToIndex} />
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
            <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
          </Carousel>
        );
      }    
  
