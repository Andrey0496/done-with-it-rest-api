const getEnv = function (): string {
    return process.env.NODE_ENV || 'development';
};

export { getEnv };
