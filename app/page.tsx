import SystemCard from "@/components/SystemCard";

export default function StarterKitPage() {
    return (
        <main className="sk-landing">
            {/* Hero */}
            <section className="sk-hero">
                <div className="sk-bg-glow sk-bg-glow-1" />
                <div className="sk-bg-glow sk-bg-glow-2" />
                <div className="sk-hero-content">
                    <p className="sk-hero-eyebrow">Infinite Wisdom</p>
                    <h1 className="sk-hero-title">
                        無限の叡智を生きる
                        <br />
                        スターターキット
                    </h1>
                    <div className="sk-hero-subcatch">
                        <p className="sk-hero-lead">
                            無限の可能性のあなたを生きる、3つのAI対話システム。
                        </p>
                        <p className="sk-hero-catch">
                            1番のワクワクのビジョンを生きて、
                            <br />
                            無意識の制限はとらえて、かろやかに手放してしまう。
                            <br />
                            <span className="sk-hero-catch-accent">ほんとうの自分の叡智に復活して生きていく</span>
                            <br />
                            そんな圧倒的な体験のはじまりです。
                        </p>
                        <p className="sk-hero-note">
                            ステップ順に進むのがおすすめですが、直感で選ぶのもOKです✨
                        </p>
                    </div>
                </div>
            </section>

            {/* Introduction Story - temporarily hidden
            <section className="sk-intro-banner">
                <a href="/introduction" className="sk-intro-banner-link">
                    <span className="sk-intro-banner-icon">🌕</span>
                    <div className="sk-intro-banner-content">
                        <span className="sk-intro-banner-title">イントロダクション</span>
                        <span className="sk-intro-banner-desc">
                            わたしたちの意識の旅 — なぜ地球に来て、今何が始まっているのか
                        </span>
                    </div>
                    <span className="sk-intro-banner-arrow">→</span>
                </a>
            </section>
            */}

            {/* Guide Banner */}
            <section className="sk-guide-banner">
                <a href="/guide" className="sk-guide-banner-link">
                    <span className="sk-guide-banner-badge">はじめての方へ</span>
                    <span className="sk-guide-banner-text">
                        使い方ガイド — 動画・音声でワークの流れを確認できます
                    </span>
                    <span className="sk-guide-banner-arrow">→</span>
                </a>
            </section>

            {/* Cards */}
            <section className="sk-cards-section">
                {/* Preparation */}
                <div className="sk-prep-section">
                    <a href="/preparation" className="sk-prep-card">
                        <div className="sk-prep-card-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                            </svg>
                        </div>
                        <div className="sk-prep-card-content">
                            <span className="sk-prep-card-label">最初の準備</span>
                            <h3 className="sk-prep-card-title">映写機の場所に立つ</h3>
                            <p className="sk-prep-card-desc">
                                各システムを使う前に、あなたの真実の場所「映写機の場所」に立ち、
                                あなたの宇宙意識とつながる準備をします。
                            </p>
                        </div>
                        <div className="sk-prep-card-arrow">→</div>
                    </a>
                </div>

                <div className="sk-cards-grid">
                    <SystemCard
                        step={1}
                        title="無限ビジョンナビ"
                        subtitle="Infinite Vision Navi"
                        description="未来から逆算して、あなたの1番のワクワクのビジョンを高解像度で描き出す対話システム。すでに実現した自分のエネルギーで、流れを起こしだします。"
                        icon={
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <circle cx="12" cy="12" r="3" />
                                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M16.36 16.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M16.36 7.64l1.42-1.42" />
                            </svg>
                        }
                        href="/vision-navi"
                        accentColor="#F59E0B" /* Amber/Orange */
                        accentColorLight="#FEF3C7"
                    />
                    <SystemCard
                        step={2}
                        title="リミットディテクター"
                        subtitle="Limit Detector"
                        description="あなたが無意識に持っている「制限」、あなたがつかっている自分への分離に気づく対話システムです。"
                        icon={
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                                <path d="M12 16v-4M12 8h.01" />
                            </svg>
                        }
                        href="/limit-detector"
                        accentColor="#6366F1" /* Indigo/Blue */
                        accentColorLight="#E0E7FF"
                    />
                    <SystemCard
                        step={3}
                        title="手放しシフトワーク"
                        subtitle="Letting Go Work System"
                        description="捉えた制限やエネルギーを、ありえないほどのシンプルさと簡単さで手放し、無限の可能性のじぶんに復活していくワークです。"
                        icon={
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                <polyline points="15,3 21,3 21,9" />
                                <line x1="10" y1="14" x2="21" y2="3" />
                            </svg>
                        }
                        href="/letting-go"
                        accentColor="#10B981" /* Emerald/Green */
                        accentColorLight="#D1FAE5"
                    />
                </div>
            </section>

            {/* Spaceship Class Promo */}
            <section className="sk-promo-section">
                <div className="sk-promo-inner">
                    <p className="sk-promo-eyebrow">✨ さらに深く</p>
                    <h2 className="sk-promo-title">関野あやこ<br />スペースシップクラス</h2>
                    <div className="sk-promo-body">
                        <p>
                            自分では思ってもみなかったような、深い前世や魂レベルの制限
                            <br />
                            使い古してなじみ深い — だからこそ自分では到底気づけないような
                            <br />
                            「自分が自分につけた分離」
                        </p>
                        <p>
                            このクラスの揺るがない、圧倒的な磁場 —
                            <br />
                            地球の体験とは思えないほどの時空間で、
                            <br />
                            それらをいとも簡単に手放してしまう。
                        </p>
                        <p>
                            手放せるとも思っていなかったほどの、深い重しが外れ、
                            <br />
                            扉を開き、広がって上昇する自分への復活はとてつもない。
                            <br />
                            その意識のまま、この地球で"生きる"ことができてしまう。
                        </p>
                        <p className="sk-promo-highlight">
                            文字通り、もともとの — 無限の可能性の、制限のない自分。
                            <br />
                            やりたいことは何でもできる、あなたへの復活の時空間を
                            <br />
                            あなたのために使ってください。
                        </p>
                    </div>
                    <div className="sk-promo-cta-area">
                        <p className="sk-promo-price">Zoom体験クラス <span>5,500</span>円</p>
                        <a
                            href="https://reservestock.jp/inquiry/MTQ0NDE5MzdiZm"
                            target="_blank"
                            rel="noopener"
                            className="sk-promo-btn"
                        >
                            詳細はこちら →
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="sk-footer">
                <p>© 2026 無限の叡智を生きるスターターキット</p>
            </footer>
        </main>
    );
}
