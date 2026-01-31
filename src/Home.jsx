import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const inputRef = useRef(null);
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handlePaste = async () => {
        const text = await navigator.clipboard.readText();
        inputRef.current.value = text;
        setError("");
    };

    const handleSubmit = () => {
        const url = inputRef.current.value.trim();

        if (!url) {
            return setError("Vui lòng nhập link sản phẩm");
        }

        if (!url.includes("shopee.vn")) {
            return setError("Chỉ hỗ trợ link sản phẩm Shopee");
        }

        sessionStorage.setItem("productUrl", url);

        navigate("/ket-qua", {
            state: { productUrl: url },
        });
    };

    return (
        <div className="page">
            <div className="content">
                <h1>Hoàn trả tiền về tay</h1>
                <p>lợi nhuận 0 đồng nhờ sở thích cá nhân</p>

                <div className="input-wrapper">
                    <input
                        ref={inputRef}
                        placeholder="URL link sản phẩm cần refund"
                        onChange={() => setError("")}
                    />

                    <span className="clipboard" onClick={handlePaste}>
                        📋
                    </span>
                </div>

                {error && (
                    <p style={{ color: "#ef4444", marginTop: 8 }}>
                        {error}
                    </p>
                )}

                <button
                    className="download-btn"
                    onClick={handleSubmit}
                >
                    xác nhận
                </button>
            </div>
        </div>
    );
}