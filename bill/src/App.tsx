import React from "react";
import AddRacun from "./components/AddRacun";

import LocaleProvider from "@sedamit/bss-web-lib/common/component/locale/LocaleProvider";
import LocalizeService from "@sedamit/bss-web-lib/services/util/localize/LocalizeService";
import MESSAGES from "./locale";
import { DomainUtils } from "@sedamit/bss-web-lib/services/util/DomainUtils";
//@ts-ignore
import Cookies from "js-cookie";

const COOKIE_PATH = "/";
const COOKIE_NAME = "CRM_LOCALE";

export default () => {
  return (
    <LocaleProvider
      localeConsumers={[
        // app's own messages
        (locale: any) => LocalizeService.initLocalize(locale, MESSAGES),
        // momentjs
        // store to cookie
        (locale: any) => {
          const appDomain = DomainUtils.extractDomainWithoutSubs();

          Cookies.set(COOKIE_NAME, locale, {
            domain: appDomain,
            path: COOKIE_PATH,
          });
        },
      ]}
    >
      <div>
        <AddRacun />
      </div>
    </LocaleProvider>
  );
};
