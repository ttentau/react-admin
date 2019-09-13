import React, {Component} from "react"
import {Button, Card, DatePicker, Form, Icon, Input} from "antd";
import locale from "antd/es/date-picker/locale/zh_CN"

export default class CreateArticle extends Component {
    state = {
        loading: false,
        form: {
        }
    }

    componentDidMount() {

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

    render() {
        return (
            <div>
                <Card className='mb20p'>
                    <Form layout='horizontal' onSubmit={this.handleSubmit}>
                        <Form.Item label="文章名称">
                            <Input value={this.state.form.name} onChange={this.onChange.bind(this, 'name')}/>
                        </Form.Item>
                        <Form.Item label="日期">
                            <DatePicker locale={locale} onChange={this.onDateChange.bind(this, 'date')}/>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                <Icon type="search"/> 搜索
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
