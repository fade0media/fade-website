'use client'
import React from 'react'
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
const Calendar = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ "namespace": "quick-chat" });
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, [])
    return <Cal namespace="quick-chat"
        calLink="sanjana-bhat02/quick-chat"
        // style={{ width: "100%", height: "100%", overflow: "hidden" }}
        config={{ "layout": "month_view" }}
        className='w-full mt-8'


    />;
};




export default Calendar