import LeftSide from "./LeftSide"
import Sidebar from "./Sidebar"

export default function Body() {
    return (
        <div className="corpo">
            <LeftSide />
            <Sidebar />
        </div>
    )
}