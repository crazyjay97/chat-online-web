import React from 'react';
import MainHeader from '../main-header'
import MainContent from '../main-content'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import './index.less'


const mapStateToProps = (state) => ({
    id: state.id,
})

class Index extends React.Component {

    constructor(props) {
        super(props)
    }


    componentWillMount() {
        if (!this.props.id) {
            this.props.history.push({pathname: '/'})
        }
    }

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

const routerIndex = withRouter(Index)

export default connect(mapStateToProps, null, null, {forwardRef: true})(routerIndex);
