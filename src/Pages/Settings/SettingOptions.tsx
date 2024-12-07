import { ColorPicker } from "./ColorPicker";

export const useSettingOptions = () => {
  const settingsSections = [
    {
      title: "Quest Sorting",
      content: (
        <>
          <input type="checkbox" value="" />
          <label>Show Completed Quests</label>
          <input type="checkbox" value="" />
          <label>Show Quest's I Can Do</label>
          <input type="checkbox" value="" />
          <label>Show Quest's I Cant Do</label>
        </>
      ),
    },
    {
      title: "Change Font/Button Color",
      content: (
        <>
          <div className="ColorPickerContainer">
            <div className="FontColorPicker">
              <ColorPicker />
            </div>
            <div className="ButtonColorPicker">
              <ColorPicker />
            </div>
            <div className="LabelColorPicker">
              <ColorPicker />
            </div>
          </div>
        </>
      ),
    },
    {
      title: "Font Size",
      content: (
        <ul>
          <li>Email Notifications</li>
          <li>Push Notifications</li>
          <li>SMS Alerts</li>
        </ul>
      ),
    },
    {
      title: "Step Highlight Options",
      content: (
        <ul>
          <li>Email Notifications</li>
          <li>Push Notifications</li>
          <li>SMS Alerts</li>
        </ul>
      ),
    },
    {
      title: "Misc Options",
      content: (
        <ul>
          <li>Email Notifications</li>
          <li>Push Notifications</li>
          <li>SMS Alerts</li>
        </ul>
      ),
    },
  ];
  return { settingsSections } as const;
};
