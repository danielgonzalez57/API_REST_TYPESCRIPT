import { app } from "./app/app";

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => console.log(`----------- SERVER RUNNING ON PORT ${PORT}【ツ】-----------`))