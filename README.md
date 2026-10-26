# เคียงใจ Thailand website v2

2026-10-26 独立官网改版。沿用旧项目的静态 HTML/CSS/JS、共享组件和 Python 构建器，保留 #44E0F8 品牌色、原始 Logo、已审泰语与提供的 App 素材。旧版仓库不受影响。

第五轮按用户最新要求撤除全部人物及场景照片。Hero 仅以原Logo、#44E0F8 原生色面、已审文案和完整真实 `loan-plan.png` 构成，设备框桌面280px、手机240px。优势区使用240px完整还款图的独立中性展示台，右侧主说明与辅助特点成组；四步申请统一为编号和一条流程轴。FAQ采用几何SVG加减号，弹窗关闭按钮使用共享SVG，统一同类控件的对齐方式。

全站收敛模块间距、标题间距、正文行高及内容列轴：PC模块72px、手机48px，标题至内容32/24px，主正文16/28px、手机15/27px。公司和FAQ共用320px标题列与48px列距，安全中心长文及政策页也同步调整阅读宽度。七条FAQ、截图图库、安全中心、深青页脚和下载待开放状态保留。官方Vercel `web-design-guidelines` 已安装，补充现有设计技能的代码与可访问性验收。

旧照片已从项目移除；第五轮生成的候选图未复制进项目，也不会发布。两张补发首页图仍只用于示例图库，其中推广额度、日利率和到账时效未经业务核准，不转成官网正文承诺。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开 http://localhost:4173 。不需要 npm install；所有字体、图标、图片和二维码库均在本地。

## 编辑位置

- `src/pages/home.html` 首页整体顺序、公司资料、FAQ、下载条和页尾安全提醒
- `src/pages/security.html` 安全中心
- `src/pages/privacy.html`、`terms.html` 法律页面
- `src/components/hero.html` 青蓝品牌色面、最高额度、下载入口与完整 App 截图
- `src/components/benefits.html` 主要还款功能与辅助特点
- `src/components/application-steps.html` 四步申请及第三步截图详情弹窗
- `src/components/app-gallery.html` 用户本次两张完整 App 首页图的浏览弹窗
- `src/components/` 其他共用导航、FAQ、弹窗和页脚
- `src/config.json` 公开配置（电话、商店链接、官方渠道和核验资料）
- `src/content/reviewed-th.json` 已审泰语原文参考
- `assets/redesign.css` Tokens、居中桌面导航、共享控件、产品首屏、设备框、响应式与弹窗
- `assets/homepage.css` 优势、步骤、公司、FAQ、下载和防骗模块
- `assets/secondary.css` 安全中心、政策和深青共享页脚
- `assets/app/home-current.png`、`withdrawal-current.png` 用户本次提供的完整 App 首页状态图
- `assets/icons/plus.svg` FAQ共享几何加号，展开时隐藏竖线；关闭使用已有 `x.svg`
- `assets/app.js` 全部交互及截图弹窗翻页，下载二维码使用本地 MIT 库

修改后运行构建器，提交源文件及生成结果。根 `.html` 和 `/privacy/`、`/terms/`、`/security/` 均可直接访问和刷新，支持 GitHub Pages 项目子路径。

## 发布状态

这是可交付开发与评审的完整视觉预览。当前没有真实商店链接，因此所有下载按钮统一展示已审的“即将上线”状态，不外跳、不收集资料。正式政策、官方域名、商店开发者名称、举报渠道和牌照核验信息尚待业务方提供；页面不虚构这些内容。`releaseStatus: preview` 输出 noindex，准备正式运营时再切换。

GitHub Pages workflow 位于 `.github/workflows/pages.yml`。仓库设置中启用 GitHub Actions 为 Pages 发布源后，推送 main 即构建发布。构建产物仅含网页和 assets，不发布源代码文档目录。

设计规则见 [设计系统](docs/design-system.md)，素材状态见 [视觉素材记录](docs/visual-assets.md)，验收记录见 [交付说明](docs/delivery.md)。第三／四轮历史验收与对应附件保留；第五轮已完成1440px PC与360／375／390px移动模拟视口的实页、交互及独立复审，具体范围与限制见交付说明。
