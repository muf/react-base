export const apiResource = () => {
    const localhostDomain = 'http://localhost:3100';

    return {
        sample: (timeout: number) => {
            return `${localhostDomain}/test?timeout=${timeout}`;
        }
        , getTicketList: (service: string, timeout: number) => {
            return `${localhostDomain}/test?service:${service}&timeout=${timeout}`;
        }
    };
};