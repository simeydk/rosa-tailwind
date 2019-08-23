import React from "react";

export function Footer() {
    return (<footer className="bg-blue-700">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 md:p-8 text-sm">
            <p className="text-white">
                Made by{" "}
                <a href="/#" className="font-bold no-underline text-white">
                    Simey de Klerk
            </a>
            </p>

            <p>
                <a href="https://github.com/simeydk/rosa-tailwind" className="font-bold no-underline text-white">
                    GitHub
            </a>
            </p>
        </nav>
    </footer>);

}
