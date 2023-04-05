## 三角形 css 畫法

```
<Triangle type="top" size={50} color="#fff">
<Triangle type="bottom" size={50} color="#fff">
<Triangle type="right" size={50} color="#fff">
<Triangle type="left" size={50} color="#fff">
```

- 利用css border 特性畫出不同方向三角形

```css=
.traingle{
    border-bottom:50px solid #fff;
    border-left:50px solid red;
    border-top:50px solid blue;
    border-right:50px solid mediumpurple;
}


```