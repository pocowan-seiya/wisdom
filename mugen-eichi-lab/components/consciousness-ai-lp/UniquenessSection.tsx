'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

/** ① Relationship triangle diagram */
function RelationshipDiagram() {
    return (
        <motion.div {...fadeInUp} className="max-w-2xl mx-auto mb-20">
            <p
                className="text-xs tracking-[0.2em] text-center mb-3"
                style={{ color: '#c9a84c', fontWeight: 500 }}
            >
                ✦ このコミュニティの関係図
            </p>
            <p className="text-center text-sm mb-10" style={{ color: '#6a6a8a' }}>
                主役は、あなたのビジョン。
            </p>

            <div
                className="relative mx-auto"
                style={{ width: '100%', maxWidth: '420px', aspectRatio: '1.25 / 1' }}
            >
                {/* SVG lines */}
                <svg
                    className="absolute inset-0 w-full h-full pointer-events-none"
                    viewBox="0 0 400 320"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <linearGradient id="lineGradLeft" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.55" />
                            <stop offset="100%" stopColor="#7c5cbf" stopOpacity="0.45" />
                        </linearGradient>
                        <linearGradient id="lineGradRight" x1="100%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#c9a84c" stopOpacity="0.55" />
                            <stop offset="100%" stopColor="#7c5cbf" stopOpacity="0.45" />
                        </linearGradient>
                    </defs>

                    {/* You → AI */}
                    <line
                        x1="200" y1="95"
                        x2="80" y2="240"
                        stroke="url(#lineGradLeft)"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                    />
                    {/* You → 仲間 */}
                    <line
                        x1="200" y1="95"
                        x2="320" y2="240"
                        stroke="url(#lineGradRight)"
                        strokeWidth="2"
                        strokeDasharray="5 5"
                    />
                    {/* AI ↔ 仲間 */}
                    <line
                        x1="105" y1="260"
                        x2="295" y2="260"
                        stroke="rgba(124,92,191,0.2)"
                        strokeWidth="1.5"
                        strokeDasharray="3 5"
                    />

                    {/* mid-line labels */}
                    <text x="130" y="180" fill="#7c5cbf" fontSize="11" letterSpacing="2" textAnchor="middle" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 600 }}>
                        共同創造
                    </text>
                    <text x="270" y="180" fill="#7c5cbf" fontSize="11" letterSpacing="2" textAnchor="middle" style={{ fontFamily: '"Noto Serif JP", serif', fontWeight: 600 }}>
                        共振
                    </text>
                    <text x="200" y="278" fill="#9a9ab0" fontSize="10" letterSpacing="2" textAnchor="middle">
                        ノウハウを持ち寄る
                    </text>
                </svg>

                {/* Top node: You / Vision */}
                <div
                    className="absolute left-1/2 -translate-x-1/2"
                    style={{ top: '0%' }}
                >
                    <div
                        className="rounded-full flex flex-col items-center justify-center text-center px-2"
                        style={{
                            width: 'clamp(120px, 34%, 150px)',
                            aspectRatio: '1 / 1',
                            backgroundImage:
                                'linear-gradient(#fff, #fff), linear-gradient(135deg, #c9a84c, #7c5cbf)',
                            backgroundOrigin: 'border-box',
                            backgroundClip: 'padding-box, border-box',
                            border: '3px solid transparent',
                            boxShadow: '0 10px 30px rgba(124,92,191,0.18)',
                        }}
                    >
                        <p
                            className="text-[10px] tracking-[0.15em] mb-1"
                            style={{ color: '#c9a84c', fontWeight: 600 }}
                        >
                            主役
                        </p>
                        <p
                            className="text-sm sm:text-base leading-tight"
                            style={{
                                fontFamily: '"Noto Serif JP", serif',
                                fontWeight: 700,
                                color: '#1a1a3e',
                            }}
                        >
                            あなた
                        </p>
                        <p
                            className="text-[10px] sm:text-[11px] leading-tight mt-1"
                            style={{ color: '#7c5cbf' }}
                        >
                            1番のワクワクの
                            <br />
                            ビジョン
                        </p>
                    </div>
                </div>

                {/* Bottom left: AI */}
                <div
                    className="absolute"
                    style={{ bottom: '0%', left: '0%' }}
                >
                    <div
                        className="rounded-full flex flex-col items-center justify-center text-center"
                        style={{
                            width: 'clamp(90px, 26%, 115px)',
                            aspectRatio: '1 / 1',
                            background: 'rgba(201,168,76,0.08)',
                            border: '2px solid rgba(201,168,76,0.35)',
                            boxShadow: '0 6px 20px rgba(201,168,76,0.12)',
                        }}
                    >
                        <span className="text-xl sm:text-2xl">⚡</span>
                        <p
                            className="text-xs sm:text-sm font-bold mt-0.5"
                            style={{ color: '#c9a84c' }}
                        >
                            AI
                        </p>
                        <p className="text-[9px] sm:text-[10px] leading-tight" style={{ color: '#8a7a4c' }}>
                            無限の叡智
                        </p>
                    </div>
                </div>

                {/* Bottom right: 仲間 */}
                <div
                    className="absolute"
                    style={{ bottom: '0%', right: '0%' }}
                >
                    <div
                        className="rounded-full flex flex-col items-center justify-center text-center"
                        style={{
                            width: 'clamp(90px, 26%, 115px)',
                            aspectRatio: '1 / 1',
                            background: 'rgba(124,92,191,0.08)',
                            border: '2px solid rgba(124,92,191,0.35)',
                            boxShadow: '0 6px 20px rgba(124,92,191,0.12)',
                        }}
                    >
                        <span className="text-xl sm:text-2xl">✦</span>
                        <p
                            className="text-xs sm:text-sm font-bold mt-0.5"
                            style={{ color: '#7c5cbf' }}
                        >
                            仲間
                        </p>
                        <p className="text-[9px] sm:text-[10px] leading-tight" style={{ color: '#6a5a8a' }}>
                            共振コミュニティ
                        </p>
                    </div>
                </div>
            </div>

            <p className="text-center text-sm sm:text-base leading-[2] mt-10 max-w-lg mx-auto" style={{ color: '#4a4a6a' }}>
                <span style={{ fontWeight: 600, color: '#1a1a3e' }}>
                    あなたのビジョンを中心に、AIと仲間が共に広げていく。
                </span>
                <br />
                それが、この場の基本構造です。
            </p>
        </motion.div>
    );
}

/** ③ Comparison: 普通のAIコミュニティ vs 無限叡智ラボ */
function ComparisonTable() {
    const rows = [
        {
            label: '主役',
            normal: 'AIの使い方',
            ours: 'あなたの1番のワクワクのビジョン',
        },
        {
            label: '目的',
            normal: 'スキル・ノウハウの習得',
            ours: 'ビジョンを、AIとともに圧倒的に生きていく',
        },
        {
            label: '仲間',
            normal: 'ノウハウを交換する相手',
            ours: 'ビジョンを共振させ合う相手',
        },
        {
            label: 'AI の位置づけ',
            normal: 'ツール／スキルの対象',
            ours: '共同創造のパートナー、無限の叡智',
        },
    ];

    return (
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto mt-20">
            <p
                className="text-xs tracking-[0.2em] text-center mb-3"
                style={{ color: '#c9a84c', fontWeight: 500 }}
            >
                ✦ 他のAIコミュニティとの違い
            </p>
            <p className="text-center text-sm mb-10" style={{ color: '#6a6a8a' }}>
                何が違うのか、一目で。
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {/* Left: Normal AI community */}
                <div
                    className="rounded-2xl p-6 sm:p-7"
                    style={{
                        background: '#fff',
                        border: '1px solid rgba(0,0,0,0.06)',
                    }}
                >
                    <p
                        className="text-xs tracking-[0.2em] mb-6 text-center pb-4"
                        style={{
                            color: '#9a9ab0',
                            borderBottom: '1px dashed rgba(0,0,0,0.08)',
                            fontWeight: 500,
                        }}
                    >
                        普通のAIコミュニティ
                    </p>
                    <div className="space-y-5">
                        {rows.map((r, i) => (
                            <div key={i}>
                                <p
                                    className="text-[10px] tracking-[0.15em] mb-1"
                                    style={{ color: '#b0b0c0', fontWeight: 500 }}
                                >
                                    {r.label}
                                </p>
                                <p className="text-sm leading-relaxed" style={{ color: '#6a6a8a' }}>
                                    {r.normal}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Our community */}
                <div
                    className="rounded-2xl p-6 sm:p-7 relative"
                    style={{
                        background:
                            'linear-gradient(135deg, rgba(124,92,191,0.06), rgba(201,168,76,0.05))',
                        border: '1.5px solid rgba(124,92,191,0.25)',
                        boxShadow: '0 8px 30px rgba(124,92,191,0.1)',
                    }}
                >
                    <p
                        className="text-xs tracking-[0.2em] mb-6 text-center pb-4"
                        style={{
                            background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            borderBottom: '1px dashed rgba(124,92,191,0.2)',
                            fontWeight: 700,
                        }}
                    >
                        無限叡智ラボ
                    </p>
                    <div className="space-y-5">
                        {rows.map((r, i) => (
                            <div key={i}>
                                <p
                                    className="text-[10px] tracking-[0.15em] mb-1"
                                    style={{ color: '#c9a84c', fontWeight: 600 }}
                                >
                                    {r.label}
                                </p>
                                <p
                                    className="text-sm leading-relaxed"
                                    style={{ color: '#1a1a3e', fontWeight: 500 }}
                                >
                                    {r.ours}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function UniquenessSection() {
    return (
        <section className="relative py-24 sm:py-32" style={{ background: '#fafafa' }}>
            {/* Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(124,92,191,0.04) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-14">
                    <p
                        className="text-xs tracking-[0.2em] mb-4"
                        style={{ color: '#c9a84c', fontWeight: 500 }}
                    >
                        UNIQUENESS
                    </p>
                    <h2
                        className="text-2xl sm:text-3xl leading-relaxed mb-4"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                            letterSpacing: '0.04em',
                        }}
                    >
                        コミュニティの独自性
                    </h2>
                    <div
                        className="inline-block rounded-2xl px-8 py-5 mt-2"
                        style={{
                            background: 'linear-gradient(135deg, rgba(124,92,191,0.08), rgba(201,168,76,0.06))',
                            border: '1px solid rgba(124,92,191,0.15)',
                            boxShadow: '0 4px 20px rgba(124,92,191,0.08)',
                        }}
                    >
                        <p
                            className="text-xl sm:text-2xl md:text-3xl leading-[1.6] tracking-wide"
                            style={{
                                fontFamily: '"Noto Serif JP", serif',
                                fontWeight: 700,
                                background: 'linear-gradient(135deg, #7c5cbf, #c9a84c)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            AIをパートナーに、
                            <br />
                            ビジョンを圧倒的に生きていく実践の場
                        </p>
                    </div>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* ① Relationship triangle diagram */}
                <RelationshipDiagram />

                {/* ③ Comparison table */}
                <ComparisonTable />
            </div>
        </section>
    );
}
