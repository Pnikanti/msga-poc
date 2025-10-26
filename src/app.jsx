import { routes } from "./routes.js";
import { createApp, Router } from "./msga/msga.js";

const App = () => (
    <Router routes={routes} />
)

createApp(App);