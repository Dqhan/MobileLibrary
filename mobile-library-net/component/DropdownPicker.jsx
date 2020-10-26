class DropdownPicker extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'aui-dropdownPicker',
            src: 'http://localhost:8081/#/aui-dropdownPicker'
        })
    }
}

export default DropdownPicker;