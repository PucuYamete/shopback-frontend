import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";

const BACKEND_URL = "https://shopback-backend.onrender.com";

export default function Result() {
    const location = useLocation();
    const navigate = useNavigate();

    const url =
        location.state?.productUrl ||
        sessionStorage.getItem("productUrl");

    const redirectLink = url
        ? `${BACKEND_URL}/go?u=${encodeURIComponent(url)}`
        : "";

    const [copied, setCopied] = useState(false);
    const [countdown, setCountdown] = useState(3);

    if (!url) {
        return (
            <div className="page">
                <div className="content">
                    <p>Không có dữ liệu. Vui lòng nhập lại.</p>
                    <button onClick={() => navigate("/")}>Quay về</button>
                </div>
            </div>
        );
    }

    // ===== AUTO COPY (êm, không spam) =====
    useEffect(() => {
        navigator.clipboard.writeText(redirectLink);
        setCopied(true);

        const t = setTimeout(() => setCopied(false), 2000);
        return () => clearTimeout(t);
    }, [redirectLink]);

    // ===== COUNTDOWN REDIRECT =====
    useEffect(() => {
        const timer = setInterval(() => {
            setCountdown((c) => {
                if (c <= 1) {
                    window.location.href = redirectLink;
                    return 0;
                }
                return c - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [redirectLink]);

    const platform = url.includes("shopee") ? "Shopee" : "Khác";

    const copyLink = async () => {
        await navigator.clipboard.writeText(redirectLink);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="page">
            <div className="content">
                <h1>Hoàn trả tiền về tay</h1>
                <p style={{ opacity: 0.7 }}>
                    Link hoàn tiền đã sẵn sàng
                </p>

                <div className="input-wrapper">
                    <input
                        value={redirectLink}
                        readOnly
                        onClick={copyLink}
                    />

                    <span className="clipboard" onClick={copyLink} title="Copy link">
                        <svg viewBox="0 0 24 24" fill="none">
                            <path
                                d="M16 4H18C19.1 4 20 4.9 20 6V20C20 21.1 19.1 22 18 22H6C4.9 22 4 21.1 4 20V6C4 4.9 4.9 4 6 4H8"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                            <rect
                                x="8"
                                y="2"
                                width="8"
                                height="4"
                                rx="1"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            />
                        </svg>
                    </span>
                </div>

                <p
                    style={{
                        marginTop: 12,
                        color: copied ? "#16a34a" : "#6b7280",
                    }}
                >
                    {copied ? "✓ Link đã được copy" : "Nhấn để copy link"}
                </p>

                <p style={{ marginTop: 6, opacity: 0.6 }}>
                    Sàn: <strong>{platform}</strong>
                </p>

                <p style={{ marginTop: 12 }}>
                    ⏳ Tự động chuyển sau{" "}
                    <strong>{countdown}</strong> giây
                </p>

                <button
                    className="download-btn"
                    style={{ marginTop: 20 }}
                    onClick={() => (window.location.href = redirectLink)}
                >
                    Mở Shopee ngay
                </button>
            </div>
        </div>
    );
}