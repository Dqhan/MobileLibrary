class TabControl extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'aui-tabControl',
            src: 'http://localhost:8081/#/aui-tabControl'
        })
    }
}

export default TabControl;