import {createServer, createClient} from "@/plugins/axios";

const server = createServer({path: process.env.VUE_APP_BASE_URL + process.env.VUE_APP_API_URL + 'events'});

export let eventsClient;


export const initEventsClient = () => {
    eventsClient = createClient(server);
};

export function getEventsList() {
    return eventsClient.get('', {params: {populate: '*'}});
}

export function getEventById(id) {
    return eventsClient.get('/', { params: { id } });
}
