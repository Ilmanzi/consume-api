import CarouselContent3 from "../components/carousel"
import YoutubeVideo from "../components/youtube"
import CarouselContent from "../components/carousel-end"

export default function LandingPage() {

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
                <div class="bg-cover bg-center h-[750px] z-0" style={{ backgroundImage: 'url("src/assets/Background Section 1.jpg")' }}>
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
                                <img class="w-[180px] h-[65px] m-8" src="/src/assets/Button Gift Code.png"></img>
                                <a>
                                    <div class="merriweather-text absolute left-16 top-[52px] text-[#d8ae2f] shadow">Free Gift Code!!</div>
                                </a>
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
                {/* content 4 */}
                <div class="bg-cover bg-center h-[593px] md:h-[793px] lg:px-20 lg:h-[940px] z-0 " style={{ backgroundImage: 'url("src/assets/Background Section 4.jpg")' }}>
                    <div class="metalmania-text text-center text-white tracking-widest pt-[70px] text-5xl lg:pt-[100px] lg:pb-[20px]">
                        FEATURE
                    </div>
                    {/* carousel */}
                    <div class="lg:px-[100px]">
                        <CarouselContent></CarouselContent>
                    </div>

                </div>
                {/* footer */}
                <div class="bg-cover bg-center bg-black h-[500px] z-0 lg:h-[200px]">
                    <div class="flex flex-col lg:flex-row justify-between pt-[80px] relative lg:h-[50px]">
                        {/* logo & copyright */}
                        <div class="lg:flex lg:flex-row text-center">
                            <div class="flex justify-center">
                                <img class="w-10 h-10 lg:w-16 lg:h-16" src="/src/assets/favicon.png" alt="" />
                            </div>
                            <div class="lg:text-left lg:flex lg:flex-col lg:content-start">
                                <div class="text-white text-[12px] merriweather-text pt-5">© 2022 EXTRALIVE ENTERTAINMENT.</div>
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
                        <div class="flex-row hidden lg:block">
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
            </div>
        </>
    )
}