import { OpaqueToken } from '@angular/core';

export const CONFIG_ENV: string = "DEV"; //FAKE, PRD
export let APP_CONFIG_ENV = new OpaqueToken('env.config');