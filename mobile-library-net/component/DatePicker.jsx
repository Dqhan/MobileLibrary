class DatePicker extends BaseComponent {
    constructor(props) {
        super(props)
    }

    componentDidMount(){
        super.componentDidMount()
        this.loadTarget({
            md: 'aui-datePicker',
            src: 'http://localhost:8081/#/aui-datePicker'
        })
    }
}

export default DatePicker;