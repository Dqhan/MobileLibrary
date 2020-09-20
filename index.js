require('./content/index.less')
require('./lib');
import Home from './Component/Home';

function App() {
  return <Home />;
}

{
  ReactDOM.render(<App />, document.getElementById("app"));
}
