import { initI18next } from "../osm-app-component/initI18next";

import * as en from "./locales/en.json";
import * as oacEn from "../osm-app-component/locales/en.json";

import * as de from "./locales/de.json";
import * as oacDe from "../osm-app-component/locales/de.json";

export const Resources = {
  en: { translation: { ...en, ...oacEn } },
  de: { translation: { ...de, ...oacDe } },
};

initI18next(Resources);
