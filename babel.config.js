module.exports = {
    presets: [
        [
            '@babel/env',
            {
                useBuiltIns: 'usage',
                corejs: 3,
            },
        ],
        [
            '@babel/preset-typescript',
            {
                isTSX: true,
                allExtensions: true,
            },
        ],
        '@babel/react',
    ],
    plugins: [
        'emotion',
        '@babel/proposal-class-properties',
        '@babel/proposal-object-rest-spread',
    ],
};
