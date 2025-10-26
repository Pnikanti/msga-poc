import { Welcome } from "../components/Welcome.js";
import { Button } from "../components/Button.js";
import { navigate } from "../msga/msga.js";

export default function Index () {
    return (
        <div>
            <Welcome text="Index Page"/>
            <Button className="absolute bottom-0" onClick={() => navigate("/test")}>Go To Test Site</Button>
        </div>
    )
}