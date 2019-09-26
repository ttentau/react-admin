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
        // this.setState({
        //     wordEditor:new E('.word-editor'),
        // })
        this.state.wordEditor = new E('.word-editor')
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

    onChange(key, value) {
        console.log(key, value)
        let form = this.state.form
        form[key] = value
        this.setState({
            form: form
        })
    }

    render() {
        const children = [];
        for (let i = 10; i < 36; i++) {
            children.push(<Option key={i.toString(36) + i}>{i.toString(36) + i}</Option>);
        }

        let oneRowItemLayout = {
            labelAlign: 'left',
            labelCol: {span: 2},
            wrapperCol: {span: 22, offset: 0},
        }

        let moreRowItemLayout = {
            labelAlign: 'left',
            labelCol: {span: 6},
            wrapperCol: {span: 18, offset: 0},
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
                        <Form.Item label="文章名称" {...oneRowItemLayout}>
                            <Input value={this.state.form.name} onChange={e => this.onChange('name', e.target.value)}/>
                        </Form.Item>
                        <Row gutter={24}>
                            <Col span={8}>
                                <Form.Item label="作者" {...moreRowItemLayout}>
                                    <Input value={this.state.form.author}
                                           onChange={e => this.onChange('author', e.target.value)}/>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="分类" {...moreRowItemLayout}>
                                    <Select className={'w100'}
                                            value={this.state.form.category}
                                            onChange={e => this.onChange('category', e)}
                                            style={{width: 120}}>
                                        <Option value="jack">Jack</Option>
                                        <Option value="lucy">Lucy</Option>
                                        <Option value="Yiminghe">yiminghe</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="标签" {...moreRowItemLayout}>
                                    <Select mode="tags"
                                            value={this.state.form.tags}
                                            onChange={e => this.onChange('tags', e)}
                                            style={{width: '100%'}}>
                                        {children}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={24}>
                            <Col span={8}>
                                <Form.Item label="是否可评论" {...moreRowItemLayout}>
                                    <Checkbox checked={this.state.form.isComment}
                                              onChange={e => this.onChange('isComment', e.target.checked)}/>
                                </Form.Item>
                            </Col>
                            <Col span={8}>
                                <Form.Item label="是否置顶" {...moreRowItemLayout}>
                                    <Checkbox checked={this.state.form.isTop}
                                              onChange={e => this.onChange('isTop', e.target.checked)}/>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Form.Item label={'摘要'} {...oneRowItemLayout}>
                            <TextArea rows={4} value={this.state.form.summary} onChange={e => this.onChange('summary', e.target.value)}/>
                        </Form.Item>
                        <Form.Item label={'内容'} {...oneRowItemLayout}/>
                        <div className={'word-editor'}/>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                <Icon type="check"/> 提交
                            </Button>
                            <Button type="info" className='ml20p' onClick={() => this.setState({form: {}})}>
                                <Icon type="reload"/>重置
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        )
    }
}
