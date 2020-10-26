class TabBar extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'aui-tabBar',
            src: 'http://localhost:8081/#/aui-tabBar'
        })
    }
}

export default TabBar;