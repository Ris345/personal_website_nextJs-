// app/datadog-init.tsx
"use client";
import { datadogRum } from "@datadog/browser-rum";


datadogRum.init({
    applicationId: '4d734289-68ea-460b-a5e4-e5958ccc13db',
    clientToken: 'pub094256e613d49524498da40f08ae06d0',
    // `site` refers to the Datadog site parameter of your organization
    // see https://docs.datadoghq.com/getting_started/site/
    site: 'us5.datadoghq.com',
    service: 'portfolio_my',
    env: 'dev',
    // Specify a version number to identify the deployed version of your application in Datadog
    // version: '1.0.0',
    sessionSampleRate: 100,
    sessionReplaySampleRate: 20,
    defaultPrivacyLevel: 'mask-user-input',
});


export default function DatadogInit() { return null; }


