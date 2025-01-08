import React from 'react';

import './App.css'
import { Flex, Text, Button, Card, Tabs, Box} from "@radix-ui/themes";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';
import * as Menubar from "@radix-ui/react-menubar";
import Overview from "./Overview";
import * as TabsComponent from "@radix-ui/react-tabs";



const TabsDemo = () => (
	<TabsComponent.Root className="TabsRoot" defaultValue="overview">
		<TabsComponent.List className="flex px-6 py-3 " aria-label="overview">
    <TabsComponent.Trigger className="TabsTrigger" value="tab1">
				Overview
			</TabsComponent.Trigger>
			<TabsComponent.Trigger className="TabsTrigger" value="tab2">
				Analytics
			</TabsComponent.Trigger><TabsComponent.Trigger className="TabsTrigger" value="tab1">
				Reports
			</TabsComponent.Trigger>
			<TabsComponent.Trigger className="TabsTrigger" value="tab2">
				Notifications
			</TabsComponent.Trigger>
		</TabsComponent.List>
    <TabsComponent.Content value="overview">
          {/* <h2>Overview</h2> */}
          <Card>
            <Flex direction="row" gap="10">
              <Box maxWidth="350px" className='Box'>
                <Card asChild>
                  <a href="#">
                    <Text className='Box-header' as="div" size="2" weight="bold">
                      Total Revenue
                    </Text>
                    <div className="Box-number">$45,231.89</div>
                    <h4>+20.1% from last month</h4>
                  </a>
                </Card>
              </Box>
              <Box maxWidth="350px"  className='Box'>
                <Card asChild>
                  <a href="#">
                  <Text className='Box-header' as="div" size="2" weight="bold">
                  Subscriptions
                  </Text>
                  <div className="Box-number">+2350</div>
                  <h4>+180.1% from last month</h4>
                  </a>
                </Card>
              </Box>
              <Box maxWidth="350px"  className='Box'>
                <Card asChild>
                  <a href="#">
                    <Text className='Box-header' as="div" size="2" weight="bold">
                    Sales
                    </Text>
                    <div className="Box-number">+12,234</div>
                    <h4>+19% from last month</h4>
                  </a>
                </Card>
              </Box>
            </Flex>
          </Card>
          <p>This is the Overview section.</p>
        </TabsComponent.Content>
  </TabsComponent.Root>
)


const RADIO_ITEMS = ["A", "B", "C"];
const CHECK_ITEMS = ["First item", "Second item"];

const MenubarDemo = () => {
	const [checkedSelection, setCheckedSelection] = React.useState([
		CHECK_ITEMS[1],
	]);
	const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);
  return (
		<Menubar.Root className="MenubarRoot">
			<Menubar.Menu>
				<Menubar.Trigger className="MenubarTrigger">Overview</Menubar.Trigger>
			</Menubar.Menu>
			<Menubar.Menu>
				<Menubar.Trigger className="MenubarTrigger">Customers</Menubar.Trigger>
			</Menubar.Menu>
			<Menubar.Menu>
				<Menubar.Trigger className="MenubarTrigger">Products</Menubar.Trigger>
			</Menubar.Menu>
			<Menubar.Menu>
				<Menubar.Trigger className="MenubarTrigger">Settings</Menubar.Trigger>
			</Menubar.Menu>
		</Menubar.Root>
	);
};

// export default MenubarDemo;

function App() {
  return (
    <>
      <div className="menu-container">
        <DropdownMenu className='menuDropDown'>
          <DropdownMenuTrigger asChild>
            <Button className="dropdown-button">My Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onSelect={() => console.log('Item 1 selected')}>Item 1</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => console.log('Item 2 selected')}>Item 2</DropdownMenuItem>
            <DropdownMenuItem onSelect={() => console.log('Item 3 selected')}>Item 3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <MenubarDemo />
      </div>
{/* =================================== Tabs ============================ */}



<div className="tabstyle">
<TabsDemo />
        <div className='flex px-10 gap-15' direction="column">
      <Tabs.Root defaultValue="overview">
        <Tabs.List aria-label="Tabs example" className='flex px-6 py-1'>
          {/* <Tabs.Trigger value="overview" >
            Overview
          </Tabs.Trigger>
          <Tabs.Trigger value="analytics">
            Analytics
          </Tabs.Trigger>
          <Tabs.Trigger value="reports">
            Reports
          </Tabs.Trigger>
          <Tabs.Trigger value="notifications">
            Notifications
          </Tabs.Trigger> */}
        </Tabs.List>

        <Tabs.Content value="overview">
          <Card>
            <Flex direction="row" gap="10">
              <Box maxWidth="350px" className='Box'>
                <Card asChild>
                  <a href="#">
                    <Text className='Box-header' as="div" size="2" weight="bold">
                      Total Revenue
                    </Text>
                    <div className="Box-number">$45,231.89</div>
                    <h4>+20.1% from last month</h4>
                  </a>
                </Card>
              </Box>
              <Box maxWidth="350px"  className='Box'>
                <Card asChild>
                  <a href="#">
                  <Text className='Box-header' as="div" size="2" weight="bold">
                  Subscriptions
                  </Text>
                  <div className="Box-number">+2350</div>
                  <h4>+180.1% from last month</h4>
                  </a>
                </Card>
              </Box>
              <Box maxWidth="350px"  className='Box'>
                <Card asChild>
                  <a href="#">
                    <Text className='Box-header' as="div" size="2" weight="bold">
                    Sales
                    </Text>
                    <div className="Box-number">+12,234</div>
                    <h4>+19% from last month</h4>
                  </a>
                </Card>
              </Box>
            </Flex>
          </Card>
          <p>This is the Overview section.</p>
        </Tabs.Content>

        <Tabs.Content value="analytics">
          <h2>Analytics</h2>
          <p>This is the Analytics section.</p>
        </Tabs.Content>

        <Tabs.Content value="reports">
          <h2>Reports</h2>
          <p>This is the Reports section.</p>
        </Tabs.Content>

        <Tabs.Content value="notifications">
          <h2>Notifications</h2>
          <p>This is the Notifications section.</p>
        </Tabs.Content>
      </Tabs.Root>
      </div>
    </div>
<Overview />
    </>
  );
}

export default App
