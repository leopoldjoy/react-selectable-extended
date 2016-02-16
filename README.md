# Selectable items for React

Allows individual or group selection of items using the mouse/touch.

## Demo
[Try it out](http://leopoldjoy.github.io/react-selectable-extended/example/)

## Based on react-selectable
This project is based on [react-selectable](https://github.com/unclecheese/react-selectable) by [unclecheese](https://github.com/unclecheese). It extends the original functionality in the following ways:
* Adds support for clicking individual items without dragging.
* Adds optional `dontClearSelection` feature to allow for additions to selected items.
* Adds optional `duringSelection` callback feature to allow for a callback function to be called repeatedly throughout selection.

If you are looking for a lightweight, stateless selector and don't need any of the features listed above, go with [react-selectable](https://github.com/unclecheese/react-selectable).

## Getting started
```
npm install react-selectable-extended
```

```js
import React from 'react';
import { render } from 'react-dom';
import { SelectableGroup, createSelectable } from 'react-selectable';
import SomeComponent from './some-component';

const SelectableComponent = createSelectable(SomeComponent);

class App extends React.Component {
  
  constructor (props) {
  	super(props);
  	this.state = {
  		selectedKeys: [],
      selectingKeys: []
  	};
  }

  render () {
    return (
      <SelectableGroup onSelection={this.handleSelection} duringSelection={this.handleSelecting}>
        {this.props.items.map((item, i) => {
          	let selected = this.state.selectedKeys.indexOf(item.id) > -1;
            let selecting = this.state.selectingKeys.indexOf(item.id) > -1;
          	return (
          		<SelectableComponent key={i} selected={selected} selecting={selecting} selectableKey={item.id}>
          			{item.title}
          		</SelectableComponent>
          	);
        })}
      </SelectableGroup>
    );
  },
  
  handleSelection (selectedKeys) {
  	this.setState({ selectedKeys });
  }

  handleSelecting (selectingKeys) {
    this.setState({ selectingKeys });
  }
	
}
```
## Configuration

The `<SelectableGroup />` component accepts a few optional props:
* `onSelection` (Function) Callback fired after user completes selection
* `duringSelection` (Function) Callback fired rapidly during selection (while the selector is being dragged). Passes an array containing the keys of the items currently under the selector to the callback function.
* `tolerance` (Number) The amount of buffer to add around your `<SelectableGroup />` container, in pixels.
* `component` (String) The component to render. Defaults to `div`.
* `fixedPosition` (Boolean) Whether the `<SelectableGroup />` container is a fixed/absolute position element or the grandchild of one.
* `dontClearSelection` (Boolean) When enabled, makes all new selections add to the already selected items, except for selections that contain *only* previously selected items—in this case it unselects those items.

*NOTE:* For both `fixedPosition` and `dontClearSelection`, if you get an error that `Value must be omitted for boolean attributes` when you try, for example, `<SelectableGroup fixedPosition={true} />`, simply use Javascript's boolean object function: `<SelectableGroup fixedPosition={Boolean(true)} />`.
