---
title: 基本用法
---

```jsx
class AddrTitle extends React.Component {
  render() {
    return (
      <p>The <dfn id="w3c">World Wide Web Consortium</dfn> (<abbr title="World Wide Web Consortium">W3C</abbr>) is the main international standards organization for the World Wide Web.</p>
    )
  }
}
ReactDOM.render(<AddrTitle />, moutNode)
```
