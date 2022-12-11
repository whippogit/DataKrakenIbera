import app from "./app";
import { mongoConnect } from "./database/databs";
import cors from "cors";

const port = process.env.PORT || 3000;


app.use(cors({origin: "http://localhost:5173/"}));

//MongoDB connection
mongoConnect;

app.listen(port, () => console.log("🚀 Server on port", port));
