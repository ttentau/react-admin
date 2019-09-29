import React, {Component} from "react"
import {Button, Card, DatePicker, Form, Icon, Input, Popconfirm, Table, message} from "antd";
import locale from 'antd/es/date-picker/locale/zh_CN';
import Link from "react-router-dom/Link"
import ArticleApi from '../../api/article'
import {withRouter} from "react-router-dom"
import {connect} from 'react-redux'

class Article extends Component {
    state = {
        form: {
            // date:moment('2019-09-11')
        },
        loading: false,
        searchDate: [],
        searchData: {},
        multipleSelection: [],
        tableData: {
            list: [],
            count: 0
        },
        offset: 1,
        limit: 10,
        isSearch: false
    }

    option(row) {
        console.log(row)
    }

    getData = async () => {
        this.setState({loading: true})
        let params = {}
        if (!this.state.isSearch) {
            params.limit = this.state.limit
            params.offset = this.state.offset
        } else {
            this.state.searchData.limit = this.state.limit
            this.state.searchData.offset = this.state.offset
            params = this.state.searchData
        }
        let res = await ArticleApi.select({}, params)
        if (res.code === '000000') {
            this.state.tableData.list = res.data.list
            this.state.tableData.count = res.data.count
        }
        setTimeout(() => {
            this.setState({loading: false})
        }, 250)
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

    componentDidMount() {
        console.log(this)
        this.getData()
    }

    search() {
        console.log(this)
        console.log(this.state.form)
    }

    del(row) {
        message.success('删除成功')
    }

    nav(url, query) {
        this.props.history.push(url, query)
    }

    render() {
        const columns = [
            {title: '标题', width: 300, dataIndex: 'title'},
            {title: '点击量', dataIndex: 'clickCount'},
            {title: '分类名', dataIndex: 'categoryName'},
            {title: '创建时间', dataIndex: 'createTime'},
            {title: '更新时间', dataIndex: 'updateTime'},
            {title: '排序', dataIndex: 'sort'},
            {title: '是否可评论', dataIndex: 'isCanComment'},
            {title: '是否置顶', dataIndex: 'isTop'},
            {
                title: 'Action', key: 'operation', fixed: 'right', width: 300, align: 'center',
                render: (text, record, index) => (
                    <div>
                        <Button type="primary" onClick={this.option.bind(this, record)}>查看</Button>
                        <Button className={'ml10p mr10p'}
                                type="primary"
                                onClick={this.nav.bind(this, '/article/edit', {id: record.id})}>
                            编辑
                        </Button>
                        <Popconfirm
                            title="确定删除这条数据？"
                            onConfirm={this.del.bind(this, record)}
                            okText="确定"
                            cancelText="取消"
                        >
                            <Button type="primary">删除</Button>
                        </Popconfirm>
                    </div>
                )
            }
        ];


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
                        <span>共 {this.state.tableData.count} 条数据</span>
                        <div>
                            <Button type="info" className='mr10p' onClick={this.getData}>
                                <Icon type="reload"/>
                            </Button>
                            <Link to="/article/create">
                                <Button type="primary">
                                    <Icon type="plus"/>新建
                                </Button>
                            </Link>

                        </div>
                    </div>
                    <Table
                        rowKey={'id'}
                        loading={this.state.loading}
                        columns={columns}
                        bordered
                        dataSource={this.state.tableData.list}
                        scroll={{x: 1300}}
                        size="middle"/>
                </Card>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        userInfo: state.userInfo,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: () => {
            dispatch({type: 'test', payload: 1})
        }
    }
}
Article = connect(mapStateToProps, mapDispatchToProps)(Article)

export default withRouter(Article)
