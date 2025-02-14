import Service from "@/app/component/common/Service_mall_inner";
import Main from "@/app/component/common/main/Main";

export default function Home() {
    return (
        <>
            <div id="mainDiv" className="relative m-h-[1440px] overflow-hidden min-h-[100vh]">
                <header className="relative bg-white border-b border-b-[#eaeaea] z-[1000]"
                        id="welcome_heaer_wrap">
                    <div id="welcome_top_banner"
                         className="bg-white">
                        <div id="top_banner_inner"
                             className="relative w-[1200px] mt-0 mr-auto mb-0 ml-auto">
                            {/*<h6>여기 링크랑 이미지</h6>*/}
                        </div>
                    </div>
                    <Service/>
                </header>
                <main>

                    <Main/>
                </main>
                <section></section>
                <div></div>
                <footer></footer>
            </div>
        </>
    );
}
