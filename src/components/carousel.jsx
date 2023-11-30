import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

class CarouselContent3 extends Component {

    render() {
        const CustomIndicator = ({ isSelected, onClickHandler }) => {
            const indicatorImage = isSelected
                ? '/assets/Bullet Slider On.png'
                : '/assets/Bullet Slider Off.png';

            return (
                <div class="inline-block w-12 lg:w-16">
                    <div class="h-56">

                    </div>
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
            <div class="mt-24 select-none">
                <Carousel
                    showThumbs={false}
                    emulateTouch={true}
                    infiniteLoop={true}
                    showArrows={false}
                    showStatus={false}
                    renderIndicator={(onClickHandler, isSelected) => (
                        <CustomIndicator
                            onClickHandler={onClickHandler}
                            isSelected={isSelected}
                        />
                    )}
                >
                    <div class="pb-20">
                        {/* Char blood blade */}
                        <div class="w-[400px] h-[300px] mx-auto">
                            <img class="h-[350px]" src="/assets/Char Blood Blade.gif" />
                        </div>
                        <div class="text-white bg-black bg-opacity-75 merriweather-text mt-10 m-8 p-3">
                            <div class="text-4xl m-2">Blood Blade</div>
                            <div>Melee class with the power of blade will kill all the enemies without mercies</div>

                        </div>
                    </div>
                    <div>
                        {/* char immortal sword */}
                        <div class="w-[300px] h-[300px] mx-auto">
                            <img class="h-[350px]" src="/assets/Char Immortal Sword.gif" alt="" />
                        </div>
                        <div class="text-white bg-black bg-opacity-75 merriweather-text mt-10 m-8 p-3" >
                            <div class="text-4xl m-2">Immortal Sword</div>
                            <div>Range class master of sword make it even can fly through the enemies very fast</div>

                        </div>
                    </div>
                    <div>
                        {/* char dragon spear */}
                        <div class="w-[200px] h-[300px] mx-auto relative items-center">
                            <img class="relative z-1 h-[400px]" src="/assets/Char Dragon Spear.gif" alt="" />
                        </div>
                        <div class="relative z-2 text-white bg-black bg-opacity-75 merriweather-text mt-10 m-8 p-3">
                            <div class="text-4xl m-2">Dragon Spear</div>
                            <div>Melee class with power of dragon involves, never retreat or surrender</div>

                        </div>
                    </div>
                    <div>
                        {/* char divine talisman */}
                        <div class="w-[280px] h-[300px] mx-auto">
                            <img class="relative z-0 h-[370px]" src="/assets/Char Divine Talisman.gif" alt="" />
                        </div>
                        <div class="relative z-1 text-white bg-black bg-opacity-75 merriweather-text mt-10 m-8 p-3">
                            <div class="text-4xl m-2">Divine Talisman</div>
                            <div>Range class strong magic and very deadly, keep an eagles eyes or you will hurt so bad</div>

                        </div>
                    </div>
                </Carousel>
            </div>
        )
    }
}

export default CarouselContent3;