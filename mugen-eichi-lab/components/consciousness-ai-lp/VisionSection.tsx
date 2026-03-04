'use client';

import React from 'react';
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

export default function VisionSection() {
    return (
        <section className="relative py-24 sm:py-32 overflow-hidden" style={{ background: '#fff' }}>
            {/* Ambient effects */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px]"
                    style={{
                        background: 'radial-gradient(ellipse, rgba(124,92,191,0.04) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
                    style={{
                        background: 'radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-2xl mx-auto px-6">
                {/* Section heading */}
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <p
                        className="text-xs tracking-[0.2em] mb-4"
                        style={{ color: '#c9a84c', fontWeight: 500 }}
                    >
                        VISION
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
                        このコミュニティが
                        <br />
                        起こしていくこと
                    </h2>
                    <div className="section-divider mt-8" />
                </motion.div>

                {/* ─── Vision narrative ─── */}

                {/* ① 本当の電波とは */}
                <motion.div {...fadeInUp}>
                    <p className="text-base leading-[2.2] tracking-wide mb-2" style={{ color: '#3a3a5a' }}>
                        外に向けて発信すること。
                        <br />
                        理解してもらうこと。
                        <br />
                        説明すること。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        それが「電波」だと、
                        <br />
                        僕たちは思ってきました。
                    </p>
                </motion.div>

                {/* Divider */}
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

                {/* ② 本当の電波 — 自分のビジョンへの没入 */}
                <motion.div {...fadeInUp}>
                    <p className="text-base leading-[2.2] tracking-wide mb-2" style={{ color: '#3a3a5a' }}>
                        でも、本当の電波は違う。
                    </p>
                </motion.div>

                <motion.div
                    {...fadeInScale}
                    className="relative rounded-3xl px-6 py-7 sm:px-8 sm:py-9 my-10"
                    style={{
                        background: 'linear-gradient(135deg, rgba(124,92,191,0.06) 0%, rgba(201,168,76,0.04) 100%)',
                        borderLeft: '3px solid rgba(124,92,191,0.3)',
                    }}
                >
                    <div
                        className="absolute -top-3 left-6 w-6 h-6 rounded-full flex items-center justify-center text-xs"
                        style={{ background: '#7c5cbf', color: '#fff', boxShadow: '0 2px 10px rgba(124,92,191,0.4)' }}
                    >
                        ✦
                    </div>
                    <p
                        className="text-lg sm:text-xl leading-[1.9] tracking-wide"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                        }}
                    >
                        自分のビジョンを、
                        <br />
                        もっと<GradientText>ありありと</GradientText>見ていきたい。
                        <br />
                        もっと解像度高く。
                        <br />
                        もっとその先を。
                    </p>
                    <p className="mt-4 text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        その、自分のビジョンへの
                        <br />
                        圧倒的な没入——
                        <br />
                        <span style={{ fontWeight: 600, color: '#1a1a3e' }}>
                            それこそが、本当の電波なんです。
                        </span>
                    </p>
                </motion.div>

                {/* Divider */}
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

                {/* ③ ビジョンが振動を起こす */}
                <motion.div {...fadeInUp}>
                    <p className="text-base leading-[2.2] tracking-wide mb-2" style={{ color: '#3a3a5a' }}>
                        自分のビジョンに向かっていく。
                        <br />
                        自分の意識が、ビジョンに<GradientText from="#c9a84c" to="#7c5cbf">振動</GradientText>していく。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        その波が、自然と広がっていく。
                        <br />
                        それが、僕たちの本来の力です。
                    </p>
                </motion.div>

                {/* Divider */}
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

                {/* ④ VoiSlide Movie — 意識の反映の実例 */}
                <motion.div
                    {...fadeInScale}
                    className="relative rounded-3xl px-6 py-8 sm:px-8 sm:py-10 my-6"
                    style={{
                        background: 'linear-gradient(135deg, rgba(201,168,76,0.05) 0%, rgba(124,92,191,0.05) 100%)',
                        border: '1px solid rgba(201,168,76,0.15)',
                    }}
                >
                    <p
                        className="text-xs tracking-[0.15em] mb-4"
                        style={{ color: '#c9a84c', fontWeight: 500 }}
                    >
                        ✦ STORY — VoiSlide Movie
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        僕自身、自分の意識の中から見えてきたビジョン——
                        <br />
                        「自分の声とビジョンを、
                        <br />
                        もっとありありと形にしたい」
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide mb-3" style={{ color: '#3a3a5a' }}>
                        そのビジョンが、
                        <br />
                        <span style={{ fontWeight: 600, color: '#1a1a3e' }}>VoiSlide Movie</span>
                        というサービスのコンセプトになりました。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        スキルや技術からではなく、
                        <br />
                        <GradientText from="#c9a84c" to="#7c5cbf">意識の反映</GradientText>として、
                        AIのバックアップで創れた。
                        <br />
                        これが、意識 × AI の力です。
                    </p>
                </motion.div>

                {/* Divider */}
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

                {/* ⑤ 意識がシフトすると、すべてが変わる */}
                <motion.div {...fadeInUp}>
                    <p className="text-base leading-[2.2] tracking-wide mb-2" style={{ color: '#3a3a5a' }}>
                        意識がシフトすると、
                        <br />
                        自分から来るひらめきが変わる。
                        <br />
                        ひらめきが変われば、
                        <br />
                        創るものが変わる。
                    </p>
                    <p className="text-base leading-[2.2] tracking-wide" style={{ color: '#3a3a5a' }}>
                        サービスも、システムも、
                        <br />
                        仕組みも、発信も——
                        <br />
                        すべてが<span style={{ fontWeight: 600, color: '#1a1a3e' }}>意識の反映</span>になっていく。
                    </p>
                </motion.div>

                {/* Divider */}
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

                {/* ⑥ コミュニティのビジョン — クロージング */}
                <motion.div
                    {...fadeInScale}
                    className="text-center rounded-3xl py-10 px-6 sm:py-12"
                    style={{
                        background: 'linear-gradient(135deg, rgba(26,26,62,0.03) 0%, rgba(124,92,191,0.06) 50%, rgba(201,168,76,0.04) 100%)',
                        border: '1px solid rgba(124,92,191,0.08)',
                    }}
                >
                    <p className="text-base leading-[2.2] tracking-wide mb-4" style={{ color: '#3a3a5a' }}>
                        穏やかに、でもパワフルに。
                        <br />
                        無限の可能性の中から、
                        <br />
                        自分の意識が反映された
                        <br />
                        ものを創っていく。
                    </p>
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
                        平和で、パワフルで、
                        <br />
                        無限の可能性に満ちた
                        <br />
                        創造を、一緒に。
                    </p>
                    <p
                        className="mt-4 text-sm"
                        style={{ fontStyle: 'italic', color: '#7c5cbf' }}
                    >
                        それが、このコミュニティのビジョンです。
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
