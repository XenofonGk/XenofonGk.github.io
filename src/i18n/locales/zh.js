/*
 * Source of truth for every user-visible string.
 *
 * Only translatable prose lives here. Structural data that is the same in every
 * language — slugs, repo URLs, stack names, dates, email — stays in src/data.
 *
 * Keys must match exactly across locale files; a missing key falls back to this
 * file rather than rendering empty.
 */

export default {
  nav: {
    projects: '项目',
    about: '关于',
    contact: '联系',
    language: '语言',
    theme: '切换主题',
    skip: '跳至主要内容',
    primary: '主导航',
  },

  home: {
    eyebrow: '多伦多 → 哥本哈根',
    revision: '2026 修订版',
    headlineStart: '我写代码的方式，就像我曾经盖',
    headlineAccent: '房子',
    lede: 'Xenofon Gkioka——全栈开发者，主要使用 C#/.NET、React 和 TypeScript。目前是 Mercell 位于哥本哈根的软件工程实习生，此前在多伦多担任建筑工地监工。',
    tags: ['合规格', '按时交付', '承重'],
    ctaWork: '查看作品',
    ctaAbout: '关于我',
    ctaContact: '联系我',
    dims: [
      { num: '4', lbl: '从业年数' },
      { num: '2', lbl: '工作过的国家数' },
      { num: 'C→WASM', lbl: '编译后可在浏览器运行' },
      { num: '0', lbl: '无障碍违规数' },
    ],
    featuredLabel: '精选',
    featuredNote: '可在浏览器运行',
    featuredTitle: '一个在此运行的 C 程序',
    featuredBody:
      '这个列车调车场校验程序用 C 语言编写，并以 MSTest 进行测试。由于所有控制台输入输出都隔离在 main.c 中，逻辑层可以干净地编译为 WebAssembly——于是测试套件所验证的那份代码，就直接在这个页面中运行。没有任何部分是用 JavaScript 重新实现的。',
    featuredCta: '打开演示',
  },

  projects: {
    label: '项目',
    note: '竣工图',
    title: '精选作品',
    intro:
      '点击任意项目查看详细说明，若有可运行的演示，也可以直接在本页体验。',
    open: '打开',
    repo: '查看仓库',
    liveDemo: '在线演示',
    alsoLabel: '其他作品',
    alsoTitle: '小型项目',
    stack: '技术栈',
    role: '角色',
    source: '源码',
    close: '关闭',
    liveNote: '由 C 编译为 WebAssembly',
    apiNote: 'ASP.NET Core 与 PostgreSQL，每次 push 都会验证',
    arenaNote: '从 C++ 编译为 WebAssembly',

    items: {
      'train-yard-manager': {
        title: '列车调车场管理系统',
        role: 'Seneca Polytechnic 小组项目',
        summary:
          '使用 C 语言实现的车厢清单与安全校验系统。强制执行重量限制、机车牵引能力和车厢类型规则，并由测试套件驱动同一逻辑层。',
        body: [
          '只有满足一整套编挂与载重规则，列车才被允许驶离调车场。该系统对调车场的车厢清单进行建模，并在放行前依据这些规则对列车进行校验。',
          '真正有意思的约束是结构性的，而非算法性的：所有机车必须编在车头，货物重量不能超过机车提供的牵引力，木材车厢和油罐车厢不能相邻编挂，且第一节货运车厢不能是油罐车。移除一节车厢时必须重新校验整列车，因为拿掉一节车厢可能会使剩下的编组失效。',
          '所有控制台输入输出都隔离在 main.c 中，因此 train_yard.c 是纯逻辑代码，里面完全没有 printf 或 scanf。正是这种分离让同一批函数可以被测试套件直接调用，也正因如此，浏览器演示才得以实现——C 代码被编译为 WebAssembly 并直接调用，没有任何部分是用 JavaScript 重新实现的。',
        ],
      },
      'taskmanager-api': {
        title: 'TaskManager REST API',
        role: '个人项目',
        summary:
          '容器化的待办事项 API——使用 Entity Framework Core 的 Code First 迁移生成 PostgreSQL 架构，并通过 Docker Compose 以双服务栈的形式启动。',
        body: [
          '围绕待办事项模型构建的 REST API，目的是亲手实践 ASP.NET Core 的请求管道和 Entity Framework Core，而不是为了交付一个产品。',
          '数据库架构采用 Code First 方式：模型用 C# 定义，再由 EF Core 生成迁移来构建 PostgreSQL 架构。Docker Compose 将 API 和数据库作为同一个技术栈一并启动，因此在一台全新的机器上只需一条命令即可运行整个项目。',
          '请求绑定的是 DTO，而不是直接绑定 entity 本身。如果直接绑定 entity，调用方就能提交自己指定的 id，EF Core 会照单接受，导致一个指向已有记录的请求可能覆盖一条本不该被它触及的记录。连接字符串通过环境变量和 .NET user-secrets 提供，而不会提交到代码仓库中。',
        ],
      },
      'inventory-crud': {
        title: '库存 CRUD 管理系统',
        role: '课程项目（拓展）',
        summary:
          '基于 ASP.NET Core MVC 的类别与供应商管理——使用 Razor 视图、视图模型，以及针对 SQL Server 的 EF Core 迁移。',
        body: [
          '一个服务端渲染的 MVC 应用，覆盖两个关联实体的完整增删改查流程。',
          '目的是完整理解 MVC 模式：路由如何进入控制器、控制器如何向 Razor 视图传递视图模型而非实体本身，以及 EF Core 迁移如何让 SQL Server 架构与模型保持同步。',
        ],
      },
      arenacore: {
        title: 'ArenaCore RPG 引擎',
        role: '课程项目',
        summary:
          '围绕抽象战斗单位层级构建的 C++ 引擎，运用了三法则（Rule of Three）、运算符重载和手动内存管理。',
        body: [
          '一个小型回合制竞技场，用来实践 C++ 面向对象的基本功：抽象的战斗单位接口、具体的 Warrior 和 Mage 子类，以及通过原始指针持有参赛者名单的 Arena 容器。',
          '由于 Arena 直接持有堆内存，它必须明确对拷贝行为的处理方式。它选择直接删除拷贝构造函数和拷贝赋值运算符，而不是编写深拷贝，这样可以让所有权关系保持清晰无歧义。',
        ],
      },
      portfolio: {
        title: '这个作品集网站',
        role: '个人项目',
        summary:
          '你正在浏览的这个网站。基于 React 和 Vite 构建，配有手写的 CSS 设计系统，每次推送都会通过 Actions 工作流部署到 GitHub Pages。',
        body: [
          '没有使用任何 UI 框架或组件库——设计系统由一组 CSS 自定义属性构成，每个组件都是纯粹的 JSX。',
          '部署通过 GitHub Actions 工作流完成：安装依赖、构建并发布产物。无障碍性使用 axe-core 检测，目标是零违规，而不是某个分数达标即可。',
        ],
      },
    },

    also: {
      'c-projects': {
        title: 'C 语言项目',
        note: '基于人口普查 CSV 数据的婴儿姓名热度查询，以及一个列车车厢清单控制台程序。',
      },
      'cpp-exercises': {
        title: 'C++ 练习',
        note: '市场交易系统、信用卡校验、餐厅点餐系统、排序算法，以及一个词法存储引擎。',
      },
      'csharp-fundamentals': {
        title: 'C# 基础',
        note: '涵盖面向对象基础的控制台应用——银行模拟器、图书管理系统、成绩跟踪器。',
      },
      'shell-scripts': {
        title: 'Shell 脚本',
        note: '用于开发工作流自动化的实用脚本。',
      },
      'ai-tools': {
        title: 'AI 编程工具',
        note: '关于提示词工程、神经网络基础和软件许可的笔记与参考资料。',
      },
    },
  },

  about: {
    label: '关于',
    scale: '比例 1:1',
    title: '从建筑蓝图到架构图',
    paragraphs: [
      '我是 Seneca Polytechnic 计算机编程专业的二年级学生，来自希腊，目前往返于多伦多和哥本哈根之间。在专业写代码之前，我在加拿大从事建筑行业——从普通工人做到工地监工，带领施工队伍，在真实的压力下按时完工。正因为有这段经历，我从不会把"快速交付"浪漫化：我管理过的项目时间线，一旦延误的代价可比 Jira 工单上的一行字要实际得多。',
      '我入行编程是从雅典 Spinworks 的初级后端职位开始的，当时使用 PHP、Symfony 和 OroCommerce 开发 B2B 电商系统。也正是从那时起，我对 B2B SaaS 产生了兴趣，这也是我后来加入 Mercell 的原因。',
      '目前我在哥本哈根的采购 SaaS 公司 Mercell 使用 React 和 TypeScript 开发前端功能，同时完成我的学业，并利用业余时间自学 C#/.NET 技术栈。',
    ],
    specs: {
      based: '常驻地',
      focus: '方向',
      current: '目前',
      education: '教育',
      languages: '语言',
      status: '状态',
    },
    specValues: {
      based: '多伦多 / 哥本哈根',
      focus: '全栈开发 — React、C#/.NET',
      current: 'Mercell 软件工程实习生',
      education: 'Seneca Polytechnic',
      languages: '希腊语、英语',
      status: '加拿大永久居民 · 欧盟公民',
    },
    experienceLabel: '经历',
    experienceNote: '立面图',
    experienceTitle: '工作经历',
    skillsLabel: '技能',
    skillsNote: '材料清单',
    skillsTitle: '常用工具',
    skillGroups: {
      languages: '编程语言',
      frameworks: '框架',
      data: '数据与基础设施',
      practice: '工程实践',
    },
    jobs: {
      mercell: {
        title: '软件工程实习生',
        date: '2026年6月 – 至今',
        bullets: [
          '使用 React 和 TypeScript 构建了文档库和一个共享文件上传组件，两者均已上线供平台用户使用。',
          '修复了多个关键用户流程中的无障碍违规问题，使其符合 WCAG 标准。',
          '在快节奏的敏捷环境中交付功能——每日站会、迭代规划、待办事项梳理、PI 规划。',
        ],
      },
      spinworks: {
        title: '初级后端开发工程师',
        date: '2021年8月 – 2022年8月',
        bullets: [
          '使用 PHP、Symfony 和 OroCommerce 构建并维护 B2B 电商平台。',
          '重写了影响高流量店铺页面加载速度的低效数据库查询。',
          '在基于 Git 的工作流中，于生产环境部署前进行代码审查和集成测试。',
        ],
      },
      canera: {
        title: '工地监工',
        date: '2022年9月 – 2026年5月',
        bullets: [
          '从普通工人晋升为监工；带领施工队伍，在严格的截止日期下协调工期。',
          '在高压环境下负责现场冲突处理和资源调配。',
        ],
      },
      ssf: {
        title: '校园协调员',
        date: '2026年2月 – 至今',
        bullets: [
          '当选为 Newnham Campus 学生代表，在学生、SSF 和校方之间进行联络协调。',
        ],
      },
    },
  },

  contact: {
    label: '联系',
    note: '签核',
    title: '在哥本哈根或多伦多有项目要做？',
    body: '我目前对应届和初级工程师岗位持开放态度，也很乐意聊聊前端开发、.NET，或任何偏底层的技术话题。',
    email: '邮箱',
    linkedin: 'LinkedIn',
    github: 'GitHub',
  },

  demo: {
    intro: '只有满足每一条挂钩和装载规则,列车才能驶出编组场。添加车厢,看看哪些规则会拒绝它们——注意,如果移除某节车厢会让剩下的列车变得不安全,这个移除操作同样会被拒绝。',
    tryThis: '试试这些',
    sentenceEnd: '。',
    rejectedBecause: '重 {weight} 的 {type} 车厢被拒绝——{reason}',
    removeRejectedBecause: '无法移除第 {i} 节车厢——{reason}',
    reasons: {
      none: '已接受',
      nullTrain: '没有列车',
      trainFull: '列车已达到 50 节车厢的上限',
      badType: '这不是有效的车厢类型',
      badWeight: '车厢的重量必须大于零',
      totalWeight: '列车将超过 20,000 的总重量上限',
      engineOrder: '机车必须都在最前面,而货运车厢已经挂接',
      oilFirstFreight: '机车之后的第一节货运车厢不能是油罐车厢',
      woodOilAdjacent: '这会让木材车厢紧邻油罐车厢',
      pullCapacity: '货运车厢的重量将超过机车的牵引能力',
      badIndex: '该位置没有车厢',
      lastEngine: '列车必须至少保留一节机车',
    },
    scenarios: {
      oilFirst: {
        label: '先挂油罐',
        rejected: '已拒绝：{reason} 先在机车后面挂一节食品或木材车厢,油罐车厢才能被接受。',
        accepted: '已接受。',
      },
      buffer: {
        label: '移除隔离车厢',
        rejected: '这是有趣的一例。列车编组为机车、木材、食品、油罐——食品车厢将木材和油罐隔开。移除它会被拒绝：{reason} 规则是对称的,不能搭建的组合也不能被拆解出来。',
        accepted: '已接受。',
      },
      capacity: {
        label: '让机车超载',
        rejected: '已拒绝：{reason} 总重量和牵引能力是两个独立的限制——这列列车远低于 20,000 的总重量上限,但一节机车只能牵引 5,000。',
        accepted: '已接受。',
      },
      engineOrder: {
        label: '机车放在最后',
        rejected: '已拒绝：{reason} 只有当机车前面的所有车厢也都是机车时,才能追加机车。',
        accepted: '已接受。',
      },
    },
    carType: '车厢类型',
    weight: '重量',
    addCar: '添加车厢',
    reset: '重置',
    remove: '移除',
    removeCar: '移除第 {i} 节车厢，{type}，重量 {weight}',
    cars: '车厢',
    engines: '机车',
    totalWeight: '总重量',
    freightCapacity: '货物 / 牵引力',
    status: '状态',
    safe: 'SAFE',
    unsafe: 'UNSAFE',
    loading: '正在加载编译后的校验程序…',
    failed: '该浏览器无法加载此交互式演示。源代码和测试套件的链接见上方。',
    added: '已添加 {type} 车厢，重量 {weight}。',
    rejected: '{type} 车厢（重量 {weight}）已被拒绝——它会违反以下规则之一。',
    removed: '第 {i} 节车厢已移除。',
    removeRejected: '第 {i} 节车厢无法移除——移除后剩余的列车编组将不合法。',
    resetDone: '列车已重置。',
    rulesTitle: 'C 校验程序强制执行的规则',
    rules: [
      '所有机车必须编在列车最前端。',
      '总重量不能超过 20,000。',
      '货物重量不能超过牵引力（每节机车 5,000）。',
      '木材车厢和油罐车厢不能相邻。',
      '第一节货运车厢不能是油罐车。',
    ],
    types: {
      engine: '机车',
      food: '食品',
      wood: '木材',
      oil: '石油',
    },
  },

  taskDemo: {
    title: '任务标题',
    placeholder: '例如：审查 pull request',
    add: '添加任务',
    complete: '完成',
    reopen: '重新打开',
    delete: '删除',
    created: '任务已创建 — API 返回了 201，并带有其 location。',
    rejected: '被拒绝，返回 400 — 任务需要标题。',
    deleted: '已删除 — API 返回了 204。',
    waking: '数据库正在唤醒……在免费套餐上空闲时会进入休眠，所以第一次请求需要一点时间。',
    offline: '目前无法访问在线 API，因此这里展示的是一段录制的会话。源代码和完整的请求日志见上方链接。',
    unhosted: '该 API 未部署到公开主机。它通过 Docker Compose 一条命令即可运行，下面的每个 endpoint 都会在每次 push 时针对真实的 PostgreSQL 重新验证 —— 仓库中的 badge 显示最新结果。',
    transcriptCaption: '针对 API 的已记录请求及每次返回的状态',
    method: '方法',
    endpoint: 'Endpoint',
    status: '状态',
    notesTitle: '这展示了什么',
    notes: [
      '每个请求都会到达一个由 PostgreSQL 支持的真实 ASP.NET Core 服务，而不是模拟数据。',
      '请求会绑定到 DTO，因此调用方无法设置 id 或创建时间 — 这些都由服务器掌控。',
      '状态码是每个动词应返回的标准状态：创建时返回 201 并带有 location，请求体无效时返回 400，id 未知时返回 404，更新和删除时返回 204。',
      '数据库在空闲时会缩容至零，因此暂停后的第一次请求需要将其唤醒。',
    ],
  },

  arenaDemo: {
    loading: '正在加载编译后的竞技场…',
    failed: '此浏览器无法加载交互式演示。源代码链接在上方。',
    warrior: '战士',
    mage: '法师',
    health: 'HP',
    level: 'Lv',
    damage: '伤害',
    takeTurn: '进行回合',
    hint: '升级可以提高伤害、减少受伤，并抢得先手 —— 等级高的一方总是先出手。然后选择对手。',
    defence: '防御',
    opponent: '对手',
    ready: '准备就绪。',
    reset: '重置',
    finished: '战斗结束',
    addPower: '+3 强度',
    levelUp: '升级',
    toAct: '行动。',
    wins: '获胜。',
    notesTitle: '这展示了什么',
    notes: [
      '战士和法师由仓库中的 C++ 代码编译而成，并在此以 WebAssembly 形式运行——战斗逻辑并未用 JavaScript 重新实现。',
      '伤害通过抽象基类 Character 分派，因此由哪个子类在行动决定了是叠加技能还是法术强度。',
      '生命值的变化通过该类自身的 operator+= 完成，增加力量则在具体类型上使用 operator+=。',
      '初始数值来自仓库中的花名册文件，因此这里的一场战斗会得出与原生二进制程序相同的数字。',
    ],
  },

  footer: {
    drawnBy: '绘制者',
    location: '位置',
    contact: '联系',
    revision: '修订版',
  },

  notFound: {
    label: '图纸未找到',
    title: '图纸上没有这一页',
    body: '该页面不存在。可能已被重命名，或链接有误。',
    home: '返回首页',
    projects: '查看项目',
  },

  /* Shown in the language menu and the footer whenever a non-verified locale is
     active. Deliberately plain — it is a statement about provenance, not an
     apology. */
  translationNote:
    '本页面由机器辅助翻译，并经过我尽力认真的校对，但并非专业译者审校。请以英文版本为准。',
  translationNoteShort: '机器辅助翻译',
}
