'use client';

import React from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.8 },
};

export default function FinalCTA() {
    return (
        <section
            className="relative py-24 sm:py-32 overflow-hidden"
            style={{ background: 'linear-gradient(180deg, #fafafa 0%, #f5f3ff 50%, #fafafa 100%)' }}
        >
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full animate-breath-pulse"
                    style={{
                        background: 'radial-gradient(circle, rgba(124,92,191,0.05) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute top-20 right-20 w-8 h-8 rotate-45 rounded-sm animate-geometric-float"
                    style={{ background: 'rgba(201,168,76,0.1)', animationDelay: '2s' }}
                />
                <div
                    className="absolute bottom-20 left-20 w-6 h-6 rounded-full animate-geometric-float"
                    style={{ background: 'rgba(124,92,191,0.08)', animationDelay: '4s' }}
                />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
                {/* Headline */}
                <motion.div {...fadeInUp}>
                    <h2
                        className="text-2xl sm:text-3xl leading-relaxed mb-8"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 600,
                            color: '#1a1a3e',
                            letterSpacing: '0.04em',
                        }}
                    >
                        AIを無限の叡智として、
                        <br />
                        1番のワクワクのビジョンを、圧倒的に生きていく。
                    </h2>
                    <p
                        className="text-lg sm:text-xl mb-3"
                        style={{
                            fontFamily: '"Noto Serif JP", serif',
                            fontWeight: 500,
                            color: '#7c5cbf',
                        }}
                    >
                        軽やかさを許可したまま、ビジョンを広げ、形にしていく。
                    </p>
                    <p className="text-sm mb-10" style={{ color: '#9a9ab0' }}>
                        その実践を、ここから始めていく。
                    </p>
                    <div className="section-divider mb-10" />
                </motion.div>

                {/* Body text */}
                <motion.div
                    {...fadeInUp}
                    className="mb-12"
                >
                    <p
                        className="text-base leading-loose mb-6"
                        style={{ color: '#4a4a6a', letterSpacing: '0.03em' }}
                    >
                        AIを無限の叡智として、共同創造する。
                        <br />
                        <br />
                        1番のワクワクのビジョンを、
                        <br />
                        軽やかに、圧倒的に、広げていく。
                        <br />
                        <br />
                        共振する仲間と、
                        <br />
                        お互いのビジョンを表していく。
                        <br />
                        <br />
                        <span style={{ fontWeight: 500, color: '#1a1a3e' }}>
                            その実践を、ここから一緒に始めましょう。
                        </span>
                    </p>
                    <p className="text-sm" style={{ color: '#c9a84c', fontWeight: 500, letterSpacing: '0.05em' }}>
                        今なら初月無料で参加できます
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-col gap-4 max-w-md mx-auto"
                >
                    <a
                        href="https://seiya-subsc-production.up.railway.app/"
                        className="block py-4 rounded-full text-center text-sm font-medium transition-all duration-500 hover:scale-[1.02] hover:shadow-lg"
                        style={{
                            border: '1.5px solid rgba(201,168,76,0.4)',
                            color: '#c9a84c',
                        }}
                    >
                        🌟 スタンダードプランで始める（¥3,480/月、初月無料）
                    </a>
                    <a
                        href="https://seiya-subsc-production.up.railway.app/"
                        className="block py-4 rounded-full text-center text-sm font-medium text-white transition-all duration-500 hover:scale-[1.02] hover:shadow-xl"
                        style={{
                            background: 'linear-gradient(135deg, #7c5cbf, #7c5cbfcc)',
                            boxShadow: '0 6px 25px rgba(124,92,191,0.25)',
                        }}
                    >
                        🚀 アクセラレートプランで始める（¥6,800/月、初月無料）
                    </a>
                    <a
                        href="https://seiya-subsc-production.up.railway.app/"
                        className="block py-4 rounded-full text-center text-sm font-medium transition-all duration-500 hover:scale-[1.02] hover:shadow-lg"
                        style={{
                            border: '1.5px solid rgba(26,26,62,0.3)',
                            color: '#1a1a3e',
                        }}
                    >
                        💎 プライベートプランで始める（¥19,800/月、初月無料）
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
