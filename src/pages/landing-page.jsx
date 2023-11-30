import CarouselContent3 from "../components/carousel"
import YoutubeVideo from "../components/youtube"
import CarouselContent from "../components/carousel-end"
import React, { useState } from 'react'
import Modal from "../components/popup"

export default function LandingPage() {
    const [isModelOpen, setModalOpen] = useState(false);

    const openModal = () => {
        setModalOpen(true)
    }

    const closeModal = () => {
        setModalOpen(false)
    }
    return (
        <>
            {/* Body */}
            <div>
                {/* navbar */}
                <div class="flex h-[80px] justify-between items-center absolute z-10">
                    {/* logo */}
                    <a href="https://immortal.gamesxtra.net/#">
                        <img class="w-[136px] h-[40px] mt-[20px] ml-[16px] lg:ml-[120px]" src="/src/assets/Logo.png" />
                    </a>
                    {/* guide */}
                    <div>

                    </div>
                </div>
                {/* Content 1 or header*/}
                <div class="bg-cover bg-center h-[750px] z-0" style={{ backgroundImage: 'url("./src/assets/Background Section 1.jpg")' }}>
                    <div class="flex flex-col lg:flex-row-reverse lg:pt-[48px] lg:ml-[100px]">
                        {/* moving image */}
                        <img class="mx-auto w-[424px] h-[268px] top-40 moving-image z-0 lg:h-[400px] lg:w-[650px]" src="/src/assets/Image Hero Section 1.png" />
                        <div class="flex flex-col items-center mt-20 z-40">
                            {/* logo middle */}
                            <img class="w-[284px] h-[84px] z-0 lg:w-[404px] lg:h-[120px]" src="/src/assets/Logo.png" />
                            {/* text middle */}
                            <p class="merriweather-text text-white m-5 text-lg text-center lg:text-2xl lg:w-[400px]">Play the most attractive MMORPG in your hands</p>
                            {/* button google & app */}
                            <div class="flex gap-4 mx-5 lg:w-[400px]">
                                <a href="https://play.google.com/store/apps/details?id=com.extralife.android.ilegend">
                                    <img class="" src="/src/assets/Button Google Play.png" />
                                </a>
                                <a href="https://immortal.gamesxtra.net/#">
                                    <img class="" src="/src/assets/Button Apple Store.png" />
                                </a>
                            </div>
                            {/* gift button */}
                            <div class="relative">
                                <button onClick={openModal}>
                                    <img class="w-[180px] h-[65px] lg:w-[240px] lg:h-[80px] m-8" src="/src/assets/Button Gift Code.png"></img>
                                    <div class="merriweather-text absolute left-16 top-[52px] text-[#d8ae2f] shadow lg:left-[75px] lg:text-xl lg:top-[58px]">Free Gift Code!!</div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* content 2 */}
                <div class="bg-cover bg-center h-[750px] z-0" style={{ backgroundImage: 'url("src/assets/Background Section 2.jpg")' }}>
                    <div class="flex flex-col justify-center items-center lg:flex-row">
                        {/* text content */}
                        <div class="relative lg:m-20">
                            <div class="text-white merriweather-text text-center m-6 mt-20 text-lg lg:w-[400px] lg:text-2xl lg:pb-[50px]">Experience the game with the best action, amazing characters and unforgettable experiences
                            </div>
                            {/* background and youtube video */}
                            <div class="flex flex-col items-center">
                                <img class="mx-auto w-[400px] h-[218px]" src="/src/assets/Video Background.png" />
                                <div class="absolute">
                                    <YoutubeVideo></YoutubeVideo>
                                </div>
                            </div>
                        </div>
                        {/* hero image */}
                        <img class="lg:w-[705px] lg:h-[502px] w-[328px] h-[234px] mt-11 lg:mt-[100px]" src="/src/assets/Image Hero Section 2.png"></img>
                    </div>
                </div>
                {/* contain 3 */}
                <div class="bg-cover bg-center h-[896px] z-0" style={{ backgroundImage: 'url("src/assets/Background Section 3.jpg")' }}>
                    {/* text */}
                    <div class="text-right lg:text-center lg:pt-[100px] text-5xl pt-20 metalmania-text text-white tracking-widest mr-7">
                        Character Class
                    </div>
                    <div>
                        {/* char carousel */}
                        <div>
                            <CarouselContent3></CarouselContent3>
                        </div>
                    </div>
                </div>
                {/* content 4 */}
                <div class="bg-cover bg-center h-[593px] md:h-[793px] lg:px-20 lg:h-[940px] z-0 " style={{ backgroundImage: 'url("src/assets/Background Section 4.jpg")' }}>
                    <div class="metalmania-text text-center text-white tracking-widest pt-[70px] text-5xl lg:pt-[100px] lg:pb-[20px]">
                        FEATURE
                    </div>
                    {/* carousel */}
                    <div class=" lg:w-[900px] mx-auto">
                        <CarouselContent></CarouselContent>
                    </div>

                </div>
                {/* footer */}
                <div class="bg-cover bg-center bg-black h-[500px] z-0 lg:h-[200px]">
                    <div class="flex flex-col lg:flex-row justify-between pt-[80px] relative lg:h-[50px]">
                        {/* logo & copyright */}
                        <div class="lg:flex lg:flex-row text-center lg:ml-10">
                            <div class="flex justify-center">
                                <img class="w-10 h-10 lg:w-16 lg:h-16" src="/src/assets/favicon.png" alt="" />
                            </div>
                            <div class="lg:text-left lg:flex lg:flex-col lg:ml-2 lg:mt-2">
                                <div class="text-white text-[12px] merriweather-text pt-5 lg:pt-0">© 2022 EXTRALIVE ENTERTAINMENT.</div>
                                <a href="https://immortal.gamesxtra.net/privacy-policy.php">
                                    <div class="text-white merriweather-text text-[12px] pt-3">Privacy Policy</div>
                                </a>
                            </div>
                        </div>
                        {/* char footer */}
                        <div class="justify-center self-center relative -bottom-[71px] lg:-top-[0px]">
                            <img class="" src="/src/assets/Character Footer.png" alt="" />
                        </div>
                        {/* button social media */}
                        <div class="flex-row hidden lg:block lg:ml-[30px] lg:mr-5">
                            <button class="mx-2">
                                <img src="/src/assets/Button Footer Play Now.png" alt="" />
                            </button>
                            <button class="mx-2">
                                <img src="/src/assets/Button Footer Facebook.png" alt="" />
                            </button>
                            <button class="mx-2">
                                <img src="/src/assets/Button Footer Instagram.png" alt="" />
                            </button>
                            <button class="mx-2 mr-5">
                                <img src="/src/assets/Button Footer Discord.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>
                {/* modal pop up free gift */}
                <Modal isOpen={isModelOpen} onClose={closeModal}>
                    {/* background */}
                    <div class="merriweather-text text-center text-md bg-cover bg-center" style={{ backgroundImage: 'url("src/assets/Background Pop Up.jpg")' }}>
                        {/* modal contents */}
                        <div class="text-white pt-5">
                            Copy these gift code and redeem in your profile
                        </div>
                        {/* 1st coupun */}
                        <div class="relative mt-10 flex flex-col items-center">
                            <a>
                                <img class="w-[70x] h-[70px]" src="/src/assets/Button Gift Code.png" ></img>
                                <div class="absolute top-[22px] left-[170px] lg:left-[235px] text-[#d8ae2f] shadow">ILWELCOME</div>
                            </a>
                        </div>
                        <div class="flex flex-row mt-3 justify-center">
                            <img class="w-[120px] mx-1" src="/src/assets/item/Silver.png" alt="" />
                            <img class="w-[120px] mx-1" src="/src/assets/item/Golden Scroll.png" alt="" />
                            <img class="w-[120px] mx-1" src="/src/assets/item/1.5X Exp Potion.png" alt="" />
                        </div>
                        {/* 2nd coupon */}
                        <div class="relative mt-10 flex flex-col items-center">
                            <a>
                                <img class="w-[70x] h-[70px]" src="/src/assets/Button Gift Code.png" ></img>
                                <div class="absolute top-[22px] left-[190px] lg:left-[255px] text-[#d8ae2f] shadow">ILHERO</div>
                            </a>
                        </div>
                        <div class="flex flex-row flex-wrap mt-3 justify-center">
                            <img class="w-[120px] mx-1" src="/src/assets/item/Lv.2 Attack Gem.png" alt="" />
                            <img class="w-[120px] mx-1" src="/src/assets/item/Silver2.png" alt="" />
                            <img class="w-[120px] mx-1" src="/src/assets/item/Secret Code of the Abyss.png" alt="" />
                            <img class="w-[120px] mx-1 mt-2" src="/src/assets/item/Treasure Vault Key.png" alt="" />
                        </div>
                        {/* 3rd coupon */}
                        <div class="relative mt-10 flex flex-col items-center">
                            <a>
                                <img class="w-[70x] h-[70px]" src="/src/assets/Button Gift Code.png" ></img>
                                <div class="absolute top-[22px] left-[170px] lg:left-[235px] text-[#d8ae2f] shadow">ILIMMORTAL</div>
                            </a>
                        </div>
                        <div class="flex flex-row flex-wrap mt-3 justify-center">
                            <img class="w-[120px] mx-1" src="/src/assets/item/Lv.3 Attack Gem.png" alt="" />
                            <img class="w-[120px] mx-1" src="/src/assets/item/Red Equipment Optional.png" alt="" />
                            <img class="w-[120px] mx-1" src="/src/assets/item/3X Exp Potion.png" alt="" />
                        </div>
                        {/* 4th coupon */}
                        <div class="relative mt-10 flex flex-col items-center">
                            <a>
                                <img class="w-[70x] h-[70px]" src="/src/assets/Button Gift Code.png" ></img>
                                <div class="absolute top-[22px] left-[200px] lg:left-[265px] text-[#d8ae2f] shadow">ILGOD</div>
                            </a>
                        </div>
                        <div class="flex flex-row flex-wrap mt-3 justify-center pb-5">
                            <img class="w-[120px] mx-1" src="/src/assets/item/Personal Name Change Card.png" alt="" />
                            <img class="w-[120px] mx-1" src="/src/assets/item/Golden Hammer.png" alt="" />
                            <img class="w-[120px] mx-1" src="/src/assets/item/Order-Spirit.png" alt="" />
                        </div>
                    </div>
                </Modal>
            </div>
        </>
    )
}