import {NextUIProvider} from '@nextui-org/system';
import NavigationBar from './components/NavigationBar';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from "@/app/components/AboutSection";
import ProductSection from "@/app/components/ProductSection";
import {SearchProvider} from "@/app/components/context/SearchProvider";
import AdditionalSection from "@/app/components/AdditionalSection";

export default function Home() {
    return (
        <NextUIProvider>
            <SearchProvider>
                <NavigationBar/>
                <header className="relative w-full h-screen overflow-hidden bg-white">
                    <div className="absolute inset-0 z-0">
                        <div
                            className="absolute rounded-full bg-green-300 opacity-50 blur-3xl w-52 h-52 animate-blob animate-move top-10 left-20"></div>
                        <div
                            className="absolute rounded-full bg-blue-300 opacity-50 blur-3xl w-52 h-52 animate-blob animate-move top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                        <div
                            className="absolute rounded-full bg-yellow-300 opacity-50 blur-3xl w-52 h-52 animate-blob animate-move top-3/4 left-1/3"></div>
                    </div>
                    {/* Hero Section */}
                    <HeroSection/>
                </header>
                <main className="relative w-full overflow-hidden">
                    <AboutSection/>
                    <ProductSection/>
                    <AdditionalSection/>
                </main>
            </SearchProvider>
        </NextUIProvider>
    );
}
