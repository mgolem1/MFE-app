import AppConfigService from "@sedamit/bss-web-lib/services/config/AppConfigService";
import ANTD_MESSAGES from "@sedamit/bss-web-lib/services/locale/antd";
import MESSAGES from "@sedamit/bss-web-lib/services/locale/message";
import NUMERAL_FORMAT from "@sedamit/bss-web-lib/services/locale/numeral";
import { DomainUtils } from "@sedamit/bss-web-lib/services/util/DomainUtils";
import LocalizeService from "@sedamit/bss-web-lib/services/util/localize/LocalizeService";
import { ConfigProvider } from "antd";
import Cookies from "js-cookie";
import { getLogger } from "loglevel";
import numeral from "numeral";
import React from "react";

import dayjs from "dayjs";
import tz from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";

const LOGGER = getLogger("LocaleProvider");

// constants
const COOKIE_PATH = "/";
const COOKIE_NAME = "CRM_LOCALE";

// reac configs
const DEFAULT_LOCALE: string = AppConfigService.getValue("app.defaultLocale");
// tslint:disable-next-line: no-commented-code
// const DEFAULT_TIMEZONE: string = AppConfigService.getValue('app.defaultTimeZone');
// const DEFAULT_DATE_WITH_TIME: string = AppConfigService.getValue('dateTimeFormat.dateWithTime');
const SUPPORTED_LOCALES: string[] = AppConfigService.getValue(
  "app.supportedLocales"
);

const appDomain = DomainUtils.extractDomainWithoutSubs();

dayjs.extend(utc);
dayjs.extend(tz);

// register custom numeraljs formats
numeral.register("locale", "hr", NUMERAL_FORMAT.hr);

// ----- Locale context - this is the way to read current locale in the rest of the app

export interface ILocaleProviderContextValue {
  currentLocale: string;
}

export const LocaleContext = React.createContext(
  {} as ILocaleProviderContextValue
);

// ---- other types
export type LocaleProviderFn = () => string | undefined;
export type LocaleConsumerFn = (locale: string) => void;

// -- Prop types
// ----------

export interface ILocaleProviderOwnProps {
  initialLocaleProviders?: LocaleProviderFn[];
  localeConsumers?: LocaleConsumerFn[];
  localeMessages?: any;
}

type ILocaleProviderProps = ILocaleProviderOwnProps;

interface ILocaleProviderState {
  contextValue?: {
    currentLocale: string;
  };
  // it's important to ensure that locales are configured
  appLocaleInitialized: boolean;
}

// -- Component
// ----------

/** Component that handles app locale */
class LocaleProvider extends React.Component<
  ILocaleProviderProps,
  ILocaleProviderState
> {
  // TODO: most of these (except maybe app's own locale?) should be moved to the caller of this component.
  static defaultProps: ILocaleProviderOwnProps = {
    initialLocaleProviders: [
      // read locale form cookie
      () => Cookies.get("locale"),
    ],
    localeConsumers: [
      // app's own messages
      (locale) => LocalizeService.initLocalize(locale, MESSAGES),
      // momentjs
      (locale) => {
        dayjs.locale(locale);
        dayjs.tz.guess();
      },
      // numeraljs
      (locale) => {
        numeral.locale(locale);
      },
      // store to cookie
      (locale) => {
        Cookies.set(COOKIE_NAME, locale, {
          domain: appDomain,
          path: COOKIE_PATH,
        });
      },
    ],
  };
  state: ILocaleProviderState = {
    appLocaleInitialized: false,
  };

  initLocaleLibrary = () => {
    const locale = "hr";
    //!!!!!!!!!!!!!!!!!!!!!!!
    //OVO PROMIJENJENO DA PRIMA PROPS UMJESTO MESSAGES SA REPOZITORIJA
    //!!!!!!!!!!!!!!!!!!!!!!!
    LocalizeService.initLocalize(locale, this.props.localeMessages);
    dayjs.locale(locale);
    dayjs.tz.guess();
    numeral.locale(locale);
    Cookies.set(COOKIE_NAME, locale, { domain: appDomain, path: COOKIE_PATH });
  };

  componentDidMount = () => {
    this.initLocaleLibrary();
    this.initializeLocale();
  };

  componentDidUpdate(
    prevProps: ILocaleProviderProps,
    prevState: ILocaleProviderState
  ) {
    if (
      this.state !== prevState &&
      this.state.contextValue !== prevState.contextValue
    ) {
      if (
        this.state.contextValue != null &&
        this.state.contextValue.currentLocale != null
      ) {
        this.callLocaleConsumers();
      }
    }
    // TODO: when settings are changed call consumers
  }

  render = () => {
    return (
      this.state.contextValue != null &&
      this.state.appLocaleInitialized != null && (
        <LocaleContext.Provider value={this.state.contextValue}>
          <ConfigProvider locale={this.getAntdLocale()}>
            {this.props.children}
          </ConfigProvider>
        </LocaleContext.Provider>
      )
    );
  };

  getAntdLocale = () => {
    if (this.state.contextValue?.currentLocale != null) {
      return ANTD_MESSAGES.hr;
    }
    return;
  };

  initializeLocale() {
    const locale = (this.props.initialLocaleProviders || []).reduce(
      (accum, provider) => {
        return this.getSupportedLocale(provider(), accum);
      },
      this.getSupportedLocale(undefined, DEFAULT_LOCALE)
    );

    this.storeContext(locale);

    LOGGER.info(`Using initial locale: ${locale}`);
  }

  callLocaleConsumers() {
    const locale = this.state.contextValue?.currentLocale;
    if (locale != null) {
      (this.props.localeConsumers || []).forEach((consumer) => {
        consumer(locale);
      });

      LOGGER.info(`Using locale: ${locale}`);
    }
  }

  private storeContext(locale: string) {
    this.setState({ contextValue: { currentLocale: locale } });
  }

  /** Check if given locale is in supported locales list and return it if is or fallback to default locale. You can pass undefined/null to get default locale. */
  private getSupportedLocale(
    locale: string | undefined,
    defaultLocale: string
  ): string {
    if (SUPPORTED_LOCALES) {
      return (
        SUPPORTED_LOCALES.find((item) => item != null && item === locale) ??
        defaultLocale
      );
    }
    return "hr";
  }
}

export default LocaleProvider;
