import MD from "./MarkDown";
class BaseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      target: "",
      src: ""
    };
  }

  componentDidMount() {}

  loadTarget(props) {
    let { md, src } = props;
    this.setState({
      target: md,
      src: src
    });
  }
  render() {
    return (
      <div>
        <div className="demo">
          <h1>效果展示</h1>
          <div className="mock-phone">
            <div className="camera"></div>
            <div className="earpiece"></div>
            <div className="inner">
              <iframe src={this.state.src}></iframe>
            </div>
          </div>
        </div>
        <MD name={this.state.target} />
      </div>
    );
  }
}

window.BaseComponent = BaseComponent;

export default BaseComponent;
