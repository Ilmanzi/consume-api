import CarouselContent3 from "../components/carousel"
import YoutubeVideo from "../components/youtube"

export default function LandingPage() {

    return (
        <>
            {/* Body */}
            <div>
                {/* navbar */}
                <div class="flex h-[80px] justify-between items-center absolute z-10">
                    {/* logo */}
                    <a href="https://immortal.gamesxtra.net/#">
                        <img class="w-[136px] h-[40px] mt-[20px] ml-[16px]" src="/src/assets/Logo.png" />
                    </a>
                    {/* guide */}
                    <div>

                    </div>
                </div>
                {/* Contain 1 or header*/}
                <div class="bg-cover bg-center h-[750px] z-0" style={{ backgroundImage: 'url("src/assets/Background Section 1.jpg")' }}>
                    <div class="flex flex-col">
                        {/* moving image */}
                        <img class="mx-auto w-[424px] h-[268px] top-40 moving-image z-0 " src="/src/assets/Image Hero Section 1.png" />
                        <div class="flex flex-col items-center mt-20 z-40">
                            {/* logo middle */}
                            <img class="w-[284px] h-[84px] z-0" src="/src/assets/Logo.png" />
                            {/* text white */}
                            <p class="merriweather-text text-white m-5 text-lg text-center">Play the most attractive MMORPG in your hands</p>
                            {/* button google & app */}
                            <div class="flex gap-4 mx-5">
                                <a href="https://play.google.com/store/apps/details?id=com.extralife.android.ilegend">
                                    <img class="" src="/src/assets/Button Google Play.png" />
                                </a>
                                <a href="https://immortal.gamesxtra.net/#">
                                    <img class="" src="/src/assets/Button Apple Store.png" />
                                </a>
                            </div>
                            {/* gift button */}
                            <div class="relative">
                                <img class="w-[180px] h-[65px] m-8" src="/src/assets/Button Gift Code.png"></img>
                                <a>
                                    <div class="merriweather-text absolute left-16 top-[52px] text-[#d8ae2f] shadow">Free Gift Code!!</div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* contain 2 */}
                <div class="bg-cover bg-center h-[750px] z-0" style={{ backgroundImage: 'url("src/assets/Background Section 2.jpg")' }}>
                    <div class="flex flex-col items-center">
                        {/* text content */}
                        <div class="text-white merriweather-text text-center m-6 mt-20 text-lg">Experience the game with the best action, amazing characters and unforgettable experiences
                        </div>
                        {/* background and youtube video */}
                        <div class="relative">
                            <img class="mx-auto w-[360px] h-[208px]" src="/src/assets/Video Background.png" />
                            <div class="absolute left-10 bottom-3">
                                <YoutubeVideo></YoutubeVideo>
                            </div>
                        </div>
                        {/* hero image */}
                        <img class="w-[328px] h-[234px] mt-11" src="/src/assets/Image Hero Section 2.png"></img>
                    </div>
                </div>
                {/* contain 3 */}
                <div class="bg-cover bg-center h-[896px] z-0" style={{ backgroundImage: 'url("src/assets/Background Section 3.jpg")' }}>
                    {/* text */}
                    <div class="text-right text-5xl pt-20 metalmania-text text-white tracking-widest mr-7">
                        Character Class
                    </div>
                    <div>
                        {/* char carousel */}
                        <div>
                            <CarouselContent3></CarouselContent3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}