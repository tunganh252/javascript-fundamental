# Javascript Fundamental

> ## IIFE (Immediately Invoked Functional Expression)

![this is an image](./define.png)

- Định nghĩa 1 hàm và hàm đó được thực thi một lần và ngay lập tức
- Hỗ trợ tham số + async - await:

```
((a, b)=>{
    console.log(a, b)
})(5, 10)

(async ()=>{
    await fetchData()
})()
```

> ## Summary:

- Dùng **IIFE** khi có nhu cầu tạo hàm chỉ để **sử dụng 1 lần** duy nhất
- Còn lại, các ứng dụng khác của IIFE đã có cách thay thế tốt hơn
