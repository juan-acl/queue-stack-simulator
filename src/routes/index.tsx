import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Stack } from "components/Stack";
import { QueueComponent } from "components/Queue";
import { HomeSelectOption } from "components/HomeSelectOption";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeSelectOption />} />
                <Route path="/stack" element={<Stack />} />
                <Route path="/queue" element={<QueueComponent />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}