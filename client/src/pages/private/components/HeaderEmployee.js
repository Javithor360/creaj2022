import { useDash } from "../../../context/DashboardContext";
//scss
import './DashboardEmployeeElements/assets/scss/Header_Employee.scss'
//icons
import { FaCog, FaBell } from 'react-icons/fa';

export const Header = () => {
  const HeaderImages = require.context('./assets/img/', true);
  const { OptionElement, setSettingsOption } = useDash();

  return (
    <div className="dashboard-header flex justify-between flex-row h-12 w-100">
      <div className="flex flex-column items-start justify-center w-1/5 text-white ml-5">
        <span className="text-lg">{OptionElement}</span>
        <hr className="w-28 m-0 opacity-100 bg-white mt-1 text-xl" />
      </div>
      <div className="header-icons-grid w-4/5 h-100 justify-end items-center">
        <div className="mx-2 text-2xl">
          <div to="/" className="header-icon hi-hover-1 flex items-center justify-center relative">
            {/* <span className="h-2 w-2 rounded-full bg-red-500 punto-notificacion top-0.5 right-0.5"></span> */}
            <FaBell />
          </div>
        </div>
        <div className="separate h-100 flex items-center justify-center">
          <hr />
        </div>
        <div className="mx-2 text-2xl" onClick={() => { setSettingsOption(true) }}>
          <div to="/" className="header-icon hi-hover-2 text-2xl flex items-center justify-center">
            <FaCog />
          </div>
        </div>
        <div className="separate h-100 items-center flex justify-center">
          <hr />
        </div>
        <div className="ml-2 user-info flex justify-center items-center">
          {/* <span className="text-white mr-3 my-0">{NameToHeader}</span> */}
          <span className="text-white mr-3 my-0">Steve S.</span>
          <div className="profile-img">
            {/* <img src={HeaderImages('./profile-default.jpg')} alt="" className="h-full w-full" /> */}
            <img src={HeaderImages('./profile-default.jpg')} alt="" className="h-full w-full" />
          </div>
        </div>
      </div>
    </div>
  );
};
