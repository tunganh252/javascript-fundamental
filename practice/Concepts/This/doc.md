# Javascript Fundamental

> ## This

### **Overview:** **_this_** của javascript mang giá trị khác nhau tuỳ thuộc vào từng ngữ cảnh

![overview](./overview.png)

1. ### **This in global context:**
   - This không được đặt trong bất kỳ function nào --> this đó sẽ trỏ tới globalObject

![this in global context](./global_context.png)

2. ### **This in normal function:**

   - Non-strict mode: ![normal_function_no_strict_mode](./normal_function_no_strict_mode.png)

   - Use-strict mode: ngược lại với non-strict mode thì **"this"** ở đây sẽ trả về **"undefined"**

3. ### **This in arrow function:** **_[Vd: file index.js](index.js)_**

   ![arrow_function](./arrow_function.png)

4. ### **This in a method:** **_[Vd: file index.js](index.js)_**

   ![method](./method.png)

   - This sẽ trỏ về object methods chủ
   - Tránh dùng arrow function trong object methods
