export const environment = {
  production: true,
    api: {
        protocol: 'https',
        host: '',
        get url() {
            return `${this.protocol}://${this.host}/api`
        }
    }
};
