import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

const Year = new Date().getFullYear()
export default () => <Footer className='footer'>React Admin &copy;{Year} Created By Yunxiang.Lee</Footer>
