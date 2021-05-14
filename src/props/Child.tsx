import React from 'react';

interface ChildProps {
  color: string;
}

// Valid functional implementation w/o identifying function
// as a react component; don't get React-specific type defs
// such as defaultProps
export const Child = ({ color }: ChildProps) => {
  return <div>{color}</div>;
};

// Function component implementation identifying function as
// a React component; get types and intellisense for React
export const ChildAsFC: React.FC<ChildProps> = ({ color }) => {
  return <div>{color}</div>;
};

// Class component implementation
export class ChildAsCC extends React.Component<ChildProps, ChildProps>  {
  state: ChildProps = {
    color: 'red',
  }
  defaultProps = {
    color: 'red'
  }
  render() {
    return(
      <div>{this.state.color}</div>
    );
  }
};