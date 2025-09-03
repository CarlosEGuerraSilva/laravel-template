import { Link } from "@heroui/link";

import { Navbar } from "@/components/navbar";
import { Head } from "@inertiajs/react";

export default function DefaultLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="relative flex flex-col h-screen">
            <Head title="Welcome" />
            <Navbar />
            <main className="container mx-auto max-w-7xl px-6 grow pt-16">
                {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
                <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://www.heroui.com/?utm_source=laravel-template"
                    title="HeroUI Homepage"
                >
                    <span className="text-default-600">Powered by</span>
                    <p className="text-primary">HeroUI</p>
                </Link>
            </footer>
        </div>
    );
}
