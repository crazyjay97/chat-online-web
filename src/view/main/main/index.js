import React from 'react';
import MainHeader from '../main-header'
import MainContent from '../main-content'
import './index.less'

class Index extends React.Component {


    render() {
        return (
            <div className="main">
                <div>
                    <MainHeader/>
                </div>
                <div>
                    <MainContent/>
                </div>
            </div>
        )
    }
}

export default Index
