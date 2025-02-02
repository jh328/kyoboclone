export default function OrderBook() {
    return (
        <div className="relative h-full w-full flex flex-col"> {/* 너비를 w-full로 설정 */}
            <div className="flex flex-col h-full bg-[#181A20] p-4 rounded-lg border border-gray-700">

                {/* 📌 Order Book 헤더 */}
                <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
                    <h4 className="text-white font-bold text-lg">Order Book</h4>
                    <button className="text-gray-400 hover:text-white">⋮</button>
                </div>

                {/* 📌 테이블 헤더 */}
                <div className="grid grid-cols-3 text-gray-400 text-xs px-4 py-1 border-b border-gray-700">
                    <span className="text-left">Price (USDT)</span>
                    <span className="text-center">Amount (BTC)</span>
                    <span className="text-right">Total</span>
                </div>

                {/* 📌 주문 리스트 (스크롤 가능) */}
                <div className="flex flex-col flex-grow overflow-y-auto px-4">
                    {/* flex-grow 추가해서 높이를 자동으로 맞추도록 설정 */}

                    {/* 매도 주문 */}
                    <div className="grid grid-cols-3 text-red-500 text-xs">
                        <span className="text-left">104,228.34</span>
                        <span className="text-center">0.00012</span>
                        <span className="text-right">12.50740</span>
                    </div>
                    <div className="grid grid-cols-3 text-red-500 text-xs">
                        <span className="text-left">104,227.99</span>
                        <span className="text-center">0.00024</span>
                        <span className="text-right">25.01472</span>
                    </div>

                    {/* 현재 가격 */}
                    <div className="grid grid-cols-3 text-green-500 text-sm font-bold py-1 border-y border-gray-700">
                        <span className="text-left">104,226.50</span>
                        <span className="text-center">2.28789</span>
                        <span className="text-right">238.46K</span>
                    </div>

                    {/* 매수 주문 */}
                    <div className="grid grid-cols-3 text-green-500 text-xs">
                        <span className="text-left">104,226.49</span>
                        <span className="text-center">0.44915</span>
                        <span className="text-right">46.81K</span>
                    </div>
                    <div className="grid grid-cols-3 text-green-500 text-xs">
                        <span className="text-left">104,226.36</span>
                        <span className="text-center">0.00017</span>
                        <span className="text-right">17.71848</span>
                    </div>
                </div>

            </div>
        </div>
    );
}