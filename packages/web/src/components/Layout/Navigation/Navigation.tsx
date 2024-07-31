import React from "react";
import PagesList from "./PagesList/PagesList";
import RecentList from "./RecentList/RecentList";

export default function Navigation() {
    return (
        <div className="bg-zinc-900 rounded-xl">
            <PagesList />
            <RecentList />
        </div>
    )
}

