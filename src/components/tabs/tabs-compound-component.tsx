/*
  Based on https://blog.logrocket.com/understanding-react-compound-components/

  For TabSwitcher, we need to have two things:
  1. which tab content to show, and
  2. should switch tab panels when the user clicks a tab

  To accomplish this, we need three components:

  TabSwitcher :  parent component to hold the state
  Tab :  component that tell its parent if it’s clicked
  TabPanel: component that renders when the parent tells it to
*/
'use client'

import React, { Dispatch, SetStateAction, createContext, useEffect } from "react";
import classes from "./tabs.module.css";


interface TabSwitcherContextType {
  activeTabId: string;
  setActiveTabId: Dispatch<SetStateAction<string>>;
};

const TabSwitcherContext = createContext<TabSwitcherContextType>({
  activeTabId: "",
  setActiveTabId: () => { },
});


export function TabSwitcher({ children }: React.PropsWithChildren) {
  const [activeTabId, setActiveTabId] = React.useState("");

  return (
    <TabSwitcherContext.Provider value={{ activeTabId, setActiveTabId }}>
      {children}
    </TabSwitcherContext.Provider>
  );
}

interface TabListProps {
  orientation?: 'horizontal' | 'vertical'
  children: JSX.Element[]
}

export function TabList({ orientation = 'horizontal', children }: TabListProps) {
  const { activeTabId, setActiveTabId } = React.useContext(TabSwitcherContext);

  useEffect(() => {
    if (activeTabId === "") setActiveTabId(children[0].props.id);
  }, [activeTabId, children, setActiveTabId]);

  return (
    <div className={`${classes.tablist} ${classes[orientation]}`}>
      {children}
    </div>
  );
}

interface TabProps extends React.PropsWithChildren {
  id: string
}

export function Tab({ id, children }: TabProps) {
  const { activeTabId, setActiveTabId } = React.useContext(TabSwitcherContext);

  return (
    <div
      onClick={() => setActiveTabId(id)
      }
      className={`${classes.tab} ${activeTabId === id ? classes.active : null}`}
    >
      {children}
    </div>
  );
}

interface TabPanelProps extends React.PropsWithChildren {
  whenActiveId: string
}

export function TabPanel({ whenActiveId, children }: TabPanelProps) {
  const { activeTabId } = React.useContext(TabSwitcherContext);

  return whenActiveId === activeTabId ? (
    <div className={classes.panel} > {children} </div>
  ) : null;
}
