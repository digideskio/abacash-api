const config = {
    port: process.env.PORT || 9000,
    web: process.env.WEB_URL || 'https://abacash.abakus.no',
    pgUrl: process.env.PG_URL || 'postgres://localhost/abacash',
    nodeEnv: process.env.NODE_ENV || 'production',
    defaultCustomerRole: process.env.DEFAULT_CUSTOMER_ROLE || 'customer',
    nerd: {
        url: process.env.NERD_URL || 'https://abakus.no/api/',
        apiKey: process.env.NERD_TOKEN
    },
    secret: process.env.SECRET || 'secret',
    jwtExpiresIn: '7 days',
    jwtSecret: process.env.JWT_SECRET || 'hemmelig',
    smtpUrl: process.env.SMTP_URL || 'smtp://127.0.0.1:25',
    sentryDsn: process.env.SENTRY_DSN || null
};

export default config;
