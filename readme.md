### Description
This UI application is made using Vite + React.

### Installation/Executing the App
1. Clone the repository.
2. Go to mind-arc-assessment folder. (`cd mind-arc-assessment`)
3. Run npm i
4. Run npm run dev

### Answer for "Why the result of ('b' + 'a' + + 'a' + 'a').toLowerCase() is banana
-it is because of the coercion rules and the `.toLowerCase()`

1. `'b'` + `'a'` concatenates the strings `'b'` and `'a'` to form the string `'ba'`.
2. `+ 'a'` is a unary plus operator that attempts to convert the string `'a'` to a number. However, since `'a'` cannot be converted to a number, this expression evaluates to the special value `NaN`.
3. `'a'` + `'a'` concatenates the strings `'a'` and `'a'` to form the string `'aa'`.
4. `'ba'` + `NaN` + `'aa'` concatenates the strings `'ba'`, `NaN`, and `'aa'` to form the string `'baNaNa'`.
5. `.toLowerCase()` is a method that converts all the characters in a string to lowercase. Therefore, `'baNaNa'` is converted to `'banana'`.
