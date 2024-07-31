import React from "react";
import PagesList from "./PagesList/PagesList";
import RecentList from "./RecentList/RecentList";

export default function Navigation() {
    return (
        <nav className="flex flex-col gap-3">
            <PagesList />
            <RecentList />
        </nav>
    )
}

