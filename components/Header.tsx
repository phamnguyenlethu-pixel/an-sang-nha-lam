'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { name: 'Trang chủ', href: '#hero' },
        { name: 'Thực đơn', href: '#menu' },
        { name: 'Combo', href: '#menu' },
        { name: 'Đặt món', href: '#menu' },
        { name: 'Tích điểm', href: '#contact' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-orange-100">
            {/* Top bar */}
            <div className="bg-orange-50 text-xs sm:text-sm py-2 text-orange-800">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1"><Phone size={14} /> 0988345499</span>
                        <span className="hidden sm:flex items-center gap-1"><MapPin size={14} /> Tam Hiệp, Biên Hòa</span>
                    </div>
                    <div className="font-semibold">Bữa sáng ngon - Giao tận nơi</div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-orange-600 tracking-tight">Ăn Sáng Nhà Làm</span>
                </div>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className="text-gray-600 hover:text-orange-600 font-medium transition-colors">
                            {item.name}
                        </Link>
                    ))}
                    <Link href="#contact" className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-medium transition-colors shadow-orange-200 shadow-lg">
                        Liên hệ
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-gray-700" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 flex flex-col items-center gap-4 animate-in slide-in-from-top-2">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-lg font-medium text-gray-700 w-full text-center py-2 active:bg-orange-50"
                            onClick={() => setIsOpen(false)}
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link href="#contact" className="px-8 py-3 bg-orange-500 text-white rounded-full font-bold my-2" onClick={() => setIsOpen(false)}>
                        Liên hệ ngay
                    </Link>
                </div>
            )}
        </header>
    );
}
