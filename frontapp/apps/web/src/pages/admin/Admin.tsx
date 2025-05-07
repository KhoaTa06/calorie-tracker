import {Routes, Route} from "react-router-dom";

function Admin() {
    return (
        <Routes>
            <Route path="/" element={<h1>Admin Dashboard</h1>}></Route>
        </Routes>
    )
}

export default Admin;