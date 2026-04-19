import { useEffect, useState } from "react";

const API_BASE = "http://localhost:3000";

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
                <header className="hero">
                    <div className="hero-badge">Shopee deal chọn lọc</div>
                    <h1>Khám phá sản phẩm đáng mua mỗi ngày</h1>
                    <p className="hero-text">
                        Website tổng hợp các sản phẩm Shopee nổi bật, dễ mua, dễ tham khảo
                        và phù hợp với nhu cầu quà tặng, decor, đồ dùng cá nhân và sản phẩm
                        hot theo xu hướng.
                    </p>

                    <div className="hero-actions">
                        <a href="#san-pham" className="primary-btn">
                            Xem sản phẩm
                        </a>
                        <a href="#gioi-thieu" className="secondary-btn">
                            Tìm hiểu thêm
                        </a>
                    </div>
                </header>

                <section className="feature-strip">
                    <div className="feature-item">
                        <h3>Chọn lọc dễ xem</h3>
                        <p>Sản phẩm được gom theo hướng dễ mua, dễ chia sẻ và dễ tham khảo.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Đi thẳng sản phẩm</h3>
                        <p>Chỉ cần bấm một lần để mở đúng liên kết sản phẩm trên Shopee.</p>
                    </div>
                    <div className="feature-item">
                        <h3>Gọn và rõ ràng</h3>
                        <p>Ưu tiên trải nghiệm đơn giản, ít rối mắt và phù hợp trên điện thoại.</p>
                    </div>
                </section>

                <section className="section-head" id="san-pham">
                    <div>
                        <span className="section-kicker">Sản phẩm nổi bật</span>
                        <h2>Gợi ý đáng chú ý hôm nay</h2>
                    </div>
                </section>

                {loading && <p className="status-text">Đang tải sản phẩm...</p>}

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
                                    <span className="product-tag">Deal gợi ý</span>
                                </div>

                                <h3>{product.title}</h3>

                                <p className="product-desc">
                                    Xem nhanh sản phẩm và chuyển tới trang mua trên Shopee chỉ với
                                    một lần bấm.
                                </p>

                                <button
                                    className="download-btn"
                                    onClick={() => handleGoProduct(product.id)}
                                >
                                    Xem ngay trên Shopee
                                </button>
                            </div>
                        </article>
                    ))}
                </section>

                <section className="info-grid" id="gioi-thieu">
                    <article className="info-card">
                        <h2>Về website</h2>
                        <p>
                            Website được xây dựng để tổng hợp các sản phẩm Shopee đáng chú ý
                            theo từng nhu cầu thực tế như quà tặng, decor, đồ dùng cá nhân và
                            sản phẩm theo xu hướng.
                        </p>
                    </article>

                    <article className="info-card">
                        <h2>Liên hệ</h2>
                        <p>Email: contact@example.com</p>
                        <p>Thời gian phản hồi: trong giờ hành chính</p>
                    </article>

                    <article className="info-card">
                        <h2>Chính sách minh bạch</h2>
                        <p>
                            Một số liên kết trên website có thể là liên kết tiếp thị liên kết.
                            Giá, chương trình ưu đãi và tình trạng sản phẩm có thể thay đổi
                            theo từng thời điểm trên Shopee.
                        </p>
                    </article>
                </section>

                <section className="policy-block">
                    <div className="policy-card">
                        <h2>Chính sách bảo mật</h2>
                        <p>
                            Website không yêu cầu người dùng tạo tài khoản để xem sản phẩm.
                            Dữ liệu truy cập cơ bản có thể được dùng để cải thiện trải nghiệm,
                            đo lường lượt nhấp và tối ưu nội dung hiển thị.
                        </p>
                    </div>

                    <div className="policy-card">
                        <h2>Điều khoản sử dụng</h2>
                        <p>
                            Nội dung trên website mang tính chất tham khảo. Người dùng nên tự
                            kiểm tra lại thông tin sản phẩm, giá bán, phí vận chuyển và chính
                            sách đổi trả trên Shopee trước khi quyết định mua hàng.
                        </p>
                    </div>
                </section>

                <footer className="site-footer">
                    <div>
                        <strong>Deal chọn lọc Shopee</strong>
                        <p>Trang giới thiệu sản phẩm đáng chú ý và dễ tham khảo mỗi ngày.</p>
                    </div>

                    <div className="footer-links">
                        <a href="#san-pham">Sản phẩm</a>
                        <a href="#gioi-thieu">Giới thiệu</a>
                        <a href="mailto:contact@example.com">Liên hệ</a>
                    </div>
                </footer>
            </div>
        </div>
    );
}