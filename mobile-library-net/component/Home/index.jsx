import "../Base";

import json from "../../preConf/components.json";

import Components from "../../preConf/componentsImport";

function Home() {
  const [key, setKey] = React.useState("0");

  const handleClick = e => {
    console.log(e.eventKey);
    setKey(e.eventKey);
  };

  const renderContent = () => {
    var atomicComponents = json.AtomicComponents;
    var containerComponents = json.ContainerComponents;
    var senseComponents = json.SenseComponents;
    var subMenu = json.subMenu;
    var businessComponents = json.BusinessComponents;
    var components = [].concat(
      atomicComponents,
      containerComponents,
      senseComponents,
      subMenu,
      businessComponents
    );
    var target = components.filter(c => c.key === key)[0];
    var Component = Components[target.component];
    return <Component />;
  };
  const renderAtomicComponents = () => {
    return json.AtomicComponents.map(c => {
      return <Menu.Item key={c.key}>{c.name}</Menu.Item>;
    });
  };
  const renderContainerComponents = () => {
    return json.ContainerComponents.map(c => {
      return <Menu.Item key={c.key}>{c.name}</Menu.Item>;
    });
  };
  const renderSenseComponents = () => {
    return json.SenseComponents.map(c => {
      return <Menu.Item key={c.key}>{c.name}</Menu.Item>;
    });
  };
  const renderBusinessComponents = () => {
    return json.BusinessComponents.map(c => {
      return <Menu.Item key={c.key}>{c.name}</Menu.Item>;
    });
  };
  return (
    <div className="home">
      <Menu defaultKey="0" onClick={handleClick}>
        <Menu.SubMenu key="0" title="简介"></Menu.SubMenu>
        <Menu.SubMenu key="1" title="成员"></Menu.SubMenu>
        <Menu.SubMenu key="2" title="Components">
          <Menu.MenuItemGroup title="原子组件">
            {renderAtomicComponents()}
          </Menu.MenuItemGroup>
          <Menu.MenuItemGroup title="容器组件">
            {renderContainerComponents()}
          </Menu.MenuItemGroup>
          <Menu.MenuItemGroup title="场景组件">
            {renderSenseComponents()}
          </Menu.MenuItemGroup>
          <Menu.MenuItemGroup title="业务组件">
            {renderBusinessComponents()}
          </Menu.MenuItemGroup>
        </Menu.SubMenu>
      </Menu>
      <Menu.Content>{renderContent()}</Menu.Content>
    </div>
  );
}

export default Home;
