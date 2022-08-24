import React from "react";
import ReactDOM from "react-dom";
import { StoreProvider } from "store/storeApp";
import App from "./App";
import { createMemoryHistory, createBrowserHistory } from "history";
import LocaleProvider from "@sedamit/bss-web-lib/common/component/locale/LocaleProvider";
import LocalizeService from "@sedamit/bss-web-lib/services/util/localize/LocalizeService";
import MESSAGES from "./locale";
import { DomainUtils } from "@sedamit/bss-web-lib/services/util/DomainUtils";
//@ts-ignore
import Cookies from "js-cookie";

const COOKIE_PATH = "/";
const COOKIE_NAME = "CRM_LOCALE";
const mount = (el: any, messageFromContainer: any) => {
  /*const history = defaultHistory ?? createMemoryHistory();

    if (onNavigate) {
      history.listen(onNavigate);
    }*/

  let messagesOverride = {
    ...MESSAGES.hr,
    ...messageFromContainer.hr,
  };
  messagesOverride = { hr: messagesOverride };
  console.log(messagesOverride);

  ReactDOM.render(
    <StoreProvider>
      <LocaleProvider
        localeConsumers={[
          // app's own messages
          (locale: any) =>
            LocalizeService.initLocalize(locale, messagesOverride),
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
        <App />
      </LocaleProvider>
    </StoreProvider>,
    el
  );

  // return {
  //     onParentNavigate({ pathname: nextPathname }) {
  //     const { pathname } = history.location;

  //     if (pathname !== nextPathname) {
  //         history.push(nextPathname);
  //     }
  //     },
  // };
};

if (process.env.NODE_ENV === "development") {
  const devRoot = document.querySelector("#_addBill");

  if (devRoot) {
    // if we are running our marketing application in isolation, in development
    mount(devRoot, MESSAGES);
  }
}

export { mount };
