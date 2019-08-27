import React, {Component} from "react"
import {Button, Card, Icon, Table, Input, Form, DatePicker} from "antd";

class Article extends Component {
    state = {
        loading: false
    }

    componentDidMount() {

    }

    option(row) {
        console.log(row)
    }

    getData() {
        console.log(1)
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

        const formItemLayout = {
            labelCol: {
                xs: {span: 24},
                sm: {span: 8},
            },
            wrapperCol: {
                xs: {span: 24},
                sm: {span: 16},
            }
        }
        const buttonItemLayout = null;
        return (
            <div>
                <Card title='文章列表' className='mb20p'>
                    <Form layout='inline'>
                        <Form.Item label="文章名称">
                            <Input/>
                        </Form.Item>
                        <Form.Item label="日期">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary">
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
