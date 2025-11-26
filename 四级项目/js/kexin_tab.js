// 知乎问答Tab选项卡实现
class TabSystem {
    constructor() {
        // 初始化数据
        this.data = this.initData();
        
        // 初始化DOM元素
        this.initElements();
        
        // 绑定事件
        this.bindEvents();
        
        // 初始化渲染
        this.renderQuestions();
    }
    
    // 初始化数据集合
    initData() {
        return {
            // 嗑儿学数据
            tab1: [
                {
                    id: 1,
                    title: "如何人为引起或者加速一颗恒星的爆炸？",
                    views: "1.8万次浏览",
                    follows: "94人关注"
                },
                {
                    id: 2,
                    title: "「无糖食品」真的更健康吗，如何选择才对？",
                    views: "1.2万次浏览",
                    follows: "132人关注"
                },
                {
                    id: 3,
                    title: "你认为人类创作无法被AI创作替代的原因是什么？",
                    views: "1.2万次浏览",
                    follows: "171人关注"
                },
                {
                    id: 4,
                    title: "如何用一句话解释量子力学？",
                    views: "46.0万次浏览",
                    follows: "442人关注"
                },
                {
                    id: 5,
                    title: "AI时代，提出好问题更重要还是知道真答案更重要？",
                    views: "1.1万次浏览",
                    follows: "147人关注"
                },
                {
                    id: 6,
                    title: "当GPT看起来有意识、对你甜言蜜语时，它究竟是真情流露，还是...",
                    views: "1.1万次浏览",
                    follows: "41人关注"
                },
                {
                    id: 7,
                    title: "作为一名科研人员，你经历过哪些外行觉得高深莫测，其实辛酸又...",
                    views: "4.3万次浏览",
                    follows: "48人关注"
                },
                {
                    id: 8,
                    title: "如何快速看懂食品配料表？",
                    views: "2183次浏览",
                    follows: "28人关注"
                },
                {
                    id: 9,
                    title: "AI是否能成为我们的「赛博大脑」，在记忆存储、信息处理与...",
                    views: "3.6万次浏览",
                    follows: "177人关注"
                }
            ],
            
            // 追答案的人数据
            tab2: [
                {
                    id: 1,
                    title: "当兴趣爱好变成职业是种什么样的体验？",
                    views: "9.6万次浏览",
                    follows: "267人关注"
                },
                {
                    id: 2,
                    title: "有哪些你拍过/看过的美丽的显微照片？",
                    views: "8020次浏览",
                    follows: "37人关注"
                },
                {
                    id: 3,
                    title: "科学领域，人类曾经认为是绝对真理，后来被证明不正确或者不完整的理论有哪些？",
                    views: "2.2万次浏览",
                    follows: "147人关注"
                },
                {
                    id: 4,
                    title: "在科学史上，有没有一项困难的研究在很长时间内停滞不前，却又在短时间内被突破？",
                    views: "7.7万次浏览",
                    follows: "205人关注"
                },
                {
                    id: 5,
                    title: "食品科学从业者在生活中是怎么选择食物的？",
                    views: "84次浏览",
                    follows: "5人关注"
                },
                {
                    id: 6,
                    title: "为了省科研经费，你做过哪些事？",
                    views: "4219次浏览",
                    follows: "6人关注"
                }
            ],
            
            // 专业新知数据
            tab3: [
                {
                    id: 1,
                    title: "太阳在变成红巨星的时候，会不会引力变弱到吞噬不到地球，导致...",
                    views: "2.8万次浏览",
                    follows: "21人关注"
                },
                {
                    id: 2,
                    title: "目前超分辨率成像的几项技术中，哪一项是最优技术？",
                    views: "6.0万次浏览",
                    follows: "53人关注"
                },
                {
                    id: 3,
                    title: "一个地球大小的中子星有多重？",
                    views: "13.1万次浏览",
                    follows: "31人关注"
                },
                {
                    id: 4,
                    title: "月亮阴影部分的边缘曲线是什么函数的图像？",
                    views: "2.6万次浏览",
                    follows: "44人关注"
                },
                {
                    id: 5,
                    title: "看得更小和看得更远，哪个更难？",
                    views: "24次浏览",
                    follows: "1人关注"
                },
                {
                    id: 6,
                    title: "为什么说AI不用智能涌现就能产生危害？",
                    views: "302次浏览",
                    follows: "1人关注"
                },
                {
                    id: 7,
                    title: "从食品科学角度看，被热议的「锅气」究竟是什么？",
                    views: "1.4万次浏览",
                    follows: "32人关注"
                },
                {
                    id: 8,
                    title: "显微镜下有什么东西看起来与想象中完全不同吗？",
                    views: "52次浏览",
                    follows: "3人关注"
                },
                {
                    id: 9,
                    title: "宇宙是怎样诞生一颗新的行星的？",
                    views: "7247次浏览",
                    follows: "10人关注"
                }
            ]
        };
    }
    
    // 初始化DOM元素
    initElements() {
        this.tabItems = document.querySelectorAll('.cheng_tab-item');
        this.tabPanels = document.querySelectorAll('.cheng_tab-panel');
        this.questionLists = {
            tab1: document.getElementById('question-list-1'),
            tab2: document.getElementById('question-list-2'),
            tab3: document.getElementById('question-list-3')
        };
        this.activeTab = 'tab1';
    }
    
    // 绑定事件
    bindEvents() {
        // Tab切换事件
        this.tabItems.forEach(item => {
            item.addEventListener('click', () => {
                this.switchTab(item.dataset.tab);
            });
        });
    }
    
    // 切换Tab
    switchTab(tabId) {
        // 更新Tab项激活状态
        this.tabItems.forEach(item => {
            item.classList.remove('active');
            if (item.dataset.tab === tabId) {
                item.classList.add('active');
            }
        });
        
        // 更新Tab面板激活状态
        this.tabPanels.forEach(panel => {
            panel.classList.remove('active');
            if (panel.id === tabId) {
                panel.classList.add('active');
            }
        });
        
        // 更新当前激活的Tab
        this.activeTab = tabId;
        
        // 渲染对应Tab的问题列表
        this.renderQuestions();
    }
    
    // 渲染问题列表
    renderQuestions() {
        const questions = this.data[this.activeTab];
        const list = this.questionLists[this.activeTab];
        
        // 清空列表
        list.innerHTML = '';
        
        // 生成问题项
        questions.forEach(question => {
            const li = document.createElement('li');
            li.className = 'cheng_question-item';
            li.innerHTML = `
                <div class="cheng_question-info">
                    <h3 class="cheng_question-title">${question.title}</h3>
                    <div class="cheng_question-stats">
                        ${question.views} · ${question.follows}
                    </div>
                </div>
                <button class="cheng_answer-btn">去回答</button>
            `;
            list.appendChild(li);
        });
    }
}

// 页面加载完成后初始化Tab系统
document.addEventListener('DOMContentLoaded', () => {
    new TabSystem();
});