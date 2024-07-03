import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { Stack } from "components/Stack";
import { Queue } from "components/Queue";
import { HomeSelectOption } from "components/HomeSelectOption";


export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeSelectOption />} />
                <Route path="/stack" element={<Stack />} />
                <Route path="/queue" element={<Queue />} />
                <Route path="*" element={<Navigate to={"/"} />} />
            </Routes>
        </BrowserRouter>
    )
}