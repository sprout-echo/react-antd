'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,Link,hashHistory,IndexRoute,Redirect,IndexLink} from 'react-router';

//引入antd的导航组件
import {Menu,Icon,Input} from 'antd';
const SubMenu = Menu.SubMenu;

//引入单个页面
import Main from './main.js';
import Carousel from './carousel.js';
import Progress from './progress.js';

let routeMap = {
  './Main':'0',
  './Carousel':'1',
  './Progress':'2'
};

//配置导航

class Sider extends React.Component {
  constructor(props) {
    //super表示父类的构造函数
    super(props);
    this.state = {
      current : '',
      username : ''
    };
  }
  handleClick(e){
    this.setState({
      current:e.key
    });
  }
  componentWillMount() {
      var route = this.props.location.pathname;
      this.setState({
          current: routeMap[route] || '0'
      });
  }

  componentDidMount() {
      this.setState({
          username: 'luckykun'
      });
  }

  render(){
    return (
      <div>
        <div id="leftMenu">
          <img src="src/images/head.jpg" id="logo"/>
          <h3><b>•</b> VIP会员</h3>
          <Menu theme="dark"
            onClick={this.handleClick.bind(this)}
            style={{width:200}}
            defaultOpenKeys={['sub1', 'sub2']}
            defaultSelectedKeys={[this.state.current]}
            mode="inline"
          >
            <Menu.Item key="0"><Link to="/Main"><Icon type="mail"/>我的账户</Link></Menu.Item>
            <SubMenu key="sub1" title={<span><Icon type="bars"/><span>主导航</span></span>}>
                <Menu.Item key="1"><Link to="/Carousel">轮播图</Link></Menu.Item>
                <Menu.Item key="2"><Link to="/Progress">进度条</Link></Menu.Item>
            </SubMenu>
          </Menu>
        </div>
        <div id="rightWrap">
          <Menu mode="horizontal">
            <Input.Group>
              <Input id="search"/>
            </Input.Group>
            <SubMenu title={<span><Icon type="user" />{ this.state.username }</span>}>
                <Menu.Item key="setting:1">退出</Menu.Item>
            </SubMenu>
          </Menu>
          <div className="right-box">
              { this.props.children }
          </div>
        </div>
      </div>
    )
  }
}

//配置路由
ReactDOM.render(
  (<Router history={hashHistory} >
    <Route path="/" component={Sider}>
      <IndexRoute component={Main} />
      <Route path="Carousel" component={Carousel} />
      <Route path="Progress" component={Progress} />
    </Route>
  </Router>),document.getElementById('app')
);
