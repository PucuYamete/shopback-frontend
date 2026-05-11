import { useEffect, useState } from "react";

const API_BASE = "https://shopback-backend2.onrender.com";

export default function Home() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const res = await fetch(`${API_BASE}/products`);

                if (!res.ok) {
                    throw new Error(`Không thể tải danh sách sản phẩm: ${res.status}`);
                }

                const data = await res.json();
                setProducts(Array.isArray(data) ? data : []);
            } catch (err) {
                console.error("Fetch products error:", err);
                setError(err.message || "Đã xảy ra lỗi");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    const handleGoProduct = (id) => {
        window.location.href = `${API_BASE}/go?id=${id}`;
    };

    return (
        <div className="page">
            <div className="content">
                <header className="navbar">
                    <a href="#top" className="navbar-logo">
                        <img
                            src="/dealhay24h-banner.png"
                            alt="DealHay24h"
                            className="navbar-banner"
                        />
                    </a>

                    <nav className="navbar-menu">
                        <a href="#san-pham">Sản phẩm</a>
                        <a href="#gioi-thieu">Giới thiệu</a>
                        <a href="#lien-he">Liên hệ</a>
                        <a href="#san-pham" className="nav-cta">Xem deal hot</a>
                    </nav>
                </header>

                <section className="hero" id="top">
                    <div className="hero-badge">
                        🔥 Deal hot cập nhật mỗi ngày
                    </div>

                    <h1>
                        Săn deal Shopee giá tốt <br />
                        nhanh hơn cùng DealHay24h
                    </h1>

                    <p className="hero-text">
                        Tổng hợp sản phẩm nổi bật, deal đáng chú ý và xu hướng mua sắm
                        từ Shopee giúp bạn tiết kiệm thời gian tìm kiếm và tiếp cận nhanh
                        các ưu đãi hấp dẫn mỗi ngày.
                    </p>

                    <div className="hero-actions">
                        <a href="#san-pham" className="primary-btn">
                            Xem deal hôm nay
                        </a>

                        <a href="#gioi-thieu" className="secondary-btn">
                            Giới thiệu website
                        </a>
                    </div>

                    <div className="hero-stats">
                        <div className="hero-stat">
                            <strong>Deal nổi bật</strong>
                            <span>Cập nhật thường xuyên</span>
                        </div>

                        <div className="hero-stat">
                            <strong>Sản phẩm đa dạng</strong>
                            <span>Decor • Công nghệ • Gia dụng</span>
                        </div>

                        <div className="hero-stat">
                            <strong>Truy cập nhanh</strong>
                            <span>Đi thẳng tới Shopee</span>
                        </div>
                    </div>
                </section>

                <section className="feature-strip">
                    <div className="feature-item">
                        <h3>Chọn lọc dễ xem</h3>
                        <p>
                            Sản phẩm được tổng hợp theo hướng dễ mua, dễ tham khảo và phù hợp
                            với nhu cầu thực tế hằng ngày.
                        </p>
                    </div>

                    <div className="feature-item">
                        <h3>Đi thẳng sản phẩm</h3>
                        <p>
                            Chỉ cần một lần bấm để truy cập nhanh tới liên kết sản phẩm trên
                            Shopee.
                        </p>
                    </div>

                    <div className="feature-item">
                        <h3>Đơn giản, rõ ràng</h3>
                        <p>
                            Ưu tiên giao diện gọn gàng, ít rối mắt và tối ưu cho cả máy tính
                            lẫn điện thoại.
                        </p>
                    </div>
                </section>

                <section className="trust-strip">
                    <div className="trust-box">
                        <strong>Cập nhật deal mỗi ngày</strong>
                        <span>Theo dõi các sản phẩm nổi bật và ưu đãi mới</span>
                    </div>

                    <div className="trust-box">
                        <strong>Chọn lọc sản phẩm đáng chú ý</strong>
                        <span>Tập trung vào các món đồ dễ mua và dễ quan tâm</span>
                    </div>

                    <div className="trust-box">
                        <strong>Truy cập nhanh, không rườm rà</strong>
                        <span>Giảm thời gian tìm kiếm, đi thẳng tới sản phẩm</span>
                    </div>
                </section>
                <section className="category-section">
                    <div className="section-head">
                        <div>
                            <span className="section-kicker">Danh mục nổi bật</span>
                            <h2>Khám phá deal theo nhu cầu</h2>
                        </div>
                    </div>

                    <div className="category-grid">
                        <a href="#san-pham" className="category-card">
                            <span>💻</span>
                            <strong>Công nghệ</strong>
                            <p>Phụ kiện, đồ dùng tiện ích và sản phẩm số đáng chú ý.</p>
                        </a>

                        <a href="#san-pham" className="category-card">
                            <span>🏠</span>
                            <strong>Đồ gia dụng</strong>
                            <p>Vật dụng hằng ngày giúp nhà cửa gọn gàng và tiện lợi hơn.</p>
                        </a>

                        <a href="#san-pham" className="category-card">
                            <span>✨</span>
                            <strong>Decor</strong>
                            <p>Đồ trang trí, góc làm việc và sản phẩm làm đẹp không gian.</p>
                        </a>

                        <a href="#san-pham" className="category-card">
                            <span>🎁</span>
                            <strong>Quà tặng</strong>
                            <p>Gợi ý sản phẩm dễ mua, phù hợp làm quà cho nhiều dịp.</p>
                        </a>
                    </div>
                </section>
                <section className="section-head" id="san-pham">
                    <div>
                        <span className="section-kicker">Sản phẩm nổi bật</span>
                        <h2>Gợi ý đáng chú ý hôm nay</h2>
                    </div>
                </section>

                {loading && <p className="status-text">Đang tải danh sách sản phẩm...</p>}

                {error && <p className="error-text">{error}</p>}

                {!loading && !error && products.length === 0 && (
                    <p className="status-text">Chưa có sản phẩm nào.</p>
                )}

                <section className="product-grid">
                    {products.map((product) => (
                        <article key={product.id} className="product-card">
                            <div className="product-image">
                                {product.image ? (
                                    <img src={product.image} alt={product.title} />
                                ) : (
                                    <div className="image-placeholder">Chưa có ảnh sản phẩm</div>
                                )}
                            </div>

                            <div className="product-info">
                                <div className="product-meta">
                                    <span className="product-platform">{product.platform}</span>
                                    <span className="product-tag">🔥 HOT</span>
                                </div>

                                <h3>{product.title}</h3>

                                <p className="product-desc">
                                    Tham khảo nhanh sản phẩm và truy cập trực tiếp tới Shopee để
                                    xem thông tin chi tiết.
                                </p>

                                <button
                                    className="download-btn"
                                    onClick={() => handleGoProduct(product.id)}
                                >
                                    Xem deal Shopee →
                                </button>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="info-grid" id="gioi-thieu">
                    <article className="info-card">
                        <h2>Về DealHay24h</h2>
                        <p>
                            DealHay24h là website chuyên tổng hợp các sản phẩm đáng chú ý,
                            deal tốt và xu hướng mua sắm nổi bật từ các sàn thương mại điện tử.
                        </p>
                        <p>
                            Chúng tôi giúp người dùng dễ dàng khám phá sản phẩm phù hợp, tiết
                            kiệm thời gian tìm kiếm và cập nhật ưu đãi mới mỗi ngày.
                        </p>
                    </article>

                    <article className="info-card" id="lien-he">
                        <h2>Liên hệ</h2>
                        <p>Email: huy12pk@gmail.com</p>
                        <p>Thời gian phản hồi: 24 giờ làm việc</p>
                    </article>

                    <article className="info-card">
                        <h2>Minh bạch nội dung</h2>
                        <p>
                            Một số liên kết trên website có thể là liên kết tiếp thị liên kết.
                            Giá bán, ưu đãi và tình trạng sản phẩm có thể thay đổi theo thời
                            điểm trên Shopee.
                        </p>
                    </article>
                </section>

                <section className="policy-block">
                    <div className="policy-card">
                        <h2>Chính sách bảo mật</h2>
                        <p>
                            DealHay24h không yêu cầu người dùng tạo tài khoản để xem sản phẩm.
                            Website có thể ghi nhận một số dữ liệu truy cập cơ bản nhằm cải thiện
                            trải nghiệm, thống kê lượt nhấp và tối ưu nội dung hiển thị.
                        </p>
                    </div>

                    <div className="policy-card">
                        <h2>Điều khoản sử dụng</h2>
                        <p>
                            Nội dung trên DealHay24h mang tính chất tham khảo. Người dùng nên kiểm
                            tra lại giá bán, phí vận chuyển, đánh giá sản phẩm và chính sách đổi trả
                            trực tiếp trên Shopee trước khi mua hàng.
                        </p>
                    </div>

                    <div className="policy-card">
                        <h2>Minh bạch affiliate</h2>
                        <p>
                            Một số liên kết trên website có thể là liên kết tiếp thị liên kết.
                            Khi người dùng mua hàng thông qua các liên kết này, DealHay24h có thể
                            nhận hoa hồng mà không làm thay đổi giá mua của người dùng.
                        </p>
                    </div>
                </section>

                <footer className="site-footer">
                    <div className="footer-brand">
                        <strong>DealHay24h</strong>
                        <p>
                            Website tổng hợp deal và sản phẩm nổi bật, giúp người dùng khám phá
                            nhanh những món đồ đáng mua mỗi ngày.
                        </p>
                    </div>

                    <div className="footer-links">
                        <a href="#san-pham">Sản phẩm</a>
                        <a href="#gioi-thieu">Giới thiệu</a>
                        <a href="#lien-he">Liên hệ</a>
                    </div>
                </footer>

                <div className="copyright">
                    © 2026 DealHay24h. All rights reserved.
                </div>
            </div>
        </div>
    );
}