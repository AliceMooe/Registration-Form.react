import { useState } from "react";
import FormBox from "./Form";
import List from "./List";

const Main = () => {
  const [userInfos,setUserInfo] = useState ([]);

  const getUserInfo =(userInfoObj) => {
    console.log(userInfoObj);
    setUserInfo([...userInfos, userInfoObj]);
  }
  return (
   <section className="Main">
    <FormBox getUserInfo={getUserInfo} />
    <List userInfos = {userInfos} />
   </section>
  );
};

export default Main;