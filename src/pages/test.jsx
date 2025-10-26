import { Welcome } from "../components/Welcome.js";
import { Button } from "../components/Button.js";
import { navigate } from "../msga/msga.js";

export default function Test() {
    return (
        <div>
            <Welcome text="Test Page"/>
            <Button className="absolute bottom-0" onClick={() => navigate("/")}>Go To Index Site</Button>
        </div>
    )
}