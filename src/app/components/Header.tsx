import Link from "next/link";
import {Button} from "@/app/components/Button";

export default function Header() {
    return (
        <header className="flex justify-between items-center px-6 py-4 bg-gray-900 text-white">

            <div className="flex items- gap-4">
                <Link href="/">
                    <span className="text-yellow-400 text-2xl font-bold">BINANCE</span>
                </Link>
                <nav className="hidden md:flex gap-6">
                    <Link href="/buy-crypto">Buy Crypto</Link>
                    <Link href="/markets">Markets</Link>
                    <Link href="/trade">Trade</Link>
                    <Link href="/futures">Futures</Link>
                    <Link href="/earn">Earn</Link>
                    <Link href="/more">More</Link>
                </nav>
            </div>

            <div className="flex items-center gap-4">
                <Button variant="secondary">Log In</Button>
                <Button variant="primary">Sign Up</Button>
            </div>


        </header>
    );
};