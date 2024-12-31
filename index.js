import axios from "axios";
import rootRouter from "./routes/index.js";

axios.use("/api/v1", rootRouter);
axios.listen(3000);
