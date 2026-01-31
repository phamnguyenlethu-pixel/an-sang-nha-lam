import Image from 'next/image';
import { ShoppingCart } from 'lucide-react';
import Link from 'next/link';

const products = [
    { id: 1, name: 'Mì ý-Cơm cuộn', price: '20.000đ', desc: 'Món ăn yêu thích của các bé, mềm dễ ăn.', image: '/images/image15.png' },
    { id: 2, name: 'Mì trộn-topping', price: '20.000đ', desc: 'Ngon ngon nhiều topping.', image: '/images/image7.png' },
    { id: 3, name: 'Bánh Mì Hamburger Trứng', price: '15.000đ', desc: 'Bánh mì giòn, trứng ốp la lòng đào, pate nhà làm.', image: '/images/image5.png' },
    { id: 4, name: 'Bánh Mì Hamburger thịt', price: '15.000đ', desc: 'Bánh mì giòn, thịt heo thơm ngon.', image: '/images/image6.png' },
    { id: 5, name: 'Bánh Mì Hamburger Xúc xích', price: '15.000đ', desc: 'Bánh mì giòn, xúc xích thơm ngon.', image: '/images/image4.png' },
    { id: 6, name: 'Cơm cuộn', price: '15.000đ', desc: 'Cơm dẻo ngon, nhân đầy đặn, giàu dinh dưỡng.', image: '/images/image2.png' },
    { id: 7, name: 'Mì Ý', price: '15.000đ', desc: 'Sốt bò bằm cà chua đậm đà, mì dai ngon.', image: '/images/image3.png' },
    { id: 8, name: 'Mì Trộn Thập Cẩm', price: '20.000đ', desc: 'Nhiều toppin, sốt trộn đặc biệt hấp dẫn.', image: '/images/image4.png' },
    { id: 9, name: 'Sandwich Kẹp', price: '15.000đ', desc: 'Tiện lợi, nhanh gọn, đầy đủ năng lượng.', image: '/images/image5.png' },
    { id: 10, name: 'Nui Xào Bò', price: '20.000đ', desc: 'Món ăn yêu thích của các bé, mềm dễ ăn.', image: '/images/image6.png' },
    { id: 11, name: 'Súp Cua óc Heo', price: '25.000đ', desc: 'Bổ dưỡng cho trí não bé.', image: '/images/image7.png' },
    { id: 12, name: 'Cháo Sườn', price: '15.000đ', desc: 'Nấu nhừ, thơm ngon.', image: '/images/image8.png' },
    { id: 13, name: 'Bún Thịt Nướng', price: '25.000đ', desc: 'Thơm ngon đậm đà hương vị truyền thống.', image: '/images/image9.png' },
    { id: 14, name: 'Xôi Mặn', price: '15.000đ', desc: 'Xôi dẻo, topping ngập tràn.', image: '/images/image10.png' },
    { id: 15, name: 'Bánh Cuốn', price: '20.000đ', desc: 'Nóng hổi, nhân thịt mộc nhĩ.', image: '/images/image11.png' },
    { id: 16, name: 'Cơm cuộn chiên', price: '15.000đ', desc: 'Nhà làm, ngon tuyệt vời', image: '/images/image12.png' },
];

export default function MenuGrid() {
    return (
        <section id="menu" className="py-16 md:py-24 bg-orange-50/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Thực Đơn Hấp Dẫn</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Đa dạng các món ăn sáng ngon, bổ dưỡng, được thay đổi mỗi ngày để bé không bao giờ ngán.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
                    {products.map((product) => (
                        <div key={product.id} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group border border-orange-100 flex flex-col">
                            <div className="relative aspect-square overflow-hidden bg-gray-100">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                />
                            </div>
                            <div className="p-4 flex-1 flex flex-col">
                                <h3 className="font-bold text-lg text-gray-800 mb-1 line-clamp-1">{product.name}</h3>
                                <p className="text-sm text-gray-500 mb-3 line-clamp-2">{product.desc}</p>
                                <div className="mt-auto flex items-center justify-between">
                                    <span className="text-orange-600 font-bold text-lg">{product.price}</span>
                                    <button className="p-2 bg-orange-100 text-orange-600 rounded-full hover:bg-orange-500 hover:text-white transition-colors">
                                        <ShoppingCart size={18} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <Link href="#contact" className="inline-block px-10 py-3 bg-white border-2 border-orange-500 text-orange-600 rounded-full font-bold hover:bg-orange-500 hover:text-white transition-all">
                        Xem tất cả món ăn
                    </Link>
                </div>
            </div>
        </section>
    );
}
