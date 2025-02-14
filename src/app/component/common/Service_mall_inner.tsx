import Link from "next/link";
import Image from "next/image";

export default function Service() {
    return (
        <header className="header_wrapper">
            <div className="service_mall_wrap">
                <div
                    className="service_mall_inner">
                    <div className="service_mall_box">
                        <ul className="service_mall_list">
                            <li className="service_mall_item">
                                <Link className="tab_book_a tab_book_child_a service_mall_link"
                                      href="https://www.kyobobook.co.kr/">교보문고</Link>
                            </li>
                            <li className="service_mall_item ">
                                <Link
                                    className="tab_book_b tab_book_child_b service_mall_link_b"
                                    href="https://ebook.kyobobook.co.kr/dig/pnd/welcome">eBook</Link>
                            </li>
                            <li className="service_mall_item">
                                <Link
                                    className="tab_book_c tab_book_child_b service_mall_link_c"
                                    href="https://sam.kyobobook.co.kr/dig/pnd/showcase?pageNo=12">sam</Link>
                            </li>
                            <li className="service_mall_item">
                                <Link
                                    className="tab_book_d tab_book_child_b service_mall_link_d"
                                    href="https://hottracks.kyobobook.co.kr/ht/welcomeMain">핫트랙스</Link>
                            </li>
                            <li className="service_mall_item">
                                <Link
                                    className="tab_book_e tab_book_child_b service_mall_link_e "
                                    href="https://storynew.kyobobook.co.kr/story/main/initMain.ink">스토리</Link>
                            </li>

                        </ul>
                    </div>

                    <div id="customer_service_box"
                         className="div-box mt-[11px] mr-0 mb-0 ml-auto">
                        <ul className="ul-service-mall-wrap m-0 p-0 ">
                            <li className="li-customer-service-item">
                                <Link className="Link-customer-service-item"
                                      href="https://mmbr.kyobobook.co.kr/join">회원가입</Link>
                            </li>
                            <li className="li-customer-service-item">
                                <Link className="Link-customer-service-item"
                                      href="https://mmbr.kyobobook.co.kr/join">로그인</Link>
                            </li>
                            <li className="li-customer-service-item">
                                <Link className="Link-customer-service-item"
                                      href="https://mmbr.kyobobook.co.kr/join">회원혜택</Link>
                            </li>
                            <li className="li-customer-service-item">
                                <Link className="Link-customer-service-item"
                                      href="https://mmbr.kyobobook.co.kr/join">주문배송</Link>
                            </li>
                            <li className="li-customer-service-item">
                                <Link className="Link-customer-service-item"
                                      href="https://mmbr.kyobobook.co.kr/join">매장안내</Link>
                            </li>
                            <li className="li-customer-service-item">
                                <Link className="Link-customer-service-item"
                                      href="https://mmbr.kyobobook.co.kr/join">고객센터</Link>
                            </li>
                        </ul>
                    </div>
                    {/*::after */}
                </div>
                {/*::after 이 값이 있음. */}

            </div>
            <div id="header-inner" className="header_inner">
                <div id="gnb-serach-wrap" className="gnb-search-wrapper">
                    <div id="logo-box" className="logo-box">
                        <Link href="https://www.kyobobook.co.kr/" className="logo-link-book">
                            <span className="hidden">교보문고</span>
                        </Link>
                    </div>
                    <div id="gnb_search_box" className="gnb-search-box">
                        <div id="form_sel tyle_gnb" className="form_sel_type_gnb">
                            <select title="검색유형선택"
                                    id="gbCode"
                                    className="hidden"/*여기 히든 값 지워야 밑에 옵션 값이 나옴 */
                            >
                                <option value="TOT">통합검색</option>
                                <option value="KBO">교보문고</option>
                                <option value="eBook">eBook</option>
                                <option value="SAM">sam</option>
                                <option value="HTS">핫트랙스</option>
                            </select>
                            <span id="gbCode-button"
                                  className="span-gbCode-button relative span-gbCode-button-form ui-select-menu-button-ui-button ui-button">
                                <span className="ui-select-menu-icon"></span>
                                <span className="ui-select-menu-text ui-select-text">통합검색</span>
                                <div></div>
                            </span>
                        </div>
                        <div id="search_input_wrap" className="search_input_wrap search-input-wrap">
                            <input type="search"
                                   id="searchKeyword"
                                   title="통합검색어 입력"
                                   placeholder="개념과 유형을 한 번에![개념+유형]"
                                   className="input-type-search"/>
                        </div>
                        <Link href="#" className="btn_gnb_search a-class-btn">
                            <span className="hidden">검색</span>{/*css hidden 공통으로 사용이 됨.*/}
                        </Link>
                    </div>
                    <ul id="user_menu_list" className="user_menu_list">
                        {/*<li className="user_menu_list_cash">
                            <Link href="https://ebook.kyobobook.co.kr/dig/cff/note"
                                  className="user_menu_link_item user_menu_link" title="쪽지함">
                                <span className="hidden">쪽지함</span>
                            </Link>
                        </li>
                        <li className="user_menu_list_cash">
                            <Link className="user_menu_link_item user_menu_item_cash"
                                  href="https://ecash.kyobobook.co.kr/dig/opr/ecash/general">
                                <span className="hidden">e캐시</span>
                            </Link>
                        </li>
                        <li className="user_menu_list_cash">
                            <Link className="user_menu_link_item user_menu_item_library_before" href="#"></Link>
                        </li>*/}

                        <li className="ml-[20px] w-[32px] h-[32px] relative inline-block"
                            style={{verticalAlign: "top"}}>
                            <Link href="https://order.kyobobook.co.kr/cart"
                                  className="user_menu_link_item user_menu_item_cart_before" title="장바구니"
                            >
                                <span className="hidden">장바구니</span>
                            </Link>
                        </li>

                        <li className="user_menu_item_my relative inline-block" style={{verticalAlign: "top"}}>
                            <Link href="#"
                                  className="overflow-hidden rounded-full user_menu_link_item user_menu_item_my_before">
                                <span className="hidden">마이</span>
                            </Link>
                        </li>
                    </ul>
                    {/*!-- DESC: 레이어 활성화 시 [ active ] class를 추가가 있음. --> 밑에는 구현하지 않기*/}
                    <div>{/*이거는 구현x*/}</div>
                </div>
                <nav id="gnb-wrap" className="nav_gnb_wrap">
                    <div id="anb_wrap" className="div_anb_wrap">
                        <button type="button" className="button_btn_anb">
                            <span className="hidden">전체메뉴</span>
                        </button>
                        <div id="anb_area" className="anb_wrap_anb_area">
                            {/*!-- tab_wrap */}
                            <div className="tab_wrap_ui_tabs_ui_corner_all_ui_widget_content">
                                {/* tab_list_wrap */}
                                <div id="tab_list_wrap" className="tab_list_wrap">
                                    <ul role="tablist"
                                        className="tabs tab_wrap ui_helper_reset ui_helper_clear_fix_before">
                                        <li className="tab_item_ui_tabs_tap" role="tab" id="category">
                                            <Link href="https://www.kyobobook.co.kr/#tabAnbCategory" id="ui-id-6"
                                                  className="tab_link">
                                                <span className="tab_text">카테고리 전체보기</span>
                                            </Link>
                                        </li>
                                        <li className="tab_item_ui_tabs_service">
                                            <Link href="https://www.kyobobook.co.kr/#tabAnbService"
                                                  className="tab_link">
                                                <span className="tab_text">서비스전체보기</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                {/* //tab_list_wrap*/}
                                {/*!-- 카테고리 전체보기*/}
                                {/*!-- 카테고리 전체보기*/}
                                <div id="tabAnbCategory"></div>
                                <div id="tabAnbService"></div>
                            </div>
                            {/*!-- //tab_wrap*/}
                        </div>
                        {/*script 대그 넘어가기*/}
                    </div>
                    <ul id="gnb_list" className="gnb_list">
                        <li className="gnb_item">
                            <Link href="https://event.kyobobook.co.kr/detail/230646" className="gnb_link">
                                <em className="gnb_link_em">새로운책향</em>
                                <span className="ico_new ico_new_smell">
                                    <span className="hidden">추천 메뉴</span>
                                </span>
                            </Link>
                        </li>

                        <li className="gnb_item">
                            <Link href="https://event.kyobobook.co.kr/detail/230329" className="gnb_link">
                                <em className="gnb_link_em">새해마음</em>
                                <span className="ico_new">
                                    <span className="hidden">추천메뉴</span>
                                </span>
                            </Link>
                        </li>

                        <li className="gnb_item">
                            <Link href="https://store.kyobobook.co.kr/bestseller/online/daily"
                                  className="gnb_link">베스트</Link>
                        </li>

                        <li className="gnb_item">
                            <Link
                                href="https://product.kyobobook.co.kr/new/#?page=1&sort=new&year=2025&month=02&week=1&per=20&saleCmdtDvsnCode=KOR&gubun=newGubun&saleCmdtClstCode="
                                className="gnb_link">신상품</Link>
                        </li>

                        <li className="gnb_item">
                            <Link href="https://event.kyobobook.co.kr/" className="gnb_link">이벤트</Link>
                        </li>

                        <li className="gnb_item">
                            <Link href="https://event.kyobobook.co.kr/funding" className="gnb_link">바로펀딩</Link>
                        </li>

                        <li className="gnb_item">
                            <Link href="#" className="gnb_link">PICKS</Link>
                        </li>

                        <li className="gnb_item">
                            <Link href="https://casting.kyobobook.co.kr/" className="gnb_link">CASTing</Link>
                        </li>

                        <li className="gnb_item">
                            <Link href="https://event.kyobobook.co.kr/culture" className="gnb_link">컬처라운지</Link>
                        </li>

                        <li className="gnb_item_more_service gnb_item">
                            <button type="button" className="btn_more_service">
                                <span className="hidden">서비스 더보기</span>
                            </button>
                            <ul className="more_service_list">
                                <li className="more_service_item">
                                    <Link href="https://www.kyobobook.co.kr/barodrim"
                                          className="more_service_link">바로드림</Link>
                                </li>
                                <li className="more_service_item">
                                    <Link href="https://product.kyobobook.co.kr/today-book/"
                                          className="more_service_link">오늘의 선택</Link>
                                </li>
                                <li className="more_service_item">
                                    <Link href="https://event.kyobobook.co.kr/detail/208794"
                                          className="more_service_link">책 그리고 꽃</Link>
                                </li>
                                <li className="more_service_item">
                                    <Link href="https://event.kyobobook.co.kr/detail/230865"
                                          className="more_service_link">이달의책</Link>
                                </li>
                                <li className="more_service_item">
                                    <Link href="https://www.kyobobook.co.kr/giftcard" className="more_service_link">기프트카드

                                    </Link>
                                </li>
                                <li className="more_service_item">
                                    <Link href="https://store.kyobobook.co.kr/culture"
                                          className="more_service_link">컬쳐문화공간</Link>
                                </li>
                                <li className="more_service_item">
                                    <Link href="https://www.kyobobook.co.kr/review"
                                          className="more_service_link">베스트리뷰</Link>
                                </li>
                                <li className="more_service_item">
                                    <Link href="https://store.kyobobook.co.kr/read-index" className="more_service_link">수준별
                                        원서읽기
                                    </Link>
                                </li>
                                <li className="more_service_item">
                                    <Link href="https://product.kyobobook.co.kr/pod/main"
                                          className="more_service_link">pod</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <ul className="gnb_sub_list">
                        <li className="gnb_sub_item">
                            <span className="tip_wrap">
                                <Link className="tip" href="https://event.kyobobook.co.kr/today-mission?missionId=826">
                                    <span className="icon_logo">
                                    <Image src="/images/PC-GNB.png" width={100} height={100} className="icon_logo_img"
                                           alt="하루독서 챌린저"/>
                                    </span>
                                    <span className="content">
                                        <b>하루독서 챌린지</b>
                                        <span className="icon_ad">AD</span>
                                    </span>
                                </Link>
                                <Link href="https://event.kyobobook.co.kr/today-mission"
                                      className="gnb_sub_link">오늘의 미션</Link>
                            </span>
                        </li>
                        <li className="gnb_sub_item ml-[6px]">
                            <Link href="https://www.kyobobook.co.kr/benefit" className="gnb_sub_link">할인혜택</Link>
                        </li>
                    </ul>
                    <div className="curtain_banner_wrap">
                        <button className="btn_curtain_expand">
                            <span className="text_box text_box">
                                읽카탈겨울호
                            </span>
                        </button>
                        <div className="curtain_banner_box"> 이거는 안함.</div>
                    </div>
                </nav>
            </div>
        </header>
    );
};