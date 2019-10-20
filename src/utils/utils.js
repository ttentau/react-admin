import {message} from 'antd';

export default {
    success(content = '操作成功!') {
        message.success(content);
    },
    error(content) {
        message.error(content);
    },
    warning(content) {
        message.warning(content);
    },
    loading(content = '加载中...') {
        message.loading(content);
    }
}
