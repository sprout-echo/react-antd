import React from 'react';
import {Icon,Tabs,Collapse,Steps,Progress,notification,Table,Button,DatePicker} from 'antd';
export default class Main extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      percent:10
    }
  }

  increase() {
    let percent = this.state.percent +10;
    if(percent > 100){
      percent = 100;
    }
    this.setState({percent});
  }

  decline(){
    let percent = this.state.percent - 10;
    if(percent < 0){
      percent = 0;
    }
    this.setState({percent});
  }

  render() {
    //table数据
    const dataSource = [{
      key:'1',
      name:'RFID名称1',
      rfid:100200300
    },{
      key:'2',
      name:'RFID名称2',
      rfid:400300200
    }];
    const column = [{
      title:'RFID名称',
      dataIndex:'name',
    },{
      title:'RFID',
      dataIndex:'rfid',
    }];

    return (
      <div id="rightCont">
        <div className="mainDiv"><Icon type="link"/>团队人数<br/>520</div>
        <div className="mainDiv sumS"><Icon type="meh"/>总业绩<br/> $24586.3</div>
        <div className="mainDiv newS"><Icon type="appstore"/>新增业绩<br/> $38586.9</div>
        <div className="mainDiv yuS"><Icon type="smile"/>账户余额<br/>$530.2</div>
        <div id="tabCard">
          <Tabs animated type="card">
            <Tabs.TabPane tab="第一季度" key="1">第一季度的年产值达到1000W<br/>有望突破<br/>月度财务收支计划</Tabs.TabPane>
            <Tabs.TabPane tab="第二季度" key="2">这是第二个Tab里的值</Tabs.TabPane>
            <Tabs.TabPane tab="第三季度" key="3">这是第三个Tab里的值</Tabs.TabPane>
          </Tabs>
          <Tabs animated >
            <Tabs.TabPane tab="Tab 1" key="1"><Table dataSource={dataSource} column={column}/></Tabs.TabPane>
            <Tabs.TabPane tab="Tab 2" key="2">这是第二个Tab里的值2</Tabs.TabPane>
            <Tabs.TabPane tab="Tab 3" key="3">这是第三个Tab里的值3</Tabs.TabPane>
          </Tabs>
        </div>
        <div id="progressCont">
          <h2>我上班的天数统计</h2><br/>
          <Progress type="circle" strokeWidth="11" percent={75}/>&emsp;
          <Progress type="circle"  strokeWidth="11" status="success" percent={100}/>
        </div>
        <div id="stepCont">
          <Steps direction="vertical">
            <Steps.Step title="2013" status="finish" description="这一年开启了大学生涯"/>
            <Steps.Step title="2014" status="finish" description="开始尝试让自己不一样"/>
            <Steps.Step title="2015" status="finish" description="经历很多的一年"/>
            <Steps.Step title="2016" status="finish" description="我走出社会的第一步"/>
            <Steps.Step title="2017" status="process" description="这是我需要沉淀的一年"/>
            <Steps.Step title="2018" description="我相信这是值得庆祝的一年"/>
          </Steps>
        </div>
        <div id="cardPerson">
        ☆  年度最佳程序媛
          <img src="src/images/head.jpg" id="logo"/>
          <h1>No.1</h1><br/>
          <p id="line-card"></p>
          <p>The best and most creative programmer</p>
        </div>

        <div id="lineProgress">
          <Progress percent={this.state.percent}/><br/><br/>
          <Progress percent={this.state.percent} type="circle"/>&emsp;
          <Button.Group>
            <Button type="ghost" onClick={this.decline.bind(this)} icon="minus" />
            <Button type="ghost" onClick={this.increase.bind(this)} icon="plus" />
          </Button.Group><br/><br/>
          <Progress percent={30} />
          <Progress type="line" percent={55} status="active"/>
          <Progress type="line" percent={75} status="exception"/>
          <Progress percent={100} />
        </div>
        <div id="dataCont">
        <h2>请选择日期</h2>
        <p>开始日期 -- 结束日期</p><br/>
        <DatePicker /> --
        <DatePicker />
        </div>
        <div id="CollapseCont">
          <Collapse defaultActiveKey="1">
            <Collapse.Panel header="网易云 “蜂巢”" key="1">Docker领域再添一员，网易云发布”蜂巢“，加入云计算之争</Collapse.Panel>
            <Collapse.Panel header="创新管理" key="2">关于创新管理，我想当面和你聊聊</Collapse.Panel>
            <Collapse.Panel header="新加坡大数据" key="3">新加坡大数据初创公司Latize获150万美元风险融资</Collapse.Panel>
            <Collapse.Panel header="程序媛" key="4">可能是因为正当校招季，最近关于程序媛（女性程序员）的话题很火，朋友圈里一下就冒出很多相关文章，有的写自己求职入职的心路历程，有的从客观数据角度分析女性优劣势，也有过来人分享自己和周围人的看法</Collapse.Panel>
          </Collapse>
        </div>
      </div>

    )
  }
}
<script>
document.onload = function(){
  notification.success({
    placement: 'bottomRight',
    bottom: 50,
    description:'Welcome to the platform.This is a template for exercise react, es6 and webpack'
  })
}

</script>
