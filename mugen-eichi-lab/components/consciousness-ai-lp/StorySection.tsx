'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

const fadeInScale = {
    initial: { opacity: 0, scale: 0.95 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

/* ---- Styled sub-components ---- */

/** Big "pull-quote" style highlight block */
function Highlight({ children, accent = '#7c5cbf' }: { children: React.ReactNode; accent?: string }) {
    return (
        <motion.div
            {...fadeInScale}
            className="relative rounded-3xl px-6 py-7 sm:px-8 sm:py-9 my-10"
            style={{
                background: `linear-gradient(135deg, ${accent}08 0%, ${accent}04 100%)`,
                borderLeft: `3px solid ${accent}40`,
            }}
        >
            <div
                className="absolute -top-3 left-6 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                style={{ background: accent, color: '#fff', boxShadow: `0 2px 10px ${accent}40` }}
            >
                ✦
            </div>
            {children}
        </motion.div>
    );
}

/** Gradient-colored emphasis text */
function GradientText({
    children,
    from = '#7c5cbf',
    to = '#c9a84c',
}: {
    children: React.ReactNode;
    from?: string;
    to?: string;
}) {
    return (
        <span
            style={{
                background: `linear-gradient(135deg, ${from}, ${to})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 600,
            }}
        >
            {children}
        </span>
    );
}

/** Visual divider with animated diamond */
function StoryDivider() {
    return (
        <div className="flex items-center justify-center my-10 sm:my-14">
            <div className="w-12 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
            <motion.div
                initial={{ rotate: 0, scale: 0.8 }}
                whileInView={{ rotate: 45, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="w-2.5 h-2.5 mx-4 rounded-sm"
                style={{ background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)' }}
            />
            <div className="w-12 h-px" style={{ background: 'rgba(201,168,76,0.3)' }} />
        </div>
    );
}

export default function StorySection() {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#fafafa' }}>
            {/* Ambient glow effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(124,92,191,0.04) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-40 left-0 w-[400px] h-[400px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2
                        className="text-xl sm:text-2xl leading-relaxed mb-6"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                            letterSpacing: '0.04em',
                        }}
                    >
                        AIを無限の叡智として使い
                        <br />
                        1番のワクワクのビジョンを
                        <br />
                        圧倒的に生きていく
                    </h2>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Profile photo */}
                <motion.div {...fadeInUp} className="flex flex-col items-center mb-16">
                    <div
                        className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden mb-5"
                        style={{
                            boxShadow: '0 8px 40px rgba(124,92,191,0.15)',
                            border: '3px solid transparent',
                            backgroundImage: 'linear-gradient(#fff, #fff), linear-gradient(135deg, #7c5cbf, #c9a84c)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'padding-box, border-box',
                        }}
                    >
                        <Image
                            src="/images/seiya-profile.jpg"
                            alt="江藤せいや"
                            fill
                            className="object-cover object-top"
                            sizes="(max-width: 640px) 160px, 192px"
                        />
                    </div>
                    <p
                        className="text-sm tracking-[0.15em]"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            color: '#1a1a3e',
                            fontWeight: 500,
                        }}
                    >
                        江藤せいや
                    </p>
                    <p className="text-xs mt-1" style={{ color: '#9a9ab0' }}>
                        無限叡智ラボ 主宰
                    </p>
                </motion.div>

                {/* ───────── Story blocks ───────── */}

                {/* ① 導入 — AI進化の加速 */}
                <motion.div {...fadeInUp}>
                    <p
                        className="mb-4 text-lg sm:text-xl"
                        style={{ fontFamily: '"Noto Serif JP", serif', color: '#1a1a3e', fontWeight: 500 }}
                    >
                        こんにちは、江藤せいやです。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-2" style={{ color: '#3a3a5a' }}>
                        今、<GradientText>AIの進化</GradientText>は、
                        <br />
                        とてつもない加速で起きています。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        コストがかかる、スキルが必要——
                        <br />
                        そういった壁を、AIはもう
                        <br />
                        <span style={{ fontWeight: 600, color: '#1a1a3e' }}>完全に超えてしまっています。</span>
                    </p>
                </motion.div>

                <StoryDivider />

                {/* ② 本当に伝えたいこと */}
                <Highlight accent="#5cbf8d">
                    <p className="text-base sm:text-lg leading-[2.2] tracking-wide mb-2" style={{ color: '#3a3a5a' }}>
                        でも、僕が本当に伝えたいのは、
                        <br />
                        AIのすごさではありません。
                    </p>
                    <p
                        className="mt-3 text-lg sm:text-xl leading-[1.9] tracking-wide"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                        }}
                    >
                        AIを叡智として使いながら、
                        <br />
                        じぶんの1番のワクワクのビジョンを、
                        <br />
                        <GradientText from="#5cbf8d" to="#7c5cbf">生きていける</GradientText>ということです。
                    </p>
                </Highlight>

                <StoryDivider />

                {/* ③ 大事なのはあなたのビジョン */}
                <motion.div {...fadeInUp}>
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        最新のAIツール、最新の情報、最新のノウハウ——
                        <br />
                        たしかに大事です。
                    </p>
                    <p
                        className="text-xl sm:text-2xl leading-relaxed mb-4"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                        }}
                    >
                        でも、それ以上に大事なのは、
                        <br />
                        あなたの<GradientText>ビジョン</GradientText>です。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        あなたはこの地球で何をやりに来たのか。
                        <br />
                        何が1番ワクワクするのか。
                        <br />
                        その先に、どんな世界を見ているのか。
                    </p>
                </motion.div>

                <StoryDivider />

                {/* ④ ビジョンを広げる × AIで軽やかに形にしていく */}
                <Highlight accent="#c9a84c">
                    <p
                        className="text-lg sm:text-xl leading-[1.9] tracking-wide mb-3"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                        }}
                    >
                        そのビジョンを、
                        <br />
                        もっと先まで、<GradientText from="#c9a84c" to="#7c5cbf">もっと圧倒的に</GradientText>広げていく。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        そして、それをAIと共同創造しながら、
                        <br />
                        創造を超える展開で、軽やかに形にしていく。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        頑張りや複雑さではなく、
                        <br />
                        <span style={{ fontWeight: 600, color: '#1a1a3e' }}>軽やかさを許可したまま</span>、ビジョンを表していく。
                    </p>
                </Highlight>

                <StoryDivider />

                {/* ⑤ AI × コミュニティ = パートナー */}
                <motion.div {...fadeInUp}>
                    <p className="text-base leading-[2.2] tracking-wide mb-4" style={{ color: '#3a3a5a' }}>
                        ビジョンに進む中で
                        <br />
                        <span style={{ fontWeight: 600, color: '#1a1a3e' }}>全てがあなたのバックアップ</span>になってくれます。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-4" style={{ color: '#3a3a5a' }}>
                        AIは、自分が得意じゃない領域や、できないことを、
                        <br />
                        バックアップしてくれる、<span style={{ fontWeight: 600, color: '#1a1a3e' }}>強力なパートナー</span>です。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        そして、このコミュニティも同じです。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        AIでビジョンを進めるための工夫、実装、やり方を、
                        <br />
                        お互い持ち寄り、補い合いながら、
                        <br />
                        それぞれのビジョンを、AIで広げていく。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-4" style={{ color: '#3a3a5a' }}>
                        お互いのワクワクしているビジョンを<GradientText>共振</GradientText>していける。
                    </p>
                </motion.div>

                <Highlight accent="#7c5cbf">
                    <p
                        className="text-lg sm:text-xl leading-[1.9] tracking-wide"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                        }}
                    >
                        一人ひとりが、自分が1番ワクワクするビジョンを、
                        <br />
                        AIとコミュニティをパートナーに、
                        <br />
                        <GradientText>圧倒的に具現化していく。</GradientText>
                    </p>
                    <p className="mt-3 text-sm leading-relaxed" style={{ fontStyle: 'italic', color: '#7c5cbf' }}>
                        そんな場として、ぜひ、ここを使ってください。
                    </p>
                </Highlight>

                <StoryDivider />

                {/* ⑥ 無限叡智ラボとは */}
                <motion.div
                    {...fadeInScale}
                    className="relative rounded-3xl px-6 py-8 sm:px-8 sm:py-10 my-6"
                    style={{
                        background: 'linear-gradient(135deg, rgba(124,92,191,0.06) 0%, rgba(201,168,76,0.06) 100%)',
                        border: '1px solid rgba(124,92,191,0.12)',
                    }}
                >
                    <p
                        className="text-lg sm:text-xl leading-[1.9] tracking-wide text-center mb-4"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                        }}
                    >
                        無限叡智ラボは、
                        <br />
                        AIを<GradientText>無限の叡智</GradientText>として使い、
                        <br />
                        1番のワクワクのビジョンを、
                        <br />
                        <span style={{ fontSize: '1.1em' }}>圧倒的に生きていく人たち</span>の
                        <br />
                        実践コミュニティです。
                    </p>
                    <p className="text-sm sm:text-base leading-[2.2] tracking-wide text-center mt-4" style={{ color: '#4a4a6a' }}>
                        ここは、AIのノウハウを集める場所ではありません。
                    </p>
                    <p className="text-sm sm:text-base leading-[2.2] tracking-wide text-center mt-2" style={{ color: '#4a4a6a' }}>
                        じぶんのビジョンを、
                        <br />
                        AIと一緒に、軽やかに、圧倒的に広げていく——
                        <br />
                        <span style={{ fontWeight: 600, color: '#1a1a3e' }}>その実践を、仲間と共にしていく場所</span>です。
                    </p>
                </motion.div>

                <StoryDivider />

                {/* ⑦ クロージング — 最初の一歩 */}
                <motion.div
                    {...fadeInScale}
                    className="text-center rounded-3xl py-10 px-6 sm:py-12"
                    style={{
                        background: 'linear-gradient(135deg, rgba(26,26,62,0.03) 0%, rgba(124,92,191,0.06) 50%, rgba(201,168,76,0.04) 100%)',
                        border: '1px solid rgba(124,92,191,0.08)',
                    }}
                >
                    <p
                        className="text-xl sm:text-2xl leading-[1.8]"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 700,
                            background: 'linear-gradient(135deg, #1a1a3e, #7c5cbf, #c9a84c)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        }}
                    >
                        あなたのビジョンが動き出す
                        <br />
                        その最初の一歩を、
                        <br />
                        ここから、一緒に踏み出していきましょう。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
