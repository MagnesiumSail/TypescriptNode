export const createHeaders = (token: string) => ({
    'ContentType': 'application/json',
    'Authorization': `Bearer ${token}`,
});

export const createMethods = (token: string, method?: string,) => ({
    method,
    header: createHeaders(token)
})