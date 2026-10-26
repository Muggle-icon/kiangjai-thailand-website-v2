# เคียงใจ Thailand website v2

2026-10-26 独立官网改版。沿用旧项目的静态 HTML/CSS/JS、共享组件和 Python 构建器，保留 #44E0F8 品牌色、原始 Logo、已审泰语与提供的 App 素材。旧版仓库不受影响。

第四轮继续完善首页视觉：Hero 以原生 #44E0F8 大色面集中呈现已审泰语、额度和下载动作，配合新生成的自然光咖啡店经营者使用手机场景及放大的完整 App 贷款计划截图。优势区将还款截图、紧邻的主说明和两项辅助特点放入同一中性区域；四步申请以连续流程带、编号及功能图标呈现。新增 App 截图浏览弹窗，完整展示用户本次补发的两种首页状态，支持翻页、左右方向键与焦点恢复。居中导航、公司事实、七条 FAQ、深青页脚、安全中心和下载待开放状态保留。

咖啡店图片是内置 ImageGen 生成的场景插图，不代表实际客户、门店或品牌合作。新首页截图仅用于示例浏览，其中推广额度、日利率和到账时效未经业务核准，不转成官网正文承诺。

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
- `src/components/hero.html` 青蓝品牌色面、最高额度、下载入口、咖啡店场景插图与完整 App 截图
- `src/components/benefits.html` 主要还款功能与辅助特点
- `src/components/application-steps.html` 四步申请及第三步截图详情弹窗
- `src/components/app-gallery.html` 用户本次两张完整 App 首页图的浏览弹窗
- `src/components/` 其他共用导航、FAQ、弹窗和页脚
- `src/config.json` 公开配置（电话、商店链接、官方渠道和核验资料）
- `src/content/reviewed-th.json` 已审泰语原文参考
- `assets/redesign.css` Tokens、居中桌面导航、共享控件、首屏照片与设备框、响应式与弹窗
- `assets/homepage.css` 优势、步骤、公司、FAQ、下载和防骗模块
- `assets/secondary.css` 安全中心、政策和深青共享页脚
- `assets/images/cafe-life-v4.jpg`、`cafe-life-v4-800.webp`、`cafe-life-v4-1440.webp` 生成的咖啡店场景及响应式图片
- `assets/app/home-current.png`、`withdrawal-current.png` 用户本次提供的完整 App 首页状态图
- `assets/app.js` 全部交互及截图弹窗翻页，下载二维码使用本地 MIT 库

修改后运行构建器，提交源文件及生成结果。根 `.html` 和 `/privacy/`、`/terms/`、`/security/` 均可直接访问和刷新，支持 GitHub Pages 项目子路径。

## 发布状态

这是可交付开发与评审的完整视觉预览。当前没有真实商店链接，因此所有下载按钮统一展示已审的“即将上线”状态，不外跳、不收集资料。正式政策、官方域名、商店开发者名称、举报渠道和牌照核验信息尚待业务方提供；页面不虚构这些内容。`releaseStatus: preview` 输出 noindex，准备正式运营时再切换。

GitHub Pages workflow 位于 `.github/workflows/pages.yml`。仓库设置中启用 GitHub Actions 为 Pages 发布源后，推送 main 即构建发布。构建产物仅含网页和 assets，不发布源代码文档目录。

设计、素材和验收记录见 [交付说明](docs/delivery.md)。第三轮历史验收与 `../round3-preview/` 对照附件保留；第四轮正在进行浏览器截图及交互验收，结果将另行补记，不能用第三轮结论代替本轮验证。
