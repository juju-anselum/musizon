import { Outlet } from "react-router-dom";

const FullScreenLayout = () => {
  return (
    <div className="full-screen-layout">
      <Outlet />
    </div>
  );
};

export default FullScreenLayout