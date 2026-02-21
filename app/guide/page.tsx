export default function GuidePage() {
    const guides = [
        {
            id: "preparation",
            step: "STEP 0",
            title: "映写機の場所に立つ",
            subtitle: "準備ワーク",
            description:
                "各システムを使う前に、まず「映写機の場所」に立ちます。\n光の磁場をイメージし、あなたの真実の場所にグラウンディングすることで、\n宇宙意識とつながる準備が整います。",
            accentColor: "#B8A9C9",
            accentBg: "linear-gradient(135deg, #F5F0FA 0%, #EDE6F5 100%)",
            href: "/preparation",
            videoId: "", // YouTube video ID
            audioUrl: "", // Direct audio URL
        },
        {
            id: "vision-navi",
            step: "STEP 1",
            title: "無限ビジョンナビ",
            subtitle: "Infinite Vision Navi",
            description:
                "未来から逆算して、あなただけのビジョンを高解像度で描き出します。\nAIとの対話を通じて、体感に没入し、\n実現した自分から道を見つけていきます。",
            accentColor: "#D4A574",
            accentBg: "linear-gradient(135deg, #FDF6EE 0%, #F8EDE0 100%)",
            href: "/vision-navi",
            videoId: "",
            audioUrl: "https://lpcolorful.com/product/wp-content/uploads/2026/02/line-system01.mp3",
        },
        {
            id: "limit-detector",
            step: "STEP 2",
            title: "リミットディテクター",
            subtitle: "Limit Detector",
            description:
                "あなたが無意識に持っている「制限」を映し出し、\n分離のパターンに気づくためのAI対話システムです。\n制限に「形・材質・重さ」を与えて、はっきりと捉えます。",
            accentColor: "#7B8CDE",
            accentBg: "linear-gradient(135deg, #F0F2FC 0%, #E4E8FA 100%)",
            href: "/limit-detector",
            videoId: "",
            audioUrl: "https://lpcolorful.com/product/wp-content/uploads/2026/02/line-system2.m4a",
        },
        {
            id: "letting-go",
            step: "STEP 3",
            title: "手放しワークシステム",
            subtitle: "Letting Go Work System",
            description:
                "捉えた制限や不要なエネルギーを手放し、\n本来の光に戻すためのガイド付きワークシステムです。\n画面の指示に従って、ステップバイステップで進みます。",
            accentColor: "#9DB5A0",
            accentBg: "linear-gradient(135deg, #F2F7F3 0%, #E4EDE6 100%)",
            href: "/letting-go",
            videoId: "",
            audioUrl: "",
        },
    ];

    return (
        <main className="guide-page" style={{ position: "relative", overflow: "hidden" }}>
            <div className="sk-bg-glow sk-bg-glow-1" />
            <div className="sk-bg-glow sk-bg-glow-2" />
            <div className="sk-bg-glow sk-bg-glow-3" />
            {/* Hero */}
            <section className="guide-hero">
                <a href="/" className="guide-back">← ホームに戻る</a>
                <p className="guide-hero-eyebrow">How to Use</p>
                <h1 className="guide-hero-title">はじめての方へ</h1>
                <p className="guide-hero-description">
                    無限の叡智スターターキットの使い方ガイドです。
                    <br />
                    動画・音声で各ワークの流れを確認してから、
                    <br />
                    実際のワークに進むとよりスムーズに受けられます。
                </p>
            </section>

            {/* Flow Overview */}
            <section className="guide-flow">
                <div className="guide-flow-inner">
                    <h2 className="guide-flow-title">全体の流れ</h2>
                    <div className="guide-flow-steps">
                        <div className="guide-flow-step">
                            <span className="guide-flow-num" style={{ background: "#B8A9C9" }}>0</span>
                            <span className="guide-flow-label">準備ワーク</span>
                        </div>
                        <span className="guide-flow-arrow">→</span>
                        <div className="guide-flow-step">
                            <span className="guide-flow-num" style={{ background: "#D4A574" }}>1</span>
                            <span className="guide-flow-label">ビジョンナビ</span>
                        </div>
                        <span className="guide-flow-arrow">→</span>
                        <div className="guide-flow-step">
                            <span className="guide-flow-num" style={{ background: "#7B8CDE" }}>2</span>
                            <span className="guide-flow-label">リミットディテクター</span>
                        </div>
                        <span className="guide-flow-arrow">→</span>
                        <div className="guide-flow-step">
                            <span className="guide-flow-num" style={{ background: "#9DB5A0" }}>3</span>
                            <span className="guide-flow-label">手放しワーク</span>
                        </div>
                    </div>
                    <p className="guide-flow-note">
                        ※ 順番通りに進むのがおすすめですが、直感で選んでもOKです。
                        <br />
                        ※ 準備ワークは毎回最初に行うことをおすすめします。
                    </p>
                </div>
            </section>

            {/* Guide Sections */}
            <section className="guide-sections">
                {guides.map((guide) => (
                    <div key={guide.id} className="guide-section" id={guide.id}>
                        <div
                            className="guide-section-header"
                            style={{ background: guide.accentBg }}
                        >
                            <span
                                className="guide-section-step"
                                style={{ color: guide.accentColor }}
                            >
                                {guide.step}
                            </span>
                            <h2 className="guide-section-title">{guide.title}</h2>
                            <p className="guide-section-subtitle">{guide.subtitle}</p>
                        </div>

                        <div className="guide-section-body">
                            <p className="guide-section-desc">{guide.description}</p>

                            {/* Video */}
                            <div className="guide-media-block">
                                <h3 className="guide-media-label">📹 ガイド動画</h3>
                                {guide.videoId ? (
                                    <div className="guide-video-wrapper">
                                        <iframe
                                            src={`https://www.youtube.com/embed/${guide.videoId}`}
                                            title={`${guide.title} ガイド動画`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        />
                                    </div>
                                ) : (
                                    <div className="guide-media-placeholder">
                                        <span className="guide-placeholder-icon">▶</span>
                                        <span>動画を準備中です</span>
                                    </div>
                                )}
                            </div>

                            {/* Audio */}
                            <div className="guide-media-block">
                                <h3 className="guide-media-label">🔊 ガイド音声</h3>
                                {guide.audioUrl ? (
                                    <audio controls className="guide-audio" preload="metadata">
                                        <source src={guide.audioUrl} />
                                        お使いのブラウザは音声再生に対応していません。
                                    </audio>
                                ) : (
                                    <div className="guide-media-placeholder guide-media-placeholder-sm">
                                        <span className="guide-placeholder-icon">♪</span>
                                        <span>音声を準備中です</span>
                                    </div>
                                )}
                            </div>

                            {/* CTA */}
                            <a
                                href={guide.href}
                                className="guide-section-cta"
                                style={{ backgroundColor: guide.accentColor }}
                            >
                                {guide.title}を始める →
                            </a>
                        </div>
                    </div>
                ))}
            </section>

            {/* Bottom CTA */}
            <section className="guide-bottom-cta">
                <p>準備ができたら、さっそくワークを始めましょう。</p>
                <a href="/" className="guide-bottom-btn">
                    ホームに戻る
                </a>
            </section>

            <footer className="sk-footer">
                <p>© 2026 無限の叡智スターターキット</p>
            </footer>
        </main>
    );
}
