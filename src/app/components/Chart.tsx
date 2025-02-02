"use client";
import { createChart, UTCTimestamp, CandlestickData } from "lightweight-charts";
import { useEffect, useRef } from "react";

export default function Chart() {
    const chartContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!chartContainerRef.current) return;

        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 800,
            layout: {
                background: { color: "#181A20" },
                textColor: "#FFFFFF",
            },
            grid: {
                vertLines: { color: "#2B2B43" },
                horzLines: { color: "#2B2B43" },
            },
            timeScale: {
                timeVisible: true,
                secondsVisible: false,
            },
        });

        const candleSeries = chart.addCandlestickSeries({
            upColor: "#26a69a",
            downColor: "#ef5350",
            borderUpColor: "#26a69a",
            borderDownColor: "#ef5350",
            wickUpColor: "#26a69a",
            wickDownColor: "#ef5350",
        });

        const mockData: CandlestickData[] = [
            { time: 1700000000 as UTCTimestamp, open: 100, high: 105, low: 95, close: 102 },
            { time: 1700000600 as UTCTimestamp, open: 102, high: 108, low: 101, close: 107 },
            { time: 1700001200 as UTCTimestamp, open: 107, high: 110, low: 105, close: 109 },
        ];
        candleSeries.setData(mockData);

        return () => {
            chart.remove();
        };
    }, []);

    return <div ref={chartContainerRef} className="w-full h-[400px]" />;
}
