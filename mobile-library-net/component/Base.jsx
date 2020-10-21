import MD from './MarkDown'
class BaseComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            target: '',
            src: ''
        }
    }

    componentDidMount() {

    }

    loadTarget(props) {
        let { md, src } = props;
        this.setState({
            target: md,
            src: src
        })
    }
    render() {
        return <div>
            <div className='demo'>
                <h1>效果展示</h1>
                <iframe src={this.state.src}></iframe>
            </div>
            <MD name={this.state.target} />
        </div>
    }
}

export default BaseComponent