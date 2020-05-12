import { App } from "./app";
import * as path from "path";
import { MongoDBConnection } from './utils/connection/mongodb-connection';

export const createApp = async () => {
    const app = new App();
    await app.create({
        appName: 'mutualfundsapp',
        port: 4200,
        folders: [{
            alias: "/",
            path: path.join(__dirname, "../static")
        }]
    });
    process.env.APP_URL = "http://localhost:4200";
    await new MongoDBConnection().init();
    return app;
};
if (process.env.NODE_ENV !== "test") {
    createApp().then((app) => {
        app.logger.debug(`Your fort is located at address - ${process.env.APP_URL}`);
    }).catch(err => {
        console.error(err);
    });
}

