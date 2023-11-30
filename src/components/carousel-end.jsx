import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselContent extends Component {

    render() {
        const CustomIndicator = ({ isSelected, onClickHandler }) => {
            const indicatorImage = isSelected
                ? '/src/assets/Bullet Slider On.png'
                : '/src/assets/Bullet Slider Off.png';

            return (
                <div class="inline-block w-12 lg:w-16">
                    <button onClick={onClickHandler}>
                        <img
                        class="p-1"
                            src={indicatorImage}
                            style={{ cursor: 'pointer' }}
                        />
                    </button>
                </div>
            );
        };

        return (
            <div class="m-10 select-none">
                <Carousel
                    showThumbs={false}
                    emulateTouch={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showStatus={false}
                    autoPlay={true}
                    interval={5000}
                    renderIndicator={(onClickHandler, isSelected) => (
                        <CustomIndicator
                            onClickHandler={onClickHandler}
                            isSelected={isSelected}
                        />
                    )}
                >
                    <div class="pb-24 lg:pb-28">
                        <img src="/src/assets/Slide 1.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/src/assets/Slide 2.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/src/assets/Slide 3.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/src/assets/Slide 4.jpg" alt="" />
                    </div>
                    <div>
                        <img src="/src/assets/Slide 5.jpg" alt="" />
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default CarouselContent;