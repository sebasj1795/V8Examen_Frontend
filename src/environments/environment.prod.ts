import { commonEnvironment } from "./environment.common";

const env: Partial<typeof commonEnvironment> = {
  production: true,
  host: "https://mitocodestoreapi.azurewebsites.net",
};

export const environment = { ...commonEnvironment, ...env };
