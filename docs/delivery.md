# Kiangjai官网V2交付说明

更新日期：2026-10-26。当前交付为第八轮，独立仓库 `Muggle-icon/kiangjai-thailand-website-v2`，不覆盖旧仓库。本文只记录当前实现，历史设计和验收通过Git版本查看。

## 本轮修正

保留原居中品牌Hero、#44E0F8、额度和主CTA体系，不重新生成整站。用户最新首页原样保存为 `assets/app/home-overview.png`，用于首个深青产品主面和图库第1张；`loan-plan.png`回到步骤03确认详情及可选图库第3张，不再替代首页。

产品区仍以真实首页解释线上申请，以还款图解释银行App扫码还款。银行到账只保留已审文字事实，装饰性的App→银行示意已撤除。产品区增加服务范围和费用两条并列文字链接，分别复用原FAQ F01／F04问题，点击只打开、定位并聚焦原问答；没有新增条件、费率、流程或承诺。

四步与七条FAQ原文、公司事实、安全中心、政策页、单一安全入口及深青页脚保留。所有照片继续禁用，生成候选不进入项目或发布包。

## 文件与维护

| 文件 | 当前职责 |
| --- | --- |
| `src/components/hero.html` | 居中原泰语定位、额度、主下载、待开放提示与免责声明 |
| `src/components/benefits.html` | 真实首页主面、还款次面、到账文字事实和服务范围／费用链接 |
| `src/components/application-steps.html` | 四步原文与步骤03确认详情 |
| `src/components/app-gallery.html` | 首页／还款／贷款计划／可提款首页四图图库 |
| `assets/app/home-overview.png` | 新文件名保存用户最新750×1624完整首页，避免沿用旧资源缓存 |
| `assets/app.js` | 现有交互及 `data-faq-target` 定向展开／定位／聚焦 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | 共享Tokens、首页及支持页样式 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审泰语与公开业务配置，均未改动 |
| `docs/competitor-research.md` | 泰国同类产品官方来源及本轮落地边界 |

继续使用原生HTML/CSS/JS与Python组件构建器；源文件可编辑，构建生成根页面及clean routes。Pages仅发布访客网页与资源，不发布内部文档。

## 图片与信息对应

| 展示 | 图片与用途 |
| --- | --- |
| 线上申请主面／图库1 | `home-overview.png`，真实首页，PC设备224px／手机200px |
| 扫码还款次面／图库2 | `repayment.png`，PC设备142px／手机164px |
| 步骤03详情／图库3 | `loan-plan.png`，金额、期数与确认前信息，不代表首页或到账 |
| 图库4 | `withdrawal-current.png`，额度可用状态，不代表银行到账证明 |
| 旧源保留 | `home-current.png`与`home.png`不再作为主展示图 |

所有App图保持750×1624完整比例，静态展示不作为整图按钮；两个产品面工具分别从图库第1／2张打开。图库保留按钮、方向键、循环页码、Esc与焦点恢复实现，本轮工具起点、切换、键盘与关闭焦点已实测。Hero没有图片或图库工具。

最新首页SHA256：`4df5ce9ddc7ebeea958388c16eab24e31f9df5578cf7464f6aa1a0bd0fde2cc7`。已核对新文件尺寸及SHA与用户最新附件一致，没有裁切、重绘或改写图中文字。

## 设计与业务约束

Hero、60／40产品面和原按钮体系沿用；PC主CTA224×52px、16px字体，手机满宽52px；PC页头描边下载144×44px，手机仅Logo和菜单。图片及帮助工具保持低权重，不使用主CTA表现。共享排版规则见[设计系统](design-system.md)。

已审泰语基线SHA256仍为 `d0a1668f74bab8b29a8d0bb369bcc734d2d0df8f21f1417084f29708a2d8dedc`，配置上限仍为50,000泰铢。服务范围链接精确复用 `710688adb73fea`，费用链接精确复用 `bf2f04aacad8b7`；答案仍为F01／F04原文。没有复制竞品的资格、利率、牌照、审批时效或其他能力。

公司名称沿用已审 **บริษัท ชิง เหอ เทคโนโลยี จำกัด**，注册号0105567184971仅为公司注册信息；无有效牌照与核验地址时不显示许可断言。政策页保留已审待编制状态，不虚构条款或日期。

真实首页中的200,000泰铢推广、日利率文字以及其他状态图中的3分钟、示例金额仍待业务核准。不因这些冲突隐藏首页，也不裁切或涂改原图；保留界面示例说明，正文只使用已审业务口径，不把图内数字提取为新卖点或承诺。示例标签不替代业务核准。还款图内二维码不是官网付款入口。

`releaseStatus`保持preview并输出noindex；商店未开放，下载显示同一待开放提示，无下载QR、商店外跳或官网申请／资料收集能力。当前素材用途见[素材状态](visual-assets.md)。

## 同类竞品与落地

本轮主要参考泰国贷款产品的官方页面：[FINNIX产品页](https://www.finnix.co/product-finnix-bewinged/)、[LINE BK信贷页](https://www.linebk.com/th/credit-line/)和[MoneyThunder借款页](https://www.money-thunder.com/mtloan)。参考信息结构、真实产品认知、申请范围及费用信息的可找到性；仅通过已有内容和入口落地，不移植竞品业务。Wise不作为本轮核心产品benchmark。具体映射见[竞品研究](competitor-research.md)。

设计和代码检查继续结合Impeccable、frontend-design及已安装的Vercel web-design-guidelines。英文风格规则不覆盖已审泰语，也不把代码规则检查等同于完整视觉验收。

## 本轮QA结果

- 最新首页与用户附件逐字节一致，750×1624、221409字节；SHA见上文。页面主图、图库首图均为新文件，主正文可见确认图数量为0。
- 1440px桌面及360／375／390px移动实际检查，新首页完整加载、比例保留，无文档横向溢出或可见文字截断；完整桌面与390移动页已保存。
- 图库顺序、主面默认1／4首页、还款工具2／4、确认图3／4、4次右方向键循环回首页、Esc与焦点恢复实测通过。步骤只有03关联匹配的确认图，未伪配其他步骤。
- F01／F04链接支持点击和键盘Enter，定位、聚焦原问答；已有展开项不会被导航链接反向收起，两个答案保持互斥单开。目标位置PC约112px／手机88px，分别低于页头81／69px。
- FAQ键盘焦点沿用共享3px轮廓、5px正偏移，答案顶留白8px，复核无泰文首字／上标遮挡。手机菜单点击步骤锚点后收起。
- 下载保持真实待开放状态，无下载QR或外跳；Esc后焦点返回主入口。390px主按钮在弹窗打开前后均327px宽，无横移。
- 构建、JS语法、差异格式及7份HTML资源／锚点／路由检查通过，无重复ID，每页单H1且语言th。已审泰语catalog SHA与业务config未变；本轮没有改写支持页功能，静态检查覆盖其输出。浏览器未记录JS错误，照片引用0。
- 独立复审实际核对原用户图、主面、图库、桌面和完整移动页；唯一焦点留白问题已修复并复核为resolved，最终结论SHIP，限当前preview交付，不等于业务运营资料已核准。

本轮截图位于仓库外`../round8-preview/`：`products-desktop.png`、`products-mobile-360.png`／`products-mobile-375.png`／`products-mobile-390.png`、`full-desktop.png`、`full-mobile.png`、`home-gallery-desktop.png`、`fee-answer-desktop.png`、`fee-answer-mobile.png`、`range-answer-mobile.png`，以及`comparison-products.png`／`comparison-mobile.png`。均为实页截图或明确的配对裁切，不用生成概念图代替成品。

使用浏览器模拟视口，不声称覆盖所有实体设备／浏览器。线上发布核验另记于仓库外`../round8-preview/release-verification.md`，只有部署成功并实际打开后才记为已发布。

## 正式运营待补

1. Android／iOS真实商店链接及开发者名称。
2. 正式域名、有效放贷牌照和官方核验地址。
3. 核准的隐私政策／服务条款及真实发布日期。
4. 经确认的举报受理渠道及LINE入口（若提供）。
5. 业务核准的官网App展示图，解决现有费率／推广冲突。

资料补齐并确认后才能切换production。当前不新增CMS或声称接入既有后台。
