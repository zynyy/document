---
title: 基本用法
---

```jsx
class Dfn extends React.Component {
  render() {
    return (
      <p>The
        <dfn id="gdo">
          <abbr title="Garage Door Opener">GDO</abbr>
        </dfn>
        is a device that allows off-world teams to open the iris.
      </p>

      // <p>
      //   Teal’c activated his
      //   <a href="#gdo">
      //     <abbr title="Garage Door Opener">GDO</abbr>
      //   </a>
      //   and so Hammond ordered the iris to be opened.
      // </p>
    )
  }
}
ReactDOM.render(<Dfn />, moutNode)
```
