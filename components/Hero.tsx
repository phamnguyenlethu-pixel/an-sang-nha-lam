import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id="hero" className="pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-10 items-center">
                    <div className="space-y-6 text-center md:text-left">
                        <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold mb-2">
                            Dinh dưỡng & An toàn
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                            Bữa Sáng <span className="text-orange-500">Ngon – Nhanh – Đủ Chất</span> Cho Bé
                        </h1>
                        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-lg mx-auto md:mx-0">
                            Ba mẹ bận rộn? Hãy để chúng tôi lo! Giao tận tay bữa sáng nóng hổi, vệ sinh, dinh dưỡng cho bé trước giờ vào lớp.
                        </p>
                        <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4">
                            <Link href="#contact" className="px-8 py-3.5 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-bold text-lg shadow-lg shadow-orange-200 transition-all hover:scale-105">
                                Đặt hàng ngay
                            </Link>
                            <Link href="#menu" className="px-8 py-3.5 bg-white border-2 border-orange-200 text-orange-600 hover:bg-orange-50 rounded-full font-bold text-lg transition-all">
                                Xem thực đơn
                            </Link>
                        </div>

                        <div className="pt-8 flex items-center justify-center md:justify-start gap-8 text-gray-500 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                Hơn 1000+ bữa sáng mỗi tháng
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                100% Nguyên liệu sạch
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full max-w-md mx-auto md:max-w-full">
                        <div className="aspect-square relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform rotate-3 hover:rotate-0 transition-all duration-500">
                            <Image
                                src="/images/avatar.png"
                                alt="Bữa sáng ngon miệng"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-orange-200/20 rounded-full blur-3xl"></div>
                    </div>
                </div>
            </div>
        </section>
    );
}
