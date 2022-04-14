import React from 'react';
import ReactDOM from 'react-dom';
import { Spin } from 'antd'


export function showLoading(params = {}) {
    const { tip = '加载中...', ...props } = params
    const dom = document.createElement('div');
    dom.setAttribute('id', 'global-loading');
    document.body.appendChild(dom);
    ReactDOM.render(<Spin tip={tip} {...props} />, dom);
}

export function hideLoading() {
    document.body.removeChild(document.getElementById('global-loading'));
}
