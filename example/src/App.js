import React, { Component } from 'react';
import { Draggable, Droppable } from './DragAndDrop';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {dropClass: ""}
  }
  onDrop = (dropData) => {
    console.log("Dropped", dropData)
  }
  onDragIn = () => {
    this.setState({dropClass: "over"})
  }
  onDragOut = () => {
    this.setState({dropClass: ""})
  }
  onDrag = (coords) => {
    //console.log(coords)
  }
  onDragEnd = () => {
    this.setState({dropClass: ""})
  }
  render() {
    return (
      <div className="App">
        <Droppable
          onDrop={this.onDrop}
          onDragIn={this.onDragIn}
          onDragOut={this.onDragOut}
          className={"dropzone " + this.state.dropClass}
          accepts="giraffes"
          >
          Drop Here
        </Droppable>
        <Droppable
          onDrop={this.onDrop}
          onDragIn={this.onDragIn}
          onDragOut={this.onDragOut}
          className={"dropzone " + this.state.dropClass}
          accepts="elephants"
          >
          Drop Here
        </Droppable>
        <div style={{display: 'block'}}>
          <Draggable
            dragStyle="move"
            placeholderClass="dragging"
            data={"The drag data"}
            type="giraffes"
            className="drag-wrapper"
            onDrag={this.onDrag}
            onDragEnd={this.onDragEnd}
            >
            <div className="drag-square">Drag Me</div>
          </Draggable>
          <Draggable
            dragStyle="move"
            placeholderClass="dragging"
            data={"The drag data"}
            type="giraffes"
            className="drag-wrapper"
            onDrag={this.onDrag}
            onDragEnd={this.onDragEnd}
            >
            <div className="drag-square">Drag Me</div>
          </Draggable>
          <Draggable
            dragStyle="move"
            placeholderClass="dragging"
            data={"The drag data"}
            type="giraffes"
            className="drag-wrapper"
            onDrag={this.onDrag}
            onDragEnd={this.onDragEnd}
            >
            <div className="drag-square">Drag Me</div>
          </Draggable>
        </div>
      </div>
    );
  }
}

export default App;
