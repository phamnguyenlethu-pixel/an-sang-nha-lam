import Link from 'next/link';
import { Phone, MapPin, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-6">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold text-orange-400">Ăn Sáng Nhà Làm</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Mang đến bữa sáng dinh dưỡng, vệ sinh và tiện lợi cho mọi gia đình.
                            Sự hài lòng của bé là niềm vui của chúng tôi.
                        </p>
                        <div className="flex gap-4">
                            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                                <Facebook size={20} />
                            </Link>
                            <Link href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-orange-500 transition-colors">
                                <Instagram size={20} />
                            </Link>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Liên Kết Nhanh</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li><Link href="#hero" className="hover:text-orange-400 transition-colors">Trang chủ</Link></li>
                            <li><Link href="#menu" className="hover:text-orange-400 transition-colors">Thực đơn</Link></li>
                            <li><Link href="#contact" className="hover:text-orange-400 transition-colors">Liên hệ</Link></li>
                            <li><Link href="#" className="hover:text-orange-400 transition-colors">Chính sách giao hàng</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Thông Tin Liên Hệ</h4>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-orange-400 mt-0.5" />
                                <span>Tam Hiệp, Biên Hòa, Đồng Nai</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-orange-400" />
                                <span>0988 34 54 99</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Mở Cửa</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            <li className="flex justify-between">
                                <span>Thứ 2 - Thứ 7</span>
                                <span className="text-orange-400 font-semibold">05:30 - 09:00</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Chủ Nhật</span>
                                <span className="text-gray-600 font-semibold">Nghỉ</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Ăn Sáng Nhà Làm. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
