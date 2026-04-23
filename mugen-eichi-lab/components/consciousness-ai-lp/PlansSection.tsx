'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

interface PlanFeature {
    text: string;
    detail: string;
}

interface Plan {
    id: string;
    icon: string;
    nameEn: string;
    nameJa: string;
    price: string;
    tagline: string;
    featured: boolean;
    includesFrom?: string;
    features: PlanFeature[];
    bonus: string;
    targetAudience: string[];
    ctaText: string;
    accentColor: string;
}

const plans: Plan[] = [
    {
        id: 'standard',
        icon: '🌟',
        nameEn: 'Standard',
        nameJa: 'スタンダード',
        price: '¥3,480',
        tagline: 'AI×ビジョンの実践に、毎月触れていく',
        featured: false,
        features: [
            {
                text: 'AI実践セミナー（月2回、各90分、録画あり）',
                detail: '最新AIツールの実演とせいやの実践デモをリアルタイムで体験',
            },
            {
                text: 'ビジョンセッション（月1回、せいやによるバックアップ）',
                detail: '自分のビジョンを言語化し、深めていく時間',
            },
            {
                text: 'AI実践共有動画（週1回、月4本）',
                detail: '最新のAI活用実践やシステム開発の進捗を毎週シェア',
            },
            {
                text: '会員専用Discord参加',
                detail: '仲間との交流、実践事例の共有、せいやからのリアルタイム発信',
            },
        ],
        bonus: '初月無料',
        targetAudience: [
            'AI×ビジョンの実践を、日常のリズムに組み込みたい',
            '自分のビジョンを言語化・深めていきたい',
            '毎月のセミナーで最新AIに触れていきたい',
            'まずは場のエネルギーを感じながら、コミュニティに入りたい',
        ],
        ctaText: 'スタンダードプランで始める（初月無料）',
        accentColor: '#c9a84c',
    },
    {
        id: 'accelerate',
        icon: '🚀',
        nameEn: 'Accelerate',
        nameJa: 'アクセラレート',
        price: '¥6,800',
        tagline: '自分のビジネスで、AIを動かしていく',
        featured: true,
        includesFrom: 'スタンダードプラン全内容',
        features: [
            {
                text: 'AI自動化システム構築サポート（少人数Zoom）',
                detail: '自分のビジネスに合わせて、AIワークフロー・自律化チームを一緒に構築',
            },
            {
                text: 'せいやへの直接チャット質問OK（専用Discord）',
                detail: '実装の悩みをテキストベースで、リアルタイムに解消',
            },
            {
                text: '最新AIツールの会員割引（30〜50% OFF）',
                detail: 'オリジナル開発ツールを会員価格で利用可能',
            },
        ],
        bonus: '初月無料',
        targetAudience: [
            'AIで自分のビジネスを加速したい',
            '自分専用のAIチーム・ワークフローを構築したい',
            'せいやに直接質問しながら、実装を進めたい',
            '最新AIツールをいち早く、自分の現場に落としたい',
        ],
        ctaText: 'アクセラレートプランで始める（初月無料）',
        accentColor: '#7c5cbf',
    },
    {
        id: 'private',
        icon: '💎',
        nameEn: 'Private',
        nameJa: 'プライベート',
        price: '¥19,800',
        tagline: 'せいやと1対1で、ビジョンとビジネスを最深で進める',
        featured: false,
        includesFrom: 'アクセラレートプラン全内容',
        features: [
            {
                text: '個別コンサル（月1回、60分、Zoom）',
                detail: 'AI活用／ビジネス戦略／ビジョンの深化など、何でも相談OK',
            },
            {
                text: '最新システムの最優遇提供',
                detail: '開発AIツールを無料 or 50%以上OFFの最優遇価格で利用可能',
            },
            {
                text: '開発実演公開（月1回）',
                detail: 'VoiSlide Movie等の開発プロセスをリアルタイムで公開',
            },
            {
                text: 'リアルイベント優先案内・割引',
                detail: 'オフライン交流会・イベントへの優先参加・特別価格',
            },
        ],
        bonus: '初月無料',
        targetAudience: [
            'せいやと1対1で、ビジョンの次元そのものを変えたい',
            '個別コンサルで、ビジネス戦略・AI活用を深めたい',
            '最新AIシステムをいち早く、最優遇で使いたい',
            'せいやがAIで形にしていく開発現場そのものに触れたい',
        ],
        ctaText: 'プライベートプランで始める（初月無料）',
        accentColor: '#1a1a3e',
    },
];

export default function PlansSection() {
    return (
        <section id="plans" className="relative py-24 sm:py-32">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/4 left-0 w-72 h-72 rounded-full animate-breath-pulse"
                    style={{ background: 'radial-gradient(circle, rgba(124,92,191,0.04) 0%, transparent 70%)' }}
                />
                <div
                    className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full animate-subtle-glow"
                    style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)' }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <p className="text-sm tracking-[0.2em] mb-4" style={{ color: '#c9a84c' }}>
                        PLANS
                    </p>
                    <h2
                        className="text-2xl sm:text-3xl leading-relaxed mb-3"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                            letterSpacing: '0.04em',
                        }}
                    >
                        ビジョンを広げる深さで、
                        <br />
                        3つのプランから選べます
                    </h2>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* Universal block — こんな人のための場所 */}
                <motion.div
                    {...fadeInUp}
                    className="max-w-2xl mx-auto mb-16 rounded-3xl px-7 py-8 sm:px-10 sm:py-10"
                    style={{
                        background: 'linear-gradient(135deg, rgba(124,92,191,0.05) 0%, rgba(201,168,76,0.04) 100%)',
                        border: '1px solid rgba(124,92,191,0.12)',
                    }}
                >
                    <p
                        className="text-xs tracking-[0.2em] mb-5 text-center"
                        style={{ color: '#c9a84c', fontWeight: 500 }}
                    >
                        ✦ こんな人のための場所
                    </p>
                    <ul className="space-y-3">
                        {[
                            '1番のワクワクのビジョンを、AIとともに圧倒的に生きていきたい',
                            'AIを叡智としてフル活用し、ビジョンを形にしていきたい',
                            '共同創造の仲間と、お互いのビジョンを共振させていきたい',
                            '軽やかさを許可したまま、想像を超える展開を生きていきたい',
                            'AIの最前線と、ビジョンを生きる実践を、同じ場で体感したい',
                        ].map((item, i) => (
                            <li
                                key={i}
                                className="text-sm sm:text-base flex gap-3 items-start leading-[1.9]"
                                style={{ color: '#3a3a5a' }}
                            >
                                <span style={{ color: '#7c5cbf', fontWeight: 600 }}>▸</span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </motion.div>

                {/* Plan cards grid */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                    {plans.map((plan, idx) => (
                        <motion.div
                            key={plan.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: idx * 0.15 }}
                            className="relative rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl"
                            style={{
                                background: plan.featured
                                    ? 'linear-gradient(180deg, rgba(124,92,191,0.03) 0%, rgba(255,255,255,1) 30%)'
                                    : '#fff',
                                border: plan.featured
                                    ? '2px solid rgba(124,92,191,0.2)'
                                    : '1px solid rgba(0,0,0,0.06)',
                                boxShadow: plan.featured
                                    ? '0 8px 40px rgba(124,92,191,0.1)'
                                    : '0 2px 20px rgba(0,0,0,0.04)',
                            }}
                        >
                            {/* Featured badge */}
                            {plan.featured && (
                                <div
                                    className="absolute top-0 left-0 right-0 py-2 text-center text-xs font-medium tracking-widest text-white"
                                    style={{ background: 'linear-gradient(90deg, #7c5cbf, #c9a84c)' }}
                                >
                                    RECOMMENDED
                                </div>
                            )}

                            <div className={`p-7 sm:p-8 ${plan.featured ? 'pt-12' : ''}`}>
                                {/* Plan header */}
                                <div className="text-center mb-6">
                                    <span className="text-3xl">{plan.icon}</span>
                                    <h3
                                        className="text-xl mt-3 mb-1"
                                        style={{
                                            fontFamily: '"Noto Serif JP", serif',
                                            fontWeight: 600,
                                            color: '#1a1a3e',
                                        }}
                                    >
                                        {plan.nameJa}
                                        <span className="text-sm font-normal ml-1" style={{ color: '#9a9ab0' }}>
                                            ({plan.nameEn})
                                        </span>
                                    </h3>
                                    <p className="text-sm mb-4" style={{ color: '#6a6a8a' }}>
                                        {plan.tagline}
                                    </p>
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span
                                            className="text-3xl sm:text-4xl font-bold"
                                            style={{ color: plan.accentColor }}
                                        >
                                            {plan.price}
                                        </span>
                                        <span className="text-sm" style={{ color: '#9a9ab0' }}>
                                            /月（初月無料）
                                        </span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div
                                    className="w-full h-px mb-6"
                                    style={{ background: 'linear-gradient(90deg, transparent, rgba(0,0,0,0.06), transparent)' }}
                                />

                                {/* Includes from */}
                                {plan.includesFrom && (
                                    <div
                                        className="mb-4 px-3 py-2 rounded-lg text-xs text-center"
                                        style={{
                                            background: 'rgba(124,92,191,0.04)',
                                            color: '#7c5cbf',
                                            border: '1px solid rgba(124,92,191,0.1)',
                                        }}
                                    >
                                        ✅ {plan.includesFrom} +
                                    </div>
                                )}

                                {/* Feature list */}
                                <div className="space-y-4 mb-6">
                                    {plan.features.map((feature, i) => (
                                        <div key={i} className="flex gap-3">
                                            <div
                                                className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-xs"
                                                style={{ background: `${plan.accentColor}15`, color: plan.accentColor }}
                                            >
                                                ✓
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium" style={{ color: '#1a1a3e' }}>
                                                    {feature.text}
                                                </p>
                                                <p className="text-xs mt-0.5" style={{ color: '#9a9ab0' }}>
                                                    {feature.detail}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Bonus */}
                                <div
                                    className="mb-6 px-4 py-3 rounded-xl text-center"
                                    style={{ background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.15)' }}
                                >
                                    <span className="text-xs font-medium" style={{ color: '#c9a84c' }}>
                                        🎁 初回特典: {plan.bonus}
                                    </span>
                                </div>

                                {/* Target audience */}
                                <div className="mb-6">
                                    <p className="text-xs font-medium mb-2" style={{ color: '#9a9ab0' }}>
                                        こんな人におすすめ:
                                    </p>
                                    <ul className="space-y-1.5">
                                        {plan.targetAudience.map((item, i) => (
                                            <li
                                                key={i}
                                                className="text-xs flex gap-2 items-start"
                                                style={{ color: '#5a5a7a' }}
                                            >
                                                <span style={{ color: plan.accentColor }}>・</span>
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* CTA */}
                                <a
                                    href="https://pocowa.com/p/r/9ZIdX6RR"
                                    className="block w-full py-3.5 rounded-full text-center text-sm font-medium
                                               transition-all duration-500 hover:scale-[1.02] hover:shadow-lg"
                                    style={{
                                        background: plan.featured
                                            ? `linear-gradient(135deg, ${plan.accentColor}, ${plan.accentColor}cc)`
                                            : 'transparent',
                                        color: plan.featured ? '#fff' : plan.accentColor,
                                        border: plan.featured ? 'none' : `1.5px solid ${plan.accentColor}40`,
                                        boxShadow: plan.featured
                                            ? `0 4px 20px ${plan.accentColor}30`
                                            : 'none',
                                    }}
                                >
                                    👉 {plan.ctaText}
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
