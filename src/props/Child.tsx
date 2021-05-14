import React from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
}

// Valid functional implementation w/o identifying function
// as a react component; don't get React-specific type defs
// such as defaultProps
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click Me!</button>
    </div>
  );
};

// Function component implementation identifying function as
// a React component; get types and intellisense for React;
// Also automatically expects to receive children prop without
// explicitly naming it in the interface.
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick }) => {
  return <div>{color}</div>;
};

// Class component implementation
export class ChildAsCC extends React.Component<ChildProps, ChildProps> {
  state: ChildProps = {
    color: 'red',
    onClick: () => {},
  };
  defaultProps = {
    color: 'red',
  };
  render() {
    return (
      <div>
        {this.state.color}
        <button onClick={this.props.onClick}>Click Me!</button>
      </div>
    );
  }
}
