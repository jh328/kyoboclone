export default function Bklkxg() {
    return (
        /*여기 바로 밑에 grid-area:subHeader 값이 없어서, 따로 만들어야 할 것 같음.*/
        <div className="w-full h-full text-[1px] pt-1 pb-1 rounded-lg">
            <div className="flex relative px-4 h-full w-full items-center justify-start flex-nowrap">

                {/*왼쪽*/}
                <div className="flex box-border">
                    <div className="flex flex-row justify-between items-center mr-0 flex-none">{/*레이아웃*/}
                        <div className="flex items-center flex-1">{/*childrejContainer*/}
                            {/*bn-flex-w-[24px] text-[16px]는 제외함.*/}
                            <div className="box-border flex flex-col pr-4 h-auto justify-around">
                                <div className="box-border min-w-0 flex">
                                    <div className="h-6 flex-wrap min-w-0">{/*items-center css-31kq1d*/}
                                        <div className="box-border min-w-0 mr-1 text-[#eaecef]">{/*data-bn-type*/}
                                            <h1 className="text-xl font-medium leading-6">BTC/USDT</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*오른쪽*/}
                <div className="flex-1 flex-row flex items-center relative justify-between min-w-0 overflow-hidden">
                    <div
                        className="flex flex-row box-border items-center relative ml-4 mr-4 overflow-hidden">{/*tickerListContainer*/}
                        <div
                            className="whitespace-nowrap overflow-hidden flex items-center justify-start">{/*tickerList*/}
                            <div className="inline-block pr-4" style={{gridArea: "A"}}>
                                <div
                                    className="text-xs mr-0 mb-0.5 leading-5 font-normal text-left text-ellipsis whitespace-nowrap  ">
                                    24h change
                                </div>
                            </div>
                            <div className="flex pr-4" style={{gridArea: "B"}}>
                                <div
                                    className="text-xs mr-0 mb-0.5 leading-6 font-normal text-left text-ellipsis overflow-hidden whitespace-nowrap ">24H
                                    High
                                </div>
                            </div>
                            <div className="inline-block pr-4" style={{gridArea:"C"}}>
                                <div className="text-xs mr-0 mb-0.5 leading-6 font-normal text-ellipsis overflow-hidden whitespace-nowrap">24H Low</div>
                                <div>103,903.09</div>
                            </div>
                            <div className="pr-4 inline-block" style={{gridArea:"D"}}>
                                <div className="text-xs mr-0 mb-0.5 leading-6 font-normal text-left text-ellipsis overflow-hidden whitespace-nowrap">24h Volume(BTC)</div>
                            </div>
                            <div className="inline-block pr-4" style={{gridArea:"E"}}>
                                <div className="text-xs mr-0 mb-0.5 leading-6 font-normal text-left text-ellipsis overflow-hidden whitespace-nowrap">24h Volume(USDT)</div>
                            </div>
                            <div className="inline-block pr-4 ml-[16px] mb-[8px] md:!ml-[0px] md:!mb-[0px]">
                                <div className="">
                                    Token Tags
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};