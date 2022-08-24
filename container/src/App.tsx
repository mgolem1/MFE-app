import React from "react";
import BillList from "./components/BillList";
import BillApp from "./components/BillApp";
import LocalizeService from "@sedamit/bss-web-lib/services/util/localize/LocalizeService";
export default () => {
  return (
    <div>
      {LocalizeService.translate("COMMON.ACTION_ADD_NEW")}
      <BillList />
      <BillApp />
    </div>
  );
};
