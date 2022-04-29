# 新拟态(Neumorphism)

预览地址:<a href='http://175.24.198.84:5001/' target='_blank' rel="noopener">点我查看详情</a>

新拟态生成:<https://neumorphism.io/>

## 什么是新拟态
「新拟态」英文名Neumorphism，也有设计师称为 Soft Ui（软UI）。简单来说就是一种类似浮雕的效果，介于扁平与投影之间。其融合了拟态和平面设计技术，模仿真实物体的形态，为界面的UI元素赋予真实感，它是一种现实主义风格，也是非常值得探索的新设计风格。

## 新拟态风格特点
优点

1. 元素并不浮动
2. 元素色彩相对单一，与背景高度统一
3. 左上角亮色投影，右下角深色投影
4. 多以卡片样式出现
5. 更加适合大圆角图形

缺点

1. 缺少对比度，导致可见性较差
2. 整体视觉是比较平，缺少层次感

## 实现原理

新拟态的基本形状一般有两种：`凸起效果` 和 `凹陷效果`，「凸起效果」 使用外阴影实现，「凹陷效果」 使用内阴影实现。

## CSS 实现
   1. 凹陷效果
``` css
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #f1f3f6;
  }
  .item {
    width: 185px;
    height: 185px;
    border-radius: 30px;
    background: linear-gradient(145deg, #eff1f3, #f6fafb);
    box-shadow: 6px 6px 18px #c6c7ca, -6px -6px 18px #ffffff;
  }
```
![凹陷效果](https://wordpress-1301688670.cos.ap-shanghai.myqcloud.com/img/vue3-calculator/ao.png)

   2. 凸起效果

``` css
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #f1f3f6;
  }
  .item {
    width: 185px;
    height: 185px;
    border-radius: 30px;
    background: linear-gradient(145deg, #f6fafb, #eff1f3);
    box-shadow: 6px 6px 18px #c6c7ca, -6px -6px 18px #ffffff;
  }
```

![凸起效果](https://wordpress-1301688670.cos.ap-shanghai.myqcloud.com/img/vue3-calculator/tu.png)

## 最终预览

![计算器效果](https://wordpress-1301688670.cos.ap-shanghai.myqcloud.com/img/vue3-calculator/home.png)

![音乐播放器效果](https://wordpress-1301688670.cos.ap-shanghai.myqcloud.com/img/vue3-calculator/music-player.png)

