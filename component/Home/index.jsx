import Introduction from '../Introduction';
import Member from '../Member';
import Button from '../Button';
function Home() {

    const [key, setKey] = React.useState("2");

    const handleClick = (e) => {
        console.log(e.eventKey);
        setKey(e.eventKey);
    }

    const renderContent = () => {
        switch (key) {
            // case "1":
            //     return <Main />;
            case "2":
                return <Introduction />;
            case "3":
                return <Member />;
            case "4":
                return <div>未完成</div>;
            case "5":
                return <div>未完成</div>;
            case "6":
                return <Button />;
            case "7":
                return <div>未完成</div>;
            case "8":
                return <div>未完成</div>;
            case "9":
                return <div>未完成</div>;
            case "10":
                return <div>未完成</div>;
            case "11":
                return <div>未完成</div>;
            case "12":
                return <div>未完成</div>;
            case "13":
                return <div>未完成</div>;
            case "14":
                return <div>未完成</div>;
            case "15":
                return <div>未完成</div>;
            case "16":
                return <div>未完成</div>;
            case "17":
                return <div>未完成</div>;
            case "18":
                return <div>未完成</div>;
            case "19":
                return <div>未完成</div>;
            case "20":
                return <div>未完成</div>;
            case "21":
                return <div>未完成</div>;
            case "22":
                return <div>未完成</div>;
            case "23":
                return <div>未完成</div>;
            case "24":
                return <div>未完成</div>;
            case "25":
            default:
                return <div>未完成</div>;
        }
    }

    return <div className="home">
        <Menu defaultKey="1" onClick={handleClick}>
            {/* <Menu.SubMenu key="1" title="Mobile Library"></Menu.SubMenu> */}
            <Menu.SubMenu key="2" title="简介"></Menu.SubMenu>
            <Menu.SubMenu key="3" title="成员"></Menu.SubMenu>
            <Menu.SubMenu key="4" title="Components">
                <Menu.MenuItemGroup title="原子组件">
                    <Menu.Item key="5">Icon</Menu.Item>
                    <Menu.Item key="6">Button</Menu.Item>
                    <Menu.Item key="7">Layout</Menu.Item>
                </Menu.MenuItemGroup>
                <Menu.MenuItemGroup title="容器组件">
                    <Menu.Item key="8">Input</Menu.Item>
                    <Menu.Item key="9">Radio</Menu.Item>
                    <Menu.Item key="10">Checkbox</Menu.Item>
                    <Menu.Item key="11">InputNumber</Menu.Item>
                    <Menu.Item key="12">Rate 评分</Menu.Item>
                    <Menu.Item key="13">Swich</Menu.Item>
                    <Menu.Item key="14">DatePicker</Menu.Item>
                    <Menu.Item key="15">PeoplePicker</Menu.Item>
                    <Menu.Item key="16">Combobox</Menu.Item>
                    <Menu.Item key="17">MutiCombobox</Menu.Item>
                    <Menu.Item key="18">Upload</Menu.Item>
                </Menu.MenuItemGroup>
                <Menu.MenuItemGroup title="场景组件">
                    <Menu.Item key="19">Alert</Menu.Item>
                    <Menu.Item key="20">Calendar</Menu.Item>
                    <Menu.Item key="21">Dialog</Menu.Item>
                    <Menu.Item key="22">Confrim</Menu.Item>
                    <Menu.Item key="23">Table</Menu.Item>
                    <Menu.Item key="24">Pager</Menu.Item>
                    <Menu.Item key="25">TabControl</Menu.Item>
                    <Menu.Item key="26">Tree</Menu.Item>
                </Menu.MenuItemGroup>
                <Menu.MenuItemGroup title="业务组件">
                    <Menu.Item key="27">Menu</Menu.Item>
                    <Menu.Item key="28">Breadcrumb</Menu.Item>
                    <Menu.Item key="29">Steps</Menu.Item>
                </Menu.MenuItemGroup>
            </Menu.SubMenu>
        </Menu>
        <Menu.Content>
            {
                renderContent()
            }
        </Menu.Content>
    </div>
}


export default Home;