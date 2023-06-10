import { DataSource } from "typeorm";

export const appDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "enacom_db",
    username: "enacom_user",
    password: "enacom_pass",
    synchronize: true,
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
});
