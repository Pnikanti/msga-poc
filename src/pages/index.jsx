import { Welcome } from "../components/Welcome.js";
import { Button } from "../components/Button.js";
import { navigate } from "../msga/msga.js";

export default function Index () {
    return (
        <div class="flex flex-col w-screen h-screen gap-4 align-center justify-center bg-stone-900 py-8">
            <Button className="self-center" onClick={() => navigate("/test")}>Go To Test Site</Button>
            <Welcome text="Index Page"/>
            <p className="self-center text-white">Routing, states, effects, hydration, jsx, tailwind integration ..</p>
        </div>
    )
}