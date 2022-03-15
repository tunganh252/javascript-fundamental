# ECMAScript 2019

> ## Overview

![overview](./overview.png)

1. ### **Flat**

![flat](./flat.png)

2. ### **Object.fromEntries()**

![fromEntries](./fromEntries.png)

3. ### **trimStart() & trimEnd()**

![trimStart && trimEnd](./trim_overview.png)

4. ### **Symbol description**

![Symbol description](./symbol_desciption.png)

5. ### **Optional catch binding**

![optional_catch_binding](./optional_catch_binding.png)

6. ### **Array.property.sort() guranted to be stable**

- Khi sort() có 2 item === nhau thì sẽ trả về thứ tự ban đầu của Array đó, vd:
  - ```[
    {id:1, name: "B"},
    {id:2, name: "A"},
    {id:3, name: "B"}
    ] --->
    [
    {id:2, name: "A"},
    {id:1, name: "B"}, // vẫn nằm trước item có id === 3
    {id:3, name: "B"}
    ]
    ```
