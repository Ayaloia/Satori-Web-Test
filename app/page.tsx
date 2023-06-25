"use client";
import Image from 'next/image'
import {useRef} from "react";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

export default function Home() {
    const ref = useRef(null)
    const {scrollYProgress: introYProgress} = useScroll({
        target: ref,
        offset: ["120vh start", "250vh start"]
    })
    const introSpring = useSpring(introYProgress, {damping: 30})
    const {scrollYProgress: nameYProgress} = useScroll({
        target: ref,
        offset: ["260vh start", "260.1vh start"]
    })
    const nameSpring = useSpring(nameYProgress, {bounce: 0})
    const alpha = useTransform(introSpring, [0, 1], [1, 0])
    const scale = useTransform(nameSpring, [0, 1], [0, 1])

    return (
        <main className="bg-black">
            <header className="p-3 flex h-full w-full flex-col items-center">
                <div ref={ref} className="h-[425vh] flex flex-col items-center">
                    <Image className="z-10 object-cover" src="/satoriTop.jpg" alt="satori" fill={true}/>
                    <div className="static h-[250vh]">
                        <motion.span
                            style={{opacity: alpha}}
                            className={`inline-block text-center text-5xl md:text-7xl lg:text-8xl sticky top-[40vh] font-semibold antialiased bg-gradient-to-r from-[#f881ca] via-[#9cbfe0] to-[#fd6c7f] bg-clip-text text-transparent`}>
                            怨灵也为之惧怯的少女
                        </motion.span>
                    </div>
                    <motion.h1 style={{scale: scale}}
                                 className="flex flex-row items-center z-10 italic font-serif text-center sticky top-[40vh] text-5xl md:text-7xl lg:text-8xl text-white leading-10
                                 after:content-[''] after:right-[8%] after:-z-10 after: after:bg-center after:w-1/2 after:h-[300%] after:bg-contain after:absolute after:inline after:bg-[url('/rose.svg')] after:bg-no-repeat ">
                        古明地さとり
                    </motion.h1>
                </div>
            </header>

            <main className="p-5 h-fit">
                <div className="rounded-3xl h-fit p-5 bg-gray-400 space-y-10">
                    <section className="flex justify-evenly flex-wrap gap-5">
                        <motion.article className="bg-gray-300 rounded-2xl p-4 md:w-2/3 shadow-lg space-y-5 font-serif"
                                        initial={{opacity: 0, y: 10, x: 10}}
                                        whileInView={{
                                            opacity: 1,
                                            y: 0,
                                            x: 0,
                                            transition: {ease: "easeOut", duration: 0.5}
                                        }}
                                        viewport={{once: false}}>
                            <h2 className="text-5xl font-semibold">古明地觉 &nbsp; Komeiji Satori</h2>
                            <table
                                className="table-auto text-left border-separate border-spacing-y-2 border-spacing-x-5">
                                <tbody>
                                <tr>
                                    <th>能力</th>
                                    <td>读心程度的能力</td>
                                </tr>
                                <tr>
                                    <th>危险度</th>
                                    <td>极高</td>
                                </tr>
                                <tr>
                                    <th>人类友好度</th>
                                    <td>完全没有</td>
                                </tr>
                                <tr>
                                    <th>主要活动场所</th>
                                    <td>地灵殿</td>
                                </tr>
                                </tbody>
                            </table>
                            <section className="space-y-3">
                                <p>
                                    在到处都是被嫌恶者的旧地狱中，在这群体中有一类特别惹人讨厌的妖怪，那就是觉3了。尽管当时是由于无法跟人类以及妖怪和谐共处从而逃到旧地狱去的，但结果，还是被旧地狱的妖怪所讨厌。
                                </p>
                                <p>
                                    那理由，就是来自她的读心能力。无论谁都不想要跟会读心的家伙碰面啦。被读心这种事不仅是等同自己赤着身子跟她说话，而是意味着连普通地对话也无法做到。她在旧地狱中一个名为地灵殿的地方把自己完全隔离，放弃跟任何人进行交流。
                                </p>
                                <p>
                                    地灵殿基本上是不会有客人的。特意前来探访她的人更不会有。<br/>
                                    然而，她却很受无法说话的动物们所欢迎。因为读心的能力，对于动物来说可以说是独一无二的能力。就因为这样，地灵殿栖息着很多动物<span className="text-gray-500">（×1
                                    博丽灵梦小姐曰「她们只是非常好用的奴隶」。）</span>。
                                </p>
                                <p>
                                    她对无法说话的灵魂一样可以读心。正因为这样连怨灵都对她避之不及。怨灵和动物不同，自己的所思所想还是想要凭借对话传达出来的。这理由不用多说，因为「会说话的生物，全部都是有表里两面」的缘故吧。
                                </p>
                                <p>
                                    她对无法说话的灵魂一样可以读心。正因为这样连怨灵都对她避之不及。怨灵和动物不同，自己的所思所想还是想要凭借对话传达出来的。这理由不用多说，因为「会说话的生物，全部都是有表里两面」的缘故吧。
                                </p>
                                <p>她有一个妹妹。</p>
                            </section>
                            <section className="space-y-3">
                                <h3 className="text-2xl font-semibold">她的宠物阿燐</h3>
                                <p>她有一只名唤火焰猫燐的宠物。似乎都是一直叫阿燐。</p>
                                <p>由于阿燐能做到跟怨灵交谈，所以一直作为她的右手帮助她的样子。根据前述，怨灵饥渴于以对话与人交流的缘故，所以她们反而会去投奔阿燐而不是觉。因此也有实际上管理怨灵的人是阿燐的说法。</p>
                                <p>虽说是管理，但也基本就是放着不管，偶尔平衡下数量的程度。</p>
                            </section>
                            <section className="space-y-3">
                                <h3 className="text-2xl font-semibold">她的宠物阿空</h3>
                                <p>灵乌路空也是她的一只宠物。她都是叫阿空的。</p>
                                <p>作为在地狱诞生的地狱鸦，她是一个能平静置身于灼热地狱迹之热中的存在。因此她一直负责对灼热地狱迹进行温度调节。</p>
                                <p>虽然阿空是个鸟脑袋，但应该擅长于不需要多动脑子的单纯劳动的作业。</p>
                                <p>她跟阿燐非常的要好。觉的宠物们都很仰慕着觉，因此伙伴意识很强。</p>
                            </section>
                            <section className="space-y-3">
                                <h3 className="text-2xl font-semibold">地灵殿</h3>
                                <p>管理着灼热地狱迹的她所身处的别墅。地板还装有暖气。只有古明地姐妹住在这个宽敞得要命的地方<span className="text-gray-500">（×2
                                    地狱比起地上要广敞得多。旧地狱当然也不例外。）</span>。完全没有访客。</p>
                                <p>觉即使在地灵殿内也不会怎样动身，基本上都在自己的房间看书、写书的样子。特别喜欢带有丰富心理描写的故事。读书、写书对于能够读心的人据说是很刺激的体验。在作者不明的故事中，或许就有她写的书。</p>
                                <p>同时，她的领地内几乎到处都是宠物。就像是动物园的样子。</p>
                            </section>
                            <section className="space-y-3">
                                <h3 className="text-2xl font-semibold">对策</h3>
                                <p>虽然是令人害怕的妖怪，但幸运的是基本上不会有机会遇到她。</p>
                                <p>万一真的对峙起来，比起想一些拙劣的计策，还不如立即改变态度比较安全。</p>
                                <p>顺带一提，战斗能力不明。鉴于她把自己跟外界隔离太久，估计她不会很强的样子。</p>
                            </section>
                        </motion.article>
                        <motion.figure
                            className="sticky top-2 bg-gray-300 rounded-2xl p-2 md:w-1/5 w-1/2 h-fit space-y-2 flex flex-col justify-items-center shadow-lg"
                            initial={{opacity: 0, y: 10, x: 10}}
                            whileInView={{opacity: 1, y: 0, x: 0, transition: {ease: "easeOut", duration: 0.5}}}
                            viewport={{once: false}}>
                            <div className="w-full aspect-[292/612] object-contain relative">
                                <Image src="/satori(kos).png" alt="satori" fill={true}
                                       className="rounded-xl object-contain"/>
                            </div>
                            <figcaption className="text-center text-base">古明地觉（求闻口授）</figcaption>
                        </motion.figure>
                    </section>

                    <section className="h-[50vh] w-full bg-gray-300 shadow-lg rounded-2xl p-4 space-y-3">
                        <h2 className="text-5xl font-semibold">画廊</h2>
                        <div>

                        </div>
                    </section>
                </div>
            </main>
        </main>
    )
}
