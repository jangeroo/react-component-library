import {
  TabSwitcher as CompoundTabSwitcher,
  Tab,
  TabPanel,
  TabList
} from "@components/tabs";

interface Instance {
  name: string
  cloudProvider: string
  coreVersion: string
  enrollmentDate: string
}

function InstanceInformation({ instance }: { instance: Instance }) {
  return (
    <div>
      <h1>Instance Information for {instance.name}</h1>
      <div>Cloud Provider: {instance.cloudProvider}</div>
      <div>System Version: {instance.coreVersion}</div>
      <div>Enrollment Date: {instance.enrollmentDate}</div>
    </div>
  );
}

const instances = [
  {
    id: "abc123",
    name: "QA",
    coreVersion: "vABC",
    cloudProvider: "Azure",
    enrollmentDate: "01/01/2021"
  },
  {
    id: "def456",
    name: "Stag.",
    coreVersion: "vDEF",
    cloudProvider: "AWS",
    enrollmentDate: "02/02/2022"
  },
  {
    id: "ghi789",
    name: "Prod.",
    coreVersion: "vGHI",
    cloudProvider: "Azure",
    enrollmentDate: "03/03/2023"
  }
];

export default function Page() {
  return (
    <>
      <h3>TabSwitcher using compound components</h3>
      <CompoundTabSwitcher>
        <TabList>
          {instances.map((instance) => (
            <Tab id={instance.id} key={instance.id}>
              {instance.name}
            </Tab>
          ))}
        </TabList>

        {instances.map((instance) => (
          <TabPanel whenActiveId={instance.id} key={instance.id}>
            <InstanceInformation instance={instance} />
          </TabPanel>
        ))}
      </CompoundTabSwitcher>
    </>
  );
};
