import { mount } from "bill/BillApp";
import React, { useRef, useEffect } from "react";
import MESSAGES from "../locale";
//import { useHistory } from "react-router-dom";
export default () => {
  const ref = useRef(null);
  //const history = useHistory();

  useEffect(() => {
    /*const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    
    history.listen(onParentNavigate);*/
    let modifiedMessages = {
      hr: { "COMMON.ACTION_ADD_NEW": "IZMIJENJENI DODAJ NOVI" },
    };
    mount(ref.current, modifiedMessages);
  }, []);

  return <div ref={ref} />;
};
