import React, { useState, useEffect, Fragment } from "react";
import { getFetch } from "./utils";

import "./Apis.css";

const Apis = () => {
  const [activities, setActivities] = useState([]);
  const [dogs, setDogs] = useState([]);
  const [data, setData] = useState([]);

  async function getData() {
    const activitiesData = await getFetch(
      `https://www.boredapi.com/api/activity/`
    );
    setActivities(activitiesData);

    const dogsData = await getFetch(`https://dog.ceo/api/breeds/image/random`);
    setDogs(dogsData);

    const dataData = await getFetch("https://randomuser.me/api");
    setData(dataData.results[0]);
  }

  useEffect(() => {
    getData();
  }, []);

  const {name} = data || {}


  return (
    <Fragment>

      <div className="container">
        <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded dark:bg-gray-800">
          <h1 className="welcome">Hello, my name is {name?.first}</h1>
          <img className="fotos" src={dogs.message} alt="foto" />
          <h2 className="activity">I recommend some activities to have fun!!! <br />{activities.activity}</h2>
            <button  onClick={getData}>
              <img className="btn" src="icons8-refresh-65.png" alt="" />
            </button>
          </div>
        </div>
    </Fragment>
  );
};
export default Apis;
