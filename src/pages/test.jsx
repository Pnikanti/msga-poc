import { Welcome } from "../components/Welcome.js";
import { Button } from "../components/Button.js";
import { navigate, useState } from "../msga/msga.js";

export default function Test() {
    return (
        <div class="flex flex-col w-screen h-screen gap-4 align-center justify-center bg-stone-900 py-8">
            <Button className="self-center" onClick={() => navigate("/")}>Go To Index Site</Button>
            <Welcome text="Test Page"/>
        </div>
    )
}