---
title: 基本用法
---

```jsx
class Qcite extends React.Component {
  render() {
    return (
      <p>The W3C page
        <cite>About W3C</cite>
        says the W3C’s mission is
        <q cite="https://www.w3.org/Consortium/">
          To lead the World Wide Web to its full potential by developing protocols and guidelines that ensure long-term growth for the Web
        </q>
        . I fully agree with this mission.
      </p>
    )
  }
}
ReactDOM.render(<Qcite />, moutNode)
```
