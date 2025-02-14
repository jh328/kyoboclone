export default function Login() {
    return (
        <>
            <div
                className="flex justify-start items-start flex-col min-h-full pt-[100px] box-content">{/*wrapper member_login*/}
                <header className="w-full border-b-0 flex-shrink-0 h-[54px]">{/*header wrapper*/}
                    <div className="w-[400px] mx-auto text-center text-[0]">{/*header_inner*/}
                        <div className="inline-block w-[171px] h-[56px] align-top">{/*logo_box*/}
                            {/*Link 교보문고 이미지 클릭시 이동하는 이미지 */}
                            <h3>링크</h3>
                        </div>
                    </div>
                </header>
                {/*컨텐츠 / 로그인 X*/}
                <main
                    className="grow shrink-0 basis-auto
                               w-full pt-[50px]
                               pr-0 pb-[100px] pl-0
                               min-h-[calc(100vh-54px-68px-250px)]">
                    <section className="w-[340px]">

                        <div className="border-b-black border block border-none">{/*login_form_wrap*/}
                            {/*!-- 로그인--*/}
                            <div className="block" style={{unicodeBidi: "isolate"}}>{/*form_col_group valid_check*/}
                                <div className="block" style={{unicodeBidi: "isolate"}}>
                                    <div className="relative block" style={{unicodeBidi: "isolate"}}>{/*awsomplete*/}
                                        <input
                                            type="email"
                                            title="아이디 입력"
                                            className="inline-block w-full h-[44px]
                                            pt-0 pr-[14px] pb-[2px] pl-[14px]
                                            text-black text-sm leading-[42px] tracking-[-0.01em]
                                            font-sans bg-white border border-[#d5d5d5]
                                            rounded-[6px] box-border
                                            transition-colors duration-200 ease-out focus:outline-none"
                                            placeholder="아이디를 입력해주세요"
                                        />
                                    </div>
                                </div>
                                <div>{/*col_box pw*/}

                                </div>
                                {/*!-- //로그인*/}
                                {/*!-- captcha*/}
                                <div>{/*captcha_wrap*/}</div>
                                {/*!-- // captcha*/}
                                <div>{/*btn_wrap justify*/}</div>
                                {/*!-- 아이디 저장*/}
                                <div>{/*save_id_box*/}</div>
                                {/*!-- //아이디 저장*/}
                                {/*!-- sns로그인*/}
                                <div>{/*sns_login_box*/}</div>
                                {/*!-- // sns로그인*/}
                                {/*!-- 회원가입*/}
                                <div>{/*join_induce_wrap*/}</div>
                                {/*!-- // 회원가입*/}
                            </div>

                            <div className="">{/*adv_wrap*/}
                                <div className="">{/*login_banner_box hidden*/}
                                    {/*Link 컴포넌트 링크 */}
                                </div>
                            </div>
                        </div>
                    </section>
                </main>

                {/*회원정보 관리 / 로그인 O*/}
                <footer className="shrink-0 w-full h-[68px]
                                   flex justify-start items-center
                                   box-border text-center
                                   mt-auto border-t border-t-[#eaeaea]">{/*footer_wrapper*/}
                    <div className="w-[400px] m-0">{/*footer_inner*/}
                        <div className="text-[13px] leading-[19px]
                                       tracking-[-0.01em]
                                       text-[#767676]
                                       text-center">{/*copyright*/}
                            KYOBO BOOK CENTRE
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );

};