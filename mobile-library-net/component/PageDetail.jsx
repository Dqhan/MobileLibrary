class PageDetail extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'aui-pageDetail',
            src: 'http://localhost:8081/#/aui-pageDetail'
        })
    }
}

export default PageDetail;