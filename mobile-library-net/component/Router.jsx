import { Route, Switch, HashRouter } from "react-router-dom";

import json from "../components.json";

renderRouter = () => {
  var atomicComponents = json.AtomicComponents;
  var containerComponents = json.ContainerComponents;
  var senseComponents = json.SenseComponents;
  var businessComponents = json.BusinessComponents;
  var subMenu = json.subMenu;
  var components = [].concat(
    atomicComponents,
    containerComponents,
    senseComponents,
    businessComponents,
    subMenu
  );
  return components.map(c=>{
      return <Route exact path={c.url} component={Home} />
  });
};

const RootRouter = () => {
  return (
    <HashRouter>
      <React.Suspense fallback={<div>loading...</div>}>
        <Switch>
          {}
          <Route exact path="/" component={Home} />
          <Route exact path="/Introduction" component={oAuthPromisition} /> />
          <Route component={Home} />
        </Switch>
      </React.Suspense>
    </HashRouter>
  );
};
export default RootRouter;
