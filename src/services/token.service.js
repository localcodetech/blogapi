
// inmemory blacklist  lust for learning
const blackListedTokens = new Set();

export const blackListedToken = (token) =>{
    blackListedTokens.add(token)
};


export const isTokenBlackLised = (token) =>{
    return blackListedTokens.has(token)
}

