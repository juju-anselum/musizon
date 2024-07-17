import { Outlet } from "react-router-dom";

const FullScreenLayout = () => {
  return (
    <div className="w-full h-full p-2">
      <Outlet />
    </div>
  );
};

export default FullScreenLayout