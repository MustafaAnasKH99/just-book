import Nylas from 'nylas';
import { config } from "../../../config";

const nylas = new Nylas({
    apiKey: config.nylasAPI,
    apiUri: config.apiUri,
});