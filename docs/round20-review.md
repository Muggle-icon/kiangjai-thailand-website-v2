# 第二十轮：完整竞品对照与整页阅读层级

日期：2026-10-28。本轮回应完整整页审查要求：先比较三站从首屏到页脚的实际呈现、字体和密度，再修正本页的比例、阅读顺序、辅助信息与共享页脚。保留内容和产品框架；不是仅按单一竞品放大字号，也不更换人物或生成新照片。

**当前记录21个页面场景、4组紧凑产品、8组弹窗、2组FAQ键盘展开及7条动作；静态7页检查、原文重建／SHA断言通过。** [QA摘要](../../round20-preview/qa-summary.json)和完整截图在`../round20-preview/`；线上发布结论以`../round20-preview/release-verification.json`中的commit、CI与实际浏览器记录为准。

## 三站实际观察与适用边界

完整截图、叶子文字／标题／图片的computed metrics保存在[原始指标](../../round20-preview/competitors/type-layout-metrics.json)，[整页对照板](../../round20-preview/competitor-whole-page-board.jpg)保留从首屏至尾部的观察。

| 原官网与实测样本 | 所观察的角色层次 | 对本项目的判断 |
| --- | --- | --- |
| [LINE BK](https://www.linebk.com/th/) [PC整页](../../round20-preview/competitors/linebk-1440.png)／[390整页](../../round20-preview/competitors/linebk-390.png) | 所取产品标题LINESeedSansTH_Bd，PC40px／45px行高，手机25／30；其他标题角色另有24／30等 | 同一站会按角色和断点缩放，不能把PC标题原封放到手机 |
| [Rabbit Cash](https://www.rabbitcash.co.th/) [PC整页](../../round20-preview/competitors/rabbitcash-1440.png)／[390整页](../../round20-preview/competitors/rabbitcash-390.png) | DB AdmanRounded X标题样本40／44，Sarabun正文16／24；另有20、24、28、32等局部角色 | 字体字面和厚度不同；40px DB Adman不等于40px Kanit的视觉面积，不能按数字照搬 |
| [MoneyThunder](https://www.money-thunder.com/) [PC整页](../../round20-preview/competitors/moneythunder-1440.png)／[页脚](../../round20-preview/competitors/moneythunder-footer-1440.png) | orig_kanit_medium特定产品63／64px，普通章38／40px，正文16px；页脚标题20px、细节15–17px | 大字只用于特定利益点，下面仍有常规说明及可读联系信息，不存在一种全站统一大字 |

MoneyThunder的390记录保留固定桌面布局、约980px内容范围，发生裁切／横向超出；该图已明确命名为[moneythunder-desktop-clipped-390.png](../../round20-preview/competitors/moneythunder-desktop-clipped-390.png)，**不作为有效手机字号／密度样本**。其metrics也附该限制。Rabbit部分视觉标题不使用H标签，应读leaves而不是从空headings列表误判“没有标题”。

这里记录观察和本项目设计判断，不把三站业务能力、费率、审批、牌照、照片或字体文件当作Kiangjai资料。三站各有不同规模和字形，本项目选择40／28px章节来自自身页面负载与断点，并非外部强制标准。

## 本轮整页修改

| 区域和原问题 | 当前实现 |
| --- | --- |
| Hero占比与其他章节字号不成体系 | PC560px／手机640px，额度80／64px；标题体系仍保留产品定位与一个明确动作；手机照片CSSscale1.75／origin69%44%，桌面原构图不换 |
| 产品标题和流程／FAQ角色不一致，辅助证据太小 | 三章共享40／28px章节token；图注14px／24px、查看14px／44px触点；240／210px完整原App和宽屏双展示保留 |
| 手机还没理解产品就先面对大截图；费用信息跟随一个Tab隐藏 | 原已审长段按原句边界拆摘要／费用提醒，手机Tab→摘要→App→support；费用提醒／服务范围／申请／FAQ集中共享support，两状态始终可见；Tab仍仅控两个ID |
| 产品说明／支持信息依赖长度居中浮动 | PC顶部对齐，主网格两行、媒体跨行，内容与support分组；紧凑两摘要和媒体各自intrinsic stack保高，inactive仍hidden／inert |
| 页脚公司和安全信息过小但间距偏松 | 事实／安全正文16px／1.7，公司24／22px，底部14px；下载条32px，company32／24px；电话复制同行、联系44px；手机132px品牌与定位同行 |
| 首页优化后支持页尾部仍可能不一致 | 共享footer与tokens适用于首页、安全、隐私及条款；安全完整内容轴和原法律待提供状态保留 |

原Noto正文／Kanit标题UI、四类字重、#44E0F8、1120px轴、48／24／20px边距和原交互合同保留。完整原图、Logo、公司资料、FAQ／流程、业务配置和catalog字节不改。builder在原产品段落既有“กรุณาอ่าน”提醒边界拆分，校验边界及重建；不是改写已审产品文案。主图与字体许可见[visual-assets.md](visual-assets.md)。

## 技能执行记录

本轮实际直接阅读本地Impeccable `reference/layout.md`、`reference/typeset.md`、`reference/craft-floor.md`，把间距／分组／字号角色／可读性规则用于人工审查及浏览器QA。**未运行Impeccable自动detector，不将人工检查写成自动通过。**

Vercel Web Interface Guidelines、Anthropic frontend-design、UI UX Pro Max虽然已安装可用，本轮未逐项执行；无新技能安装。现有Kanit／Noto字体与SIL OFL记录保留，没有新下载字体或使用竞品专有字体。

## 本轮实际验收

| 本轮记录 | 当前结果 |
| --- | --- |
| [cases.json](../../round20-preview/cases.json)／21 | 首页／安全／隐私／条款各1440／390／375／360共16；首页1024／760共2；三clean aliases各390共3。无横向溢出、破图或缺失ARIA目标；共享1120px轴、48／24／20px边距及PC240／手机210px完整原图框 |
| [stability.json](../../round20-preview/stability.json)／4 | 紧凑1024／390／375／360，online→repayment→Home键返回，所有geometry／scroll数值差0；共享support始终hidden:false／inert:false，费用提醒、范围、申请与FAQ仍可见 |
| [modals.json](../../round20-preview/modals.json)／8 | 四页各1440／360，before／open／closed几何与scroll差0，关闭恢复company触发器焦点 |
| [disclosures.json](../../round20-preview/disclosures.json)／2 | 首页FAQ键盘1440／360，点击行top差−0.1875／0.125px，行高差0；不扩称本轮另测了全部native披露路径 |
| [interactions.json](../../round20-preview/interactions.json)／7 | 真实待开放下载、HOME原图、图库next还款、步骤03计划图、复制提示、移动菜单、产品锚点 |

下载仍0商店链接／0QR。图库HOME自然尺寸750×1624，下一张为还款2/4；步骤03仍真实loan-plan原图。复制保留电话0812341407及泰语成功提示；移动菜单可开，选择产品后关闭。产品锚点等滚动结束后top为88px；动画中首个读数不是最终位置，不误记为目标偏移。

静态build生成7页，链接／重复ID／JS语法／diff检查通过，浏览器warn／error为空。`work/round20/build-proof.py`对上述JSON、已审产品段落精确重建及catalog／config／HOME／还款PNG的SHA作断言；摘要保留实际原hash。独立原分辨率截图与源码审查未见新增必修，最新44px联系控件已在canonical页面重新截图。

## 比例变化的含义

| 实际区域 | 修改前→后 |
| --- | --- |
| Hero PC／390 | 580→560px／700→640px |
| 页脚PC | 854.7→763.1px |
| 页脚390 | 1465.7→1393.6px |
| 产品390 | 1139→1205px |

页脚在事实字更大的同时收紧分组空隙；手机产品先读摘要、图注和动作更可读，所需高度自然增加。不会把每章压短视为唯一质量指标。与三竞品比较的结论是角色、密度和阅读次序需要有区别，不是全站使用同一种大字号。

以上是当前浏览器视口和独立人工视觉检查，不是物理Android设备认证或完整竞品视觉等同；线上commit／CI／实际浏览器结论仍按本轮release-verification.json记录。历史报告与生成提示词保持原文。
