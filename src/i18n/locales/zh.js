/* zh strings. Keys mirror en.js exactly (npm run check:locales). */

export default {
  "nav": {
    "projects": "项目",
    "about": "关于",
    "contact": "联系",
    "language": "语言",
    "theme": "切换主题",
    "skip": "跳至主要内容",
    "primary": "主导航",
    "work": "客户作品"
  },
  "home": {
    "eyebrow": "全栈开发者 · 多伦多 · 正在求职",
    "headline": "我做软件，就像以前盖房子一样：按规范、按时交付、经久耐用。",
    "lede": "我是 Xenofon Gkioka，使用 React、TypeScript 和 C#/.NET 的全栈开发者。我在哥本哈根的 Mercell 交付过上线功能，为客户做了两个正在运行的网站，并在自己搭建和维护的服务器上运行自己的项目。",
    "ctaWork": "查看在线作品",
    "ctaProjects": "全部项目",
    "ctaContact": "联系我",
    "live": "在线",
    "liveLabel": "正在运行",
    "liveTitle": "现在就能打开的作品",
    "liveIntro": "两个客户网站，以及两个运行在我自己服务器上的服务。下面每个链接都是真实的公开地址。",
    "visit": "打开",
    "caseStudy": "案例",
    "details": "详情",
    "kinds": {
      "client": "客户网站",
      "server": "运行在我的服务器上"
    },
    "cards": {
      "azclean": {
        "title": "AZ Clean",
        "note": "为希腊雅典一家沙发和床垫清洁公司制作的网站。"
      },
      "way": {
        "title": "WAY Empowerment",
        "note": "为一家支持肯尼亚妇女和青年的志愿者非政府组织重建的网站。"
      },
      "tasks": {
        "title": "TaskManager API",
        "note": "基于 ASP.NET Core 和 PostgreSQL 的 REST API，附带交互式 Swagger 文档。"
      },
      "classifier": {
        "title": "Resume Classifier",
        "note": "用 Python 编写的机器学习服务，把简历文本分到五个职业类别。"
      }
    },
    "hostLabel": "运行方式",
    "hostTitle": "托管在我自己管理的硬件上",
    "hostIntro": "这些服务运行在一台被我改造成家用服务器的旧笔记本上，按生产环境的方式配置，只是规模更小。",
    "hostPoints": [
      "路由器上不开放任何端口：流量通过出站的 Cloudflare Tunnel 进入。",
      "每次推送到 main 都会构建、扫描并签名容器镜像，服务器在部署前会校验签名。",
      "运行监控、手机告警，以及通过真实恢复来验证的备份。"
    ],
    "hostCta": "服务器是怎么搭建的",
    "featuredLabel": "精选",
    "featuredTitle": "一个在此运行的 C 程序",
    "featuredBody": "这个列车调车场校验程序用 C 语言编写，并以 MSTest 进行测试。由于所有控制台输入输出都隔离在 main.c 中，逻辑层可以干净地编译为 WebAssembly——于是测试套件所验证的那份代码，就直接在这个页面中运行。没有任何部分是用 JavaScript 重新实现的。",
    "featuredCta": "打开演示"
  },
  "projects": {
    "label": "项目",
    "note": "竣工图",
    "title": "精选作品",
    "intro": "点击任意项目查看详细说明，若有可运行的演示，也可以直接在本页体验。",
    "open": "打开",
    "repo": "查看仓库",
    "liveDemo": "在线演示",
    "alsoLabel": "其他作品",
    "alsoTitle": "小型项目",
    "stack": "技术栈",
    "role": "角色",
    "source": "源码",
    "close": "关闭",
    "liveNote": "由 C 编译为 WebAssembly",
    "apiNote": "ASP.NET Core 与 PostgreSQL，每次 push 都会验证",
    "arenaNote": "从 C++ 编译为 WebAssembly",
    "items": {
      "train-yard-manager": {
        "title": "列车调车场管理系统",
        "role": "Seneca Polytechnic 小组项目",
        "summary": "使用 C 语言实现的车厢清单与安全校验系统。强制执行重量限制、机车牵引能力和车厢类型规则，并由测试套件驱动同一逻辑层。",
        "body": [
          "只有满足一整套编挂与载重规则，列车才被允许驶离调车场。该系统对调车场的车厢清单进行建模，并在放行前依据这些规则对列车进行校验。",
          "真正有意思的约束是结构性的，而非算法性的：所有机车必须编在车头，货物重量不能超过机车提供的牵引力，木材车厢和油罐车厢不能相邻编挂，且第一节货运车厢不能是油罐车。移除一节车厢时必须重新校验整列车，因为拿掉一节车厢可能会使剩下的编组失效。",
          "所有控制台输入输出都隔离在 main.c 中，因此 train_yard.c 是纯逻辑代码，里面完全没有 printf 或 scanf。正是这种分离让同一批函数可以被测试套件直接调用，也正因如此，浏览器演示才得以实现——C 代码被编译为 WebAssembly 并直接调用，没有任何部分是用 JavaScript 重新实现的。"
        ]
      },
      "taskmanager-api": {
        "title": "TaskManager REST API",
        "role": "个人项目",
        "summary": "基于 EF Core 和 PostgreSQL 的容器化 REST API，写操作需要密钥，签名镜像由我的服务器自动部署。",
        "body": [
          "一个待办事项模型的 REST API，用来实际练习 ASP.NET Core 请求管道和 Entity Framework Core。它运行在我的家用服务器上，在 tasks.xgbuilds.dev 提供交互式 Swagger 文档。",
          "数据库采用代码优先：由 EF Core 生成迁移来创建 PostgreSQL 表结构。请求绑定到 DTO 而不是实体本身，调用方无法自行指定 id 去覆盖不属于自己的数据。",
          "读操作公开；写操作需要 API 密钥，并以恒定时间比较。每次推送到 main 都会在真实的 PostgreSQL 上运行接口契约测试，然后构建、扫描并签名服务器要部署的镜像。"
        ]
      },
      "inventory-crud": {
        "title": "库存 CRUD 管理系统",
        "role": "课程项目（拓展）",
        "summary": "基于 ASP.NET Core MVC 的类别与供应商管理——使用 Razor 视图、视图模型，以及针对 SQL Server 的 EF Core 迁移。",
        "body": [
          "一个服务端渲染的 MVC 应用，覆盖两个关联实体的完整增删改查流程。",
          "目的是完整理解 MVC 模式：路由如何进入控制器、控制器如何向 Razor 视图传递视图模型而非实体本身，以及 EF Core 迁移如何让 SQL Server 架构与模型保持同步。"
        ]
      },
      "arenacore": {
        "title": "ArenaCore RPG 引擎",
        "role": "课程项目",
        "summary": "围绕抽象战斗单位层级构建的 C++ 引擎，运用了三法则（Rule of Three）、运算符重载和手动内存管理。",
        "body": [
          "一个小型回合制竞技场，用来实践 C++ 面向对象的基本功：抽象的战斗单位接口、具体的 Warrior 和 Mage 子类，以及通过原始指针持有参赛者名单的 Arena 容器。",
          "由于 Arena 直接持有堆内存，它必须明确对拷贝行为的处理方式。它选择直接删除拷贝构造函数和拷贝赋值运算符，而不是编写深拷贝，这样可以让所有权关系保持清晰无歧义。"
        ]
      },
      "portfolio": {
        "title": "这个作品集网站",
        "role": "个人项目",
        "summary": "你正在浏览的这个网站。基于 React 和 Vite 构建，配有手写的 CSS 设计系统，每次推送都会通过 Actions 工作流部署到 GitHub Pages。",
        "body": [
          "没有使用任何 UI 框架或组件库——设计系统由一组 CSS 自定义属性构成，每个组件都是纯粹的 JSX。",
          "部署通过 GitHub Actions 工作流完成：安装依赖、构建并发布产物。无障碍性使用 axe-core 检测，目标是零违规，而不是某个分数达标即可。"
        ]
      },
      "resume-classifier": {
        "title": "Resume Classifier API",
        "role": "个人项目",
        "summary": "用 TF-IDF 和逻辑回归把简历文本分到五个职业类别，作为 API 运行在我的家用服务器上。",
        "body": [
          "一个 scikit-learn 流水线（清洗、TF-IDF 特征、逻辑回归），通过 FastAPI 提供服务。它用生成的语料训练，因为真实简历属于个人数据。",
          "第一版生成器给每个职位各自独有的词汇，模型得到了完美的 1.00，但这衡量的是数据集而不是模型。现在各领域共享常用语和工具，45% 的简历会借用其他领域的一句话。在生成文本上的准确率约为 0.98：只证明整个流水线能端到端运行，仅此而已。",
          "每个标签都附带置信度。无关文本只有约 22%，几乎等于五选一 20% 的随机水平，也就是模型在说它不知道。"
        ]
      },
      "aoda-scan": {
        "title": "aoda-scan",
        "role": "开源",
        "summary": "一个命令行工具，抓取整个网站并按照 WCAG 2.1 AA 和安大略省 AODA 标准评分。",
        "body": [
          "大多数无障碍工具一次只检查一个页面，但网站是作为整体出问题的：同一个有缺陷的组件会在每个用到它的页面上出错。aoda-scan 抓取整个网站，在真实浏览器中用 axe-core 测试每个页面，并汇总为等级、合规百分比和按优先级排列的修复清单。",
          "运行 npx aoda-scan 加上网址即可。它会在终端打印摘要，并在旁边生成一份 HTML 报告。"
        ]
      },
      "agentmesh": {
        "title": "AgentMesh",
        "role": "开源",
        "summary": "一个自托管的控制平台，可在多家模型提供商上运行 AI 编程代理，每个用户使用自己的密钥。",
        "body": [
          "AgentMesh 是你自己运行的软件，而不是需要注册的服务。一个 Next.js 应用和一个 Fastify API 在五家提供商（Claude、Gemini、DeepSeek、Grok 和 Ollama）上运行代理，提供实时记录和逐项审查修改的界面。",
          "安全是设计的核心。提供商密钥存放在加密保险库中，代理运行在永远看不到密钥的隔离容器里，它们的请求经过内部代理，由代理添加密钥、从日志中移除机密并限制请求频率。这也是它没有公开演示的原因。"
        ]
      },
      "home-server": {
        "title": "家用服务器",
        "role": "个人项目",
        "summary": "一台按生产环境管理的旧笔记本：Cloudflare Tunnel、签名的拉取式部署、监控和经过验证的备份。",
        "body": [
          "本站的在线项目运行在一台只有 5.7 GB 内存的旧华硕笔记本上。这个限制决定了每个决策：每个容器都有内存上限，不改动网络设置，也不向互联网开放任何端口。流量通过出站的 Cloudflare Tunnel 进入。",
          "部署采用拉取方式：CI 发布签名镜像，服务器在运行前会核对签名是否来自构建它的那个工作流。每个决策都记录为架构决策记录，每次故障都有不追责的事后复盘。"
        ]
      }
    },
    "also": {
      "c-projects": {
        "title": "C 语言项目",
        "note": "基于人口普查 CSV 数据的婴儿姓名热度查询，以及一个列车车厢清单控制台程序。"
      },
      "cpp-exercises": {
        "title": "C++ 练习",
        "note": "市场交易系统、信用卡校验、餐厅点餐系统、排序算法，以及一个词法存储引擎。"
      },
      "csharp-fundamentals": {
        "title": "C# 基础",
        "note": "涵盖面向对象基础的控制台应用——银行模拟器、图书管理系统、成绩跟踪器。"
      },
      "shell-scripts": {
        "title": "Shell 脚本",
        "note": "用于开发工作流自动化的实用脚本。"
      },
      "ai-tools": {
        "title": "AI 编程工具",
        "note": "关于提示词工程、神经网络基础和软件许可的笔记与参考资料。"
      }
    },
    "liveBadge": "在线",
    "openLive": "在线打开"
  },
  "about": {
    "label": "关于",
    "scale": "比例 1:1",
    "title": "从建筑蓝图到架构图",
    "paragraphs": [
      "我在多伦多的 Seneca Polytechnic 学习计算机编程与分析，来自希腊。我也在加拿大的建筑行业工作过，从施工队员升为工地主管，在真实压力下带团队、赶工期。所以我不会把“快速交付”浪漫化：我管理过的工期里，延误的代价远比一个 Jira 工单具体得多。",
      "我通过雅典 Spinworks 的初级后端职位进入编程行业，使用 PHP、Symfony 和 OroCommerce 开发 B2B 电商系统。我对 B2B SaaS 的兴趣就是从那里开始的，这也让我来到了 Mercell。",
      "今年夏天，我在哥本哈根的采购 SaaS 公司 Mercell 用 React 和 TypeScript 开发前端功能。现在我回到多伦多完成学业，为客户制作网站，并在自己搭建和维护的服务器上运行自己的项目。"
    ],
    "specs": {
      "based": "常驻地",
      "focus": "方向",
      "current": "目前",
      "education": "教育",
      "languages": "语言",
      "status": "状态"
    },
    "specValues": {
      "based": "加拿大 多伦多",
      "focus": "全栈开发 — React、C#/.NET",
      "current": "寻求初级和中级职位",
      "education": "Seneca Polytechnic",
      "languages": "希腊语、英语",
      "status": "加拿大永久居民 · 欧盟公民"
    },
    "experienceLabel": "经历",
    "experienceNote": "立面图",
    "experienceTitle": "工作经历",
    "skillsLabel": "技能",
    "skillsNote": "材料清单",
    "skillsTitle": "常用工具",
    "skillGroups": {
      "languages": "编程语言",
      "frameworks": "框架",
      "data": "数据与基础设施",
      "practice": "工程实践"
    },
    "jobs": {
      "mercell": {
        "title": "软件工程实习生",
        "date": "2026年6月 – 8月",
        "bullets": [
          "使用 React 和 TypeScript 构建了文档库和一个共享文件上传组件，两者均已上线供平台用户使用。",
          "修复了多个关键用户流程中的无障碍违规问题，使其符合 WCAG 标准。",
          "在快节奏的敏捷环境中交付功能——每日站会、迭代规划、待办事项梳理、PI 规划。"
        ]
      },
      "spinworks": {
        "title": "初级后端开发工程师",
        "date": "2021年8月 – 2022年8月",
        "bullets": [
          "使用 PHP、Symfony 和 OroCommerce 构建并维护 B2B 电商平台。",
          "重写了影响高流量店铺页面加载速度的低效数据库查询。",
          "在基于 Git 的工作流中，于生产环境部署前进行代码审查和集成测试。"
        ]
      },
      "canera": {
        "title": "工地监工",
        "date": "2022年9月 – 2026年5月",
        "bullets": [
          "从普通工人晋升为监工；带领施工队伍，在严格的截止日期下协调工期。",
          "在高压环境下负责现场冲突处理和资源调配。"
        ]
      },
      "ssf": {
        "title": "校园协调员",
        "date": "2026年2月 – 至今",
        "bullets": [
          "当选为 Newnham Campus 学生代表，在学生、SSF 和校方之间进行联络协调。"
        ]
      }
    }
  },
  "contact": {
    "label": "联系",
    "note": "签核",
    "title": "在哥本哈根或多伦多有项目要做？",
    "body": "我目前对应届和初级工程师岗位持开放态度，也很乐意聊聊前端开发、.NET，或任何偏底层的技术话题。",
    "email": "邮箱",
    "linkedin": "LinkedIn",
    "github": "GitHub"
  },
  "demo": {
    "intro": "只有满足每一条挂钩和装载规则,列车才能驶出编组场。添加车厢,看看哪些规则会拒绝它们——注意,如果移除某节车厢会让剩下的列车变得不安全,这个移除操作同样会被拒绝。",
    "tryThis": "试试这些",
    "sentenceEnd": "。",
    "rejectedBecause": "重 {weight} 的 {type} 车厢被拒绝——{reason}",
    "removeRejectedBecause": "无法移除第 {i} 节车厢——{reason}",
    "reasons": {
      "none": "已接受",
      "nullTrain": "没有列车",
      "trainFull": "列车已达到 50 节车厢的上限",
      "badType": "这不是有效的车厢类型",
      "badWeight": "车厢的重量必须大于零",
      "totalWeight": "列车将超过 20,000 的总重量上限",
      "engineOrder": "机车必须都在最前面,而货运车厢已经挂接",
      "oilFirstFreight": "机车之后的第一节货运车厢不能是油罐车厢",
      "woodOilAdjacent": "这会让木材车厢紧邻油罐车厢",
      "pullCapacity": "货运车厢的重量将超过机车的牵引能力",
      "badIndex": "该位置没有车厢",
      "lastEngine": "列车必须至少保留一节机车"
    },
    "scenarios": {
      "oilFirst": {
        "label": "先挂油罐",
        "rejected": "已拒绝：{reason} 先在机车后面挂一节食品或木材车厢,油罐车厢才能被接受。",
        "accepted": "已接受。"
      },
      "buffer": {
        "label": "移除隔离车厢",
        "rejected": "这是有趣的一例。列车编组为机车、木材、食品、油罐——食品车厢将木材和油罐隔开。移除它会被拒绝：{reason} 规则是对称的,不能搭建的组合也不能被拆解出来。",
        "accepted": "已接受。"
      },
      "capacity": {
        "label": "让机车超载",
        "rejected": "已拒绝：{reason} 总重量和牵引能力是两个独立的限制——这列列车远低于 20,000 的总重量上限,但一节机车只能牵引 5,000。",
        "accepted": "已接受。"
      },
      "engineOrder": {
        "label": "机车放在最后",
        "rejected": "已拒绝：{reason} 只有当机车前面的所有车厢也都是机车时,才能追加机车。",
        "accepted": "已接受。"
      }
    },
    "carType": "车厢类型",
    "weight": "重量",
    "addCar": "添加车厢",
    "reset": "重置",
    "remove": "移除",
    "removeCar": "移除第 {i} 节车厢，{type}，重量 {weight}",
    "cars": "车厢",
    "engines": "机车",
    "totalWeight": "总重量",
    "freightCapacity": "货物 / 牵引力",
    "status": "状态",
    "safe": "SAFE",
    "unsafe": "UNSAFE",
    "loading": "正在加载编译后的校验程序…",
    "failed": "该浏览器无法加载此交互式演示。源代码和测试套件的链接见上方。",
    "added": "已添加 {type} 车厢，重量 {weight}。",
    "rejected": "{type} 车厢（重量 {weight}）已被拒绝——它会违反以下规则之一。",
    "removed": "第 {i} 节车厢已移除。",
    "removeRejected": "第 {i} 节车厢无法移除——移除后剩余的列车编组将不合法。",
    "resetDone": "列车已重置。",
    "rulesTitle": "C 校验程序强制执行的规则",
    "rules": [
      "所有机车必须编在列车最前端。",
      "总重量不能超过 20,000。",
      "货物重量不能超过牵引力（每节机车 5,000）。",
      "木材车厢和油罐车厢不能相邻。",
      "第一节货运车厢不能是油罐车。"
    ],
    "types": {
      "engine": "机车",
      "food": "食品",
      "wood": "木材",
      "oil": "石油"
    }
  },
  "taskDemo": {
    "title": "任务标题",
    "placeholder": "例如：审查 pull request",
    "add": "添加任务",
    "complete": "完成",
    "reopen": "重新打开",
    "delete": "删除",
    "created": "任务已创建 — API 返回了 201，并带有其 location。",
    "rejected": "被拒绝，返回 400 — 任务需要标题。",
    "deleted": "已删除 — API 返回了 204。",
    "waking": "数据库正在唤醒……在免费套餐上空闲时会进入休眠，所以第一次请求需要一点时间。",
    "offline": "目前无法访问在线 API，因此这里展示的是一段录制的会话。源代码和完整的请求日志见上方链接。",
    "unhosted": "这个 API 已在 tasks.xgbuilds.dev 上线：打开它的 Swagger 页面即可亲自调用读取接口。写操作需要 API 密钥，所以下面是一段录制的会话，展示每个接口及其返回的状态码。",
    "transcriptCaption": "针对 API 的已记录请求及每次返回的状态",
    "method": "方法",
    "endpoint": "Endpoint",
    "status": "状态",
    "notesTitle": "这展示了什么",
    "notes": [
      "每个请求都会到达一个由 PostgreSQL 支持的真实 ASP.NET Core 服务，而不是模拟数据。",
      "请求会绑定到 DTO，因此调用方无法设置 id 或创建时间 — 这些都由服务器掌控。",
      "状态码是每个动词应返回的标准状态：创建时返回 201 并带有 location，请求体无效时返回 400，id 未知时返回 404，更新和删除时返回 204。",
      "数据库在空闲时会缩容至零，因此暂停后的第一次请求需要将其唤醒。"
    ]
  },
  "arenaDemo": {
    "loading": "正在加载编译后的竞技场…",
    "failed": "此浏览器无法加载交互式演示。源代码链接在上方。",
    "warrior": "战士",
    "mage": "法师",
    "health": "HP",
    "level": "Lv",
    "damage": "伤害",
    "takeTurn": "进行回合",
    "hint": "升级可以提高伤害、减少受伤，并抢得先手 —— 等级高的一方总是先出手。然后选择对手。",
    "defence": "防御",
    "opponent": "对手",
    "ready": "准备就绪。",
    "reset": "重置",
    "finished": "战斗结束",
    "addPower": "+3 强度",
    "levelUp": "升级",
    "toAct": "行动。",
    "wins": "获胜。",
    "notesTitle": "这展示了什么",
    "notes": [
      "战士和法师由仓库中的 C++ 代码编译而成，并在此以 WebAssembly 形式运行——战斗逻辑并未用 JavaScript 重新实现。",
      "伤害通过抽象基类 Character 分派，因此由哪个子类在行动决定了是叠加技能还是法术强度。",
      "生命值的变化通过该类自身的 operator+= 完成，增加力量则在具体类型上使用 operator+=。",
      "初始数值来自仓库中的花名册文件，因此这里的一场战斗会得出与原生二进制程序相同的数字。"
    ]
  },
  "footer": {
    "drawnBy": "绘制者",
    "location": "位置",
    "contact": "联系",
    "revision": "修订版"
  },
  "notFound": {
    "label": "图纸未找到",
    "title": "图纸上没有这一页",
    "body": "该页面不存在。可能已被重命名，或链接有误。",
    "home": "返回首页",
    "projects": "查看项目"
  },
  "translationNote": "本页面由机器辅助翻译，并经过我尽力认真的校对，但并非专业译者审校。请以英文版本为准。",
  "translationNoteShort": "机器辅助翻译",
  "work": {
    "label": "客户作品",
    "title": "为真实客户做的网站",
    "intro": "我为一家企业和一家非营利组织制作的网站，都已在各自的域名上线。",
    "client": "客户",
    "role": "我的角色",
    "stack": "技术",
    "year": "年份",
    "visit": "打开网站",
    "items": {
      "azclean": {
        "title": "AZ Clean",
        "tagline": "格利法达的沙发与床垫清洁",
        "client": "AZ Clean，雅典格利法达的一家清洁公司",
        "role": "设计、开发、域名与上线",
        "summary": "一个快速的希腊语网站，向雅典南郊的居民说明服务内容和预约方式。",
        "body": [
          "AZ Clean 在整个阿提卡地区上门清洁沙发、床垫、地毯、汽车和船只。这家公司需要一个能出现在本地搜索结果中、并能把手机访问转化为预约的网站。",
          "我用 React 和 Vite 开发了网站，以静态文件的形式发布在 GitHub Pages 上，使用 azclean.gr 域名。我注册了域名、配置了 DNS，并通过站点地图接入 Google Search Console，让页面被收录。"
        ]
      },
      "way": {
        "title": "WAY Empowerment",
        "tagline": "赋能肯尼亚的妇女和青年",
        "client": "WAY（Women and Youth）Empowerment，总部位于丹麦的志愿者非政府组织",
        "role": "重建与重新上线",
        "summary": "重建后的网站清楚说明组织的工作，让捐款、入会和做志愿者都变得简单。",
        "body": [
          "WAY 在肯尼亚为寡妇开展创业项目，为青年开展体育项目。旧网站很难浏览，捐款入口也不明显。",
          "我在该组织现有的 one.com 主机上，把网站重建为定制的 WordPress 区块主题，保留了原有的标志和内容。新网站以使命开篇，每个项目都有独立页面，捐款、入会和志愿服务都只需一次点击。"
        ]
      }
    }
  }
}
