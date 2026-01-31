import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const BACKEND_URL = "https://shopback-backend.onrender.com";

export default function Result() {
    const location = useLocation();
    const navigate = useNavigate();

    const url =
        location.state?.productUrl ||
        sessionStorage.getItem("productUrl");

    const [copied, setCopied] = useState(false);

    if (!url) {
        return (
            <div className="page">
                <div className="content">
                    <p>Không có dữ liệu. Vui lòng nhập lại.</p>
                    <button onClick={() => navigate("/")}>
                        Quay về
                    </button>
                </div>
            </div>
        );
    }

    const redirectLink = `${BACKEND_URL}/go?u=${encodeURIComponent(
        url
    )}`;

    const copyLink = async () => {
        await navigator.clipboard.writeText(redirectLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const goBuy = () => {
        window.location.href = redirectLink;
    };

    return (
        <div className="page">
            <div className="content">
                <h1>Kết quả</h1>

                <p>Link sản phẩm:</p>
                <code>{url}</code>

                <div style={{ marginTop: 20, display: "flex", gap: 12, justifyContent: "center" }}>
                    <button onClick={copyLink}>
                        {copied ? "Đã copy ✓" : "Copy link"}
                    </button>

                    <button
                        onClick={goBuy}
                        style={{
                            background: "#ee4d2d",
                            color: "#fff",
                            padding: "10px 18px",
                            borderRadius: 6,
                            fontWeight: 600,
                        }}
                    >
                        🛒 Đi mua ngay
                    </button>
                </div>
            </div>
        </div>
    );
}