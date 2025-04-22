import DemoHeader from "./DemoHeader";
import DemoMain from "./DemoMain";
import DemoFooter from "./DemoFooter";

import "./Demo.css"

export default function Demo() {

    const company = "Hi-Media"

    return (
        <>
            <DemoHeader />
            <DemoMain />
            <DemoFooter company={company} />
        </ >
    );
}