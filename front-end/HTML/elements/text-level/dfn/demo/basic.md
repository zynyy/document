---
title: 基本用法
---

```jsx
class Dfn extends React.Component {
  render() {
    return (
      <p>The <dfn><abbr title="Garage Door Opener">GDO</abbr></dfn> is a device that allows off-world teams to open the iris.</p>
      // <p>Teal’c activated his <abbr title="Garage Door Opener">GDO</abbr> and so Hammond ordered the iris to be opened.</p>
    )
  }
}
ReactDOM.render(<Dfn />, moutNode)
```
