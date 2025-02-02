import OrderBook from "@/app/components/OrderBook";
import Bklkxg from "@/app/components/Bklkxg";
import Chart from "@/app/components/Chart";

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen bg-black">
            <Bklkxg/>


            <div className="grid grid-cols-12 gap-4 min-h-screen p-4 bg-black">

                <aside className="col-span-3 h-full flex flex-col">
                    <OrderBook/>
                </aside>

                {/* 📌 차트 영역 (가운데) */}
                <main className="col-span-6 bg-[#121212] rounded-lg p-4 h-full flex flex-col">
                    <Chart/>
                </main>

                {/* 📌 마켓 거래 (오른쪽) */}
                <aside className="col-span-3 bg-[#181A20] rounded-lg p-4 border border-gray-700 h-full flex flex-col">
                    Market Trades
                </aside>
            </div>

        </div>
    );
}
