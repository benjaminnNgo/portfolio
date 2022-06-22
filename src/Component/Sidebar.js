import React from 'react'
import { Layout, Menu } from 'antd';

import { NavLink } from 'react-router-dom';
import { HomeOutlined, UserOutlined, ReadOutlined, GithubOutlined, WechatOutlined } from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;

export default function Sidebar() {
  return (
    <div className='sideBar flex-col items-end' >
     
      <Layout>
        <Sider
          breakpoint="lg"
          collapsedWidth="0"
          onBreakpoint={broken => {
            console.log(broken);
          }}
          onCollapse={(collapsed, type) => {
            console.log(collapsed, type);
          }}
        >
          <div>
            <NavLink className='my_logo' to='/'>ntg<span className='my_logo_dot'>.</span>baoo<span className='my_logo_dot'>.</span></NavLink>
          </div>
          <div >
            
            <ul className='navList'>
              <li>

                <NavLink className="nav-link" to='/'><HomeOutlined className='nav_icon' />Home</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to='/about'><UserOutlined className='nav_icon' />About</NavLink>
              </li>
              
              <li>
                <NavLink className="nav-link" to='/works'> <GithubOutlined className='nav_icon' />Works</NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to='/contact'> <WechatOutlined className='nav_icon' />Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className='copyright'>@2022 Bao Ngo</div>
        </Sider>

      </Layout>
      
    </div>
  )
}
