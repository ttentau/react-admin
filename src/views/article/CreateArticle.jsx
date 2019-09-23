import React, {Component} from "react"
import {Button, Card, Checkbox, Col, Form, Icon, Input, Row, Select} from "antd";
// import locale from "antd/es/date-picker/locale/zh_CN"

const {Option} = Select;
const {TextArea} = Input;
const E = window.wangEditor

export default class CreateArticle extends Component {
    state = {
        loading: false,
        form: {},
        wordEditor: null
    }

    componentDidMount() {
        this.setState({
            wordEditor:new E('.word-editor'),
        })
        // this.state.wordEditor = new E('.word-editor')
        this.state.wordEditor.create()
        // let edit = document.querySelector('.w-e-text-container')
        // edit.style = 'border:1px solid #ccc; border-top:none; z-index:10000;min-height: 500px ;'
    }

    option(row) {
        console.log(row)
    }

    getData() {
        console.log(1)
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state.form)
    };

    onChange(key, e) {
        let form = this.state.form
        form[key] = e.target.value
        this.setState({
            form: form
        })
    }

    onDateChange(key, date, dateString) {
        let form = this.state.form
        form[key] = date.valueOf()
        this.setState({
            form: form
        })
    }

    back() {
        window.history.back()
    }

    render() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }

        let oneRowItemLayout = {
            labelAlign: 'left',
            labelCol: {span: 2},
            wrapperCol: {span: 22,offset:0},
        }

        let moreRowItemLayout = {
            labelAlign: 'left',
            labelCol: {span: 6},
            wrapperCol: {span: 18,offset:0},
        }

        return (
            <div>
                <Card className='mb20p'
                      title={
                          <div>
                              <Icon type="arrow-left" className={'cp'} onClick={this.back}/>
                              <span style={{marginLeft: 30}}>添加文章</span>
                          </div>
                      }>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Item label="文章名称"
                                   {...oneRowItemLayout}>
                            <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}/>
                        </Form.Item>
                        <Row gutter={24}>
                            <Col span={8}>
                                <Form.Item label="作者" {...moreRowItemLayout}>
                                    <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}/>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="分类" {...moreRowItemLayout}>
                                    <Select className={'w100'} defaultValue="lucy" style={{width: 120}}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="标签" {...moreRowItemLayout}>
                                    <Select mode="tags" style={{width: '100%'}} placeholder="Tags Mode">
                                        {children}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={8}>
                                <Form.Item label="是否可评论" {...moreRowItemLayout}>
                                    <Checkbox/>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="是否置顶" {...moreRowItemLayout}>
                                    <Checkbox/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label={'摘要'} {...oneRowItemLayout}>
                            <TextArea rows={4}/>
                        </Form.Item>
                        <Form.Item label={'内容'} {...oneRowItemLayout}/>
                        <div className={'word-editor'}/>

                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                <Icon type="check"/> 提交
                            </Button>
                            <Button type="info" className='ml20p'>
                                <Icon type="reload"/>重置
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
