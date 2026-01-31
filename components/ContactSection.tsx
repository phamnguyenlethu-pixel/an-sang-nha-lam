import { MapPin, Phone, Clock } from 'lucide-react';

export default function ContactSection() {
    return (
        <section id="contact" className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Liên Hệ Đặt Hàng</h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Hãy để chúng tôi chuẩn bị bữa sáng cho con bạn. Gọi ngay hoặc đến trực tiếp cửa hàng.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Điện thoại</h3>
                                    <p className="text-gray-600 text-lg">0988 34 54 99</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Địa chỉ</h3>
                                    <p className="text-gray-600 text-lg">Tam Hiệp, Biên Hòa, Đồng Nai</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-orange-100 rounded-lg text-orange-600">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 mb-1">Giờ mở cửa</h3>
                                    <p className="text-gray-600 text-lg">05:30 - 09:00 (Sáng)</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="h-[400px] w-full bg-gray-200 rounded-2xl overflow-hidden shadow-lg border border-gray-100 relative">
                        {/* Placeholder for map since we can't embed real iframe without URL */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.772596541577!2d106.8789!3d10.9333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174def3c8c7c9ad%3A0x7d6c8b9d8a8b8b8b!2zVGFtIEhp4buHcCwgQmnDqm4gSMOyYSwgxJDhu5NuZyBOYWksIFZpZXRuYW0!5e0!3m2!1sen!2sua!4v1700000000000!5m2!1sen!2sua"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            className="absolute inset-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}
