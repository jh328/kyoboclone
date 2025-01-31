import OrderBook from "@/app/components/OrderBoot";

export default function Layout() {
    return (
        <div className="grid grid-cols-12 gap-4 h-screen p-4 bg-black">

            {/* Order Book왼쪽 */}
            <aside className="col-span-3 h-full"> {/* col-span-3으로 늘리고 h-full 추가 */}
                <OrderBook/>
            </aside>

            {/* 차트 가운데 */}
            <main className="col-span-6 bg-[#121212] rounded-lg p-4">
                Trading Chart
            </main>

            {/* 거래 오른쪽 */}
            <aside className="col-span-3 bg-[#181A20] rounded-lg p-4 border border-gray-700">
                Market Trades
            </aside>

        </div>
    );
}
