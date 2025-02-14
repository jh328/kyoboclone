import "./Main.css"
import Link from "next/link";
import Image from "next/image";

export default function Main() {
    return (
        <main className="container_wrapper">
            <div className="welcome_wrap">
                <div className="contents_inner">
                    <div className="welcome_top_grid part_1">
                        <div className="welcome_top_banner">
                            <div className="swiper-container swiper-container-horizontal">
                                <ul className="swiper-wrapper">
                                    <li className="swiper-slide swiper-slide-dulpicate" data-swiper-slide-index="0">
                                        <Link href="https://event.kyobobook.co.kr/detail/230452" className="banner_link"
                                              data-adv-img-file-url="https://contents.kyobobook.co.kr/pmtn/2025/event/d3cafb792e764c099c74f491a1e56005.jpg">
                                            <div className="img_box">
                                                <Image src="/images/d3cafb792e764c099c74f491a1e56005.jpg" alt=""
                                                       width={890}
                                                       height={380}/>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="swiper-slide swiper-slide-dulpicate"
                                        data-swiper-slide-index="1"></li>
                                </ul>

                                <div className="swiper_auto_control_area">
                                    <button type="button" className="btn_auto_control">
                                    <span className="ico_swiper_control">
                                        <span className="hidden">재생</span>
                                    </span>
                                    </button>
                                    <div className="swiper_control_box">
                                        <button tabIndex={0} type="button" role="button" className="swiper-button-prev">
                                            <span className="hidden">이전</span>
                                        </button>
                                        <div className="swiper-pagination swiper-pagination-fraction">
                                            <span className="swiper-pagination-current">01</span>
                                            /
                                            <span className="swiper-pagination-total">
                                            31
                                        </span>
                                        </div>
                                        <button tabIndex={0} className="swiper-button-next">
                                            <span className="hidden">다음</span>
                                        </button>
                                        <button className="btn_show_all_banner">전체보기</button>
                                    </div>
                                </div>

                                <span className="swiper-notification"></span>
                            </div>
                        </div>
                        <div className="welcome_top_special">
                            <div id="subMainBannerSwiper" className="swiper-container swiper-container-horizontal">
                                <ul className="swiper-wrapper-special">
                                    <li className="swiper-slide-prev">
                                        <Link href="https://hottracks.kyobobook.co.kr/ht/hot/hotdealMain"
                                              className="item_area">
                                            <div className="img_box_img">
                                                <Image
                                                    src="/images/250212 최저가 배너 2_d2bb3175f551438f92b28c978e4faaea.jpg"
                                                    width={100} height={200} alt="오늘만 특가"/>
                                            </div>
                                            <div className="text_title">
                                                <div className="title">
                                                    오늘만 특가
                                                    <br/>
                                                    노르잇 투명 독서대 회전형
                                                </div>
                                                <div className="desc">오늘만 이 가격 49,900원!</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="swiper-slide-visible">
                                        <Link href="https://event.kyobobook.co.kr/today-mission?missionId=826"
                                              className="item_area">
                                            <div className="image_box">
                                                <Image src="/images/pc_welcome.png" alt="" width={274} height={200}/>
                                            </div>
                                            <div className="tex_box">
                                                <div className="tex_box_title">
                                                    하루독서 작심 3개월 챌린지
                                                    <br/>
                                                    지원금 최대 12만원
                                                </div>
                                                <div className="desc">책값은 우리가 낼게 독서는 누가할래?</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="swiper-slide-visible">
                                        <Link href="https://hottracks.kyobobook.co.kr/ht/hot/hotdealMain"
                                              className="item_area">
                                            <div className="image_box">
                                                <Image
                                                    src="/images/250211 최저가 배너 3_6c03ec8d3c9e44fba89e5f69b242afa6.jpg"
                                                    width={100} alt="" height={200}/>
                                            </div>
                                            <div className="tex_box">
                                                <div className="tex_box_title">
                                                    오늘만 특가
                                                    <br/>
                                                    폴로 여성 브이넥니트 크림
                                                </div>
                                                <div className="desc">오늘만 이 가격 47,900원</div>
                                            </div>
                                        </Link>
                                    </li>
                                    <li className="swiper-slide-visible"></li>
                                    <li className="swiper-slide-visible"></li>
                                    <li className="swiper-slide-visible"></li>
                                </ul>
                                <div className="swiper-no-swiping">
                                    <button className="swiper-button-prev">
                                        <span className="hidden">이전</span>
                                    </button>
                                    <div className="swiper-pagination">
                                        <span className="">01</span>
                                        /
                                        <span className="swiper-total-pagination">
                                        01-04
                                    </span>
                                    </div>
                                    <button className="swiper-button-next">
                                        <span className="hidden">다음</span>
                                    </button>
                                </div>
                                <span className="swiper-notification"></span>
                            </div>
                        </div>
                    </div>

                    {/*Button 끝*/}
                    <div className="welcome_top_grid part_2">
                        <div className="welcome_marketing_wrap">
                            <ul className="welcome_marketing_list">
                                <li className="item">
                                    <Link className="item_a"
                                          href="https://www.kyobobook.co.kr/benefit">
                                    <span className="item_icon">
                                        <Image src="/images/PC_QM_01_a02268569d1046d5ae3b8569b4893bba.svg" alt=""
                                               width={100} height={100}
                                        />
                                    </span>
                                        <span className="item_text">할인혜택</span>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link href="https://hottracks.kyobobook.co.kr/ht/hot/hotdealMain"
                                          className="item_a">
                                    <span className="item_icon">
                                        <Image src="/images/PC_QM_02_64cc0909aafa42dfb07ed5ba786d2875.svg" width={100}
                                               height={100} alt=""/>
                                    </span>
                                        <span className="item_text">오늘만의 특가</span>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link href="https://event.kyobobook.co.kr/detail/216075" className="item_a">
                                    <span className="item_icon">
                                        <Image src="/images/PC_QM_03_3097e05a6c804aaf95e5ac16317cff4d.svg" width={100}
                                               height={100} alt="디스코보"/>
                                    </span>
                                        <span className="item_text">디스커버</span>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link href="https://hottracks.kyobobook.co.kr/ht/record/recordMain"
                                          className="item_a">
                                    <span className="item_icon">
                                        <Image src="/images/PC_QM_04_0a2ae2abff884ee6b78437e2aaa8b786.svg" alt=""
                                               width={100} height={100}/>
                                    </span>
                                        <span className="item_text">음반.영상</span>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link href="https://product.kyobobook.co.kr/pod/main" className="item_a">
                                    <span className="item_icon">
                                        <Image src="/images/PC_QM_05_49332438b774409d9f20bf4a846be7fc.svg" alt=""
                                               height={100} width={100}/>
                                    </span>
                                        <span className="item_text">바로출판</span>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link href="https://event.kyobobook.co.kr/detail/230865" className="item_a">
                                    <span className="item_icon">
        <Image src="/images/PC_QM_06_38c389abadd8409ab7356a08d73eaa8a.svg" width={100} height={100} alt=""/>
                                    </span>
                                        <span className="item_text">이달의 책</span>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link href="https://store.kyobobook.co.kr/handwriting/contest" className="item_a">
                                    <span className="item_icon">
                                        <Image src="/images/PC_QM_07_9de19a2c196a45249134c640da579fb9.svg" alt=""
                                               width={100} height={100}/>
                                    </span>
                                        <span className="item_text">손글씨캠피엔</span>
                                    </Link>
                                </li>
                                <li className="item">
                                    <Link href="https://www.kyobobook.co.kr/" className="item_a">
                                    <span className="item_icon">
                                        <Image src="/images/PC_QM_08_2c2d5f1900c04cd4bd9a81a0b4d8cb0f.svg" alt=""
                                               width={100} height={100}/>
                                    </span>
                                        <span className="item_text">Picks</span>
                                    </Link></li>
                                <li className="item">
                                    <Link href="https://store.kyobobook.co.kr/recommend" className="item_a">
                                    <span className="item_icon">
                                        <Image src="/images/PC_QM_09_a3d9d3b714b046278577fdede2372c46.svg" alt=""
                                               width={100} height={100}/>
                                    </span>
                                        <span className="item_text">추천</span>
                                    </Link></li>
                                <li className="item">
                                    <Link href="https://store.kyobobook.co.kr/person" className="item_a">
                                    <span className="item_icon">
                                        <Image src="/images/PC_QM_10_7604f58055704a0d945335ea2d3d0580.svg" alt=""
                                               width={100} height={100}/>
                                    </span>
                                        <span className="item_text">인물&작품</span>
                                    </Link></li>
                            </ul>
                        </div>
                        {/*script src=quick-menu*/}
                        <div className="welcome_top_ad" id="welcomeWingAdBanner">
                            <Link href="https://event.kyobobook.co.kr/today-mission?missionId=826">
                                <Image src="/images/PC-welcomespecial.png" alt="하루독서 챌린지" width={274} height={96}
                                       className="rounded-[12px]"/>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="welcome_main_content_area h-[438px]">
                    <div className="contents_inner_2">
                        <div className="title_wrap title_size_xxl">
                            <h2 className="title_heading">오늘의 선택</h2>
                            <ul className="category_tag_list">
                                <li className="category_item">
                                    <button type="button" className="btn_category btn_item_active">
                                        <span className="text_text">전체</span>
                                    </button>
                                </li>
                                <li className="category_item">
                                    <button type="button" className="btn_category">
                                        <span>국내도서</span>
                                    </button>
                                </li>
                                <li className="category_item">
                                    <button type="button" className="btn_category">
                                        <span>외국도서</span>
                                    </button>
                                </li>
                                <li className="category_item">
                                    <button type="button" className="btn_category">
                                        <span>eBook</span>
                                    </button>
                                </li>
                                <li className="category_item">
                                    <button type="button" className="btn_category">
                                        <span>sam</span>
                                    </button>
                                </li>
                                <li className="category_item">
                                    <button type="button" className="btn_category">
                                        <span>핫트랙스</span>
                                    </button>
                                </li>
                                <li className="category_item">
                                    <button type="button" className="btn_category">
                                        <span>교보ONLY</span>
                                    </button>
                                </li>
                            </ul>
                            <div className="right_area">
                                <Link href="https://product.kyobobook.co.kr/today-book/" className="btn_more_plus_text">
                                    <span className="text_text">더보기</span>
                                    <span className="ico_plus"></span>
                                </Link>
                            </div>
                        </div>

                        {/*여기서부터 오늘의 선택 아래 이미지*/}
                        <div className="showcase_template_wrap">
                            <div className="template_row">{/*여기서부터병신같음*/}
                                <div className="template_col">
                                    <div className="expand_related_book_wrap" id="todayAll">
                                        <div className="detail_related_book_wrap">
                                            <div className="swiper-container-fade">
                                                <ul className="swiper-wrapper " style={{width: "660px", opacity: "1"}}>
                                                    <li className="thumb_item transform_prop">
                                                        <div className="prod_area_horizontal">
                                                            <div className="prod_thumb_box_size_xl">
                                                                <Link
                                                                    href="https://product.kyobobook.co.kr/detail/S000215577943"
                                                                    className="prod_link">
                                                                    <Image src="/images/9791194033509.jpg" alt=""
                                                                           className="img_box_prod" width={234}
                                                                           height={354}/>
                                                                </Link>
                                                            </div>
                                                            <div className="prod_info_box_size_xl">
                                                                <Link
                                                                    href="https://product.kyobobook.co.kr/detail/S000215577943"
                                                                    className="prod_info">
                                                                    <h3 className="prod_name">[역사/문화] 세계사 익스프레스</h3>
                                                                </Link>
                                                                <span className="prod_author">김영석 . 빅피시</span>
                                                                <div className="prod_price">
                                                                    <span className="percent">10%</span>
                                                                    <span className="price">
                                                                        <span className="val">16,920</span>
                                                                        <span className="unit">원</span>
                                                                               </span>
                                                                </div>
                                                                <p className="prod_md_comment">
                                                                    세계사 급행열차 지금 출발합니다.
                                                                </p>
                                                                <p className="prod_md_comment_desc">
                                                                    시대별 결정적 주요 장면들을 세계사 열차 차창 너머로 재미와 속도감 있게 안내한다. 방대하고
                                                                    복잡한 세계사의 시작을 세계사 익스프레스와 함께 지금 출발해보자.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <span className="swiper-notification"></span>
                                            </div>
                                        </div>
                                        <div className="thumb_swiper_wrap">
                                        </div>
                                        <button type="button" className="swiper-button-prev_selector_prev">
                                            <span className="hidden">이전</span>
                                        </button>
                                        <button type="button" className="swiper-button-prev_selector"></button>
                                    </div>
                                    <div className="expand_related_book_wrap" id="210"></div>
                                    <div className="expand_related_book_wrap" id="211"></div>
                                    <div className="expand_related_book_wrap" id="212"></div>
                                    <div className="expand_related_book_wrap" id="213"></div>
                                    <div className="expand_related_book_wrap" id="214"></div>
                                    <div className="expand_related_book_wrap" id="215"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*!-- 광고 3행 케이스*/}
                <div className="welcome_main_content_area"></div>
                {/*!-- //광고 3행 케이스*/}
                <div className="welcome_main_content_area"></div>
            </div>
        </main>
    );
};

