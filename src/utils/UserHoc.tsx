import { Navigate } from "react-router-dom";

const userHoc = (OriginalComponent: React.FC) => {
  const NewComponent = () => {
    const activeUser = JSON.parse(localStorage.getItem("activeUser") ?? "null");
    if (activeUser !== null) {
      return <OriginalComponent />;
    }
    return <Navigate to={"/login"} />;
  };
  return NewComponent;
};

export default userHoc;
