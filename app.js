console.log('ZenCast app.js loading...');

/* -------------------------------------------------------------------------- */
/*  APPLICATION DATA                                                          */
/* -------------------------------------------------------------------------- */

const appData = {
  "shlokas": [
    {
      "id": 1,
      "sanskrit": "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत। अभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
      "english": "Whenever there is decline in righteousness and increase in unrighteousness, O Arjuna, at that time I manifest myself on earth.",
      "interpretation": "In times of moral confusion, divine wisdom naturally emerges to restore balance. Trust that clarity will arise when you most need it.",
      "japanese": "正義が衰え、不正義が増すとき、私は自らを現す。",
      "korean": "정의가 쇠퇴하고 불의가 증가할 때, 나는 스스로를 나타낸다."
    },
    {
      "id": 2,
      "sanskrit": "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन। मा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
      "english": "You have a right to perform your prescribed duty, but not to the fruits of action. Never consider yourself the cause of the results, nor be attached to not doing your duty.",
      "interpretation": "Focus on the process, not the outcome. Excellence emerges from presence and dedication, not from attachment to results.",
      "japanese": "あなたには行動する権利があるが、結果への権利はない。",
      "korean": "당신은 행동할 권리가 있지만 결과에 대한 권리는 없다."
    },
    {
      "id": 3,
      "sanskrit": "मन्मना भव मद्भक्तो मद्याजी मां नमस्कुरु। मामेवैष्यसि सत्यं ते प्रतिजाने प्रियोऽसि मे॥",
      "english": "Fix your mind on Me, be devoted to Me, worship Me, and bow down to Me. Doing so, you shall certainly come to Me. This is My promise to you, for you are dear to Me.",
      "interpretation": "Complete surrender to the divine consciousness within brings ultimate peace. When you align with your highest self, all paths lead home.",
      "japanese": "私に心を向け、私に献身し、私を拝しなさい。",
      "korean": "나에게 마음을 고정하고, 나에게 헌신하며, 나를 예배하라."
    },
    {
      "id": 4,
      "sanskrit": "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
      "english": "Abandon all varieties of dharma and just surrender unto Me. I shall deliver you from all sinful reactions. Do not fear.",
      "interpretation": "When overwhelmed by life's complexities, return to simplicity. Trust in the fundamental goodness of existence and let go of fear.",
      "japanese": "すべての義務を捨てて、ただ私だけに帰依しなさい。", 
      "korean": "모든 의무를 버리고 오직 나에게만 귀의하라."
    },
    {
      "id": 5,
      "sanskrit": "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय। सिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
      "english": "Be steadfast in yoga, O Arjuna. Perform your duty and abandon all attachment to success or failure. Such evenness of mind is called yoga.",
      "interpretation": "True strength comes from maintaining inner balance regardless of external circumstances. Equanimity is the highest spiritual practice.",
      "japanese": "ヨーガに住して行為を行い、執着を捨てよ。",
      "korean": "요가에 머물러 행동하고, 집착을 버려라."
    },
    {
      "id": 6,
      "sanskrit": "जातस्य हि ध्रुवो मृत्युर्ध्रुवं जन्म मृतस्य च। तस्मादपरिहार्येऽर्थे न त्वं शोचितुमर्हसि॥",
      "english": "One who has taken birth is sure to die, and one who is dead is sure to take birth again. Therefore, in the unavoidable discharge of your duty, you should not lament.",
      "interpretation": "Acceptance of life's inevitable cycles frees one from needless grief. Focus on your duty and let go of sorrow over what cannot be changed.",
      "japanese": "生まれた者は必ず死に、死んだ者は必ず再び生まれる。避けられない義務を果たす中で嘆いてはならない。",
      "korean": "태어난 자는 반드시 죽고, 죽은 자는 반드시 다시 태어난다. 피할 수 없는 의무를 수행하며 슬퍼하지 마라."
    },
    {
      "id": 7,
      "sanskrit": "तस्मादसक्तः सततं कार्यं कर्म समाचर। असक्तो ह्याचरन्न कर्म परमाप्नोति पूरुषः॥",
      "english": "Therefore, perform your obligatory duty without attachment. By performing action without attachment, one attains the Supreme.",
      "interpretation": "Detachment in action leads to spiritual liberation. Serve selflessly, and the highest state will be revealed.",
      "japanese": "だから、執着なく義務を果たせ。執着なく行動する者は至高に到達する。",
      "korean": "그러므로 집착 없이 본분을 다하여라. 집착 없는 행동으로 사람은 최고의 경지에 이른다."
    },
    {
      "id": 8,
      "sanskrit": "अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते इति मत्तः स्मृतिर्जयते सर्वत्र जयति च मम स्मृतिर्लोकानां महबाहो हि मत्प्रसादात्॥",
      "english": "I am the source of all creation. Everything moves by My will. Remembering this, one conquers all hurdles by My grace.",
      "interpretation": "Trust the divine origin of all things. When your mind dwells on this truth, obstacles dissolve through grace.",
      "japanese": "私は万物の根源、すべては私の意志で動く。この真実を思え、すべての障害は恩寵で消える。",
      "korean": "나는 만물의 근원이며 모든 것은 나의 뜻으로 움직인다. 이 진리를 기억하면 은총으로 모든 장애를 이긴다."
    },
    {
      "id": 9,
      "sanskrit": "मनुष्याणां सहस्रेषु कश्चिन्यतति सिद्धये। यततामपि सिद्धानां कश्चिन्मां वेत्ति तत्त्वतः॥",
      "english": "Among thousands of men, hardly one strives for perfection; and among those who have achieved perfection, hardly one knows Me in truth.",
      "interpretation": "True seekers are rare. Of those rare few who attain mastery, only a handful realize the divine fully. Aspire to be among them.",
      "japanese": "何千人もの中で完全を求める者はほとんどなく、完全を得た中で真に神を知る者はさらに稀である。",
      "korean": "수천 명 중 완전을 추구하는 이는 거의 없고, 완전을 이룬 이 중 진리를 깨닫는 이는 더욱 드물다."
    },
    {
      "id": 10,
      "sanskrit": "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज। अहं त्वां सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
      "english": "Abandon all varieties of dharma and simply surrender unto Me. I shall deliver you from all sinful reactions; do not fear.",
      "interpretation": "When overwhelmed by conflicting duties, let go and surrender wholly. Fear dissolves when you place your trust in the divine.",
      "japanese": "あらゆる義務を捨て、ただ私に帰依せよ。私はすべての罪からあなたを解放する。恐れるな。",
      "korean": "모든 의무를 버리고 오직 나에게 귀의하라. 나는 모든 죄로부터 너를 해방하리니 두려워 말라."
    },
    {
      "id": 11,
      "sanskrit": "न हि कश्चित् क्षणमपि जातु तिष्ठत्यकर्मकृत्। कार्यते ह्यवशः कर्म सर्वः प्रकृतिजैर्गुणैः॥",
      "english": "No one can remain without action even for a moment. Everyone is driven to act by the qualities born of nature.",
      "interpretation": "Action is inevitable due to the influence of nature's qualities. Recognize this and act consciously rather than being driven by unconscious impulses.",
      "japanese": "誰も一瞬たりとも行動せずにいられない。すべての人は自然の属性によって行動を強いられる。",
      "korean": "아무도 한 순간도 행동하지 않고 있을 수 없다. 모든 사람은 자연의 속성에 의해 행동하게 된다."
    },
    {
      "id": 12,
      "sanskrit": "कायेन मनसा बुद्ध्या केवलैरिन्द्रियैरपि। योगिनः कर्म कुर्वन्ति सङ्गं त्यक्त्वात्मशुद्धये॥",
      "english": "Yogis, having abandoned attachment, perform actions only by the body, mind, intellect, and senses for the purification of the self.",
      "interpretation": "True yogis act without attachment, using every action as a means to purify the self and align with higher consciousness.",
      "japanese": "ヨギは執着を捨て、身体、精神、知性、感覚だけで行動し、自己の浄化を目指す。",
      "korean": "요기는 집착을 버리고 몸, 마음, 지성, 감각만으로 행동하며 자기 정화를 추구한다."
    },
    {
      "id": 13,
      "sanskrit": "श्रेयान् स्वधर्मो विगुणः परधर्मात् स्वनुष्ठितात्। स्वधर्मे निधनं श्रेयः परधर्मो भयावहः॥",
      "english": "It is better to perform one's own duty imperfectly than to perform another's duty perfectly. Death in one's own duty is better; another's duty is fraught with fear.",
      "interpretation": "Stay true to your own path, even if flawed. Following someone else's path, no matter how well, can lead to inner conflict and fear.",
      "japanese": "不完全でも自分の義務を果たす方が、他人の義務を完璧に果たすより良い。自分の義務での死は、他人の義務に従う恐怖よりも優れている。",
      "korean": "불완전하더라도 자신의 의무를 다하는 것이 타인의 의무를 완벽히 수행하는 것보다 낫다. 자신의 의무 속에서의 죽음이 타인의 의무를 따르는 두려움보다 낫다."
    },
    {
      "id": 14,
      "sanskrit": "न बुद्धिभेदं जनयेदज्ञानां कर्मसङ्गिनाम्। जोषयेत् सर्वकर्माणि विद्वान् युक्तः समाचरन्॥",
      "english": "Let not the wise disrupt the minds of the ignorant who are attached to action. They should encourage them to perform all actions, while themselves acting with discipline.",
      "interpretation": "The wise should guide others gently without unsettling their beliefs, inspiring through their own disciplined actions.",
      "japanese": "賢者は無知な者の心を乱さず、行動に執着する者をすべての行動に導き、自らは規律を持って行動すべきだ。",
      "korean": "현자는 무지한 자의 마음을 혼란스럽게 하지 말고, 행동에 집착하는 자를 모든 행동으로 이끌며, 스스로는 규율을 가지고 행동해야 한다."
    },
    {
      "id": 15,
      "sanskrit": "प्रकृतेः क्रियमाणानि गुणैः कर्माणि सर्वशः। अहङ्कारविमूढात्मा कर्ताहमिति मन्यते॥",
      "english": "All actions are performed by the qualities of nature, but one deluded by ego thinks, 'I am the doer.'",
      "interpretation": "Understand that actions arise from nature's forces, not personal will. Letting go of ego frees you from false responsibility.",
      "japanese": "すべての行動は自然の属性によって行われるが、自我に惑わされた者は「私がする」と考える。",
      "korean": "모든 행동은 자연의 속성에 의해 이루어지지만, 자아에 미혹된 자는 '내가 한다'고 생각한다."
    },
    {
      "id": 16,
      "sanskrit": "तत्त्ववित्तु महाबाहो गुणकर्मविभागयोः। गुणा गुणेषु वर्तन्त इति मत्वा न सज्जते॥",
      "english": "But one who knows the truth, O mighty-armed, about the divisions of qualities and actions, understanding that qualities act upon qualities, is not attached.",
      "interpretation": "Realizing that actions and qualities interact within nature's framework, the wise remain unattached to outcomes.",
      "japanese": "しかし、属性と行動の区分を知る者は、属性が属性に作用することを理解し、執着しない。",
      "korean": "그러나 속성과 행동의 구분을 아는 자는 속성이 속성에 작용한다는 것을 이해하고 집착하지 않는다."
    },
    {
      "id": 17,
      "sanskrit": "मयि सर्वमिदं प्रोतं सूत्रे मणिगणा इव। अहं सर्वस्य प्रभवो मत्तः सर्वं प्रवर्तते॥",
      "english": "All this is strung on Me, as pearls on a thread. I am the source of all; everything proceeds from Me.",
      "interpretation": "Everything is connected to the divine, like pearls on a string. Recognize the unity underlying all existence.",
      "japanese": "すべては私に結ばれ、糸に通された真珠のようだ。私はすべての根源、すべては私から生じる。",
      "korean": "모든 것은 나에게 연결되어, 실에 꿰인 진주와 같다. 나는 모든 것의 근원이며, 모든 것이 나로부터 나온다."
    },
    {
      "id": 18,
      "sanskrit": "न मां कर्माणि लिम्पन्ति न मे कर्मफले स्पृहा। इति मां योऽभिजानाति कर्मभिर्न स बध्यते॥",
      "english": "Actions do not taint Me, nor do I desire the fruits of actions. One who knows Me thus is not bound by actions.",
      "interpretation": "The divine is beyond the effects of action and desire. Align with this truth to free yourself from karmic bondage.",
      "japanese": "行動は私を汚さず、私は行動の結果を望まない。このように私を知る者は行動に縛られない。",
      "korean": "행동은 나를 더럽히지 않으며, 나는 행동의 결과를 바라지 않는다. 나를 이렇게 아는 자는 행동에 묶이지 않는다."
    },
    {
      "id": 19,
      "sanskrit": "एवं ज्ञात्वा कृतं कर्म पूर्वैरपि मुमुक्षुभिः। कुरु कर्मैव तस्मात्त्वं पूर्वैः पूर्वतरं कृतम्॥",
      "english": "Knowing this, the ancient seekers of liberation also performed actions. Therefore, do your duty as the ancients did in the past.",
      "interpretation": "Even the wise of old acted with this understanding. Follow their example and perform your duty with awareness.",
      "japanese": "このように知って、古代の解放を求める者も行動した。ゆえに、古代の者たちがしたように義務を果たせ。",
      "korean": "이렇게 알고, 고대의 해방을 구하는 자들도 행동했다. 그러므로 고대인들이 했던 대로 네 의무를 다하라."
    },
    {
      "id": 20,
      "sanskrit": "किं कर्म किमकर्मेति कवयोऽप्यत्र मोहिताः। तत्ते कर्म प्रवक्ष्यामि यज्ज्ञात्वा मोक्ष्यसेऽशुभात्॥",
      "english": "What is action? What is inaction? Even the wise are puzzled by this. I will explain action to you, knowing which you shall be freed from evil.",
      "interpretation": "The nature of action and inaction is complex. True understanding of this liberates one from negative consequences.",
      "japanese": "行動とは何か、非行動とは何か、賢者でさえ困惑する。私は行動を説明し、それを知ることで悪から解放される。",
      "korean": "행동이란 무엇인가, 비행동이란 무엇인가, 현자조차 이에 혼란스러워한다. 내가 행동을 설명하리니, 이를 알면 악에서 해방될 것이다."
    },
    {
      "id": 21,
      "sanskrit": "कर्मणो ह्यपि बोद्धव्यं बोद्धव्यं च विकर्मणः। अकर्मणश्च बोद्धव्यं गहना कर्मणो गतिः॥",
      "english": "One must understand what is action, what is forbidden action, and what is inaction. The path of action is mysterious.",
      "interpretation": "Distinguishing between right action, wrong action, and inaction is essential. The dynamics of karma are subtle and profound.",
      "japanese": "行動、禁じられた行動、非行動を理解する必要がある。行動の道は神秘的だ。",
      "korean": "행동, 금지된 행동, 비행동을 이해해야 한다. 행동의 길은 신비롭다."
    },
    {
      "id": 22,
      "sanskrit": "यः सर्वत्रानभिस्नेहस्तत्तत्प्राप्य शुभाशुभम्। नाभिनन्दति न द्वेष्टि तस्य प्रज्ञा प्रतिष्ठिता॥",
      "english": "One who is unattached everywhere, who neither rejoices nor hates when attaining good or bad, their wisdom is established.",
      "interpretation": "True wisdom lies in remaining unaffected by life's ups and downs. Cultivate detachment to anchor your understanding.",
      "japanese": "どこでも執着せず、善悪を得ても喜ばず憎まず、その者の知恵は確立されている。",
      "korean": "어디서나 집착하지 않고, 선악을 얻어도 기뻐하거나 미워하지 않는 자, 그 사람의 지혜는 확립되어 있다."
    },
    {
      "id": 23,
      "sanskrit": "यदा संहरते चायं कूर्मोऽङ्गानीव सर्वशः। इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता॥",
      "english": "When one withdraws the senses from sense objects, as a tortoise withdraws its limbs, their wisdom is established.",
      "interpretation": "Control over the senses, like a tortoise retracting its limbs, is a sign of steady wisdom. Inner discipline brings clarity.",
      "japanese": "感覚を感覚対象から引き戻すとき、亀が手足を引き込むように、その者の知恵は確立されている。",
      "korean": "감각을 감각 대상에서 거두어들일 때, 거북이 팔다리를 끌어들이듯, 그 사람의 지혜는 확립되어 있다."
    },
    {
      "id": 24,
      "sanskrit": "विषया विनिवर्तन्ते निराहारस्य देहिनः। रसवर्जं रसोऽप्यस्य परं दृष्ट्वा निवर्तते॥",
      "english": "Sense objects fade for the abstinent, but the longing for them remains. Even this longing disappears when one realizes the Supreme.",
      "interpretation": "Abstinence reduces attraction to objects, but true freedom comes only from experiencing the divine, which erases all desire.",
      "japanese": "感覚対象は断食する者には薄れるが、渇望は残る。最高のものを見るとき、その渇望も消える。",
      "korean": "감각 대상은 절제하는 자에게서 희미해지지만, 갈망은 남는다. 최고의 것을 볼 때 그 갈망도 사라진다."
    },
    {
      "id": 25,
      "sanskrit": "यततो ह्यपि कौन्तेय पुरुषस्य विपश्चितः। इन्द्रियाणि प्रमाथीनि हरन्ति प्रसभं मनः॥",
      "english": "Even for the striving wise man, O son of Kunti, the turbulent senses forcibly carry away the mind.",
      "interpretation": "Even the wise struggle with restless senses. Persistent effort and awareness are needed to master the mind.",
      "japanese": "努力する賢者でさえ、乱暴な感覚が心を強引に奪う。",
      "korean": "노력하는 현자조차도 격동하는 감각이 마음을 강제로 빼앗아 간다."
    },
    {
      "id": 26,
      "sanskrit": "तानि सर्वाणि संयम्य युक्त आसीत मत्परः। वशे हि यस्येन्द्रियाणि तस्य प्रज्ञा प्रतिष्ठिता॥",
      "english": "Having restrained them all, one should sit focused on Me. For one whose senses are under control, their wisdom is established.",
      "interpretation": "Mastery over senses and focus on the divine stabilize wisdom. Discipline is the foundation of spiritual growth.",
      "japanese": "それらすべてを抑制し、私に集中して座るべし。感覚を制御する者の知恵は確立されている。",
      "korean": "그 모든 것을 억제하고 나에게 집중하여 앉아라. 감각을 통제하는 자의 지혜는 확립되어 있다."
    },
    {
      "id": 27,
      "sanskrit": "ध्यायतो विषयान्पुंसः सङ्गस्तेषूपजायते। सङ्गात्सञ्जायते कामः कामात्क्रोधोऽभिजायते॥",
      "english": "When a man dwells on sense objects, attachment to them arises. From attachment comes desire, and from desire, anger.",
      "interpretation": "Obsession with sensory pleasures breeds attachment, desire, and eventually anger. Break this cycle through awareness.",
      "japanese": "感覚対象を考えると、それらへの執着が生じる。執着から欲望が生じ、欲望から怒りが生じる。",
      "korean": "감각 대상을 생각하면 그것에 대한 집착이 생긴다. 집착에서 욕망이 생기고, 욕망에서 분노가 생긴다."
    },
    {
      "id": 28,
      "sanskrit": "क्रोधाद्भवति सम्मोहः सम्मोहात्स्मृतिविभ्रमः। स्मृतिभ्रंशाद् बुद्धिनाशो बुद्धिनाशात्प्रणश्यति॥",
      "english": "From anger comes delusion, from delusion loss of memory, from loss of memory destruction of intellect, and from that, one perishes.",
      "interpretation": "Anger triggers a chain of mental destruction. Guard against it to preserve clarity and prevent downfall.",
      "japanese": "怒りから混乱が生じ、混乱から記憶の喪失、記憶の喪失から知性の破壊、知性の破壊から滅びる。",
      "korean": "분노에서 혼란이 생기고, 혼란에서 기억 상실, 기억 상실에서 지성의 파괴, 지성의 파괴에서 멸망한다."
    },
    {
      "id": 29,
      "sanskrit": "रागद्वेषवियुक्तैस्तु विषयानिन्द्रियैश्चरन्। आत्मवश्यैर्विधेयात्मा प्रसादमधिगच्छति॥",
      "english": "But one who moves among sense objects with senses free from attachment and aversion, controlled by the self, attains serenity.",
      "interpretation": "Navigating life without attachment or aversion brings peace. Self-control is the key to inner tranquility.",
      "japanese": "執着と嫌悪から解放された感覚で対象の中を動き、自己を制御する者は平穏を得る。",
      "korean": "집착과 혐오에서 해방된 감각으로 대상을 다니며, 자기를 통제하는 자는 평온을 얻는다."
    },
    {
      "id": 30,
      "sanskrit": "प्रसादे सर्वदुःखानां हानिरस्योपजायते। प्रसन्नचेतसो ह्याशु बुद्धिः पर्यवतिष्ठते॥",
      "english": "In serenity, all sorrows are destroyed. For one with a serene mind, intellect soon becomes steady.",
      "interpretation": "Peace dissolves all pain. A calm mind naturally fosters clear and stable understanding.",
      "japanese": "平穏の中であらゆる苦しみが消える。穏やかな心の者は知性がすぐに安定する。",
      "korean": "평온 속에서 모든 고통이 사라진다. 평온한 마음을 가진 자는 지성이 곧 안정된다."
    },
    {
      "id": 31,
      "sanskrit": "नास्ति बुद्धिरयुक्तस्य न चायुक्तस्य भावना। न चाभावयतः शान्तिरशान्तस्य कुतः सुखम्॥",
      "english": "There is no intellect for the undisciplined, nor meditation for the unthinking, nor peace for the unmeditative, and without peace, how can there be happiness?",
      "interpretation": "Without discipline, there is no clarity; without clarity, no peace; without peace, happiness is impossible. Start with self-control.",
      "japanese": "規律のない者には知性なく、考えない者には瞑想なく、瞑想しない者には平穏なく、平穏なくしてどうして幸福があるか。",
      "korean": "규율 없는 자에게 지성이 없고, 생각하지 않는 자에게 명상이 없으며, 명상하지 않는 자에게 평온이 없고, 평온 없이 어찌 행복이 있겠는가."
    },
    {
      "id": 32,
      "sanskrit": "इन्द्रियाणां हि चरतां यन्मनोऽनुविधीयते। तदस्य हरति प्रज्ञां वायुर्नावमिवाम्भसि॥",
      "english": "When the mind follows the wandering senses, it carries away one's wisdom, like the wind carries away a boat on water.",
      "interpretation": "An uncontrolled mind, swayed by senses, destroys wisdom. Like a boat in a storm, it must be steadied to stay on course.",
      "japanese": "心がさまよう感覚に従うとき、それは知恵を奪う、風が水上の舟を奪うように。",
      "korean": "마음이 방황하는 감각을 따를 때, 그것은 지혜를 빼앗는다, 바람이 물 위의 배를 빼앗듯이."
    },
    {
      "id": 33,
      "sanskrit": "तस्माद्यस्य महाबाहो निगृहीतानि सर्वशः। इन्द्रियाणीन्द्रियार्थेभ्यस्तस्य प्रज्ञा प्रतिष्ठिता॥",
      "english": "Therefore, O mighty-armed, one whose senses are completely restrained from sense objects, their wisdom is established.",
      "interpretation": "Complete restraint of senses from distractions secures wisdom. Inner strength comes from disciplined focus.",
      "japanese": "ゆえに、感覚が完全に感覚対象から抑制されている者の知恵は確立されている。",
      "korean": "그러므로 감각이 감각 대상에서 완전히 억제된 자의 지혜는 확립되어 있다."
    },
    {
      "id": 34,
      "sanskrit": "या निशा सर्वभूतानां तस्यां जागर्ति संयमी। यस्यां जाग्रति भूतानि सा निशा पश्यतो मुनेः॥",
      "english": "What is night for all beings is day for the disciplined sage. What is day for all beings is night for the seer who sees.",
      "interpretation": "The wise are awake to spiritual truth while others sleep in ignorance. Their perspective is opposite to the worldly view.",
      "japanese": "すべての存在にとって夜であるものが、規律ある賢者にとっては昼だ。すべての存在にとって昼であるものが、見る賢者にとっては夜だ。",
      "korean": "모든 존재에게 밤인 것이 규율 있는 현자에게는 낮이다. 모든 존재에게 낮인 것이 보는 현자에게는 밤이다."
    },
    {
      "id": 35,
      "sanskrit": "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत्। तद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी॥",
      "english": "As waters enter the ocean, which remains unmoved though ever filled, so all desires enter the wise, who attains peace, not the one who chases desires.",
      "interpretation": "The wise remain steady amidst desires, like the ocean absorbing rivers. Peace comes from stillness, not pursuit.",
      "japanese": "水が海に入るように、欲望が賢者に入っても動じない。欲望を追う者でなく、賢者が平穏を得る。",
      "korean": "물이 바다로 들어가듯, 욕망이 현자에게 들어가도 흔들리지 않는다. 욕망을 쫓는 자가 아니라 현자가 평온을 얻는다."
    }
  ],
  ui: {
    en: { 
      play: "▷ Play", 
      pause: "❚❚ Pause", 
      playing: "🔊 Playing...",
      replay: "↻ Replay", 
      newWisdom: "✨ New Wisdom", 
      today: "Today's Divine Calm", 
      archive: "My Divine Archive",
      title: "ZenCast",
      subtitle: "Daily Divine Calm",
      verse: "Today's Sacred Verse",
      interpretation: "Divine Interpretation",
      favorite: "❤️ Favorite",
      favorited: "💖 Favorited"
    },
    sa: { 
      play: "▷ चलाएं", 
      pause: "❚❚ रोकें", 
      playing: "🔊 चल रहा है...",
      replay: "↻ पुनः", 
      newWisdom: "✨ नया ज्ञान", 
      today: "दैनिक दिव्य शांति", 
      archive: "पवित्र संग्रह",
      title: "ज़ेनकास्ट",
      subtitle: "दैनिक दिव्य शांति",
      verse: "आज का पवित्र श्लोक",
      interpretation: "दिव्य व्याख्या",
      favorite: "❤️ प्रिय",
      favorited: "💖 प्रिय"
    },
    ja: { 
      play: "▷ 再生", 
      pause: "❚❚ 一時停止", 
      playing: "🔊 再生中...",
      replay: "↻ リプレイ", 
      newWisdom: "✨ 新しい知恵", 
      today: "日々の神聖な平穏", 
      archive: "神聖なアーカイブ",
      title: "ゼンキャスト",
      subtitle: "日々の神聖な平穏",
      verse: "今日の神聖な詩",
      interpretation: "神聖な解釈",
      favorite: "❤️ お気に入り",
      favorited: "💖 お気に入り済み"
    },
    ko: { 
      play: "▷ 재생", 
      pause: "❚❚ 일시정지", 
      playing: "🔊 재생 중...",
      replay: "↻ 다시듣기", 
      newWisdom: "✨ 새로운 지혜", 
      today: "일일 신성한 평온", 
      archive: "신성한 아카이브",
      title: "젠캐스트",
      subtitle: "일일 신성한 평온",
      verse: "오늘의 신성한 구절",
      interpretation: "신성한 해석",
      favorite: "❤️ 즐겨찾기",
      favorited: "💖 즐겨찾기됨"
    }
  }
};

/* -------------------------------------------------------------------------- */
/*  GLOBAL STATE & SHUFFLED QUEUE                                             */
/* -------------------------------------------------------------------------- */
let currentLang = "en";
let currentTheme = "light";
let currentShlokaIndex = 0;
let sessionHistory = [];
let favorites = [];
let shuffledQueue = []; // ADDED: Shuffled queue for New Wisdom
let settings = {
  speechRate: 0.9,
  speechVolume: 0.8
};

// Speech synthesis state
let utterance = null;
let isPlaying = false;
let isPaused = false;
let speechInitialized = false;

/* -------------------------------------------------------------------------- */
/*  SHUFFLE UTILITY FUNCTIONS                                                 */
/* -------------------------------------------------------------------------- */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function refillShuffledQueue() {
  shuffledQueue = appData.shlokas.map((_, idx) => idx);
  shuffleArray(shuffledQueue);
  console.log('Shuffled queue refilled with', shuffledQueue.length, 'indices');
}

/* -------------------------------------------------------------------------- */
/*  DOM ELEMENTS                                                              */
/* -------------------------------------------------------------------------- */
const els = {};

function cacheElements() {
  els.sessionTitle = document.getElementById("sessionTitle");
  els.sessionDate = document.getElementById("sessionDate");
  els.shlokaText = document.getElementById("shlokaText");
  els.interpretation = document.getElementById("interpretation");
  els.playPauseBtn = document.getElementById("playPauseBtn");
  els.replayBtn = document.getElementById("replayBtn");
  els.newWisdomBtn = document.getElementById("newWisdomBtn");
  els.favoritesBtn = document.getElementById("favoritesBtn");
  els.progressBar = document.getElementById("progressBar");
  els.waveform = document.querySelector(".waveform");
  els.themeToggle = document.getElementById("themeToggle");
  els.langSelect = document.getElementById("langSelect");
  els.chatLauncher = document.getElementById("chatLauncher");
  els.chatOverlay = document.getElementById("chatOverlay");
  els.chatClose = document.getElementById("chatClose");
  els.chatForm = document.getElementById("chatForm");
  els.chatInput = document.getElementById("chatInput");
  els.chatMessages = document.getElementById("chatMessages");
  els.aiModal = document.getElementById("aiModal");
  els.settingsModal = document.getElementById("settingsModal");
  els.settingsLauncher = document.getElementById("settingsLauncher");
  els.settingsClose = document.getElementById("settingsClose");
  els.settingsSave = document.getElementById("settingsSave");
  els.speechRate = document.getElementById("speechRate");
  els.speechVolume = document.getElementById("speechVolume");
  els.streakInfo = document.getElementById("streakInfo");
  els.archiveList = document.getElementById("archiveList");
  
  console.log('Elements cached:', Object.keys(els).filter(key => els[key]).length);
}

/* -------------------------------------------------------------------------- */
/*  UTILITY FUNCTIONS                                                         */
/* -------------------------------------------------------------------------- */
function t(key) {
  const langPack = appData.ui[currentLang] || appData.ui.en;
  return langPack[key] || key;
}

function isCurrentShlokaFavorited() {
  return favorites.includes(appData.shlokas[currentShlokaIndex].id);
}

/* -------------------------------------------------------------------------- */
/*  SPEECH SYNTHESIS FUNCTIONS                                                */
/* -------------------------------------------------------------------------- */
function initSpeechSynthesis() {
  if (!window.speechSynthesis) {
    console.error('Speech synthesis not supported');
    return false;
  }
  
  speechInitialized = true;
  console.log('Speech synthesis initialized');
  return true;
}

function buildNarrationText() {
  const shloka = appData.shlokas[currentShlokaIndex];
  let text = '';
  
  if (currentLang === 'sa') {
    text = `${shloka.sanskrit}. `;
  } else if (currentLang === 'ja') {
    text = `${shloka.japanese}. `;
  } else if (currentLang === 'ko') {
    text = `${shloka.korean}. `;
  }
  
  text += `${shloka.english}. ${shloka.interpretation}`;
  return text;
}

function getVoiceForLanguage() {
  const voices = window.speechSynthesis.getVoices();
  if (!voices.length) return null;
  
  let langCode = currentLang;
  if (currentLang === 'sa') langCode = 'en';
  
  const matchingVoice = voices.find(voice => voice.lang.startsWith(langCode));
  return matchingVoice || voices[0];
}

function startSpeech() {
  console.log('Starting speech synthesis...');
  
  window.speechSynthesis.cancel();
  
  const text = buildNarrationText();
  console.log('Text to speak:', text.substring(0, 100) + '...');
  
  utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = getVoiceForLanguage();
  utterance.rate = settings.speechRate;
  utterance.pitch = 1.0;
  utterance.volume = settings.speechVolume;
  
  // Immediate UI feedback
  isPlaying = true;
  isPaused = false;
  updatePlaybackUI();
  startWaveformAnimation();
  
  utterance.onstart = () => {
    console.log('Speech started');
    addChatMessage("🎵 Audio playback started! Enjoy your moment of mindfulness.");
  };
  
  utterance.onpause = () => {
    console.log('Speech paused');
    isPaused = true;
    updatePlaybackUI();
    stopWaveformAnimation();
  };
  
  utterance.onresume = () => {
    console.log('Speech resumed');
    isPaused = false;
    updatePlaybackUI();
    startWaveformAnimation();
  };
  
  utterance.onend = () => {
    console.log('Speech ended');
    isPlaying = false;
    isPaused = false;
    updatePlaybackUI();
    stopWaveformAnimation();
    resetProgress();
    addChatMessage("✨ Session complete! How did that wisdom resonate with you?");
  };
  
  utterance.onerror = (event) => {
    console.error('Speech error:', event);
    isPlaying = false;
    isPaused = false;
    updatePlaybackUI();
    stopWaveformAnimation();
    addChatMessage("⚠️ Audio playback encountered an issue. This might be due to browser restrictions. Try interacting with the page first, then click play again.");
  };
  
  window.speechSynthesis.speak(utterance);
  startProgressTracking();
}

let progressInterval = null;
function startProgressTracking() {
  if (progressInterval) clearInterval(progressInterval);
  
  let startTime = Date.now();
  let estimatedDuration = utterance ? utterance.text.length * 60 : 30000;
  
  progressInterval = setInterval(() => {
    if (!isPlaying || isPaused) return;
    
    const elapsed = Date.now() - startTime;
    const progress = Math.min((elapsed / estimatedDuration) * 100, 95);
    
    updateProgress(progress);
    
    // Complete progress when speech ends
    if (progress >= 95) {
      updateProgress(100);
      setTimeout(() => {
        if (!isPlaying) resetProgress();
      }, 1000);
    }
  }, 100);
}

function resetProgress() {
  if (progressInterval) {
    clearInterval(progressInterval);
    progressInterval = null;
  }
  updateProgress(0);
}

function updateProgress(percent) {
  if (els.progressBar) {
    els.progressBar.style.width = `${percent}%`;
  }
}

/* -------------------------------------------------------------------------- */
/*  WAVEFORM ANIMATION                                                        */
/* -------------------------------------------------------------------------- */
function startWaveformAnimation() {
  if (els.waveform) {
    els.waveform.classList.add('is-playing');
  }
}

function stopWaveformAnimation() {
  if (els.waveform) {
    els.waveform.classList.remove('is-playing');
  }
}

/* -------------------------------------------------------------------------- */
/*  UI UPDATE FUNCTIONS                                                       */
/* -------------------------------------------------------------------------- */
function updatePlaybackUI() {
  if (els.playPauseBtn) {
    if (isPlaying && !isPaused) {
      els.playPauseBtn.textContent = t('pause');
      els.playPauseBtn.classList.add('btn--primary');
      els.playPauseBtn.classList.remove('btn--secondary');
    } else {
      els.playPauseBtn.textContent = t('play');
      els.playPauseBtn.classList.remove('btn--primary');
      els.playPauseBtn.classList.add('btn--primary'); // Keep primary for visibility
    }
  }
  
  // Update session status
  if (els.sessionDate) {
    if (isPlaying && !isPaused) {
      els.sessionDate.textContent = t('playing');
      els.sessionDate.className = 'status status--success';
    } else {
      els.sessionDate.textContent = new Date().toLocaleDateString(undefined, {
        year: "numeric", month: "long", day: "numeric"
      });
      els.sessionDate.className = 'status status--info';
    }
  }
}

function updateFavoritesUI() {
  if (els.favoritesBtn) {
    const isFavorited = isCurrentShlokaFavorited();
    els.favoritesBtn.textContent = t(isFavorited ? 'favorited' : 'favorite');
    els.favoritesBtn.classList.toggle('favorited', isFavorited);
  }
}

function renderContent() {
  console.log('Rendering content for shloka index:', currentShlokaIndex);
  
  if (els.sessionTitle) els.sessionTitle.textContent = t("today");
  
  const shloka = appData.shlokas[currentShlokaIndex];
  if (els.shlokaText) {
    if (currentLang === "sa") {
      els.shlokaText.innerHTML = shloka.sanskrit.replace(/\n/g, "<br>");
    } else if (currentLang === "ja") {
      els.shlokaText.textContent = shloka.japanese;
    } else if (currentLang === "ko") {
      els.shlokaText.textContent = shloka.korean;
    } else {
      els.shlokaText.textContent = shloka.english;
    }
  }
  
  if (els.interpretation) {
    els.interpretation.textContent = shloka.interpretation;
  }
  
  updatePlaybackUI();
  updateFavoritesUI();
  
  if (els.replayBtn) els.replayBtn.textContent = t("replay");
  if (els.newWisdomBtn) els.newWisdomBtn.textContent = t("newWisdom");
  
  if (els.streakInfo) els.streakInfo.textContent = "🕯️ 7-day Streak";
  
  const archiveHeader = document.querySelector("#archiveCard h3");
  if (archiveHeader) archiveHeader.textContent = t("archive");
  
  console.log('Content rendered successfully');
}

function updateArchive() {
  if (!els.archiveList) return;
  
  els.archiveList.innerHTML = '';
  
  if (sessionHistory.length === 0) {
    const li = document.createElement('li');
    li.className = 'archive-item';
    li.innerHTML = `
      <div>
        <p style="font-style: italic; color: var(--color-text-secondary);">Your mindfulness journey begins here. Play some wisdom to build your archive!</p>
      </div>
    `;
    els.archiveList.appendChild(li);
    return;
  }
  
  sessionHistory.slice(-5).reverse().forEach((session, index) => {
    const li = document.createElement('li');
    li.className = 'archive-item';
    if (favorites.includes(session.shlokaId)) {
      li.classList.add('favorited');
    }
    
    const shloka = appData.shlokas.find(s => s.id === session.shlokaId);
    const preview = shloka ? shloka.english.substring(0, 50) + '...' : 'Unknown verse';
    const favoriteIcon = favorites.includes(session.shlokaId) ? '💖' : '';
    
    li.innerHTML = `
      <div>
        <strong>${session.date} ${favoriteIcon}</strong>
        <p style="font-size: var(--font-size-sm); color: var(--color-text-secondary); margin: var(--space-4) 0 0 0;">${preview}</p>
      </div>
      <button class="btn btn--secondary btn--sm" onclick="loadSession(${session.shlokaId})">Replay</button>
    `;
    
    els.archiveList.appendChild(li);
  });
}

function addToHistory() {
  const session = {
    id: Date.now(),
    shlokaId: appData.shlokas[currentShlokaIndex].id,
    date: new Date().toLocaleDateString(),
    timestamp: Date.now()
  };
  
  // Avoid duplicates of the same shloka on the same day
  const today = session.date;
  const existingToday = sessionHistory.find(s => s.date === today && s.shlokaId === session.shlokaId);
  
  if (!existingToday) {
    sessionHistory.push(session);
    updateArchive();
  }
}

function loadSession(shlokaId) {
  const shlokaIndex = appData.shlokas.findIndex(s => s.id === shlokaId);
  if (shlokaIndex !== -1) {
    currentShlokaIndex = shlokaIndex;
    
    if (isPlaying) {
      window.speechSynthesis.cancel();
      isPlaying = false;
      isPaused = false;
      stopWaveformAnimation();
      resetProgress();
    }
    
    renderContent();
    addChatMessage(`📜 Loaded previous session: "${appData.shlokas[currentShlokaIndex].english.substring(0, 40)}..."`);
  }
}

window.loadSession = loadSession;

/* -------------------------------------------------------------------------- */
/*  SETTINGS FUNCTIONS                                                        */
/* -------------------------------------------------------------------------- */
function updateSettingsUI() {
  if (els.speechRate) els.speechRate.value = settings.speechRate;
  if (els.speechVolume) els.speechVolume.value = settings.speechVolume;
}

function saveSettings() {
  if (els.speechRate) settings.speechRate = parseFloat(els.speechRate.value);
  if (els.speechVolume) settings.speechVolume = parseFloat(els.speechVolume.value);
  
  addChatMessage("⚙️ Settings saved successfully! Changes will apply to new audio playback.");
  
  if (els.settingsModal) {
    els.settingsModal.classList.add('hidden');
  }
}

/* -------------------------------------------------------------------------- */
/*  FAVORITES FUNCTIONS                                                       */
/* -------------------------------------------------------------------------- */
function toggleFavorite() {
  const currentShlokaId = appData.shlokas[currentShlokaIndex].id;
  const index = favorites.indexOf(currentShlokaId);
  
  if (index === -1) {
    favorites.push(currentShlokaId);
    addChatMessage("💖 Added to favorites! This wisdom will be marked in your archive.");
  } else {
    favorites.splice(index, 1);
    addChatMessage("Removed from favorites.");
  }
  
  updateFavoritesUI();
  updateArchive();
}

/* -------------------------------------------------------------------------- */
/*  EVENT HANDLERS                                                            */
/* -------------------------------------------------------------------------- */
function handlePlayPause() {
  console.log('Play/Pause clicked');
  
  if (!speechInitialized) {
    if (!initSpeechSynthesis()) {
      addChatMessage('🚫 Speech synthesis not available in this browser. Please try a different browser like Chrome or Firefox.');
      return;
    }
  }
  
  if (isPlaying && !isPaused) {
    window.speechSynthesis.pause();
  } else if (isPlaying && isPaused) {
    window.speechSynthesis.resume();
  } else {
    addToHistory(); // Add to history when starting new playback
    startSpeech();
  }
}

function handleReplay() {
  console.log('Replay clicked');
  window.speechSynthesis.cancel();
  resetProgress();
  setTimeout(() => {
    startSpeech();
  }, 100);
}

// UPDATED: New Wisdom handler with shuffled queue
function handleNewWisdom() {
  console.log('New Wisdom clicked - starting process');
  
  // Show loading modal
  if (els.aiModal) {
    els.aiModal.classList.remove('hidden');
    console.log('Modal shown');
  }
  
  // Stop any current speech
  if (isPlaying) {
    window.speechSynthesis.cancel();
    isPlaying = false;
    isPaused = false;
    stopWaveformAnimation();
    resetProgress();
  }
  
  // Add current session to history before changing
  addToHistory();
  
  // Process new wisdom after a delay
  setTimeout(() => {
    console.log('Processing new wisdom...');
    
    // If queue empty, refill it
    if (shuffledQueue.length === 0) {
      refillShuffledQueue();
      console.log('Shuffled queue was empty; refilled');
    }
    
    // Get next shloka index from shuffled queue
    const newIndex = shuffledQueue.shift();
    console.log('New shloka index from shuffled queue:', newIndex);
    currentShlokaIndex = newIndex;
    
    // Update content with new shloka
    renderContent();
    
    // Hide loading modal
    if (els.aiModal) {
      els.aiModal.classList.add('hidden');
      console.log('Modal hidden');
    }
    
    // Add chat message about new wisdom
    addChatMessage(`✨ New wisdom revealed: "${appData.shlokas[currentShlokaIndex].english.substring(0, 50)}..."`);
    
    console.log('New wisdom process completed');
    
  }, 1800);
}

function handleThemeToggle() {
  console.log('Theme toggle clicked');
  currentTheme = currentTheme === 'light' ? 'dark' : 'light';
  document.documentElement.setAttribute('data-color-scheme', currentTheme);
  
  if (els.themeToggle) {
    els.themeToggle.textContent = currentTheme === 'light' ? '🌓 Dark' : '☀️ Light';
  }
  
  addChatMessage(`🎨 Theme switched to ${currentTheme} mode. How does this feel for your practice?`);
  console.log('Theme changed to:', currentTheme);
}

function handleLanguageChange(newLang) {
  console.log('Language changed to:', newLang);
  currentLang = newLang;
  
  if (isPlaying) {
    window.speechSynthesis.cancel();
    isPlaying = false;
    isPaused = false;
    stopWaveformAnimation();
    resetProgress();
  }
  
  renderContent();
  
  const langNames = {
    en: "English",
    sa: "Sanskrit", 
    ja: "Japanese",
    ko: "Korean"
  };
  
  addChatMessage(`🌍 Language switched to ${langNames[newLang]}. The interface and narration will now use this language.`);
}

/* -------------------------------------------------------------------------- */
/*  CHAT FUNCTIONS                                                            */
/* -------------------------------------------------------------------------- */
function addChatMessage(text, isUser = false) {
  if (!els.chatMessages) return;
  
  const div = document.createElement("div");
  div.className = `chat-message chat-message--${isUser ? "user" : "bot"}`;
  div.textContent = text;
  els.chatMessages.appendChild(div);
  els.chatMessages.scrollTop = els.chatMessages.scrollHeight;
}

function handleChatSubmit(e) {
  e.preventDefault();
  const msg = els.chatInput.value.trim();
  if (!msg) return;
  
  addChatMessage(msg, true);
  els.chatInput.value = "";
  
  setTimeout(() => {
    const replies = [
      "Breathe deeply and let peace flow through you. 🌸",
      "Every moment is a chance to find calm within. ✨",
      "Your inner wisdom knows the way to serenity. 🕯️",
      "Let go of worry, embrace the present moment. 🧘‍♀️",
      "True peace comes from within, not from outside circumstances. 💫",
      "The Bhagavad Gita teaches us to find balance in all things. ⚖️",
      "Like a lotus flower, rise above the muddy waters of confusion. 🪷",
      "Your soul already knows what it needs to hear today. 💖",
      "In stillness, you will find the answers you seek. 🌙",
      "Each breath is a opportunity to return to your center. 🌿"
    ];
    addChatMessage(replies[Math.floor(Math.random() * replies.length)]);
  }, 1200);
}

/* -------------------------------------------------------------------------- */
/*  EVENT BINDING                                                             */
/* -------------------------------------------------------------------------- */
function bindEvents() {
  console.log('Binding events...');
  
  if (els.playPauseBtn) {
    els.playPauseBtn.addEventListener('click', handlePlayPause);
    console.log('Play/pause button bound');
  }
  
  if (els.replayBtn) {
    els.replayBtn.addEventListener('click', handleReplay);
    console.log('Replay button bound');
  }
  
  if (els.newWisdomBtn) {
    els.newWisdomBtn.addEventListener('click', handleNewWisdom);
    console.log('New Wisdom button bound');
  }
  
  if (els.favoritesBtn) {
    els.favoritesBtn.addEventListener('click', toggleFavorite);
    console.log('Favorites button bound');
  }
  
  if (els.themeToggle) {
    els.themeToggle.addEventListener('click', handleThemeToggle);
    console.log('Theme toggle bound');
  }
  
  if (els.langSelect) {
    els.langSelect.addEventListener('change', (e) => {
      handleLanguageChange(e.target.value);
    });
    console.log('Language selector bound');
  }
  
  if (els.chatLauncher) {
    els.chatLauncher.addEventListener('click', () => {
      els.chatOverlay.classList.add('open');
      setTimeout(() => els.chatInput?.focus(), 100);
    });
  }
  
  if (els.chatClose) {
    els.chatClose.addEventListener('click', () => {
      els.chatOverlay.classList.remove('open');
    });
  }
  
  if (els.chatForm) {
    els.chatForm.addEventListener('submit', handleChatSubmit);
  }
  
  if (els.settingsLauncher) {
    els.settingsLauncher.addEventListener('click', () => {
      els.settingsModal.classList.remove('hidden');
      updateSettingsUI();
    });
  }
  
  if (els.settingsClose) {
    els.settingsClose.addEventListener('click', () => {
      els.settingsModal.classList.add('hidden');
    });
  }
  
  if (els.settingsSave) {
    els.settingsSave.addEventListener('click', saveSettings);
  }
  
  // Close modals when clicking outside
  if (els.settingsModal) {
    els.settingsModal.addEventListener('click', (e) => {
      if (e.target === els.settingsModal) {
        els.settingsModal.classList.add('hidden');
      }
    });
  }
  
  if (els.aiModal) {
    els.aiModal.addEventListener('click', (e) => {
      if (e.target === els.aiModal) {
        els.aiModal.classList.add('hidden');
      }
    });
  }
  
  // Initialize speech synthesis on user interaction
  let userHasInteracted = false;
  const initOnInteraction = () => {
    if (!userHasInteracted) {
      userHasInteracted = true;
      initSpeechSynthesis();
      console.log('Speech synthesis initialization triggered');
    }
  };
  
  document.addEventListener('click', initOnInteraction);
  document.addEventListener('touchstart', initOnInteraction);
  
  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    if (e.target.tagName === 'INPUT') return;
    
    switch(e.key) {
      case ' ':
        e.preventDefault();
        handlePlayPause();
        break;
      case 'r':
        e.preventDefault();
        handleReplay();
        break;
      case 'n':
        e.preventDefault();
        handleNewWisdom();
        break;
      case 'f':
        e.preventDefault();
        toggleFavorite();
        break;
    }
  });
  
  console.log('All events bound successfully');
}

/* -------------------------------------------------------------------------- */
/*  INITIALIZATION                                                            */
/* -------------------------------------------------------------------------- */
function init() {
  console.log('Initializing ZenCast...');
  
  cacheElements();
  refillShuffledQueue(); // ADDED: Initialize shuffled queue
  renderContent();
  bindEvents();
  
  // Initialize with some sample history for demonstration
  sessionHistory = [
    {
      id: 1,
      shlokaId: 1,
      date: "July 29, 2025",
      timestamp: Date.now() - 2 * 24 * 60 * 60 * 1000
    },
    {
      id: 2,
      shlokaId: 3,
      date: "July 30, 2025",
      timestamp: Date.now() - 24 * 60 * 60 * 1000
    }
  ];
  
  // Initialize some favorites
  favorites = [3];
  
  updateArchive();
  
  setTimeout(() => {
    addChatMessage("🙏 Welcome to ZenCast! I'm your mindfulness companion. Click the large play button to hear today's wisdom, or explore the features below.");
    
    setTimeout(() => {
      addChatMessage("✨ Pro tip: Use keyboard shortcuts - Spacebar (Play/Pause), N (New Wisdom), F (Favorite), R (Replay). Your archive will build as you explore!");
    }, 3000);
    
  }, 1000);
  
  console.log('ZenCast initialized successfully');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// Export for potential external use
window.ZenCast = {
  loadSession,
  currentShlokaIndex: () => currentShlokaIndex,
  isPlaying: () => isPlaying,
  favorites: () => [...favorites]
};
