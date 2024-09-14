import { NextUIProvider } from '@nextui-org/system';
import NavigationBar from './components/NavigationBar';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from "@/app/components/about/AboutSection";
import ProductSection from "@/app/components/ProductSection";
import { SearchProvider } from "@/app/components/context/SearchProvider";
import AdditionalSection from "@/app/components/AdditionalSection";
import ContactSection from "@/app/components/ContactSection";
import FooterSection from "@/app/components/FooterSection";

export default function Home() {
    return (
        <NextUIProvider>
            <SearchProvider>
                <NavigationBar />
                <header className="relative w-full h-screen overflow-hidden">
                    <div className="fixed inset-0 z-0 pointer-events-none">
                        <div
                            className="absolute rounded-full bg-green-300 opacity-40 blur-3xl w-96 h-96 animate-blob animate-move top-10 left-10"></div>
                        <div
                            className="absolute rounded-full bg-blue-300 opacity-40 blur-3xl w-96 h-96 animate-blob animate-move top-1/3 right-10"></div>
                        <div
                            className="absolute rounded-full bg-yellow-300 opacity-40 blur-3xl w-96 h-96 animate-blob animate-move bottom-10 left-1/3"></div>
                    </div>
                    <HeroSection/>
                </header>
                <main className="relative w-full overflow-hidden">
                    <AboutSection/>
                    <ProductSection/>
                    <AdditionalSection/>
                    <ContactSection/>
                </main>
                <FooterSection/>
            </SearchProvider>
        </NextUIProvider>
    );
}