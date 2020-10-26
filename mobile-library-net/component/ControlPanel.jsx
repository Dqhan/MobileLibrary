class ControlPanel extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'aui-controlPanel',
            src: 'http://localhost:8081/#/aui-controlPanel'
        })
    }
}

export default ControlPanel;