"use client";

import GuidedChatUI from "@/components/GuidedChatUI";

const INTRO_STEPS = [
    // 1. 元の意識
    {
        id: "origin",
        text: "もともと、ぼくたちは完全な意識でした。\n\nやりたいことは何でもできて、\n無限の可能性として、無条件の愛に満ちていた。\n\nまるでプリプリの満月のような、\nとてつもない広がりと可能性に満ちた意識。",
        inputType: "tap" as const,
    },

    // 2. 地球への好奇心
    {
        id: "curiosity",
        text: "その意識が、「地球」という惑星を見つけたんです。\n\n地球に行った存在たちを見ていると——\n「できない」と毎日つぶやいていたり、\n自分の無力さを感じていたりしている。\n\nそれは、自分にはまったくない概念でした。",
        inputType: "tap" as const,
    },

    // 3. ワクワク
    {
        id: "excitement",
        text: "「これを体験してみたい！」\n\nワクワクと好奇心に満ちたんです。\n\n分離という、自分にはない体験。\nそれをこの地球で味わってみたい——\nそんな思いが湧き上がりました。",
        inputType: "tap" as const,
    },

    // 4. 降りられない
    {
        id: "too-high",
        text: "でも、あまりにも波動が高すぎて、\nそのままでは地球に降り立つことができなかった。\n\n完全な意識のままでは、\n分離の世界を体験することができなかったんです。",
        inputType: "tap" as const,
    },

    // 5. 分離の選択
    {
        id: "separation",
        text: "そこで、ぼくたちは自分の意識を\n何等分にも「分離」させて、\n自らの波動を下げていきました。\n\nそうやって、この地球に降り立ったんです。",
        inputType: "tap" as const,
    },

    // 6. 分離の周波数
    {
        id: "frequencies",
        text: "自分の意識を分離することで、\n「分離の周波数」というものが生まれていきました。\n\n恐れ。無価値感。罪悪感。不安。\n\nそれは地球を体験するために、\n自分でつけた周波数だったんです。",
        inputType: "tap" as const,
    },

    // 7. 着陸成功
    {
        id: "landing",
        text: "そして——\n\nぼくたちは地球への着陸に成功しました。🌍",
        inputType: "tap" as const,
    },

    // 8. 映写機のメカニズム
    {
        id: "projector",
        text: "この地球のメカニズムはこうです。\n\n自分が「映写機」。\nその映写機にカシャッと入れた周波数が、\n真っ白な現実のスクリーンに映し出されていく。\n\nまるで映画館のように。",
        inputType: "tap" as const,
    },

    // 9. 映画を楽しむ
    {
        id: "enjoying",
        text: "最初は映画館の席に座って、\n自分が映し出す現実を楽しんでいました。\n\nでも——\n「もっと臨場感がほしい！」\n「せっかく遊びに来たんだから！」",
        inputType: "tap" as const,
    },

    // 10. スクリーンに近づく
    {
        id: "approaching",
        text: "ぼくたちは映写機のある席を立って、\nスクリーンに近づき始めました。\n\nフォーカスを、どんどん強くしていった。\n\n映画にのめり込むように、\nどんどん現実の中に入り込んでいったんです。",
        inputType: "tap" as const,
    },

    // 11. 忘却
    {
        id: "forgetting",
        text: "そしてついに——\n\n自分が映し出していることを、忘れてしまった。\n\n「現実」というものが先にあって、\nそこで起きることに反応して感情が生まれている。\n\nそう信じるようになったんです。",
        inputType: "tap" as const,
    },

    // 12. 分離の深み
    {
        id: "deep-separation",
        text: "こうしてぼくたちは、\n自分が現実を作っていることを完全に忘れ、\n分離を深く体験することに成功しました。\n\n戦争まで起こして——\nもう、お腹いっぱいに体験したんです。",
        inputType: "tap" as const,
    },

    // 13. 復活の始まり
    {
        id: "awakening",
        text: "2020年頃から、いよいよ——\n\nぼくたちは、もともとの意識を思い出し始めました。\n\n自分がつけてきた「分離」を、\n自分で手放していく。\n\n自分に復活していくプロセスが、\nスタートしたんです。",
        inputType: "tap" as const,
    },

    // 14. ネガティブは扉
    {
        id: "doorway",
        text: "ぼくたちのもともとは、\n無限の可能性に満ちた、とてつもない叡智。\n\n穏やかに、スムーズに、平和に——\nそれが当たり前。\n\nだから「そうじゃないもの」、\n心地悪さやネガティブな感情は、\n復活への扉なんです。",
        inputType: "tap" as const,
    },

    // 15. 主人公として
    {
        id: "protagonist",
        text: "映写機の場所に戻って座り、\n自分が現実のすべてを映し出していると思い出す。\n\nだから、作り替えることも自分でできる。\n\n自分が主人公として現実を再構築していく——\nそんな生き方が、今この地球でできる時代になりました。\n\nさあ、あなたの旅を始めましょう ✨",
        inputType: "tap" as const,
    },
];

export default function IntroductionPage() {
    return (
        <GuidedChatUI
            systemName="イントロダクション"
            accentColor="#C2A571"
            accentColorLight="#F8F0E0"
            icon={<span style={{ fontSize: 22 }}>🌕</span>}
            steps={INTRO_STEPS}
            completionMessage="ストーリーを読んでいただきありがとうございます。\n\nホームに戻って、ワークを始めてみましょう ✨"
        />
    );
}
