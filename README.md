# เคียงใจ Thailand website v2

2026-10-26 独立官网改版。沿用旧项目的静态 HTML/CSS/JS、共享组件和 Python 构建器，保留 #44E0F8 品牌色、原始 Logo、已审泰语与提供的 App 素材。旧版仓库不受影响。

第六轮重点纠正“巨幅截图先于服务说明”和主动作／图片工具同权的问题。Hero以两行产品定位、原样移入的已审线上申请说明、最高额度和下载入口完成介绍，完整 `loan-plan.png` 降为静态示例：桌面220px、手机160px，图注中的低权重工具打开完整图库。优势区删除重复线上申请整项及大幅还款图，改为银行到账主项和扫码还款次项两栏；原还款图完整移入图库。

导航新增首页入口及顶部当前状态；桌面页头下载使用144×44px描边按钮，手机页头只保留Logo和菜单。Hero与结尾下载按钮共享桌面224×52px、16px字体，手机按内容宽度展开；移除外跳箭头与按压位移。FAQ标题旁重复联系入口撤除，F05和页脚联系方式保留；安全条合并为一个安全中心入口。

全站收敛模块间距、标题间距、正文行高及内容列轴：PC模块72px、手机48px，标题至内容32/24px，主正文16/28px、手机15/27px。公司和FAQ共用320px标题列与48px列距，安全中心长文及政策页也同步调整阅读宽度。七条FAQ、截图图库、安全中心、深青页脚和下载待开放状态保留。官方Vercel `web-design-guidelines` 已安装，补充现有设计技能的代码与可访问性验收。

全部人物和场景照片继续禁用，第五轮候选未复制进项目，也不会发布。图库依次展示贷款计划、还款、申请中首页、可提款首页四张完整原图；首页图中的推广额度、日利率和到账时效未经业务核准，不转成官网正文承诺。

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
- `src/components/hero.html` 两行定位、线上申请说明、最高额度、主下载入口与静态App示例
- `src/components/benefits.html` 银行到账主项、扫码还款次项及还款图查看工具
- `src/components/application-steps.html` 四步申请及第三步截图详情弹窗
- `src/components/app-gallery.html` 计划／还款／申请中首页／可提款首页四张完整原图的浏览弹窗
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

设计规则见 [设计系统](docs/design-system.md)，素材状态见 [视觉素材记录](docs/visual-assets.md)，验收记录见 [交付说明](docs/delivery.md)。第三至第五轮历史验收与对应附件保留；第六轮已完成1440／360／375／390实际截图、交互及独立复核，另回归支持页1440／390；具体范围与限制见交付说明。
