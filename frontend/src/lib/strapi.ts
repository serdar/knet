interface Props {
    endpoint: string;
    query?: Record<string, string>;
    wrappedByKey?: string;
    wrappedByList?: string;
}

export default async function fetchApi<T>(
    {
        endpoint,
        query,
        wrappedByKey,
        wrappedByList
    }: Props): Promise<T> {

    if (endpoint.startsWith('/')) {
        endpoint = endpoint.slice(1);
    }

    const url = new URL(`${import.meta.env.STRAPI_URL}/api/${endpoint}`);

    if (query) {
        Object.entries(query).forEach(([key, value]) => {
            url.searchParams.append(key, value);
        })
    }

    const res = await fetch(url.toString(),{
        headers: {
            "Authorization": `Bearer ${import.meta.env.STRAPI_API_KEY}`
        }
    });
    
    let data = await res.json();

    if (wrappedByKey) {
        data = data[wrappedByKey]
    }

    if (wrappedByList) {
        data = data[wrappedByList]
    }

    return data as T;
}