import React, {Component} from "react"
import {Button, Card, Icon, Table, Input, Form, DatePicker} from "antd";
import locale from 'antd/es/date-picker/locale/zh_CN';
import moment from 'moment'
class Article extends Component {
    state = {
        loading: false,
        form: {
            // date:moment('2019-09-11')
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
        this.state.form[key] = e.target.value
        this.setState({
            form: this.state.form
        })
    }

    onDateChange(key, date, dateString) {
        this.state.form[key] = date.valueOf()
        this.setState({
            form: this.state.form
        })
    }

    render() {
        const columns = [
            {title: 'Full Name', width: 100, dataIndex: 'name', key: 'name', fixed: 'left',},
            {title: 'Column 1', width: 200, dataIndex: 'address', key: '1'},
            {title: 'Column 2', width: 200, dataIndex: 'address', key: '2'},
            {title: 'Column 3', width: 200, dataIndex: 'address', key: '3'},
            {title: 'Column 4', width: 200, dataIndex: 'address', key: '4'},
            {title: 'Column 5', width: 200, dataIndex: 'address', key: '5'},
            {title: 'Column 6', width: 200, dataIndex: 'address', key: '12'},
            {
                title: 'Action', key: 'operation', fixed: 'right', width: 200, align: 'center',
                render:
                    (text, record, index) =>
                        <Button type="primary" onClick={this.option.bind(this, record)}>{record.name}</Button>,
            },
        ];
        const data = [];
        for (let i = 0; i < 13; i++) {
            data.push({
                key: i,
                name: 'Jim Green',
                age: 40,
                address: 'London Park',
            })
        }

        return (
            <div>
                <Card title='文章列表' className='mb20p'>
                    <Form layout='inline' onSubmit={this.handleSubmit}>
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
                <Card className='mb20p'>
                    <div className="table-header">
                        <span>共 {data.length} 条数据</span>
                        <div>
                            <Button type="info" className='mr10p' onClick={this.getData}>
                                <Icon type="reload"/>
                            </Button>
                            <Button type="primary">
                                <Icon type="plus"/>新建
                            </Button>
                        </div>
                    </div>
                    <Table
                        loading={this.state.loading}
                        columns={columns}
                        bordered
                        dataSource={data}
                        scroll={{x: 1300}}
                        size="middle"/>
                </Card>
            </div>
        )
    }
}

export default Article
