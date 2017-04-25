import React from 'react';

export default class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="mainDiv">团队人数<br/>520</div>
        <div className="mainDiv sumS">总业绩<br/> $24586.3</div>
        <div className="mainDiv newS">新增业绩<br/> $38586.9</div>
        <div className="mainDiv yuS">账户余额<br/>$530.2</div>
      </div>
    )
  }
}
