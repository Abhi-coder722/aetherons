interface ImportMetaEnv {
  readonly PUBLIC_SITE_URL?: string;
  readonly PUBLIC_FORM_ENDPOINT?: string;
  readonly PUBLIC_DEV_API_URL?: string;
  readonly PUBLIC_CALENDLY_URL?: string;
  readonly PUBLIC_CALENDLY_URL_DE?: string;
  readonly PUBLIC_CALENDLY_URL_TR?: string;
  readonly PUBLIC_CALENDLY_URL_EN?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
