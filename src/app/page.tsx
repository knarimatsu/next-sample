import Count from "@/components/Count";
import Posts from "@/components/Posts";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Count />
        </main>
    );
}
