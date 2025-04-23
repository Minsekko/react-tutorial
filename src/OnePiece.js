import OnePieceHeader from "./OnePieceHeader";
import OnePieceMain from "./OnePieceMain";
import OnePieceFooter from "./OnePieceFooter"

import "./OnePiece.css";

export default function OnePiece() {

    return (
        <>
            <OnePieceHeader title={"검은 수염 해적단"} />
            <OnePieceMain />
            <OnePieceFooter />
        </>
    );
}