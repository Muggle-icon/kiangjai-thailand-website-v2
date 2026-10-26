# เคียงใจ Thailand website v2

Kiangjai泰国官网V2独立项目，当前为第七轮设计版本。沿用静态HTML/CSS/JS和Python组件构建器，保留#44E0F8品牌色、原Logo、已审泰语及业务配置。旧仓库 `Muggle-icon/kiangjai-thailand-website` 不受影响；历史设计与验收记录通过Git版本查看。

当前首页以居中的品牌字体封面开场：原泰语定位、最高额度和下载动作成组，Hero不放手机、人物或几何装饰。服务区承担真实产品解释：约60%深青主面展示线上申请和完整贷款计划图，约40%浅灰次面说明扫码还款；银行到账信息以轻量事实行和App→银行示意补充。四步申请、七条FAQ、公司事实、安全中心、深青页脚和四图示例图库保留。

所有人物及场景照片继续禁用，生成候选图不进入项目或发布包。产品图保持750×1624完整比例；原图中的示例金额、推广额度、日利率及时间提示不转成官网承诺。

## 本地运行

```sh
python3 scripts/build.py
python3 -m http.server 4173
```

打开 http://localhost:4173 。不需要安装npm依赖，字体、图标、图片及下载二维码库均在本地。编辑源文件后重新构建，根HTML及 `/privacy/`、`/terms/`、`/security/` 路由别名均由构建器输出。

## 编辑位置

| 文件 | 职责 |
| --- | --- |
| `src/components/hero.html` | 品牌字体封面、额度和主下载动作 |
| `src/components/benefits.html` | 线上申请主面、扫码还款次面、银行到账事实行及图库工具 |
| `src/components/application-steps.html` | 四步原文及步骤03真实图详情 |
| `src/components/app-gallery.html` | 计划／还款／申请中首页／可提款首页四图图库 |
| `src/pages/home.html` | 模块顺序、公司、FAQ、下载条及安全提醒 |
| `src/pages/security.html`、`privacy.html`、`terms.html` | 安全中心与政策页 |
| `src/components/` | 共享导航、FAQ、弹窗、页脚 |
| `src/content/reviewed-th.json`、`src/config.json` | 已审原文及公开业务配置 |
| `assets/redesign.css`、`homepage.css`、`secondary.css` | Tokens、首页与支持页样式 |
| `assets/app.js` | 导航、FAQ、下载、弹窗、图库及配置交互 |
| `scripts/build.py`、`.github/workflows/pages.yml` | 静态构建与独立GitHub Pages发布 |

Pages发布包只含网页及访客资源，不包含源组件和内部文档。主CTA桌面224×52px、手机满宽52px；桌面页头下载为144×44px描边按钮，手机页头只保留Logo与菜单。

## 当前状态

`releaseStatus: preview`，搜索引擎noindex。下载尚未开放，所有下载入口维持真实的待开放弹窗；不生成下载二维码、不外跳、不收集资料。正式商店链接、政策正文、官方身份／核验及举报渠道仍待业务确认。

本轮已完成1440px PC及360／375／390px移动实际截图、交互及独立视觉复审；构建、JS与7份HTML静态检查通过，线上发布另作实际核验。详见[交付说明](docs/delivery.md)、[设计系统](docs/design-system.md)及[素材状态](docs/visual-assets.md)。
