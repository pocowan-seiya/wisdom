'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

interface ExampleItem {
    title: string;
    detail: string;
}

interface Category {
    label: string;
    icon: string;
    accentColor: string;
    items: ExampleItem[];
}

const descriptionLines = [
    '僕たちはこれまで、精神次元と物理次元を分けてきました。',
    'でも、もうそんな時代は終わります。なぜなら、もともと1つだからです。',
    'それが、本当の自分の無限の可能性の意識で、物理次元の地球を生きるということです。',
    '精神次元の最先端 = 意識のシフト。物理次元の最先端 = AI。',
    '意識とAIが組み合わさること——それが、このコミュニティの1番の特徴であり、ビジョンそのものです。',
    '制限や法則を通らない。平和で、パワフルで、無限の可能性に満ちている。',
    '本当の自分の、とてつもなく豊かな制限のない意識で、無限の叡智で、この地球を生きる。',
    '1番のワクワクを実現する自分になっていく。',
    'AIというバックアップを使って、そんな僕たちの意識が反映されたサービス、システム、仕組み、形——それらから放たれる電波もまた、その意識の電波になっていく。',
    '意識がシフトすると、ひらめきが変わる。ひらめきが変われば、創るものが変わる。',
    'これが当たり前に起きていく——これが、僕たちの意識の持つ本来の力です。',
    'それが、理想論ではなくリアリティを持って、起きていくコミュニティです。',
];

const categories: Category[] = [
    {
        label: 'AI',
        icon: '⚡',
        accentColor: '#c9a84c',
        items: [
            {
                title: '最新AIツールを使った実用的なAI活用',
                detail: 'Claude、ChatGPT、Gemini、生成AI、自動ワークフローツール、自律型AIエージェント → 江藤が実際に使っているツールの実演・解説',
            },
            {
                title: 'ビジョンを具体的な形にしていく実践',
                detail: '「こんなビジョンがある」→ AIで形にする流れを実演',
            },
            {
                title: '自律的なAIシステムの構築',
                detail: 'SNS投稿、メール返信、リサーチを自動化 → AIが勝手に動いてくれる仕組みを作る',
            },
            {
                title: '普段のワークフローをAIで自動化',
                detail: 'ルーティンワークをAIに任せ、自分の時間をビジョンに集中できる',
            },
            {
                title: '最新AIトレンドのキャッチアップ',
                detail: '「これは使える！」をリアルタイムで共有・実践',
            },
        ],
    },
    {
        label: '意識のシフト',
        icon: '🌿',
        accentColor: '#7c5cbf',
        items: [
            {
                title: '現実に揺れるあり方',
                detail: '現実が良いと優越感・特別感を感じ、良くないとがっかり → この振り幅を手放し、現実に揺れない自分軸を取り戻す',
            },
            {
                title: '自分の中でよく繰り返すパターン',
                detail: '「自分はよくこんな展開になることが多い」→ パターンを生み出している周波数を手放す',
            },
            {
                title: 'ビジョンを見ることを無意識に止めている制限',
                detail: '「こんなこと、自分には無理」「自分はこんなもの」→ 無制限のビジョンを見ることを許可していく',
            },
            {
                title: 'ビジョンに動こうとしたときに出てくる重さ',
                detail: '体に出てくる違和感、恐怖、不安 → 動くことを止めている制限を手放す',
            },
            {
                title: '「自分はこんな人間だ」という信念',
                detail: '「自分はこれだけはできない」「自分はこういう性格だ」→ 自分に貼り付けたラベルを手放す',
            },
        ],
    },
    {
        label: '物理次元 × 精神次元',
        icon: '♾️',
        accentColor: '#1a1a3e',
        items: [
            {
                title: '手放しのワーク × AI実践を同時に行う',
                detail: '意識をシフトさせながら、AIで具現化 → 圧倒的な速度で復活していく',
            },
            {
                title: '精神的なシフトと物理的なシフトを同時に',
                detail: '内側が変わる × 外側が変わる → もともと1つだったものを統合して生きる',
            },
        ],
    },
];

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
                <motion.div {...fadeInUp} className="text-center mb-12">
                    <p
                        className="text-xs tracking-[0.2em] mb-4"
                        style={{ color: '#c9a84c', fontWeight: 500 }}
                    >
                        UNIQUENESS
                    </p>
                    <h2
                        className="text-xl sm:text-2xl leading-relaxed mb-6"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                            letterSpacing: '0.04em',
                        }}
                    >
                        精神次元 × 物理次元を統合する
                        <br />
                        唯一無二のコミュニティ
                    </h2>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Description */}
                <motion.div {...fadeInUp} className="mb-16">
                    <div className="space-y-3">
                        {descriptionLines.map((line, i) => (
                            <p
                                key={i}
                                className="text-sm sm:text-base leading-[2] tracking-wide"
                                style={{ color: '#4a4a6a' }}
                            >
                                {line}
                            </p>
                        ))}
                    </div>
                </motion.div>

                {/* Category lists */}
                <div className="space-y-12">
                    {categories.map((cat, catIdx) => (
                        <motion.div
                            key={catIdx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.8, delay: catIdx * 0.1 }}
                        >
                            {/* Category header */}
                            <div className="flex items-center gap-3 mb-6">
                                <span className="text-xl">{cat.icon}</span>
                                <h3
                                    className="text-lg sm:text-xl font-semibold"
                                    style={{
                                        fontFamily: '"Noto Serif JP", serif',
                                        color: cat.accentColor,
                                        letterSpacing: '0.03em',
                                    }}
                                >
                                    {cat.label}
                                </h3>
                                <div
                                    className="flex-1 h-px"
                                    style={{ background: `${cat.accentColor}22` }}
                                />
                            </div>

                            {/* Items */}
                            <div className="space-y-4">
                                {cat.items.map((item, i) => (
                                    <div
                                        key={i}
                                        className="rounded-2xl px-5 py-4 transition-all duration-300 hover:shadow-md"
                                        style={{
                                            background: '#fff',
                                            border: '1px solid rgba(0,0,0,0.04)',
                                        }}
                                    >
                                        <div className="flex items-start gap-3">
                                            <span
                                                className="mt-0.5 text-sm"
                                                style={{ color: cat.accentColor }}
                                            >
                                                ✓
                                            </span>
                                            <div>
                                                <p
                                                    className="text-sm font-medium mb-1"
                                                    style={{ color: '#1a1a3e' }}
                                                >
                                                    {item.title}
                                                </p>
                                                <p
                                                    className="text-xs leading-relaxed"
                                                    style={{ color: '#8a8aaa' }}
                                                >
                                                    {item.detail}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
